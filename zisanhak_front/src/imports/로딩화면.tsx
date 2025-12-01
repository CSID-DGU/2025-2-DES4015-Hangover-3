import svgPaths from "./svg-7ds0yu9dg8";
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
      <div className="absolute h-[832px] left-[66px] top-[65px] w-[1234px]" data-name="로딩화면">
        <div className="absolute inset-[0.12%_-5.83%_0.12%_0.08%]" data-name="Vector">
          <div className="absolute inset-[-0.06%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
              <path d={svgPaths.p8203900} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[5.14%_82.89%_91.05%_4.49%] italic leading-[normal] text-[24px] text-gray-900">PDF 분석 중...</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[9.93%_65.83%_87.9%_4.49%] leading-[normal] not-italic text-[14px] text-gray-500">업로드한 파일에서 과목/학점/성적 정보를 추출하고 있어요</p>
        <div className="absolute inset-[14.96%_44.1%_73.95%_48.63%]" data-name="Vector">
          <div className="absolute inset-[-5.42%_-5.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 103">
              <path d={svgPaths.p2139c580} id="Vector" stroke="var(--stroke-0, #F5F6F8)" strokeWidth="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.96%_44.33%_74.28%_49.09%]" data-name="Vector">
          <div className="absolute inset-[-5.58%_-6.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 100">
              <path d={svgPaths.p9238118} id="Vector" stroke="var(--stroke-0, #E4811C)" strokeLinecap="round" strokeWidth="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.79%_15.26%_67.45%_19.79%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 802 7">
            <path d={svgPaths.p28af2a00} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.79%_44.56%_67.45%_19.79%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 7">
            <path d={svgPaths.pf13500} fill="url(#paint0_linear_1_1168)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1168" x1="0" x2="439.909" y1="3.16714" y2="3.16714">
                <stop stopColor="#E4811C" />
                <stop offset="1" stopColor="#F5D592" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[28.85%_73.33%_69.19%_19.79%] leading-[normal] not-italic text-[12px] text-gray-500">1/3 업로드 확인</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[28.85%_44.26%_69.19%_48.7%] leading-[normal] not-italic text-[12px] text-center text-gray-500">2/3 텍스트 추출</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[28.85%_15.26%_69.19%_77.62%] leading-[normal] not-italic text-[12px] text-gray-500 text-right">3/3 교과목 매칭</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[36.58%_91%_61.25%_4.49%] italic leading-[normal] text-[14px] text-gray-900">미리보기</p>
        <div className="absolute inset-[41.01%_0.86%_53.7%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 45">
              <path d={svgPaths.p667e400} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[42.56%_83.73%_55.27%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 19">
            <path d={svgPaths.p332fca00} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.56%_57.42%_55.27%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 19">
            <path d={svgPaths.p1b71a140} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.56%_48.85%_55.27%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 19">
            <path d={svgPaths.p30d4c200} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.56%_41.89%_55.27%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 19">
            <path d={svgPaths.pbd17cf0} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.56%_29.88%_55.27%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 19">
            <path d={svgPaths.pe0e3e40} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[47.62%_0.86%_47.09%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 45">
              <path d={svgPaths.p667e400} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.19%_83.73%_48.74%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 18">
            <path d={svgPaths.p1ec30800} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[49.19%_57.42%_48.74%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 18">
            <path d={svgPaths.pf88e300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[49.19%_48.85%_48.74%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 18">
            <path d={svgPaths.p27f47300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[49.19%_41.89%_48.74%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 18">
            <path d={svgPaths.pe712440} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[49.19%_29.88%_48.74%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
            <path d={svgPaths.p1e106900} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[54.23%_0.86%_40.48%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 45">
              <path d={svgPaths.p667e400} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[55.83%_83.73%_42.11%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 18">
            <path d={svgPaths.p1ec30800} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.83%_57.42%_42.11%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 18">
            <path d={svgPaths.pf88e300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.83%_48.85%_42.11%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 18">
            <path d={svgPaths.p27f47300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.83%_41.89%_42.11%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 18">
            <path d={svgPaths.pe712440} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.83%_29.88%_42.11%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
            <path d={svgPaths.p1e106900} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[60.84%_0.86%_33.87%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 45">
              <path d={svgPaths.p667e400} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.35%_83.73%_35.47%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 19">
            <path d={svgPaths.p332fca00} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[62.35%_57.42%_35.47%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 19">
            <path d={svgPaths.p1b71a140} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[62.35%_48.85%_35.47%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 19">
            <path d={svgPaths.p30d4c200} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[62.35%_41.89%_35.47%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 19">
            <path d={svgPaths.pbd17cf0} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[62.35%_29.88%_35.47%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 19">
            <path d={svgPaths.pe0e3e40} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[67.33%_0.86%_27.26%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.11%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 46">
              <path d={svgPaths.p35bfd800} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.99%_83.73%_28.95%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 18">
            <path d={svgPaths.p1ec30800} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[68.99%_57.42%_28.95%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 18">
            <path d={svgPaths.pf88e300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[68.99%_48.85%_28.95%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 18">
            <path d={svgPaths.p27f47300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[68.99%_41.89%_28.95%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 18">
            <path d={svgPaths.pe712440} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[68.99%_29.88%_28.95%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
            <path d={svgPaths.p1e106900} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[74.06%_0.86%_20.65%_4.49%]" data-name="Vector">
          <div className="absolute inset-[-1.14%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1169 45">
              <path d={svgPaths.p667e400} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[75.62%_83.73%_22.31%_5.94%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 18">
            <path d={svgPaths.p1ec30800} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[75.62%_57.42%_22.31%_18.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 18">
            <path d={svgPaths.pf88e300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[75.62%_48.85%_22.31%_44.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 18">
            <path d={svgPaths.p27f47300} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[75.62%_41.89%_22.31%_52.91%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 18">
            <path d={svgPaths.pe712440} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[75.62%_29.88%_22.31%_59.87%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
            <path d={svgPaths.p1e106900} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="로딩화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}