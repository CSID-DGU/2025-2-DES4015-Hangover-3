# main.py
# 졸업요건 비교 API (FastAPI + LangGraph) — 개론 제외 규칙 + 경고 메시지 강화 버전

import json
from datetime import datetime
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
from typing_extensions import TypedDict
from langgraph.graph import StateGraph, START, END

# ----------------------------
# OpenAI 클라이언트 (과목 추천용)
# ----------------------------
from openai import OpenAI

client = OpenAI()

DEFAULT_CATALOG_YEAR = 2023

DESIGN_CODES = [
    "INC2033","INC2028","INC2029","INC2024","INC4059",
    "INC4086","INC4104","INC4089","INC4057","INC4111","INC4093",
]
CAPSTONE_CODES = ["INC4084","INC4085"]
DESIGN_SET, CAPSTONE_SET = set(DESIGN_CODES), set(CAPSTONE_CODES)

GE_2OF3_CODES = ["EGC7026", "EGC4039", "PRI4041"]
ENTR_1OF3_2022_AND_EARLIER = ["RGC1050","RGC1051","RGC1052"]
MSC_MATH_MUST = ["PRI4001","PRI4012","PRI4051"]

SCI_GROUPS_2015_2023 = [
    ["PRI4002","PRI4013"],
    ["PRI4003","PRI4014"],
    ["PRI4004","PRI4015"],
]
MSC_SCI_2024P = ["PRI4002","PRI4013"]

MSC_PROG_MUST = ["PRI4035"]
MAJOR_MUST = ["INC2033","INC2027","INC2028","INC2032","INC4058","INC4110"]

def normalize_category(cat: str) -> str:
    if cat is None:
        return ""
    c = str(cat).strip().lower()
    return {
        "전공":"major","전문":"major","major":"major",
        "msc":"msc","기초":"msc","학문기초":"msc",
        "필교":"ge_required","필수교양":"ge_required","공통교양":"ge_required",
        "일교":"ge_elective","일반교양":"ge_elective","타전공":"ge_elective",
        "교양":"ge","ge":"ge","ge_required":"ge_required","ge_elective":"ge_elective",
    }.get(c, c)

def category_label(cat_key: str) -> str:
    return {
        "major":"전공",
        "msc":"MSC/기초",
        "ge_required":"필수교양",
        "ge_elective":"일반교양",
        "ge":"교양(전체)"
    }.get(cat_key, cat_key or "기타")

def _dump(x):
    if isinstance(x, dict):
        return x
    if hasattr(x, "model_dump"):
        return x.model_dump()
    if hasattr(x, "dict"):
        return x.dict()
    return x

class Course(BaseModel):
    code: str
    credits: float
    category: str
    english: bool
    required: Optional[bool] = None
    name: Optional[str] = None

class Exemption(BaseModel):
    rule_id: str
    reason: Optional[str] = None

class TableRow(BaseModel):
    course_no: str
    credits: float
    area: Optional[str] = None
    english_yn: Optional[str] = None
    required_yn: Optional[str] = None
    major_dept: Optional[str] = None
    prereq: Optional[str] = None
    is_eng: Optional[int] = None
    is_force: Optional[int] = None
    course_type: Optional[str] = None
    course_name: Optional[str] = None

class Completed(BaseModel):
    total_credits: float = 0
    courses: List[Course] = Field(default_factory=list)
    exemptions: List[Exemption] = Field(default_factory=list)
    table_rows: Optional[List[TableRow]] = None

class Student(BaseModel):
    id: str
    program: str
    catalog_year: Optional[int] = None
    flags: Dict[str, Any] = Field(default_factory=dict)

class CompareRequest(BaseModel):
    student: Student
    completed: Completed
    rules: Optional[Dict[str, Any]] = None

class RecommendRequest(BaseModel):
    taken_courses: List[str]
    keywords: str
    all_courses: List[str]
    career_goal: Optional[str] = None

class S(TypedDict, total=False):
    payload: Dict[str, Any]
    rules: Dict[str, Any]
    result: Dict[str, Any]

def _build_name_index(payload: Dict[str,Any]) -> Dict[str,str]:
    idx = {}
    for c in payload.get("completed", {}).get("courses", []):
        code, name = c.get("code"), c.get("name")
        if code and name:
            idx.setdefault(code, name)
    return idx

def is_design_course(c: Dict[str, Any], codes: set) -> bool:
    return c.get("code") in codes

def is_capstone_course(c: Dict[str, Any], codes: set) -> bool:
    return c.get("code") in codes

# ----------------------------
# ⚠ 개론 예외 규칙 + 경고 메시지 기능 (요청한 부분)
# ----------------------------
INTRO_EXCLUSIONS = [
    {"id": "EXC_PHYS_INTRO",
     "triggers": {"PRI4002", "PRI4013"},
     "blocked": {"PRI4029"},
     "label": "일반물리학1·2 수강 시 '물리학개론' 미인정"},
    
    {"id": "EXC_BIO_INTRO",
     "triggers": {"PRI4004","PRI4015"},
     "blocked": {"PRI4028"},
     "label": "일반생물학1·2 수강 시 '생물학개론' 미인정"},

    {"id": "EXC_CHEM_INTRO",
     "triggers": {"PRI4003","PRI4014"},
     "blocked": {"PRI4030"},
     "label": "일반화학1·2 수강 시 '화학개론' 미인정"}
]


def n_apply_exclusions(state):
    p = state["payload"]
    comp = p.get("completed", {})
    courses = [_dump(c) for c in comp.get("courses", [])]

    if not courses:
        return state

    taken = {c.get("code") for c in courses}

    dropped = []
    warnings = []  # 🔥 추가: 개론을 안 들었어도 경고 출력

    for ex in INTRO_EXCLUSIONS:
        triggers = ex["triggers"]
        blocked = ex["blocked"]

        # ----------------------------
        # 조건 1) 트리거 과목(예: 물리1,2) 들었는가?
        # ----------------------------
        if taken & triggers:

            found_block = False
            keep = []

            # ----------------------------
            # 조건 2) blocked(개론) 과목 실제 수강 여부 확인
            # ----------------------------
            for c in courses:
                if c["code"] in blocked:
                    # 과목 수강 → drop 처리
                    found_block = True
                    dropped.append({
                        "rule_id": ex["id"],
                        "code": c["code"],
                        "name": c.get("name")
                    })
                    continue
                keep.append(c)

            courses = keep
            taken = {c["code"] for c in keep}

            # ----------------------------
            # 조건 3) 개론 안 들었을 경우 → 경고 메시지 출력
            # ----------------------------
            if not found_block:
                warnings.append({
                    "rule_id": ex["id"],
                    "message": (
                        f"{', '.join(triggers)} 을(를) 이수했으므로 "
                        f"{', '.join(blocked)} 과목은 앞으로 이수 금지입니다."
                    )
                })

    p["completed"]["courses"] = courses
    p["completed"]["exclusions_applied"] = dropped
    p["completed"]["exclusion_warnings"] = warnings

    state["payload"] = p
    return state

# ----------------------------
# node: 테이블 ingest
# ----------------------------
def _yn_to_bool(x) -> bool:
    return str(x or "").strip().upper() in {"Y","YES","T","TRUE","1","예"}

def n_ingest_table(state):
    p = state["payload"]
    comp = p.get("completed", {})
    rows = comp.get("table_rows")
    if not rows:
        return state

    courses = []
    total = 0.0

    for r in rows:
        r = r if isinstance(r, dict) else _dump(r)
        code_raw = r.get("course_no")
        if not code_raw:
            continue
        code = str(code_raw)

        cr_val = r.get("credits") or 0
        try:
            cr = float(cr_val)
        except:
            cr = 0.0

        def _infer_category(area, dept, course_type):
            if area:
                cat = normalize_category(area)
                if cat in {"major", "msc", "ge_required", "ge_elective", "ge"}:
                    return cat
            if course_type:
                cat2 = normalize_category(course_type)
                if cat2 in {"major", "msc", "ge_required", "ge_elective", "ge"}:
                    return cat2
            if dept and str(dept).strip():
                return "major"
            return "ge_elective"

        eng = _yn_to_bool(r.get("english_yn")) or _yn_to_bool(r.get("is_eng"))
        req_force = _yn_to_bool(r.get("required_yn")) or _yn_to_bool(r.get("is_force"))
        name = r.get("course_name") or r.get("과목명") or r.get("name")

        courses.append({
            "code": code,
            "credits": cr,
            "category": _infer_category(r.get("area"), r.get("major_dept"), r.get("course_type")),
            "english": eng,
            "required": req_force,
            "name": name
        })
        total += cr

    p["completed"]["courses"] = courses
    if not p["completed"].get("total_credits"):
        p["completed"]["total_credits"] = total
    p["completed"]["table_rows"] = None
    state["payload"] = p
    return state


# ----------------------------
# Rule Evaluators
# ----------------------------
def _names(codes, name_index):
    return [name_index.get(c) for c in codes]

def eval_min_total(ctx, rule):
    req = int(rule["value"])
    cur = float(ctx["total"])
    return {
        "rule_id": rule["id"],
        "type": "min_credits",
        "ok": cur >= req,
        "required": req,
        "current": cur,
        "missing": max(0, req - cur)
    }

def eval_cat_min(ctx, rule):
    cat = normalize_category(rule["category"])
    req = int(rule["value"])
    cur = float(ctx["agg"]["cat_credits"].get(cat, 0))
    miss = max(0, req - cur)
    return {
        "rule_id": rule["id"],
        "type": "category_min_credits",
        "category": cat,
        "category_label": category_label(cat),
        "ok": cur >= req,
        "required": req,
        "current": cur,
        "missing": miss,
        "suggest": None if cur >= req else {
            "take_more_credits_in": cat,
            "take_more_credits_in_label": category_label(cat),
            "missing_credits": miss
        }
    }

def eval_flag(ctx, rule):
    rid = rule["id"]
    flag = rule.get("flag")
    ok = bool(ctx["flags"].get(flag)) or (rid in ctx["ex_set"])
    return {"rule_id": rid, "type": "boolean_flag", "ok": ok}

def eval_english_total_with_major_min(ctx, rule):
    rid = rule["id"]
    min_total = int(rule.get("min_total", 0))
    min_major = int(rule.get("min_major", 0))
    exmpt = (rid in ctx["ex_set"])
    tot = ctx["agg"]["english_total"]
    maj = ctx["agg"]["english_major"]

    ok = True if exmpt else (tot >= min_total and maj >= min_major)
    miss_major = 0 if maj >= min_major else (min_major - maj)
    miss_total = 0 if tot >= min_total else (min_total - tot)
    return {
        "rule_id": rid,
        "type": "english_total_with_major_min",
        "ok": ok,
        "required": {"min_total": min_total, "min_major": min_major},
        "current": {"total": tot, "major": maj},
        "missing": {"total": miss_total, "major": miss_major},
        "exempted": exmpt,
        "suggest": None if ok else {
            "need_n_more_english_total": miss_total,
            "need_n_more_english_major": miss_major
        }
    }

def eval_at_least_k_from_list(ctx, rule):
    rid = rule["id"]
    req_set = set(rule.get("courses", []))
    k = int(rule.get("min_count", 0))
    taken = ctx["agg"]["taken_codes"]
    taken_req = sorted(list(req_set & taken))
    remain = sorted(list(req_set - taken))
    cnt = len(taken_req)
    miss = max(0, k - cnt)
    ex = (rid in ctx["ex_set"])
    ok = ex or (cnt >= k)
    ni = ctx["name_index"]
    return {
        "rule_id": rid,
        "type": "at_least_k_from_list",
        "ok": ok,
        "required_min_count": k,
        "current_count": cnt,
        "missing": 0 if ok else miss,
        "taken_courses": taken_req,
        "taken_course_names": _names(taken_req, ni),
        "remaining_courses": remain,
        "remaining_course_names": _names(remain, ni),
        "exempted": ex
    }

def eval_design_min_credits(ctx, rule):
    req = float(rule.get("value", 15))
    total = ctx["agg"]["design_total"]
    caps = sorted(ctx["agg"]["capstone_taken"])
    ok_total = total >= req
    has_cap = len(caps) > 0
    ok = ok_total and has_cap
    cap_cands = sorted(list(set(rule.get("capstone_codes", []))))
    ni = ctx["name_index"]
    return {
        "rule_id": rule["id"],
        "type": "design_min_credits",
        "ok": ok,
        "required": req,
        "current": total,
        "missing": 0.0 if ok_total else max(0.0, req - total),
        "capstone_required": 1,
        "capstone_ok": has_cap,
        "capstone_taken": caps,
        "capstone_taken_names": _names(caps, ni),
        "capstone_candidates": cap_cands,
        "capstone_candidate_names": _names(cap_cands, ni),
        "capstone_missing": 0 if has_cap else 1
    }

def eval_capstone_requires_design_credits(ctx, rule):
    rid = rule["id"]
    min_pre = float(rule.get("min_pre_credits", 12))
    pre = ctx["agg"]["pre_design_credits"]
    caps = sorted(ctx["agg"]["capstone_taken"])
    has = len(caps) > 0
    ni = ctx["name_index"]
    ok = (not has) or (pre >= min_pre)
    return {
        "rule_id": rid,
        "type": "capstone_requires_design_credits",
        "ok": ok,
        "capstone_taken": caps,
        "capstone_taken_names": _names(caps, ni),
        "min_pre_credits": min_pre,
        "current_pre_design_credits": pre,
        "missing": 0.0 if ok else max(0.0, min_pre - pre)
    }

def eval_must_take_all_from_list(ctx, rule):
    rid = rule["id"]
    label = rule.get("label", rid)
    required = sorted(list(set(rule.get("courses", []))))
    taken = ctx["agg"]["taken_codes"]
    missing = sorted(list(set(required) - taken))
    ok = (len(missing) == 0) or (rid in ctx["ex_set"])
    ni = ctx["name_index"]
    return {
        "rule_id": rid,
        "type": "must_take_all_from_list",
        "label": label,
        "ok": ok,
        "required_courses": required,
        "required_course_names": _names(required, ni),
        "missing_courses": [] if ok else missing,
        "missing_course_names": [] if ok else _names(missing, ni),
        "missing_count": 0 if ok else len(missing)
    }

def eval_k_complete_groups(ctx, rule):
    rid = rule["id"]
    groups = rule.get("groups", [])
    k = int(rule.get("min_groups", 1))
    taken = ctx["agg"]["taken_codes"]
    ni = ctx["name_index"]
    completed = []
    group_status = []
    for idx, group in enumerate(groups):
        gset = set(group)
        missing = sorted(list(gset - taken))
        ok = (len(missing) == 0)
        group_status.append({
            "index": idx,
            "required_courses": sorted(list(gset)),
            "required_course_names": _names(sorted(list(gset)), ni),
            "missing_courses": missing,
            "missing_course_names": _names(missing, ni)
        })
        if ok:
            completed.append(idx)
    count = len(completed)
    ex = (rid in ctx["ex_set"])
    ok = ex or (count >= k)
    return {
        "rule_id": rid,
        "type": "k_complete_groups",
        "ok": ok,
        "required_min_groups": k,
        "current_completed_groups": count,
        "completed_group_indices": completed,
        "groups": group_status,
        "exempted": ex
    }

def eval_min_exam_score(ctx, rule):
    rid = rule["id"]
    key = rule.get("key")
    req = float(rule.get("value", 0))
    ex = (rid in ctx["ex_set"])
    flags = ctx.get("flags") or {}
    cur = None

    exams = flags.get("exams")
    if isinstance(exams, dict) and key in exams:
        try:
            cur = float(exams[key])
        except:
            cur = None
    if cur is None and key in flags:
        try:
            cur = float(flags[key])
        except:
            cur = None

    ok = True if ex else (cur is not None and cur >= req)
    missing = 0 if ok else (req - (cur or 0))
    return {
        "rule_id": rid,
        "type": "min_exam_score",
        "ok": ok,
        "key": key,
        "required": req,
        "current": cur,
        "missing": missing,
        "exempted": ex
    }

EVAL = {
    "min_credits": eval_min_total,
    "category_min_credits": eval_cat_min,
    "boolean_flag": eval_flag,
    "at_least_k_from_list": eval_at_least_k_from_list,
    "english_total_with_major_min": eval_english_total_with_major_min,
    "design_min_credits": eval_design_min_credits,
    "capstone_requires_design_credits": eval_capstone_requires_design_credits,
    "must_take_all_from_list": eval_must_take_all_from_list,
    "min_exam_score": eval_min_exam_score,
    "k_complete_groups": eval_k_complete_groups,
}


# ----------------------------
# TODO builder
# ----------------------------
def build_todo(items):
    todo = {
        "must_take_courses": [],
        "required_groups": [],
        "categories": [],
        "english": [],
        "design": {},
        "tests": []
    }
    for it in items:
        if it.get("ok"):
            continue
        t = it.get("type")

        if t == "at_least_k_from_list":
            todo["must_take_courses"].append({
                "rule_id": it["rule_id"],
                "need_n_more": it.get("missing", 0),
                "candidates": it.get("remaining_courses", []),
                "candidate_names": it.get("remaining_course_names", [])
            })

        if t == "must_take_all_from_list":
            todo["required_groups"].append({
                "rule_id": it["rule_id"],
                "label": it.get("label", it["rule_id"]),
                "missing_courses": it.get("missing_courses", []),
                "missing_course_names": it.get("missing_course_names", []),
                "missing_count": it.get("missing_count", 0)
            })

        if t == "category_min_credits":
            miss = it.get("missing", 0)
            if miss > 0:
                todo["categories"].append({
                    "category": it.get("category"),
                    "category_label": it.get("category_label"),
                    "missing_credits": miss
                })

        if t == "english_total_with_major_min":
            miss = it.get("missing", {})
            if miss.get("major", 0) > 0:
                todo["english"].append({
                    "categories": ["major"],
                    "categories_label": [category_label("major")],
                    "need_n_more_english": miss["major"]
                })
            if miss.get("total", 0) > 0:
                todo["english"].append({
                    "categories": ["any"],
                    "categories_label": ["전체"],
                    "need_n_more_english": miss["total"]
                })

        if t == "capstone_requires_design_credits":
            todo["design"]["capstone_gate"] = {
                "capstone_taken": it.get("capstone_taken", []),
                "capstone_taken_names": it.get("capstone_taken_names", []),
                "min_pre_credits": it.get("min_pre_credits"),
                "current_pre_design_credits": it.get("current_pre_design_credits"),
                "missing": it.get("missing")
            }

        if t == "design_min_credits":
            todo["design"]["total"] = {
                "required_credits": it.get("required"),
                "current_credits": it.get("current"),
                "missing_credits": it.get("missing")
            }
            if not it.get("capstone_ok", True):
                todo["design"]["capstone_presence"] = {
                    "required_at_least": 1,
                    "taken": it.get("capstone_taken", []),
                    "taken_names": it.get("capstone_taken_names", []),
                    "candidates": it.get("capstone_candidates", []),
                    "candidate_names": it.get("capstone_candidate_names", [])
                }

        if t == "min_exam_score":
            todo["tests"].append({
                "rule_id": it["rule_id"],
                "key": it.get("key"),
                "required": it.get("required"),
                "current": it.get("current"),
                "missing": it.get("missing")
            })

        if t == "k_complete_groups":
            need = max(0, it.get("required_min_groups", 1) -
                       it.get("current_completed_groups", 0))
            if need > 0:
                missing_groups = []
                for g in it.get("groups", []):
                    if g.get("missing_courses"):
                        missing_groups.append({
                            "required_courses": g.get("required_courses", []),
                            "required_course_names": g.get("required_course_names", []),
                            "missing_courses": g.get("missing_courses", []),
                            "missing_course_names": g.get("missing_course_names", [])
                        })
                todo["required_groups"].append({
                    "rule_id": it["rule_id"],
                    "label": it.get("label", it["rule_id"]),
                    "need_n_more_groups": need,
                    "group_options": missing_groups
                })
    return todo


# ----------------------------
# Graph nodes: validate / load_rules / compare
# ----------------------------
def _effective_year(p):
    return int(p.get("student", {}).get("catalog_year") or DEFAULT_CATALOG_YEAR)

def n_validate(state):
    if "student" not in state["payload"] or "completed" not in state["payload"]:
        raise ValueError("bad payload")
    return state

def n_load_rules(state):
    p = state["payload"]
    body_rules = p.get("rules")
    year = _effective_year(p)

    if body_rules and isinstance(body_rules, dict) and "rules" in body_rules:
        state["rules"] = body_rules
        return state

    msc_req = 24 if year >= 2024 else 30

    rules = {
        "year": year,
        "rules": [
            {"id":"TOTAL_CR","type":"min_credits","value":130},
            {"id":"MAJOR_CR","type":"category_min_credits","category":"major","value":60},
            {"id":"MSC_CR","type":"category_min_credits","category":"msc","value":msc_req},

            {"id":"ENG_TOTAL_WITH_MAJOR_MIN","type":"english_total_with_major_min","min_total":4,"min_major":2},

            {"id":"ENGR_2OF3","type":"at_least_k_from_list","courses":GE_2OF3_CODES,"min_count":2},

            *(
                [{"id":"ENTR_1OF3_LE_2022","type":"at_least_k_from_list","courses":ENTR_1OF3_2022_AND_EARLIER,"min_count":1}]
                if year <= 2022 else []
            ),

            {"id":"MSC_MATH_ALL","type":"must_take_all_from_list","label":"MSC 수학(미적분1·2, 산업수학)","courses":MSC_MATH_MUST},

            *(
                [{"id":"MSC_SCI_PAIR","type":"k_complete_groups","label":"MSC 과학(세트 1개 이상)","groups": SCI_GROUPS_2015_2023,"min_groups": 1}]
                if year <= 2023
                else
                [{"id":"MSC_SCI_CORE","type":"must_take_all_from_list","label":"MSC 과학(물리1·2)","courses":MSC_SCI_2024P}]
            ),

            {"id":"MSC_PROG_BASIC","type":"must_take_all_from_list","label":"프로그래밍기초와실습","courses":MSC_PROG_MUST},

            {"id":"MAJOR_MUST_ALL","type":"must_take_all_from_list","label":"전공필수(학과 지정)","courses":MAJOR_MUST},

            {"id":"DESIGN_CR","type":"design_min_credits","value":15,"design_codes":DESIGN_CODES,"capstone_codes":CAPSTONE_CODES},

            {"id":"CAPSTONE_PRE_REQ","type":"capstone_requires_design_credits","min_pre_credits":12,"design_codes":DESIGN_CODES,"capstone_codes":CAPSTONE_CODES},

            {"id":"ENG_TEST_TOEIC_MIN700","type":"min_exam_score","key":"toeic","value":700},
        ]
    }
    state["rules"] = rules
    return state


def _build_aggregates(courses):
    cat_credits = {}
    taken_codes = set()
    english_by_cat = {}
    english_total = english_major = 0
    design_total = 0.0
    capstone_taken = []
    pre_design_credits = 0.0

    for c in courses:
        code = c.get("code")
        cr = float(c.get("credits", 0) or 0)
        cat = normalize_category(c.get("category"))
        taken_codes.add(code)
        cat_credits[cat] = cat_credits.get(cat, 0.0) + cr
        if c.get("english"):
            english_total += 1
            english_by_cat[cat] = english_by_cat.get(cat, 0) + 1
            if cat == "major":
                english_major += 1
        if code in CAPSTONE_SET:
            capstone_taken.append(code)
            design_total += cr
        elif code in DESIGN_SET:
            design_total += cr
            pre_design_credits += cr

    return {
        "cat_credits": cat_credits,
        "taken_codes": taken_codes,
        "english_total": english_total,
        "english_major": english_major,
        "english_by_cat": english_by_cat,
        "design_total": design_total,
        "capstone_taken": capstone_taken,
        "pre_design_credits": pre_design_credits
    }


def n_compare(state):
    p = state["payload"]
    r = state["rules"]
    courses = [_dump(c) for c in p["completed"]["courses"]]
    ex = [_dump(e) for e in p["completed"].get("exemptions", [])]
    name_index = _build_name_index(p)

    total_fallback = sum(float(c.get("credits", 0)) for c in courses)
    total_from_payload = p["completed"].get("total_credits", 0)
    try:
        total_from_payload = float(total_from_payload)
    except:
        total_from_payload = 0.0
    total = total_from_payload if total_from_payload > 0 else total_fallback

    ctx = {
        "courses": courses,
        "ex": ex,
        "ex_set": {e["rule_id"] for e in ex},
        "total": total,
        "flags": p["student"].get("flags", {}),
        "agg": _build_aggregates(courses),
        "name_index": name_index
    }

    items = []
    for rule in r["rules"]:
        fn = EVAL.get(rule["type"])
        if fn:
            res = fn(ctx, rule)
            if "type" not in res:
                res["type"] = rule.get("type")
            if ("category" not in res) and ("category" in rule):
                res["category"] = normalize_category(rule["category"])
                res["category_label"] = category_label(res["category"])
            items.append(res)
        else:
            items.append({
                "rule_id": rule.get("id", "?"),
                "type": rule.get("type"),
                "ok": False,
                "error": f"unknown type {rule['type']}"
            })

    todo = build_todo(items)

    state["result"] = {
        "pass": all(x.get("ok") for x in items),
        "summary": {
            "earned_credits": ctx["total"],
            "required_credits": next(
                (x.get("required") for x in items if x.get("rule_id") == "TOTAL_CR"),
                None
            )
        },
        "by_rule": items,
        "todo": todo,
        "echo": {
            "taken_course_codes": [c.get("code") for c in ctx["courses"]],
            "taken_course_names": [c.get("name") for c in ctx["courses"]],

            # 🔥 실제로 drop된 개론들 정보
            "excluded_detail": p["completed"].get("exclusions_applied", []),
            "excluded_course_codes": [d["code"] for d in p["completed"].get("exclusions_applied", [])],
            "excluded_course_names": [d.get("name") for d in p["completed"].get("exclusions_applied", [])],

            # 🔥 트리거 과목만 듣고 개론 안 들었을 때의 경고 메시지
            "exclusion_warnings": p["completed"].get("exclusion_warnings", [])
        }
    }
    return state


# ----------------------------
# Graph compile
# ----------------------------
wf = StateGraph(S)
wf.add_node("v", n_validate)
wf.add_node("ing", n_ingest_table)
wf.add_node("ex", n_apply_exclusions)
wf.add_node("rules", n_load_rules)
wf.add_node("cmp", n_compare)

wf.add_edge(START, "v")
wf.add_edge("v", "ing")
wf.add_edge("ing", "ex")
wf.add_edge("ex", "rules")
wf.add_edge("rules", "cmp")
wf.add_edge("cmp", END)

graph = wf.compile()


# ----------------------------
# FastAPI
# ----------------------------
app = FastAPI(
    title="Graduation Requirements Checker",
    docs_url="/docs",
    redoc_url="/redoc"
)

@app.get("/")
def health():
    return {"status": "ok", "time": datetime.now().isoformat()}

@app.post("/compare")
def compare(req: CompareRequest):
    try:
        payload = req.model_dump() if hasattr(req, "model_dump") else json.loads(req.json())
        out = graph.invoke({"payload": payload})
        return out["result"]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# ----------------------------
# OpenAI 기반 과목 추천 API
# ----------------------------
def recommend_any(req: RecommendRequest):
    # career_goal이 안 들어오면 "미지정"으로 처리
    career_goal = req.career_goal or "미지정"

    prompt = f"""
당신은 동국대학교 학생 맞춤형 강의 추천 시스템의 AI 엔진입니다.
당신의 역할은 학생의 이수 과목, 관심사, 졸업요건, 학과 특성을 기반으로 가장 적합한 다음 학기 수강과목을 추천하는 전문가입니다.

[입력 데이터]
- 이미 수강 완료한 과목 목록(taken_courses): {req.taken_courses}
- 추천 가능 전체 과목 목록(all_courses): {req.all_courses}
- 학생 관심 키워드(keywords): "{req.keywords}"
- 학생 진로/희망 분야(career_goal): "{career_goal or "미지정"}"
- 해당 과목이 속한 학과 또는 트랙 정보(제공 가능 시 기준 반영)

[추천 규칙 및 우선순위 기준]
1. taken_courses 목록에 포함된 과목은 절대 추천하지 마세요.
2. 추천 과목 수는 **최대 5개**를 넘기지 마세요.
3. 아래 기준을 순서대로 고려해 추천하세요:
   - (우선순위 1) 학생의 관심 키워드와 높은 연관성이 있는 과목
   - (우선순위 2) 학생의 희망 진로 분야와 능력적 요구사항에 맞는 과목
   - (우선순위 3) 선행 과목 → 심화 과목 학습 흐름(논리적 학습 경로)을 충족하는 과목
   - (우선순위 4) 전공필수/핵심 교양/트랙 필수 과목(해당 시)
   - (우선순위 5) 학생이 아직 접하지 않은 분야 중 확장성(미래 연계성)이 높은 과목
4. 추천 사유(reason 작성 기준):
   - 한두 문장 길이
   - "왜 이 학생에게 의미 있는 선택인지"를 논리적으로 설명
   - 해당 과목이 어떤 능력을 강화시키는지 또는 진로에 어떤 이점이 있는지 포함
5. 과목 이름이 제공되지 않은 경우 "코드 기반 추천"이라고 적고, 이유는 기능/주제 키워드 기반으로 작성하세요.
6. 출력은 **순수 JSON만** 제공하세요. 추가 설명, 코드블록(```), 마크다운, 해석, 문장 등은 포함하지 마세요.

[출력 형식(JSON)]
{{
  "recommendations": [
    {{
      "course": "과목코드",
      "reason": "추천 이유"
    }}
  ]
}}
"""


    try:
        response = client.responses.create(
            model="gpt-4.1-mini",
            input=prompt,   #  response_format 제거
        )

        raw = response.output_text
        data = json.loads(raw)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"OpenAI API error: {e}")

    if "recommendations" not in data:
        data["recommendations"] = []

    return data

@app.post("/recommend")
def recommend(req: RecommendRequest):

    # 1) 이미 들은 과목 제외
    filtered_courses = [
        c for c in req.all_courses
        if c not in req.taken_courses
    ]

    # 2) recommend_any()에 넘길 데이터 재구성
    enriched_req = RecommendRequest(
        taken_courses=req.taken_courses,
        keywords=req.keywords,
        career_goal=req.career_goal,
        all_courses=filtered_courses
    )

    # 3) GPT 호출
    return recommend_any(enriched_req)
