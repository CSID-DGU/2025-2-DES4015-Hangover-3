import svgPaths from "./svg-7t5jkwfijo";
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
      <div className="absolute h-[830px] left-[67px] top-[61px] w-[1305px]" data-name="Component 14">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-0.06%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
              <path d={svgPaths.p593bf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[3.26%_80.73%_93.24%_2.08%] italic leading-[normal] text-[22px] text-gray-900">학사 정보 PDF 목록</p>
        <div className="absolute inset-[8.18%_2.07%_87.72%_2.07%]" data-name="Vector">
          <div className="absolute inset-[-1.47%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 35">
              <path d={svgPaths.p329c64f0} fill="var(--fill-0, #FFF7ED)" id="Vector" stroke="var(--stroke-0, #FDEBD2)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[9.4%_47.05%_89.16%_3.45%] leading-[normal] not-italic text-[13px] text-amber-800">TIP: PDF를 열고 Ctrl + F(맥은 ⌘ + F)로 본인 학과/단과대를 검색하면 졸업요건을 더 빠르게 찾아 볼 수 있어요</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[13.89%_84.72%_83.65%_2.08%] italic leading-[normal] text-[16px] text-gray-900">2025 교육과정 안내서</p>
        <div className="absolute inset-[17.52%_2.08%_74.71%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[19.33%_93.92%_76.52%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[20.76%_94.44%_77.69%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[19.33%_64.32%_78.47%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2025학년도 신입생을 위한 학사제도 및 학업이수 가이드</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[21.92%_78.73%_76.13%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2025-02-27 · 7.2MB</p>
        <div className="absolute inset-[19.33%_4.17%_76.52%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.37%_5.6%_77.43%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <div className="absolute inset-[26.33%_2.08%_65.9%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.14%_93.92%_67.71%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[29.57%_94.44%_68.88%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[28.14%_81.42%_69.66%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2025학년도 교육과정</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[30.73%_78.82%_67.33%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2025-02-01 · 3.1MB</p>
        <div className="absolute inset-[28.14%_4.17%_67.71%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[29.18%_5.6%_68.62%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[35.15%_84.64%_62.39%_2.08%] italic leading-[normal] text-[16px] text-gray-900">2024 교육과정 안내서</p>
        <div className="absolute inset-[38.77%_2.08%_53.45%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[40.59%_93.92%_55.27%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[42.01%_94.44%_56.43%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[40.59%_71.61%_57.21%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2024학년도 학사제도 및 학업이수 가이드</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.18%_78.82%_54.88%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2024-02-12 · 6.1MB</p>
        <div className="absolute inset-[40.59%_4.17%_55.27%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[41.63%_5.6%_56.17%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <div className="absolute inset-[47.58%_2.08%_44.64%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.4%_93.92%_46.46%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[50.82%_94.44%_47.62%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[49.4%_81.42%_48.4%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2024학년도 교육과정</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[51.99%_78.39%_46.07%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2024-02-03 · 3.0MB</p>
        <div className="absolute inset-[49.4%_4.17%_46.46%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[50.43%_5.6%_47.37%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[56.52%_84.64%_41.02%_2.08%] italic leading-[normal] text-[16px] text-gray-900">2023 교육과정 안내서</p>
        <div className="absolute inset-[60.15%_2.08%_32.08%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[61.97%_93.92%_33.89%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[63.39%_94.44%_35.06%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[61.97%_71.61%_35.83%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2023학년도 학사제도 및 학업이수 가이드</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[64.56%_78.56%_33.5%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2023-02-10 · 5.8MB</p>
        <div className="absolute inset-[61.97%_4.17%_33.89%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[63%_5.6%_34.8%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <div className="absolute inset-[68.96%_2.08%_23.27%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.77%_93.92%_25.08%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[72.2%_94.44%_26.25%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[70.77%_81.42%_27.02%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2023학년도 교육과정</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[73.36%_78.56%_24.69%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2023-02-01 · 2.9MB</p>
        <div className="absolute inset-[70.77%_4.17%_25.08%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[71.81%_5.6%_25.99%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[78.02%_84.72%_19.52%_2.08%] italic leading-[normal] text-[16px] text-gray-900">2022 교육과정 안내서</p>
        <div className="absolute inset-[81.65%_2.08%_10.58%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.46%_93.92%_12.39%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[84.89%_94.44%_13.56%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[83.46%_71.61%_14.34%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2022학년도 학사제도 및 학업이수 가이드</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[86.05%_78.65%_12.01%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2022-02-10 · 5.5MB</p>
        <div className="absolute inset-[83.46%_4.17%_12.39%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[84.5%_5.6%_13.3%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
        <div className="absolute inset-[90.46%_2.08%_1.77%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.78%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 66">
              <path d={svgPaths.pe5d500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[92.27%_93.92%_3.59%_3.3%]" data-name="Vector">
          <div className="absolute inset-[-1.45%_-1.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
              <path d={svgPaths.p2e3f0800} fill="var(--fill-0, #FEF2F2)" id="Vector" stroke="var(--stroke-0, #FECACA)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[93.69%_94.44%_4.75%_3.82%] italic leading-[normal] text-[10px] text-center text-red-700">PDF</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[92.27%_81.42%_5.53%_7.29%] italic leading-[normal] text-[14px] text-gray-900">2022학년도 교육과정</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[94.86%_78.65%_3.2%_7.29%] leading-[normal] not-italic text-[12px] text-gray-500">업데이트 2022-02-01 · 2.8MB</p>
        <div className="absolute inset-[92.27%_4.17%_3.59%_85.76%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
            <path d={svgPaths.p189df00} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[93.31%_5.6%_4.49%_87.2%] italic leading-[normal] text-[14px] text-center text-white">PDF 다운로드</p>
      </div>
    </div>
  );
}

export default function Pdf() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="학사 정보 PDF 모아져있는 화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}