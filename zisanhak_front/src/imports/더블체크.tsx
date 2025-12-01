import svgPaths from "./svg-5zpijan0ic";
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

function Frame3() {
  return (
    <div className="absolute h-[830px] left-0 top-0 w-[1305px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1305 830">
        <g clipPath="url(#clip0_1_1400)" id="Frame 1321317740">
          <path d={svgPaths.p2bc45480} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1400">
            <rect fill="white" height="830" width="1305" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute h-[962px] left-0 overflow-clip top-[62px] w-[1440px]" data-name="login">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLogin} />
      <div className="absolute h-[830px] left-[67px] overflow-clip top-[66px] w-[1305px]" data-name="학기별 과목 체크">
        <Frame3 />
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[4.58%_78.31%_91.93%_3.6%] italic leading-[normal] text-[22px] text-gray-900">학기별 과목 체크</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[9.76%_65.52%_88.31%_3.6%] leading-[normal] not-italic text-[12px] text-gray-500">PDF에서 추출된 데이터입니다 과목 정보가 맞는지 체크해주세요</p>
        <div className="absolute inset-[13.37%_86.9%_82.89%_3.6%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 31">
            <path d={svgPaths.p3bc44900} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.34%_86.67%_83.73%_3.37%] italic leading-[normal] text-[12px] text-center text-gray-700">학과: 정보통신공학전공</p>
        <div className="absolute inset-[13.37%_75.33%_82.89%_13.79%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 31">
            <path d={svgPaths.p7743d80} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.34%_76.47%_83.73%_14.94%] italic leading-[normal] text-[12px] text-center text-gray-700">학번: 2021112097</p>
        <div className="absolute inset-[13.37%_68.58%_82.89%_25.29%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 31">
            <path d={svgPaths.pe233880} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.34%_68.97%_83.73%_25.75%] italic leading-[normal] text-[12px] text-center text-gray-700">성명: 이현노</p>
        <div className="absolute inset-[13.37%_60.46%_82.89%_32.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 31">
            <path d={svgPaths.p55528f0} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.34%_60.84%_83.73%_32.57%] italic leading-[normal] text-[12px] text-center text-gray-700">총취득학점: 94</p>
        <div className="absolute inset-[13.37%_51.65%_82.89%_40.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 31">
            <path d={svgPaths.p1f22a100} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.34%_52.34%_83.73%_41%] italic leading-[normal] text-[12px] text-center text-gray-700">평점평균: 4.03</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[19.04%_94.1%_78.92%_3.91%] leading-[normal] not-italic text-[12px] text-gray-500">학년</p>
        <div className="absolute inset-[18.55%_88.12%_77.83%_6.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_89.42%_78.55%_8.2%] italic leading-[normal] text-[12px] text-center text-white">1학년</p>
        <div className="absolute inset-[18.55%_82.91%_77.83%_12.03%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_84.14%_78.55%_13.26%] italic leading-[normal] text-[12px] text-center text-white">2학년</p>
        <div className="absolute inset-[18.55%_77.78%_77.83%_17.16%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_79%_78.55%_18.39%] italic leading-[normal] text-[12px] text-center text-gray-700">3학년</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[19.04%_69.73%_78.92%_28.28%] leading-[normal] not-italic text-[12px] text-gray-500">학기</p>
        <div className="absolute inset-[18.55%_63.22%_77.83%_31.72%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_64.52%_78.55%_32.95%] italic leading-[normal] text-[12px] text-center text-white">1학기</p>
        <div className="absolute inset-[18.55%_58.16%_77.83%_36.78%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_59.16%_78.55%_37.78%] italic leading-[normal] text-[12px] text-center text-white">2학기</p>
        <div className="absolute inset-[18.55%_53.03%_77.83%_41.84%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 30">
            <path d={svgPaths.p3decfc80} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_53.49%_78.55%_42.45%] italic leading-[normal] text-[12px] text-center text-gray-700">겨울학기</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[19.04%_43.76%_78.92%_52.41%] leading-[normal] not-italic text-[12px] text-gray-500">이수구분</p>
        <div className="absolute inset-[18.55%_38.16%_77.83%_56.78%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_39.69%_78.55%_58.39%] italic leading-[normal] text-[12px] text-center text-white">공교</p>
        <div className="absolute inset-[18.55%_33.03%_77.83%_61.92%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_34.56%_78.55%_63.52%] italic leading-[normal] text-[12px] text-center text-white">일교</p>
        <div className="absolute inset-[18.55%_27.89%_77.83%_67.05%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 30">
            <path d={svgPaths.p1d9ba040} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.4%_29.43%_78.55%_68.58%] italic leading-[normal] text-[12px] text-center text-white">전공</p>
        <div className="absolute inset-[24.22%_2.76%_70.96%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.25%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 41">
              <path d={svgPaths.p1a810d00} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_90.81%_72.17%_4.98%] italic leading-[normal] text-[12px] text-gray-900">년도-학기</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_83.75%_72.17%_14.33%] italic leading-[normal] text-[12px] text-gray-900">학년</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_76.78%_72.17%_19.39%] italic leading-[normal] text-[12px] text-gray-900">이수구분</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_70.04%_72.17%_26.21%] italic leading-[normal] text-[12px] text-gray-900">교과목명</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_37.93%_72.17%_60.08%] italic leading-[normal] text-[12px] text-gray-900">학점</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_33.72%_72.17%_64.37%] italic leading-[normal] text-[12px] text-gray-900">성적</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_27.28%_72.17%_68.58%] italic leading-[normal] text-[12px] text-gray-900">영역/구분</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[25.9%_21%_72.17%_77.09%] italic leading-[normal] text-[12px] text-gray-900">상태</p>
        <div className="absolute inset-[29.28%_2.76%_65.42%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 45">
              <path d={svgPaths.pd7b480} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[30.6%_91.49%_67.23%_4.98%] leading-[normal] not-italic text-[13px] text-gray-900">2021-1</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[30.72%_85.13%_67.11%_14.33%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[30.6%_78.54%_67.23%_19.39%] leading-[normal] not-italic text-[13px] text-gray-900">공교</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[30.6%_58.31%_67.23%_26.21%] leading-[normal] not-italic text-[13px] text-gray-900">RGC0005 기술보고서작성및발표</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[30.6%_39.16%_67.23%_60.08%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[30.72%_34.25%_67.11%_64.37%] leading-[normal] not-italic text-[13px] text-gray-900">A0</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[30.72%_25.9%_67.11%_68.58%] leading-[normal] not-italic text-[13px] text-gray-900">글쓰기 영역</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[31.2%_20.92%_66.87%_77.09%] italic leading-[normal] text-[12px] text-center text-green-600">일치</p>
        <div className="absolute inset-[35.18%_2.76%_59.64%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.16%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 44">
              <path d={svgPaths.p27c3a900} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.63%_91.49%_61.33%_4.98%] leading-[normal] not-italic text-[13px] text-gray-900">2021-1</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.63%_85.13%_61.33%_14.33%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.63%_78.54%_61.33%_19.39%] leading-[normal] not-italic text-[13px] text-gray-900">학기</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.51%_61.53%_61.45%_26.21%] leading-[normal] not-italic text-[13px] text-gray-900">PRI4001 미적분학및연습1</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.63%_39.16%_61.2%_60.08%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.63%_34.18%_61.2%_64.37%] leading-[normal] not-italic text-[13px] text-gray-900">A+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.63%_26.9%_61.2%_68.58%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <div className="absolute inset-[40.96%_2.76%_53.73%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 45">
              <path d={svgPaths.pd7b480} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.41%_91.49%_55.42%_4.98%] leading-[normal] not-italic text-[13px] text-gray-900">2021-1</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.41%_85.13%_55.42%_14.33%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[42.41%_78.54%_55.42%_19.39%] leading-[normal] not-italic text-[13px] text-gray-900">학기</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[42.29%_58.93%_55.54%_26.21%] leading-[normal] not-italic text-[13px] text-gray-900">PRI4035 프로그래밍기초와실습</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.53%_39.16%_55.3%_60.08%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.53%_34.25%_55.3%_64.37%] leading-[normal] not-italic text-[13px] text-gray-900">B0</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[42.53%_26.59%_55.3%_68.58%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <div className="absolute inset-[46.75%_2.76%_47.95%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 45">
              <path d={svgPaths.pd7b480} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.19%_91.26%_49.64%_4.98%] leading-[normal] not-italic text-[13px] text-gray-900">2021-2</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.19%_85.13%_49.64%_14.33%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.19%_78.54%_49.64%_19.39%] leading-[normal] not-italic text-[13px] text-gray-900">공교</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.07%_62.45%_49.76%_26.21%] leading-[normal] not-italic text-[13px] text-gray-900">{`RGC1080 <영어>EAS1`}</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.31%_39.23%_49.64%_60.08%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.31%_34.18%_49.64%_64.37%] leading-[normal] not-italic text-[13px] text-gray-900">A+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.31%_29.43%_49.64%_68.58%] leading-[normal] not-italic text-[13px] text-gray-900">영어</p>
        <div className="absolute inset-[52.53%_2.76%_42.17%_3.6%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1223 45">
              <path d={svgPaths.pd7b480} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[54.1%_91.11%_43.85%_4.98%] leading-[normal] not-italic text-[13px] text-gray-900">2024-2</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[54.1%_85.06%_43.85%_14.33%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[54.1%_78.54%_43.85%_19.39%] leading-[normal] not-italic text-[13px] text-gray-900">전공</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[53.98%_59.77%_43.98%_26.21%] leading-[normal] not-italic text-[13px] text-gray-900">INC2029 객체지향언어와실습</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.98%_39.16%_43.85%_60.08%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[53.98%_34.18%_43.85%_64.37%] leading-[normal] not-italic text-[13px] text-gray-900">B+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[53.98%_29.43%_43.85%_68.58%] leading-[normal] not-italic text-[13px] text-gray-900">전공</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[54.1%_20.54%_43.98%_76.63%] italic leading-[normal] text-[#a84315] text-[12px] text-center">불일치</p>
        <div className="absolute inset-[53.13%_9.73%_43.13%_84.22%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 31">
            <path d={svgPaths.p2b9e8c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[53.85%_11.65%_43.85%_86.13%] italic leading-[normal] text-[14px] text-center text-white">수정</p>
        <div className="absolute inset-[47.59%_9.73%_48.67%_84.22%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 31">
            <path d={svgPaths.p2b9e8c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[48.31%_11.65%_49.4%_86.13%] italic leading-[normal] text-[14px] text-center text-white">수정</p>
        <div className="absolute inset-[41.81%_9.73%_54.46%_84.22%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 31">
            <path d={svgPaths.p2b9e8c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.53%_11.65%_55.18%_86.13%] italic leading-[normal] text-[14px] text-center text-white">수정</p>
        <div className="absolute inset-[35.78%_9.73%_60.48%_84.22%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 31">
            <path d={svgPaths.p2b9e8c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[36.51%_11.65%_61.2%_86.13%] italic leading-[normal] text-[14px] text-center text-white">수정</p>
        <div className="absolute inset-[30%_9.73%_66.27%_84.22%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 31">
            <path d={svgPaths.p2b9e8c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.72%_11.65%_66.99%_86.13%] italic leading-[normal] text-[14px] text-center text-white">수정</p>
        <div className="absolute inset-[89.94%_2.31%_10.06%_1.85%]" data-name="Vector">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 1">
              <path d="M0 0.5H1250.62" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[91.45%_84.83%_3.73%_3.37%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 40">
            <path d={svgPaths.p1b56cb00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[92.7%_87.19%_5.05%_5.61%] italic leading-[normal] text-[14px] text-center text-white">PDF 원본보기</p>
        <div className="absolute inset-[91.26%_3.59%_3.92%_84.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 40">
            <path d={svgPaths.p1c7b600} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[92.58%_7.44%_5.17%_88.05%] italic leading-[normal] text-[14px] text-center text-white">확정하기</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[36.75%_20.92%_61.33%_77.09%] italic leading-[normal] text-[12px] text-center text-green-600">일치</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.65%_20.92%_55.42%_77.09%] italic leading-[normal] text-[12px] text-center text-green-600">일치</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[48.31%_20.92%_49.76%_77.09%] italic leading-[normal] text-[12px] text-center text-green-600">일치</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="더블체크">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}