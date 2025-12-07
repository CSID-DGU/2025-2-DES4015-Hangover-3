import svgPaths from "./svg-vd1bzz8zgd";
import img from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";
import img1 from "figma:asset/d8216d3bd99a674ff31ca90f214061487565771c.png";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[30px] items-start relative shrink-0 w-[801px]">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] h-[30px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px] w-[299px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[1.2]">동국대학교 졸업요건 확인사이트</p>
      </div>
    </div>
  );
}

function Link() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Link" />;
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        학사 정보
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        꿀교양 찾기
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Nav Link Dropdown">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        메뉴
      </p>
      <ChevronDown />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <NavLinkDropdown />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[32px] h-[30px] items-center justify-center relative shrink-0 w-[383px]" data-name="Nav links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="gap-[10px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[30px] relative shrink-0 w-[78px]">
      <div className="[grid-area:1_/_1] h-[30px] relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[1.5px_1.5px_4px] border-[rgba(255,255,255,0.33)] border-solid inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[101.5px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[20px] py-[8px] relative w-full">
            <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              로그인
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex h-[50px] items-start overflow-clip p-[10px] relative shrink-0 w-[1392px]">
      <div className="h-[33px] relative shrink-0 w-[108px]" data-name="로고">
        <div className="absolute aspect-[1205/1122] left-[67.23%] right-0 top-0" data-name="image 16">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute aspect-[2333/1122] left-0 right-[36.51%] top-0" data-name="image 17">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
        </div>
      </div>
      <Frame1 />
      <NavLinks />
      <Frame2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#e4811c] box-border content-stretch flex flex-col h-[62px] items-center justify-center left-0 px-[64px] py-0 top-0 w-[1440px]" data-name="Navbar / 1 /">
      <Frame />
    </div>
  );
}

function Login() {
  return (
    <div className="absolute h-[962px] left-0 overflow-clip top-[62px] w-[1440px]" data-name="login">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLogin} />
      <div className="absolute h-[830px] left-[50px] top-[61px] w-[1305px]" data-name="Component 15">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-0.06%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
              <path d={svgPaths.p2c02a670} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[3.8%_71.7%_92.86%_2.08%] italic leading-[normal] text-[26px] text-gray-900 whitespace-pre-wrap">{`AI 과목 추천 결과    `}</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[8.25%_68.92%_89.91%_2.08%] leading-[normal] not-italic text-[14px] text-gray-500">{`'자세히'를 누르면 추천 이유를 볼 수 있어요`}</p>
        <div className="absolute inset-[12.2%_50.69%_64.09%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.25%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 618 198">
              <path d={svgPaths.p28707200} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.2%_97.4%_64.09%_2.08%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 197">
            <path d={svgPaths.p39d64c00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[13.5%_79.43%_84.13%_3.82%] italic leading-[normal] text-[18px] text-gray-900">INC4042 · 캡스톤디자인</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[17.09%_85.33%_81.29%_3.82%] leading-[normal] not-italic text-[12px] text-gray-500">3학점 · 전공(설계) · 전문</p>
        <div className="absolute inset-[19.57%_92.57%_78.27%_3.44%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.9%_92.79%_78.7%_3.65%] italic leading-[normal] text-[11px] text-center text-gray-700">설계충족</p>
        <div className="absolute inset-[19.57%_88.06%_78.27%_7.95%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.9%_88.27%_78.7%_8.17%] italic leading-[normal] text-[11px] text-center text-gray-700">정기개설</p>
        <div className="absolute inset-[19.57%_83.54%_78.27%_12.46%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.9%_83.76%_78.7%_12.68%] italic leading-[normal] text-[11px] text-center text-gray-700">좌석보통</p>
        <div className="absolute inset-[32.03%_89.24%_65.38%_3.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
            <path d={svgPaths.p35917b00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[32.33%_91.58%_65.84%_6.16%] italic leading-[normal] text-[14px] text-center text-white">담기</p>
        <div className="absolute inset-[32.03%_80.73%_65.38%_11.46%]" data-name="Vector">
          <div className="absolute inset-[-2.33%_-0.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 23">
              <path d={svgPaths.p3f9aa500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[32.33%_83.51%_65.84%_14.24%] italic leading-[normal] text-[14px] text-center text-gray-900">접기</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[23.01%_92.1%_75.37%_3.82%] italic leading-[normal] text-[12px] text-gray-900">추천 이유</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[25.17%_73.44%_73.22%_3.82%] leading-[normal] not-italic text-[12px] text-gray-500">· 졸업 요건 보완에 직접 연결(전공필수/설계/영어 등)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[27.11%_68.4%_71.28%_3.82%] leading-[normal] not-italic text-[12px] text-gray-500">· 해당 학기 개설 가능성이 높음(최근 개설주기·정원/경쟁도 반영)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[29.05%_75.78%_69.34%_3.82%] leading-[normal] not-italic text-[12px] text-gray-500">· 학업 부담 지표 양호(과제량·시험빈도 등 요약)</p>
        <div className="absolute inset-[12.32%_2.09%_71.65%_50.7%]" data-name="Vector">
          <div className="absolute inset-[-0.38%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617 134">
              <path d={svgPaths.p2393cd80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.2%_48.81%_71.77%_50.73%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 133">
            <path d={svgPaths.p2a630400} fill="var(--fill-0, #111827)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[13.5%_29.34%_84.13%_52.43%] italic leading-[normal] text-[18px] text-gray-900">INC4020 · 컴퓨터네트워크</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[16.97%_37.41%_81.41%_52.43%] leading-[normal] not-italic text-[12px] text-gray-500">3학점 · 전공필수 · 전문</p>
        <div className="absolute inset-[19.82%_43.88%_78.03%_52.12%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.14%_44.1%_78.46%_52.34%] italic leading-[normal] text-[11px] text-center text-gray-700">전필보완</p>
        <div className="absolute inset-[19.82%_39.37%_78.03%_56.64%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.14%_39.59%_78.46%_56.85%] italic leading-[normal] text-[11px] text-center text-gray-700">격년개설</p>
        <div className="absolute inset-[19.82%_34.85%_78.03%_61.15%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.14%_35.07%_78.46%_61.37%] italic leading-[normal] text-[11px] text-center text-gray-700">난이도중</p>
        <div className="absolute inset-[24.03%_40.95%_73.39%_52.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
            <path d={svgPaths.p35917b00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.32%_43.29%_73.84%_54.45%] italic leading-[normal] text-[14px] text-center text-white">담기</p>
        <div className="absolute inset-[24.03%_32.44%_73.39%_59.75%]" data-name="Vector">
          <div className="absolute inset-[-2.33%_-0.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 23">
              <path d={svgPaths.p3f9aa500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.32%_34.72%_73.84%_61.9%] italic leading-[normal] text-[14px] text-center text-gray-900">자세히</p>
        <div className="absolute inset-[38.67%_50.73%_45.3%_2.07%]" data-name="Vector">
          <div className="absolute inset-[-0.38%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617 134">
              <path d={svgPaths.p2393cd80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[38.67%_97.39%_45.3%_2.07%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 133">
            <path d={svgPaths.p38390cf0} fill="var(--fill-0, #0E7490)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[40.01%_82.03%_57.63%_3.82%] italic leading-[normal] text-[18px] text-gray-900">OPIc · 영어 회화 평가</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.24%_86.11%_55.15%_3.82%] leading-[normal] not-italic text-[12px] text-gray-500">0학점 · 영어시험 · 인증</p>
        <div className="absolute inset-[46.69%_92.19%_51.16%_3.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_92.4%_51.59%_4.04%] italic leading-[normal] text-[11px] text-center text-gray-700">영어요건</p>
        <div className="absolute inset-[46.69%_87.67%_51.16%_8.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_87.89%_51.59%_8.55%] italic leading-[normal] text-[11px] text-center text-gray-700">상시접수</p>
        <div className="absolute inset-[46.69%_83.16%_51.16%_12.85%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_83.38%_51.59%_13.06%] italic leading-[normal] text-[11px] text-center text-gray-700">부담낮음</p>
        <div className="absolute inset-[50.29%_89.24%_47.12%_3.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
            <path d={svgPaths.p35917b00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[50.59%_91.58%_47.58%_6.16%] italic leading-[normal] text-[14px] text-center text-white">담기</p>
        <div className="absolute inset-[50.29%_80.73%_47.12%_11.46%]" data-name="Vector">
          <div className="absolute inset-[-2.33%_-0.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 23">
              <path d={svgPaths.p3f9aa500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[50.59%_82.94%_47.58%_13.67%] italic leading-[normal] text-[14px] text-center text-gray-900">자세히</p>
        <div className="absolute inset-[38.71%_2.09%_45.26%_50.7%]" data-name="Vector">
          <div className="absolute inset-[-0.38%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617 134">
              <path d={svgPaths.p2393cd80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[38.71%_48.84%_45.26%_50.7%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 133">
            <path d={svgPaths.p2a630400} fill="var(--fill-0, #7C3AED)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[40.01%_31.94%_57.63%_52.43%] italic leading-[normal] text-[18px] text-gray-900">GEN2001 · 공학영작문</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.48%_36.56%_54.91%_52.58%] leading-[normal] not-italic text-[12px] text-gray-500">2학점 · 공교(영어) · 영어</p>
        <div className="absolute inset-[46.69%_43.81%_51.16%_52.2%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_44.02%_51.59%_52.42%] italic leading-[normal] text-[11px] text-center text-gray-700">영어보완</p>
        <div className="absolute inset-[46.69%_39.29%_51.16%_56.72%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_39.51%_51.59%_56.93%] italic leading-[normal] text-[11px] text-center text-gray-700">최근개설</p>
        <div className="absolute inset-[46.69%_34.78%_51.16%_61.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 18">
            <path d={svgPaths.pf1bb790} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.01%_35%_51.59%_61.45%] italic leading-[normal] text-[11px] text-center text-gray-700">좌석여유</p>
        <div className="absolute inset-[50.36%_40.72%_47.05%_52.34%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
            <path d={svgPaths.p35917b00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[50.66%_43.06%_47.51%_54.68%] italic leading-[normal] text-[14px] text-center text-white">담기</p>
        <div className="absolute inset-[50.36%_32.21%_47.05%_59.98%]" data-name="Vector">
          <div className="absolute inset-[-2.33%_-0.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 23">
              <path d={svgPaths.p3f9aa500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[50.66%_34.42%_47.51%_62.19%] italic leading-[normal] text-[14px] text-center text-gray-900">자세히</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[63.61%_50.49%_34.55%_37.01%] italic leading-[normal] text-[14px] text-gray-500">교양도 함께 살펴볼까요?</p>
        <div className="absolute inset-[62.53%_35.35%_33.81%_50.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 31">
            <path d={svgPaths.pa66dd00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[63.37%_39.35%_34.8%_54.75%] italic leading-[normal] text-[14px] text-center text-white">꿀교양 찾기</p>
      </div>
    </div>
  );
}

export default function Ai() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="AI가 추천해주는 화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}