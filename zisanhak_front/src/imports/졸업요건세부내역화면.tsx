import svgPaths from "./svg-lean2ne6ag";
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
      <div className="absolute h-[832px] left-[4.72%] right-[4.72%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-[-0.06%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1305 833">
            <path d={svgPaths.p3040f400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[23px] left-[6.6%] right-[77.64%] top-[calc(50%+388.5px)] translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-[-2.17%_-0.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 24">
            <path d={svgPaths.p3e491780} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[11px] italic leading-[normal] left-[9.38%] right-[80.49%] text-[16px] text-center text-gray-900 top-[calc(50%+380px)]">이전으로 돌아가기</p>
      <div className="absolute h-[22px] left-[77.78%] right-[6.53%] top-[calc(50%+388px)] translate-y-[-50%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 22">
          <path d={svgPaths.p14cfdd00} fill="var(--fill-0, #F38E1D)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[11px] italic leading-[normal] left-[81.39%] right-[10.21%] text-[16px] text-center text-white top-[calc(50%+380px)]">보고서 내보내기</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="졸업요건 세부내역 화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
        <div className="absolute h-[168px] left-[6.49%] right-[6.71%] top-[calc(50%+319.48px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.3%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 169">
              <path d={svgPaths.p11f77740} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[62px] left-[51.76%] right-[7.33%] top-[calc(50%+360.48px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.81%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 63">
              <path d={svgPaths.p21daef00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[167px] left-[6.49%] right-[6.71%] top-[calc(50%-217.02px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.3%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 168">
              <path d={svgPaths.p18c13f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[62px] left-[8.36%] right-[50.74%] top-[calc(50%+360.48px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.81%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 63">
              <path d={svgPaths.p21daef00} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[7px] left-[8.36%] right-[24.63%] top-[calc(50%+303.98px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 7">
            <path d={svgPaths.pc795c00} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7px] left-[8.36%] right-[35.81%] top-[calc(50%+303.98px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 804 7">
            <path d={svgPaths.p1591a700} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[63px] left-[51.76%] right-[7.33%] top-[calc(50%+2.98px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.79%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 64">
              <path d={svgPaths.p3c290e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[167px] left-[6.49%] right-[6.71%] top-[calc(50%-38.02px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.3%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 168">
              <path d={svgPaths.p18c13f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[167px] left-[6.49%] right-[6.71%] top-[calc(50%+140.98px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.3%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1251 168">
              <path d={svgPaths.p18c13f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[62px] left-[51.76%] right-[7.33%] top-[calc(50%+181.48px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.81%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 63">
              <path d={svgPaths.p21daef00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[63px] left-[8.36%] right-[50.74%] top-[calc(50%+2.98px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.79%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 64">
              <path d={svgPaths.p3c290e00} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[62px] left-[8.36%] right-[50.74%] top-[calc(50%+181.48px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.81%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 63">
              <path d={svgPaths.p21daef00} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[5px] left-[8.36%] right-[24.63%] top-[calc(50%-54.02px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 5">
            <path d={svgPaths.p1090a000} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[6px] left-[8.36%] right-[24.63%] top-[calc(50%+124.48px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 6">
            <path d={svgPaths.p3a3c3080} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[63px] left-[8.36%] right-[50.74%] top-[calc(50%-176.02px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.79%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 64">
              <path d={svgPaths.p3c290e00} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[63px] left-[51.76%] right-[7.33%] top-[calc(50%-176.02px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-0.79%_-0.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 64">
              <path d={svgPaths.p3c290e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[6px] left-[8.36%] right-[24.63%] top-[calc(50%-232.52px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 6">
            <path d={svgPaths.p3a3c3080} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[5px] left-[8.36%] right-[32.75%] top-[calc(50%-54.02px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 5">
            <path d={svgPaths.p71de380} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[6px] left-[8.36%] right-[24.63%] top-[calc(50%+124.48px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 6">
            <path d={svgPaths.p3a3c3080} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[6px] left-[8.36%] right-[43.24%] top-[calc(50%-232.52px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 697 6">
            <path d={svgPaths.p3e12fa80} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[52.74%] not-italic right-[34.63%] text-[12px] text-gray-900 top-[calc(50%+353.48px)]">권장: INC4020 컴퓨터네트워크</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[52.74%] not-italic right-[42.82%] text-[12px] text-amber-500 top-[calc(50%+337.48px)]">잔여 1 과목</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[23.08%] not-italic right-[60.53%] text-[12px] text-gray-900 top-[calc(50%+338.48px)]">· INC4116 임베디드SW와스마트모빌리티</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[23.08%] not-italic right-[68.58%] text-[12px] text-gray-900 top-[calc(50%+353.48px)]">· INC4059 운영체제</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[9.33%] not-italic right-[78.1%] text-[12px] text-gray-900 top-[calc(50%+367.48px)]">· INC2029 객체지향언어와실습</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[81.57%] text-[12px] text-gray-900 top-[calc(50%+353.48px)]">· INC2028 컴퓨터구성</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[79.83%] text-[12px] text-gray-900 top-[calc(50%+338.48px)]">· INC2027 자료구조와실습</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[51.76%] right-[43.93%] text-[14px] text-gray-900 top-[calc(50%+311.48px)]">필요 과목</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[8.36%] right-[87.33%] text-[14px] text-gray-900 top-[calc(50%+311.48px)]">인정 과목</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[8.36%] not-italic right-[87.61%] text-[12px] text-gray-500 top-[calc(50%+285.48px)]">83% 달성</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[8.36%] not-italic right-[89.63%] text-[12px] text-gray-500 top-[calc(50%+267.48px)]">5 / 6</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[14px] italic leading-[normal] left-[8.36%] right-[86.36%] text-[18px] text-gray-900 top-[calc(50%+246.48px)]">전공필수</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[52.74%] not-italic right-[36.85%] text-[12px] text-gray-900 top-[calc(50%+161.48px)]">요건 충족 (추가 필요 없음)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[71.99%] text-[12px] text-gray-900 top-[calc(50%+163.48px)]">2021-1 · RGC1080 EAS1 · 2학점</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[51.76%] right-[43.93%] text-[14px] text-gray-900 top-[calc(50%-46.52px)]">필요 과목</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[51.76%] right-[43.93%] text-[14px] text-gray-900 top-[calc(50%+132.48px)]">필요 과목</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[8.36%] right-[87.33%] text-[14px] text-gray-900 top-[calc(50%-46.52px)]">인정 과목</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10px] italic leading-[normal] left-[8.36%] right-[87.33%] text-[14px] text-gray-900 top-[calc(50%+132.48px)]">인정 과목</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[8.36%] not-italic right-[87.68%] text-[12px] text-gray-500 top-[calc(50%-71.52px)]">88% 달성</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[8.36%] not-italic right-[89.63%] text-[12px] text-gray-500 top-[calc(50%+88.48px)]">2 / 2</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[12px] italic leading-[normal] left-[8.36%] right-[86.08%] text-[18px] text-gray-900 top-[calc(50%-110.52px)]">전공 학점</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[13px] italic leading-[normal] left-[8.36%] right-[86.08%] text-[18px] text-gray-900 top-[calc(50%+68.48px)]">영어 과목</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[52.74%] not-italic right-[39.83%] text-[12px] text-gray-900 top-[calc(50%-182.52px)]">평점 2.0 이상 유지</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[52.74%] not-italic right-[35.11%] text-[12px] text-gray-900 top-[calc(50%-17.52px)]">전공 이수학점 75 충족(잔여 9)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[52.74%] not-italic right-[34.9%] text-[12px] text-gray-900 top-[calc(50%-196.52px)]">총 이수학점 130 충족(잔여 36)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[9.33%] not-italic right-[75.81%] text-[12px] text-gray-900 top-[calc(50%+11.48px)]">2025-1 · INC4059 운영체제 · 3학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[71.99%] text-[12px] text-gray-900 top-[calc(50%-169.52px)]">2021-2 · RGC1080 EAS1 · 2학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[9.33%] not-italic right-[73.31%] text-[12px] text-gray-900 top-[calc(50%-3.52px)]">2024-1 · INC2027 자료구조와실습 · 3학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[75.81%] text-[12px] text-gray-900 top-[calc(50%-183.52px)]">2025-1 · INC4059 운영체제 · 3학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[9.33%] not-italic right-[74.9%] text-[12px] text-gray-900 top-[calc(50%-17.52px)]">2024-2 · INC2028 컴퓨터구성 · 3학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[9.33%] not-italic right-[71.43%] text-[12px] text-gray-900 top-[calc(50%-197.52px)]">2024-2 · INC2029 객체지향언어와실습 · 3학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[8.36%] not-italic right-[86.43%] text-[12px] text-gray-500 top-[calc(50%-90.52px)]">전공 66 / 75</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[11px] italic leading-[normal] left-[51.76%] right-[43.93%] text-[14px] text-gray-900 top-[calc(50%-225.52px)]">필요 과목</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[11px] italic leading-[normal] left-[8.36%] right-[87.33%] text-[14px] text-gray-900 top-[calc(50%-225.52px)]">인정 과목</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[8px] leading-[normal] left-[8.36%] not-italic right-[86.78%] text-[12px] text-gray-500 top-[calc(50%-268.52px)]">총 94 / 130</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[8.36%] not-italic right-[87.26%] text-[12px] text-gray-500 top-[calc(50%+107.48px)]">100% 달성</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[13px] italic leading-[normal] left-[8.36%] right-[86.36%] text-[18px] text-gray-900 top-[calc(50%-289.52px)]">이수학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[10px] leading-[normal] left-[9.33%] not-italic right-[76.92%] text-[12px] text-gray-900 top-[calc(50%+177.48px)]">2021-2 · RGC1081 EAS2 · 2학점</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[8.29%] not-italic right-[69.21%] text-[14px] text-gray-500 top-[calc(50%-324.52px)]">각 항목에 포함된 과목과 잔여 조건을 확인하세요.</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[9px] leading-[normal] left-[8.36%] not-italic right-[87.68%] text-[12px] text-gray-500 top-[calc(50%-250.52px)]">72% 달성</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[19px] italic leading-[normal] left-[8.29%] right-[83.65%] text-[26px] text-gray-900 top-[calc(50%-361.52px)]">세부 내역</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}