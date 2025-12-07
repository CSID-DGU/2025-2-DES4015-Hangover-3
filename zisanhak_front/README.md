# ZisanHak · Graduation Checker Frontend

Handcrafted React + TypeScript implementation of the 동국대 졸업요건 진단 서비스.  
Figma Make로 자동 생성된 마크업을 전면 재구조화하고, 실제 프론트엔드 프로젝트처럼 모듈/레이어를 나누었습니다.

## Tech Stack

- React 19 + Vite 7
- React Router 6
- TypeScript (strict)
- Sonner (toast), clsx, nanoid

## Project Structure

```
src/
  app/            # Router, providers, root layout
  features/       # 도메인 로직 (auth, diagnostics 등)
  pages/          # 실제 화면 (home, upload, dashboard ...)
  ui/             # 공용 UI 컴포넌트 (common, layout)
  lib/            # storage, metrics util
  styles/         # global theme & tokens
  components/     # ❗ legacy Figma export (tsconfig에서 제외됨)
  imports/        # ❗ legacy svg/assets (tsconfig에서 제외됨)
```

`src/components`와 `src/imports`는 기존 Figma Make 산출물을 백업용으로 남겨둔 디렉터리입니다.  
새 코드는 `pages`, `features`, `ui`, `lib` 아래에만 존재하며 `tsconfig`에서 legacy 경로를 제외해 빌드에 포함되지 않습니다.

## Scripts

```bash
npm install          # 의존성 설치 (처음 한 번)
npm run dev          # 로컬 개발 서버
npm run build        # 프로덕션 번들
npm run lint         # ESLint
```

> 현재 리포지토리에서는 네트워크/권한 이슈로 `package-lock.json`이 생성되지 않을 수 있습니다.  
> 로컬 환경에서 `npm install`을 실행하면 자동으로 lockfile이 만들어집니다.

## 기능 개요

- **홈**: 방문자/회원/누적 검사 통계를 실시간 표시, 서비스 소개 섹션.
- **로그인/회원가입**: 로컬 스토리지 기반 계정 관리, 관리자 계정 인식.
- **업로드**: PDF 업로드 가이드 + 검증 플로우, mock 진단 리포트 생성.
- **결과/추천/꿀강/시뮬레이션/학사자료**: 졸업 요건 카드, 추천 액션, 행정 자료, 커리어 트랙 등.
- **어드민**: 방문 지표 & 사용자 표를 한눈에 확인.

## 디자인 톤

- 단색 배경 + 글래스모피즘 카드, 수동 작성한 CSS 토큰 기반.
- Pretendard + Inter 조합, Hero 섹션/CTA/카드 등 완전 재작성.

## 앞으로

- 실제 백엔드 API 연동 시 `features/*` 레이어에 클라이언트 작성.
- PDF 파싱/AI 추천 로직도 동일 레이어에 추가 가능.
