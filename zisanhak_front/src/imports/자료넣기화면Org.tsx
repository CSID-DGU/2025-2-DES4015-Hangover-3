import svgPaths from "./svg-t9ce4x4jqn";
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
      <div className="absolute inset-[6.13%_3.4%_7.59%_5.97%]" data-name="Vector">
        <div className="absolute inset-[-0.06%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
            <path d={svgPaths.p251fd200} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.41%_42.5%_35.86%_6.53%]" data-name="Vector">
        <div className="absolute inset-[-0.09%_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 735 538">
            <path d={svgPaths.p307b7d80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E6E8EC)" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[27.307px] left-[112px] top-[90.51px] w-[85.5px]" data-name="Component 13">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 28">
            <path d={svgPaths.p3a3b1b00} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[20.33%_23.68%_17.17%_23.68%] italic leading-[normal] text-[12px] text-center text-gray-500">STEP 1</p>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[12.86%_84.1%_84.51%_7.78%] italic leading-[normal] text-[18px] text-gray-900">엔드림스 접속</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[15.97%_74.33%_82%_7.78%] leading-[normal] not-italic text-[14px] text-gray-700">포털 로그인 후 NDRIMS로 이동하세요.</p>
      <div className="absolute inset-[19.98%_44.41%_38.39%_7.15%]" data-name="Vector">
        <div className="absolute inset-[-0.25%_-0.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 403">
            <path d={svgPaths.p3aa6100} fill="var(--fill-0, #F5F6F8)" id="Vector" stroke="var(--stroke-0, #DDE2E8)" strokeDasharray="6 6" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[39.66%_64.96%_58.07%_28.95%] italic leading-[normal] text-[16px] text-center text-gray-500">이미지 넣기</p>
      <div className="absolute h-[27.307px] left-[109.25px] top-[618.2px] w-[85.5px]" data-name="STEP 2">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 28">
            <path d={svgPaths.p3a3b1b00} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[16.67%_22.37%_20.83%_22.37%] italic leading-[normal] text-[12px] text-center text-gray-500">STEP 2</p>
      </div>
      <div className="absolute h-[48.925px] leading-[normal] left-[112.25px] top-[649.96px] w-[262.125px]" data-name="졸업메뉴 텍스트">
        <p className="absolute bottom-[48.84%] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic left-0 right-[69.53%] text-[18px] text-gray-900 top-0">졸업 메뉴</p>
        <p className="absolute bottom-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal left-0 not-italic right-0 text-[14px] text-gray-700 top-[60.47%]">상단/좌측 메뉴에서 ‘졸업’을 선택하세요.</p>
      </div>
      <div className="absolute h-[75px] left-[112px] top-[718px] w-[698px]" data-name="이미지 넣기">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-1.33%_-0.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 77">
              <path d={svgPaths.p182df300} fill="var(--fill-0, #F5F6F8)" id="Vector" stroke="var(--stroke-0, #DDE2E8)" strokeDasharray="6 6" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[47.13%_43.71%_47.41%_43.71%] italic leading-[normal] text-[16px] text-center text-gray-500">이미지 넣기</p>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[12.93%_20.55%_84.19%_61.25%] italic leading-[normal] text-[20px] text-gray-900">취득학점확인서 PDF 업로드</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[18.34%_30.31%_79.87%_61.25%] leading-[normal] not-italic text-[12px] text-gray-500">PDF 1개, 최대 10MB</p>
      <div className="absolute inset-[21.93%_7.81%_51.75%_61.25%]" data-name="Vector">
        <div className="absolute inset-[-0.39%_-0.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 256">
            <path d={svgPaths.p225f1b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #DDE2E8)" strokeDasharray="8 8" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.44%_20.7%_66.7%_74.43%]" data-name="Vector">
        <div className="absolute inset-[-2.7%_-1.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 40">
            <path d={svgPaths.p24727200} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.83%_22.88%_67.74%_76.49%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-7.95%] right-[-11.11%] top-[-17.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
            <path d={svgPaths.pd3513c0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.26%_22.88%_66.66%_77.12%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-1px] right-[-1px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
            <path d="M1 0V10.3584" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[36.76%_15.27%_60.96%_68.71%] italic leading-[normal] text-[16px] text-center text-gray-600">여기로 PDF를 끌어다 놓으세요</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[40.11%_18.55%_58.09%_71.99%] leading-[normal] not-italic text-[12px] text-center text-gray-500">또는 클릭하여 파일 선택</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.66%_33.44%_81.54%_61.25%] leading-[normal] not-italic text-[12px] text-gray-500">Uploading...</p>
      <div className="absolute inset-[20.18%_7.81%_79.1%_61.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 446 7">
          <path d={svgPaths.p1e9e1200} fill="var(--fill-0, #E5E7EB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.18%_20.19%_79.1%_61.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 7">
          <path d={svgPaths.p21f11fc0} fill="url(#paint0_linear_1_1066)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1066" x1="0" x2="267.3" y1="3.45281" y2="3.45281">
              <stop stopColor="#F38E1D" />
              <stop offset="1" stopColor="#F5D592" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[49.45%_32.42%_48.52%_61.25%] italic leading-[normal] text-[14px] text-gray-900">업로드된 파일</p>
      <div className="absolute inset-[52.08%_7.81%_47.92%_61.25%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 446 1">
            <path d="M0 0.5H445.5" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.99%_7.81%_38.35%_61.25%]" data-name="Vector">
        <div className="absolute inset-[-0.68%_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 447 75">
            <path d={svgPaths.p121bfb00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[55.43%_34.38%_39.79%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-1.09%_-1.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
            <path d={svgPaths.p256b200} fill="var(--fill-0, #FEE2E2)" id="Vector" stroke="var(--stroke-0, #FCA5A5)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[57.1%_35%_41.1%_63.13%] italic leading-[normal] text-[12px] text-center text-red-700">PDF</p>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[55.67%_23.91%_42.3%_66.88%] italic leading-[normal] text-[14px] text-gray-900">취득학점확인서.pdf</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.3%_29.84%_39.91%_66.88%] leading-[normal] not-italic text-[12px] text-gray-500">842 KB</p>
      <div className="absolute h-[36.409px] left-[calc(75%+54px)] top-[531.67px] w-[81px]" data-name="변경">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-1.37%_-0.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 38">
              <path d={svgPaths.p2af42780} fill="var(--fill-0, #E4811C)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.24%_30.4%_16.38%_27.93%] italic leading-[normal] text-[16px] text-center text-white">변경</p>
      </div>
      <div className="absolute h-[36.409px] left-[calc(75%+144px)] top-[531.67px] w-[81px]" data-name="삭제">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-1.37%_-0.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 38">
              <path d={svgPaths.p2af42780} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.24%_29.17%_16.38%_29.17%] italic leading-[normal] text-[16px] text-center text-gray-900">삭제</p>
      </div>
      <div className="absolute inset-[82.62%_6.6%_17.38%_6.53%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 1">
            <path d="M0 0.5H1251" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[45.511px] left-[112px] top-[812px] w-[135px]" data-name="임시저장">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-1.1%_-0.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 47">
              <path d={svgPaths.p2d9f300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[29.92%_24.91%_22.58%_25.93%] italic leading-[normal] text-[16px] text-center text-gray-900">임시저장</p>
      </div>
      <div className="absolute h-[45.511px] left-[calc(75%+113px)] top-[817px] w-[135px]" data-name="제출">
        <div className="absolute inset-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 46">
            <path d={svgPaths.p1252c000} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[29.39%_37.5%_23.11%_37.5%] italic leading-[normal] text-[16px] text-center text-white">제출</p>
      </div>
    </div>
  );
}

export default function Org() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="자료 넣기 화면 org">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}