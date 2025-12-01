import svgPaths from "./svg-wawcbygg9j";
import img from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";
import img1 from "figma:asset/d8216d3bd99a674ff31ca90f214061487565771c.png";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import imgImage3 from "figma:asset/08463e23a0100526c2eeef596616e207ea29c188.png";

function Frame8() {
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

function Frame9() {
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

function Frame7() {
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
      <Frame8 />
      <NavLinks />
      <Frame9 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#e4811c] box-border content-stretch flex flex-col h-[62px] items-center justify-center left-0 px-[64px] py-0 top-0 w-[1440px]" data-name="Navbar / 1 /">
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[45px] left-[calc(25%+188px)] rounded-[20px] top-[424px] w-[343px]">
      <div className="box-border content-stretch flex gap-[10px] h-[45px] items-center overflow-clip px-[19px] py-[8px] relative rounded-[inherit] w-[343px]">
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[17px] text-center text-nowrap tracking-[-0.5px]">
          <p className="leading-[17px] whitespace-pre">이름</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[45px] left-[calc(25%+188px)] rounded-[20px] top-[340px] w-[343px]">
      <div className="box-border content-stretch flex gap-[10px] h-[45px] items-center overflow-clip px-[19px] py-[8px] relative rounded-[inherit] w-[343px]">
        <div className="flex flex-col font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#707070] text-[17px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[17px] whitespace-pre">이메일</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1">
          <path d="M6 9L12 15L17.5 9" id="Vector 1" stroke="var(--stroke-0, #707070)" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[17px] text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[17px] whitespace-pre">학년</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[45px] left-[calc(25%+188px)] rounded-[20px] top-[508px] w-[343px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[45px] items-start justify-center overflow-clip px-[15px] py-[7px] relative rounded-[inherit] w-[343px]">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[45px] left-[calc(25%+188px)] rounded-[20px] top-[592px] w-[343px]">
      <div className="box-border content-stretch flex gap-[10px] h-[45px] items-center overflow-clip px-[19px] py-[8px] relative rounded-[inherit] w-[343px]">
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[17px] text-center text-nowrap tracking-[-0.5px]">
          <p className="leading-[17px] whitespace-pre">비밀번호</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#cb6015] h-[56px] left-[calc(25%+258px)] overflow-clip rounded-[20px] top-[666px] w-[204px]">
      <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[102px] not-italic text-[24px] text-center text-nowrap text-white top-[27.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[17px] whitespace-pre">로그인</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute h-[962px] left-0 overflow-clip top-[62px] w-[1440px]" data-name="login">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLogin} />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <div className="absolute h-[105px] left-1/2 top-[calc(50%-227.5px)] translate-x-[-50%] translate-y-[-50%] w-[234px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(25%+283px)] not-italic text-[#707070] text-[12px] text-nowrap top-[747px] translate-y-[-50%]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">회원가입</p>
      </div>
      <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+11px)] not-italic text-[#707070] text-[12px] text-nowrap top-[747px] translate-y-[-50%]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">비밀번호 찾기</p>
      </div>
    </div>
  );
}

export default function Test() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="로그인 화면 test 2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}