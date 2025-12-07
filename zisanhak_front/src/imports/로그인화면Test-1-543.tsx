import svgPaths from "./svg-uls95e5voy";
import imgImage16 from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";
import imgImage17 from "figma:asset/d8216d3bd99a674ff31ca90f214061487565771c.png";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";

/**
 * @figmaAssetKey 490a929d755c2668f71b1fec09cab63ecb1973df
 */
function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="로고">
      <div className="absolute aspect-[1205/1122] left-[67.23%] right-0 top-0" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
      <div className="absolute aspect-[2333/1122] left-0 right-[36.51%] top-0" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

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
      <Component className="h-[33px] relative shrink-0 w-[108px]" />
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
  return <div className="absolute h-[35px] left-[calc(75%+6px)] top-[111px] w-[119px]" />;
}

function Login() {
  return (
    <div className="absolute h-[951px] left-0 top-[62px] w-[1440px]" data-name="login">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLogin} />
      <div className="absolute bottom-0 left-[57.99%] right-0 top-[-0.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 953">
          <path d={svgPaths.p16ec8d80} fill="url(#paint0_linear_1_289)" id="Vector" opacity="0.8" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_289" x1="0" x2="605" y1="0" y2="0">
              <stop stopColor="#F38E1D" stopOpacity="0.92" />
              <stop offset="1" stopColor="#F38E1D" stopOpacity="0.78" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[22.71%_13.33%_73.19%_67.78%] italic leading-[normal] text-[30px] text-white">동국 학우분을 위한</p>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[28.39%_7.43%_67.51%_67.78%] italic leading-[normal] text-[30px] text-white">간편한 졸업요건 검사 사이트</p>
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[35.12%_10.21%_62.04%_67.71%] italic leading-[normal] text-[#fbe7cd] text-[20px]">Graduate CHECKER @ Dongguk</p>
      <div className="absolute inset-[41.43%_17.85%_51.84%_67.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 64">
          <path d={svgPaths.p27985a00} fill="var(--fill-0, #E4811C)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[43.22%_20.21%_54.26%_69.86%] italic leading-[normal] text-[27px] text-center text-white">검사하기</p>
      <div className="absolute inset-[51.63%_10.69%_41.75%_67.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 63">
          <path d={svgPaths.p2caa2300} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[53.1%_25.76%_45.11%_69.1%] italic leading-[normal] text-[#fbe7cd] text-[12px]">오늘 방문자 수</p>
      <div className="absolute inset-[67.4%_10.69%_25.97%_67.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 63">
          <path d={svgPaths.p17881f80} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[68.88%_27.36%_29.34%_69.1%] italic leading-[normal] text-[#fbe7cd] text-[12px]">총 검사 수</p>
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[70.77%_26.53%_27.02%_69.1%] italic leading-[normal] text-[16px] text-white">196,615</p>
      <div className="absolute inset-[59.52%_10.69%_33.86%_67.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 63">
          <path d={svgPaths.p2caa2300} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[60.88%_27.36%_37.33%_69.1%] italic leading-[normal] text-[#fbe7cd] text-[12px]">총 회원 수</p>
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[62.78%_27.22%_34.91%_69.1%] italic leading-[normal] text-[16px] text-white">11,680</p>
      <div className="absolute bottom-[-1.68%] left-0 right-0 top-[92.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 89">
          <path d="M1440 0H0V89H1440V0Z" fill="var(--fill-0, #111827)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[95.58%_46.81%_2.52%_3.33%] leading-[normal] not-italic text-[12px] text-gray-200 whitespace-pre-wrap">{`- Contact              - Email: lee010320123@gmail.com                      - GitHub: https://github.com/leehyunro123`}</p>
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[54.89%_28.33%_42.69%_69.1%] italic leading-[normal] text-[16px] text-white">200</p>
      <Frame3 />
      <div className="absolute aspect-[1205/1122] left-[84.72%] right-[5.28%] top-[112px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

export default function Test() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="로그인 화면 test">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}