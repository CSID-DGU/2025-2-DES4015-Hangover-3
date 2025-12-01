import svgPaths from "./svg-7okm5gpe3j";
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
      <div className="absolute h-[830px] left-[67px] top-[61px] w-[1305px]" data-name="Component 16">
        <div className="absolute inset-0" data-name="Vector">
          <div className="absolute inset-[-0.06%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
              <path d={svgPaths.p395fb2e0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[9.7%_64.58%_88.86%_2.08%] leading-[normal] not-italic text-[14px] text-gray-500">필터링을 통해 다른 학우들이 많이 듣는 교양을 찾아보세요!</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[4.84%_94.36%_92.87%_2.08%] italic leading-[normal] text-[22px] text-gray-900">{`현재 `}</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[4.33%_91.12%_92.78%_5.67%] italic leading-[normal] text-[#e4811c] text-[28px]">62</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[4.84%_81.34%_92.87%_8.68%] italic leading-[normal] text-[22px] text-gray-900">개 학과/전공 ,</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[4.33%_73.02%_92.78%_19.08%] italic leading-[normal] text-[#e4811c] text-[28px]">11,680</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[4.82%_40.58%_92.89%_26.39%] italic leading-[normal] text-[22px] text-gray-900">명의 사용자 데이터 통계를 사용하고 있습니다</p>
        <div className="absolute inset-[14.28%_2.46%_70.66%_1.68%]" data-name="Vector">
          <div className="absolute inset-[-0.4%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 126">
              <path d={svgPaths.p2c4d3c80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.39%_57.25%_72.53%_4.44%]" data-name="Vector">
          <div className="absolute inset-[-0.54%_-0.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 501 93">
              <path d={svgPaths.pb775640} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[17.59%_92.26%_80.72%_5.44%] italic leading-[normal] text-[14px] text-gray-900">학점</p>
        <div className="absolute inset-[20.42%_86.96%_77.2%_7.13%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 20">
            <path d={svgPaths.p2ed93300} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.77%_87.96%_77.95%_8.13%] italic leading-[normal] text-[12px] text-center text-white">0.5 학점</p>
        <div className="absolute inset-[20.42%_81.06%_77.2%_13.73%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20">
            <path d={svgPaths.p23ccea80} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.77%_82.32%_77.95%_14.99%] italic leading-[normal] text-[12px] text-center text-white">1 학점</p>
        <div className="absolute inset-[20.42%_75.16%_77.2%_19.63%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20">
            <path d={svgPaths.p23ccea80} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.77%_76.33%_77.95%_20.8%] italic leading-[normal] text-[12px] text-center text-white">2 학점</p>
        <div className="absolute inset-[20.42%_69.25%_77.2%_25.54%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20">
            <path d={svgPaths.p23ccea80} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.77%_70.43%_77.95%_26.71%] italic leading-[normal] text-[12px] text-center text-white">3 학점</p>
        <div className="absolute inset-[16.39%_15.17%_72.53%_46.51%]" data-name="Vector">
          <div className="absolute inset-[-0.54%_-0.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 501 93">
              <path d={svgPaths.pb775640} fill="var(--fill-0, #F9FAFB)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[17.59%_40.69%_80.6%_47.59%] italic leading-[normal] text-[14px] text-gray-900">공통교양 영역</p>
        <div className="absolute inset-[20.36%_45.44%_77.11%_49.2%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.84%_47.13%_77.71%_50.8%] italic leading-[normal] text-[12px] text-center text-white">자기</p>
        <div className="absolute inset-[20.36%_39.31%_77.11%_55.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.72%_41%_77.83%_56.94%] italic leading-[normal] text-[12px] text-center text-white">동국</p>
        <div className="absolute inset-[20.36%_33.18%_77.11%_61.46%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.72%_34.87%_77.83%_63.06%] italic leading-[normal] text-[12px] text-center text-white">시민</p>
        <div className="absolute inset-[20.36%_27.05%_77.11%_67.59%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.72%_27.74%_77.83%_68.2%] italic leading-[normal] text-[12px] text-center text-white">지역연구</p>
        <div className="absolute inset-[20.36%_20.92%_77.11%_73.64%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 21">
            <path d={svgPaths.pac98c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[20.72%_22.61%_77.83%_75.33%] italic leading-[normal] text-[12px] text-center text-white">미래</p>
        <div className="absolute inset-[23.37%_45.44%_74.1%_49.2%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[23.86%_47.13%_74.7%_50.8%] italic leading-[normal] text-[12px] text-center text-white">사고</p>
        <div className="absolute inset-[23.37%_39.31%_74.1%_55.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[23.73%_41%_74.82%_56.94%] italic leading-[normal] text-[12px] text-center text-white">창의</p>
        <div className="absolute inset-[23.37%_33.18%_74.1%_61.46%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[23.73%_34.94%_74.82%_63.14%] italic leading-[normal] text-[12px] text-center text-white">SW</p>
        <div className="absolute inset-[23.37%_27.05%_74.1%_67.59%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <path d={svgPaths.p3ac22f00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[23.73%_28.2%_74.82%_68.74%] italic leading-[normal] text-[12px] text-center text-white">디지털</p>
        <div className="absolute inset-[23.37%_20.92%_74.1%_73.64%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 21">
            <path d={svgPaths.pac98c00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[23.73%_21.61%_74.82%_74.33%] italic leading-[normal] text-[12px] text-center text-white">한국문화</p>
        <div className="absolute inset-[20.72%_4.75%_76.27%_87.59%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 25">
            <path d={svgPaths.p15251f80} fill="var(--fill-0, #F38E1D)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[21.32%_6.13%_77.23%_89.19%] italic leading-[normal] text-[14px] text-center text-white">검색하기</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.93%_80.64%_67.2%_2.08%] italic leading-[normal] text-[18px] text-gray-900">📘 교양 순위</p>
        <div className="absolute inset-[36.01%_2.08%_60.94%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.97%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 27">
              <path d={svgPaths.p2be35070} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[37.03%_92.62%_61.7%_3.47%] italic leading-[normal] text-[12px] text-gray-500">학수번호</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[37.03%_83.16%_61.7%_13.89%] italic leading-[normal] text-[12px] text-gray-500">과목명</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[37.03%_37.07%_61.7%_59.03%] italic leading-[normal] text-[12px] text-gray-500">이수구분</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[37.03%_30.3%_61.7%_67.71%] italic leading-[normal] text-[12px] text-gray-500">영역</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[37.03%_19.88%_61.7%_78.13%] italic leading-[normal] text-[12px] text-gray-500">학점</p>
        <div className="absolute inset-[39.42%_2.08%_57.18%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.19%_91.32%_58.46%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC0005</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[40.19%_75.69%_58.46%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">기술보고서작성및발표</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[40.19%_36.81%_58.46%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[40.19%_31.25%_58.46%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">글</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.19%_21.09%_58.46%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <div className="absolute inset-[43.16%_2.08%_53.45%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[43.92%_91.58%_54.72%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC1074</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.92%_79.51%_54.72%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">커리어 디자인</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.92%_36.81%_54.72%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[43.92%_30.21%_54.72%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">대학</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[43.92%_21.27%_54.72%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <div className="absolute inset-[46.89%_2.08%_49.71%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.66%_91.49%_50.99%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC0017</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[47.66%_80.38%_50.99%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">자아와명상1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[47.66%_36.81%_50.99%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[47.66%_30.21%_50.99%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">동국</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.66%_21.27%_50.99%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">1</p>
        <div className="absolute inset-[50.63%_2.08%_45.98%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[51.39%_91.49%_47.25%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC1080</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[51.39%_80.47%_47.25%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">EAS1(영어)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[51.39%_36.81%_47.25%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[51.39%_30.21%_47.25%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">영어</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[51.39%_21.18%_47.25%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <div className="absolute inset-[54.36%_2.08%_42.24%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.13%_91.67%_43.52%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC1081</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[55.13%_80.3%_43.52%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">EAS2(영어)</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[55.13%_36.81%_43.52%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[55.13%_30.21%_43.52%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">사고</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.13%_21.18%_43.52%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <div className="absolute inset-[58.1%_2.08%_38.51%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.86%_91.23%_39.78%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC0003</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[58.86%_80.9%_39.78%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">불교와인간</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[58.86%_36.81%_39.78%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[58.86%_30.21%_39.78%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">자아</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.86%_21.18%_39.78%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <div className="absolute inset-[61.83%_2.08%_34.77%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-1.77%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 30">
              <path d={svgPaths.p3bd67e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[62.6%_91.41%_36.05%_3.47%] leading-[normal] not-italic text-[13px] text-gray-900">RGC1046</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[62.6%_76.39%_36.05%_13.89%] leading-[normal] not-italic text-[13px] text-gray-900">인공지능과 미래사회</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[62.6%_36.81%_36.05%_59.03%] leading-[normal] not-italic text-[13px] text-gray-900">공통교양</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[62.6%_30.47%_36.05%_67.71%] leading-[normal] not-italic text-[13px] text-gray-900">SW</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[62.6%_21.18%_36.05%_78.13%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="꿀교 화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}