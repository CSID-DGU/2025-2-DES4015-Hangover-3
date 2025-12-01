import svgPaths from "./svg-fx2vjvwrr4";
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
      <div className="absolute h-[830px] left-[67px] top-[61px] w-[1305px]" data-name="Component 17">
        <div className="absolute inset-[-0.48%_0.08%_0.48%_-0.08%]" data-name="Vector">
          <div className="absolute inset-[-0.06%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 831">
              <path d={svgPaths.p15162380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[4.2%_83.36%_93.71%_3.62%] italic leading-[normal] text-[26px] text-gray-900">졸업요건 확인</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[8.83%_66%_90.02%_3.62%] leading-[normal] not-italic text-[14px] text-gray-500">업로드한 성적표 기반으로 졸업요건 충족 여부를 진단합니다.</p>
        <div className="absolute inset-[13.47%_2.08%_77.07%_2.08%]" data-name="Vector">
          <div className="absolute inset-[-0.64%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1252 80">
              <path d={svgPaths.p28fcb8f0} fill="var(--fill-0, #FFF7ED)" id="Vector" stroke="var(--stroke-0, #FDEBD2)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[14.7%_77.23%_81.69%_3.61%] italic leading-[normal] text-[#e4811c] text-[24px]">졸업까지...! 78%</p>
        <div className="absolute inset-[18.91%_22.41%_80.42%_3.63%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 966 6">
            <path d={svgPaths.p3e38f900} fill="var(--fill-0, #E5E7EB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[18.91%_38.73%_80.42%_3.63%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 753 6">
            <path d={svgPaths.p3b65ed00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[20.29%_69.91%_78.7%_3.78%] leading-[normal] not-italic text-[12px] text-gray-500">부족 항목: 전공필수 1과목, 설계 1과목, 영어시험 점수 미등록</p>
        <div className="absolute h-[34px] left-[83.99%] right-[3.83%] top-[calc(50%-259.622px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 34">
            <path d={svgPaths.p2f235f80} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold h-[10.655px] italic leading-[normal] left-[87.34%] right-[7.19%] text-[16px] text-center text-white top-[calc(50%-268.885px)]">상세 보기</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[24.86%_91.83%_74.13%_4%] leading-[normal] not-italic text-[12px] text-gray-500">학생 정보</p>
        <div className="absolute inset-[24.84%_81.25%_73.26%_8.68%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 16">
            <path d={svgPaths.p2c669a00} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.95%_81.21%_74.03%_8.64%] italic leading-[normal] text-[12px] text-center text-gray-700">학과: 정보통신공학전공</p>
        <div className="absolute inset-[24.84%_69.1%_73.26%_19.44%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 16">
            <path d={svgPaths.p7a2e870} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.95%_70.44%_74.03%_20.79%] italic leading-[normal] text-[12px] text-center text-gray-700">학번: 2021112097</p>
        <div className="absolute inset-[24.84%_61.81%_73.26%_31.6%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 16">
            <path d={svgPaths.p1dca5a80} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.95%_62.41%_74.03%_32.2%] italic leading-[normal] text-[12px] text-center text-gray-700">성명: 이현노</p>
        <div className="absolute inset-[24.84%_53.13%_73.26%_38.89%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 16">
            <path d={svgPaths.p28d42300} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.95%_53.73%_74.03%_39.5%] italic leading-[normal] text-[12px] text-center text-gray-700">총취득학점: 94</p>
        <div className="absolute inset-[24.84%_43.75%_73.26%_47.57%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 16">
            <path d={svgPaths.p357e1800} fill="var(--fill-0, #F3F4F6)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[24.95%_44.7%_74.03%_48.52%] italic leading-[normal] text-[12px] text-center text-gray-700">평점평균: 4.03</p>
        <div className="absolute inset-[29.4%_66.67%_59.99%_2.07%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 89">
              <path d={svgPaths.p25bb800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.61%_91.72%_67.83%_3.45%] italic leading-[normal] text-[14px] text-gray-500">이수 학점</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[32.66%_88.12%_64.81%_3.45%] italic leading-[normal] text-[24px] text-gray-900">94 / 130</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.75%_86.67%_61.92%_3.45%] leading-[normal] not-italic text-[12px] text-gray-500">총 이수학점 / 졸업필수</p>
        <div className="absolute inset-[29.4%_34.41%_59.99%_34.41%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 89">
              <path d={svgPaths.pf9f0ff0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.61%_59.46%_67.83%_35.78%] italic leading-[normal] text-[14px] text-gray-500">전공 학점</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[32.66%_57.09%_64.81%_35.78%] italic leading-[normal] text-[24px] text-gray-900">66 / 75</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.75%_53.41%_61.92%_35.78%] leading-[normal] not-italic text-[12px] text-gray-500">전공 이수학점 / 졸업필수</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.72%_56.78%_67.95%_41.23%] italic leading-[normal] text-[#e4811c] text-[12px] text-center">부족</p>
        <div className="absolute inset-[29.4%_2.07%_59.99%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 89">
              <path d={svgPaths.p25bb800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.61%_27.2%_67.83%_68.05%] italic leading-[normal] text-[14px] text-gray-500">영어 과목</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[32.66%_27.51%_64.81%_68.05%] italic leading-[normal] text-[24px] text-gray-900">2 / 2</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[36.75%_22.38%_61.92%_68.05%] leading-[normal] not-italic text-[12px] text-gray-500">영어 관련 교과 이수수</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.72%_24.67%_67.95%_73.33%] italic leading-[normal] text-[12px] text-center text-green-600">충족</p>
        <div className="absolute inset-[41.57%_66.67%_47.83%_2.07%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 89">
              <path d={svgPaths.p25bb800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.66%_92.03%_55.78%_3.45%] italic leading-[normal] text-[14px] text-gray-500">전공필수</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[44.83%_92.03%_52.64%_3.45%] italic leading-[normal] text-[24px] text-gray-900">5 / 6</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.8%_86.05%_49.87%_3.45%] leading-[normal] not-italic text-[12px] text-gray-500">이수한 전공필수 과목 수</p>
        <div className="absolute inset-[41.57%_34.41%_47.83%_34.41%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 89">
              <path d={svgPaths.pf9f0ff0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.66%_59.46%_55.78%_35.78%] italic leading-[normal] text-[14px] text-gray-500">설계 과목</p>
        <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold inset-[44.83%_60.08%_52.64%_35.78%] italic leading-[normal] text-[24px] text-gray-900">1 / 2</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.8%_55.94%_49.87%_35.78%] leading-[normal] not-italic text-[12px] text-gray-500">이수한 설계과목 수</p>
        <div className="absolute inset-[41.57%_2.07%_47.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.57%_-0.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 89">
              <path d={svgPaths.p25bb800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.54%_24.67%_55.9%_68.05%] italic leading-[normal] text-[14px] text-gray-500">영어 시험 점수</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[44.83%_26.13%_52.52%_68.05%] italic leading-[normal] text-[#e4811c] text-[24px]">미등록</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[48.56%_13.72%_50.11%_68.05%] leading-[normal] not-italic text-[12px] text-gray-500">TOEIC/TOEFL/OPIc 등 인증 점수 업로드</p>
        <div className="absolute aspect-[136/27] left-[88.05%] right-[3.52%] top-[calc(50%-3.946px)] translate-y-[-50%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 22">
            <path d={svgPaths.p2f1b0500} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute aspect-[71/14] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic leading-[normal] left-[90.04%] right-[5.59%] text-[12px] text-center text-white top-[calc(50%-11.566px)]">점수 등록</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[55.16%_86.73%_43.76%_2.47%] italic leading-[normal] text-[14px] text-gray-900">{`최근 반영 과목 `}</p>
        <div className="absolute inset-[58.05%_2.06%_39.42%_2.47%]" data-name="Vector">
          <div className="absolute inset-[-2.38%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 22">
              <path d={svgPaths.p3e671a00} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_91.94%_40.38%_3.69%] italic leading-[normal] text-[12px] text-gray-500">년도-학기</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_82.06%_40.38%_14.11%] italic leading-[normal] text-[12px] text-gray-500">이수구분</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_73.4%_40.38%_22.77%] italic leading-[normal] text-[12px] text-gray-500">교과목명</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_30.71%_40.38%_67.29%] italic leading-[normal] text-[12px] text-gray-500">학점</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_25.5%_40.38%_72.5%] italic leading-[normal] text-[12px] text-gray-500">성적</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[58.53%_18.07%_40.38%_77.72%] italic leading-[normal] text-[12px] text-gray-500">영역/구분</p>
        <div className="absolute inset-[60.82%_2.06%_36.53%_2.47%]" data-name="Vector">
          <div className="absolute inset-[-2.27%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 23">
              <path d={svgPaths.p1ecfa400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.18%_92.17%_37.73%_3.85%] leading-[normal] not-italic text-[13px] text-gray-900">2024-2</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[61.18%_83.66%_37.73%_14.27%] leading-[normal] not-italic text-[13px] text-gray-900">전공</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[61.18%_62.74%_37.73%_22.93%] leading-[normal] not-italic text-[13px] text-gray-900">INC2029 객체지향언어와실습</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.18%_31.4%_37.73%_67.83%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.18%_25.43%_37.73%_73.04%] leading-[normal] not-italic text-[13px] text-gray-900">B+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[61.18%_19.68%_37.73%_78.25%] leading-[normal] not-italic text-[13px] text-gray-900">기초</p>
        <div className="absolute inset-[63.83%_2.06%_33.52%_2.47%]" data-name="Vector">
          <div className="absolute inset-[-2.27%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 23">
              <path d={svgPaths.p1ecfa400} fill="var(--fill-0, #FBFBFD)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.44%_92.32%_34.48%_3.85%] leading-[normal] not-italic text-[13px] text-gray-900">2025-1</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[64.44%_83.66%_34.48%_14.27%] leading-[normal] not-italic text-[13px] text-gray-900">전공</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[64.44%_67.88%_34.48%_22.93%] leading-[normal] not-italic text-[13px] text-gray-900">INC4059 운영체제</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.44%_31.4%_34.48%_67.83%] leading-[normal] not-italic text-[13px] text-gray-900">3</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.44%_25.43%_34.48%_73.04%] leading-[normal] not-italic text-[13px] text-gray-900">A+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[64.44%_19.68%_34.48%_78.25%] leading-[normal] not-italic text-[13px] text-gray-900">전문</p>
        <div className="absolute inset-[66.73%_2.06%_30.5%_2.47%]" data-name="Vector">
          <div className="absolute inset-[-2.17%_-0.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 24">
              <path d={svgPaths.p3590d400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #EEF2F7)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.33%_92.32%_31.59%_3.85%] leading-[normal] not-italic text-[13px] text-gray-900">2021-2</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[67.33%_83.66%_31.59%_14.27%] leading-[normal] not-italic text-[13px] text-gray-900">공교</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[67.33%_65.5%_31.59%_22.93%] leading-[normal] not-italic text-[13px] text-gray-900">{`RGC1080 <영어>EAS1`}</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.33%_31.48%_31.59%_67.83%] leading-[normal] not-italic text-[13px] text-gray-900">2</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.33%_25.43%_31.59%_73.04%] leading-[normal] not-italic text-[13px] text-gray-900">A+</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal inset-[67.33%_19.68%_31.59%_78.25%] leading-[normal] not-italic text-[13px] text-gray-900">영어</p>
        <div className="absolute inset-[94.28%_84.26%_3.01%_1.85%]" data-name="Vector">
          <div className="absolute inset-[-2.23%_-0.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 24">
              <path d={svgPaths.p13f14af0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #E5E7EB)" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[94.7%_84.8%_4.1%_2.25%] italic leading-[normal] text-[16px] text-center text-gray-900">진단 보고서(PDF)</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.77%_57.01%_55.9%_41%] italic leading-[normal] text-[#e4811c] text-[12px] text-center">부족</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.77%_89.81%_55.9%_8.2%] italic leading-[normal] text-[#e4811c] text-[12px] text-center">부족</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[30.72%_89.58%_67.95%_8.43%] italic leading-[normal] text-[#e4811c] text-[12px] text-center">부족</p>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[42.77%_22.45%_55.9%_75.56%] italic leading-[normal] text-[#e4811c] text-[12px] text-center">부족</p>
        <div className="absolute inset-[94.28%_2.31%_3.01%_83.8%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 23">
            <path d={svgPaths.p2210ff00} fill="var(--fill-0, #E4811C)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[94.67%_6.52%_4.05%_88.01%] italic leading-[normal] text-[16px] text-center text-white">결과 확정</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[2px] size-full" data-name="졸업요건 확인 화면">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Navbar />
        <Login />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}