import svgPaths from "./svg-m3h8rzttne";
import img from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";
import img1 from "figma:asset/d8216d3bd99a674ff31ca90f214061487565771c.png";
import imgImage3 from "figma:asset/08463e23a0100526c2eeef596616e207ea29c188.png";
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

function Placehoder() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="placehoder">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[gainsboro] text-nowrap">
        <p className="leading-[normal] whitespace-pre">본인의 학번(아이디)을 입력해주세요.</p>
      </div>
    </div>
  );
}

function Placehoder1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="placehoder">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[gainsboro] text-nowrap">
        <p className="leading-[normal] whitespace-pre">본인의 학과를 입력해주세요.</p>
      </div>
    </div>
  );
}

function Placehoder2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="placehoder">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[gainsboro] text-nowrap">
        <p className="leading-[normal] whitespace-pre">비밀번호를 입력해주세요.</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="login icon">
        <div className="absolute inset-[12.5%_4.17%_12.37%_4.17%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
            <path clipRule="evenodd" d={svgPaths.p39f01180} fill="var(--fill-0, #8A8A8A)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Placehoder3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="placehoder">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[gainsboro] text-nowrap">
        <p className="leading-[normal] whitespace-pre">비밀번호를 다시 한 번 입력해주세요.</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="login icon">
        <div className="absolute inset-[12.5%_4.17%_12.37%_4.17%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
            <path clipRule="evenodd" d={svgPaths.p39f01180} fill="var(--fill-0, #8A8A8A)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[844px] items-start overflow-clip relative rounded-[25px] shrink-0 w-[390px]">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[16px] top-[173px]">
        <div className="flex flex-col font-['머니그라피TTF:Rounded',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[gainsboro] text-nowrap">
          <p className="leading-[normal] whitespace-pre">본인의 학교를 입력해주세요.</p>
        </div>
        <div className="h-0 relative shrink-0 w-[358px]">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 2">
              <path d="M0 1H358" id="Vector 5" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['머니그라피TTF:Rounded',sans-serif] h-[12px] justify-center leading-[0] left-0 not-italic text-[#8a8a8a] text-[11px] top-[46px] translate-y-[-50%] w-[358px]">
          <p className="leading-[normal]">OO대학교 형식으로 입력해주세요. (ex. 동국대학교, 건국대학교)</p>
        </div>
      </div>
      <div className="absolute bg-[#e4811c] h-[45px] left-[16px] overflow-clip rounded-[10px] top-[691px] w-[358px]" data-name="button">
        <div className="absolute flex flex-col font-['머니그라피TTF:Rounded',sans-serif] justify-center leading-[0] left-[179.5px] not-italic text-[20px] text-center text-nowrap text-white top-[23px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">회원가입하기</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[266px]" data-name="회원가입 set">
        <div className="content-stretch flex flex-col gap-[8px] h-[53px] items-center justify-center relative shrink-0 w-[358px]" data-name="학번 default">
          <Placehoder />
          <div className="h-0 relative shrink-0 w-[358px]">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 2">
                <path d="M0 1H358" id="Vector 5" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['머니그라피TTF:Rounded',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8a8a8a] text-[11px] w-[min-content]">
            <p className="leading-[normal]">숫자로만 입력해주세요.</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[361px]" data-name="회원가입 set">
        <div className="content-stretch flex flex-col gap-[8px] h-[53px] items-center justify-center relative shrink-0 w-[358px]" data-name="학과 default">
          <Placehoder1 />
          <div className="h-0 relative shrink-0 w-[358px]">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 2">
                <path d="M0 1H358" id="Vector 5" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Pretendard:ExtraLight',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8a8a8a] text-[11px] w-[min-content]">
            <p className="leading-[normal]">{`공식명칭으로 입력해주세요. (ex. 광홍 -> 광고홍보학과)`}</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[456px]" data-name="회원가입 set">
        <div className="content-stretch flex flex-col gap-[8px] h-[53px] items-center justify-center relative shrink-0 w-[358px]" data-name="비밀번호 default">
          <Placehoder2 />
          <div className="h-0 relative shrink-0 w-[358px]">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 2">
                <path d="M0 1H358" id="Vector 5" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Pretendard:ExtraLight',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8a8a8a] text-[11px] w-[min-content]">
            <p className="leading-[normal]">한글, 숫자, 영문으로 4~12자 이내로 작성해주세요.</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[551px]" data-name="회원가입 set">
        <div className="content-stretch flex flex-col gap-[8px] h-[53px] items-center justify-center relative shrink-0 w-[358px]" data-name="비밀번호 확인 default">
          <Placehoder3 />
          <div className="h-0 relative shrink-0 w-[358px]">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 2">
                <path d="M0 1H358" id="Vector 5" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Pretendard:ExtraLight',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8a8a8a] text-[11px] w-[min-content]">
            <p className="leading-[normal]">입력한 비밀번호와 똑같이 입력해주세요,</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[56px] items-start left-[100px] top-[53px] w-[189px]">
        <div className="aspect-[119/35] relative shrink-0 w-full" data-name="image 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[962px] items-center left-0 overflow-clip px-[525px] py-[53px] top-[62px]" data-name="login">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLogin} />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute gap-[10px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[30px] left-[1338px] top-[16px] w-[78px]">
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

export default function Org() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="회원가입 화면 org">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}