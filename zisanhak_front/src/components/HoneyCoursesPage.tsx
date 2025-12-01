import { useState } from "react";
import Navbar from "./Navbar";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
}

interface NavbarProps {
  onBackToHome?: () => void;
  onLoginClick?: () => void;
  onHoneyCoursesClick?: () => void;
  onAcademicInfoClick?: () => void;
  onRecommendationsClick?: () => void;
  onMyPageClick?: () => void;
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function FilterButton({ label, isActive = false, onClick }: FilterButtonProps) {
  return (
    <div 
      className={`rounded-full px-4 py-1.5 cursor-pointer transition-colors ${
        isActive 
          ? 'bg-[#e4811c] text-white' 
          : 'bg-white border border-[#e5e7eb] text-gray-700 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <p className={`font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center`}>
        {label}
      </p>
    </div>
  );
}

interface Course {
  courseCode: string;
  courseName: string;
  category: string;
  area: string;
  credits: number;
}

function HoneyCoursesContent() {
  const [selectedCredits, setSelectedCredits] = useState<number[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const creditOptions = [0.5, 1, 2, 3];
  const areaOptions = ["자기", "중국", "시민", "지역연구", "미래", "사고", "창의", "SW", "디지털", "한국문학"];

  const toggleCredit = (credit: number) => {
    setSelectedCredits(prev => 
      prev.includes(credit) ? prev.filter(c => c !== credit) : [...prev, credit]
    );
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleReset = () => {
    setSelectedCredits([]);
    setSelectedAreas([]);
  };

  const allCourses: Course[] = [
    { courseCode: "RGC0005", courseName: "기술보고서작성및발표", category: "공통교양", area: "글", credits: 3 },
    { courseCode: "RGC1074", courseName: "커리어 디자인", category: "공통교양", area: "대학", credits: 1 },
    { courseCode: "RGC0017", courseName: "자아와명상1", category: "공통교양", area: "중국", credits: 1 },
    { courseCode: "RGC1080", courseName: "EAS1(영어)", category: "공통교양", area: "영어", credits: 2 },
    { courseCode: "RGC1081", courseName: "EAS2(영어)", category: "공통교양", area: "사고", credits: 2 },
    { courseCode: "RGC0003", courseName: "불교와인간", category: "공통교양", area: "자기", credits: 2 },
    { courseCode: "RGC1046", courseName: "인공지능과 미래사회", category: "공통교양", area: "SW", credits: 2 },
    { courseCode: "RGC2001", courseName: "창의적 사고와 표현", category: "공통교양", area: "창의", credits: 2 },
    { courseCode: "RGC2002", courseName: "디지털 리터러시", category: "공통교양", area: "디지털", credits: 2 },
    { courseCode: "RGC2003", courseName: "한국문화의 이해", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC2004", courseName: "시민의식과 사회참여", category: "공통교양", area: "시민", credits: 1 },
    { courseCode: "RGC2005", courseName: "지역과 세계", category: "공통교양", area: "지역연구", credits: 2 },
    { courseCode: "RGC2006", courseName: "미래사회와 기술", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC3001", courseName: "자기계발과 리더십", category: "공통교양", area: "자기", credits: 0.5 },
    { courseCode: "RGC3002", courseName: "동국인의 자세", category: "공통교양", area: "중국", credits: 0.5 },
    { courseCode: "RGC0001", courseName: "불교와인간", category: "공통교양", area: "자기", credits: 2 },
    { courseCode: "RGC0002", courseName: "불교와인문학", category: "공통교양", area: "자기", credits: 2 },
    { courseCode: "RGC0004", courseName: "인도의사회와문화", category: "공통교양", area: "자기", credits: 3 },
    { courseCode: "RGC0006", courseName: "과학기술글쓰기와발표", category: "공통교양", area: "글", credits: 3 },
    { courseCode: "RGC0007", courseName: "언어와문화", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC0008", courseName: "논리와사고", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC0009", courseName: "시민윤리학", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC0010", courseName: "동아시아역사의재인식", category: "공통교양", area: "중국", credits: 3 },
    { courseCode: "RGC0011", courseName: "세계문화의이해", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC0012", courseName: "현대사회와철학", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC0013", courseName: "현대사회와윤리", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC0014", courseName: "생활속의경제", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC0015", courseName: "현대의서양문화", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC0016", courseName: "한국사의재조명", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC0018", courseName: "자아와명상2", category: "공통교양", area: "중국", credits: 1 },
    { courseCode: "RGC0019", courseName: "비교종교학", category: "공통교양", area: "자기", credits: 3 },
    { courseCode: "RGC1001", courseName: "신화의세계", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1002", courseName: "동서양고전의이해", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1003", courseName: "현대사회와미디어", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1004", courseName: "문화로읽는역사", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1005", courseName: "문학과인생", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1006", courseName: "아시아의종교와문화", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1007", courseName: "심리학의이해", category: "공통교양", area: "자기", credits: 3 },
    { courseCode: "RGC1008", courseName: "행복한삶과긍정심리", category: "공통교양", area: "자기", credits: 3 },
    { courseCode: "RGC1009", courseName: "생명과인간", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1010", courseName: "과학의철학적이해", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1011", courseName: "우주의이해", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1012", courseName: "수학의이해", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1013", courseName: "스포츠와사회", category: "공통교양", area: "시민", credits: 2 },
    { courseCode: "RGC1014", courseName: "생활속의화학", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1015", courseName: "물리학의이해", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1016", courseName: "현대의과학문명", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1017", courseName: "사회와통계", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1018", courseName: "과학기술과에너지", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1019", courseName: "환경과인간", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1020", courseName: "생활과건강", category: "공통교양", area: "자기", credits: 2 },
    { courseCode: "RGC1021", courseName: "음악의이해", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1022", courseName: "미술의이해", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1023", courseName: "영화의이해", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1024", courseName: "한국문화의이해", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1025", courseName: "세계화시대의국제관계", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1026", courseName: "서양미술의이해", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1027", courseName: "한국문학의이해", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1028", courseName: "문화예술과비평", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1029", courseName: "빅데이터의세계", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1030", courseName: "21세기기술혁신과사회변화", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1031", courseName: "지속가능한발전과녹색성장", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1032", courseName: "기후변화와인류문명", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1033", courseName: "정보사회와디지털문화", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1034", courseName: "사회봉사", category: "공통교양", area: "시민", credits: 1 },
    { courseCode: "RGC1035", courseName: "창업과경영", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1036", courseName: "특허와기술사업화", category: "공통교양", area: "창의", credits: 2 },
    { courseCode: "RGC1037", courseName: "직업윤리와전문성", category: "공통교양", area: "시민", credits: 2 },
    { courseCode: "RGC1038", courseName: "리더십개발", category: "공통교양", area: "자기", credits: 2 },
    { courseCode: "RGC1039", courseName: "현대사회와법", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC1040", courseName: "공학윤리", category: "공통교양", area: "시민", credits: 2 },
    { courseCode: "RGC1041", courseName: "철학적사유의기초", category: "공통교양", area: "사고", credits: 3 },
    { courseCode: "RGC1042", courseName: "프로그래밍기초", category: "공통교양", area: "SW", credits: 3 },
    { courseCode: "RGC1043", courseName: "컴퓨팅사고", category: "공통교양", area: "SW", credits: 3 },
    { courseCode: "RGC1044", courseName: "소프트웨어와문제해결", category: "공통교양", area: "SW", credits: 3 },
    { courseCode: "RGC1045", courseName: "데이터사이언스기초", category: "공통교양", area: "SW", credits: 3 },
    { courseCode: "RGC1047", courseName: "4차산업혁명과미래사회", category: "공통교양", area: "미래", credits: 3 },
    { courseCode: "RGC1048", courseName: "사물인터넷과스마트세상", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1049", courseName: "로봇과인공지능", category: "공통교양", area: "SW", credits: 3 },
    { courseCode: "RGC1050", courseName: "가상현실과증강현실", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1051", courseName: "블록체인과암호화폐", category: "공통교양", area: "디지털", credits: 3 },
    { courseCode: "RGC1052", courseName: "기술창업입문", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1053", courseName: "디자인사고와혁신", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1054", courseName: "기업가정신과혁신", category: "공통교양", area: "창의", credits: 3 },
    { courseCode: "RGC1055", courseName: "글로벌비즈니스의이해", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1056", courseName: "현대중국의이해", category: "공통교양", area: "중국", credits: 3 },
    { courseCode: "RGC1057", courseName: "중국어와중국문화", category: "공통교양", area: "중국", credits: 3 },
    { courseCode: "RGC1058", courseName: "일본의사회와문화", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1059", courseName: "동남아시아의이해", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1060", courseName: "유럽의사회와문화", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1061", courseName: "미국의사회와문화", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1062", courseName: "중동의이해", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1063", courseName: "라틴아메리카의이해", category: "공통교양", area: "지역연구", credits: 3 },
    { courseCode: "RGC1064", courseName: "한국의전통문화", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1065", courseName: "한국의현대문화", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1066", courseName: "한국어와한글", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1067", courseName: "K-POP과한류문화", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1068", courseName: "한국영화의이해", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1069", courseName: "한국의미술", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1070", courseName: "한국의음악", category: "공통교양", area: "한국문학", credits: 3 },
    { courseCode: "RGC1071", courseName: "다문화사회의이해", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC1072", courseName: "젠더와사회", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC1073", courseName: "인권과법", category: "공통교양", area: "시민", credits: 3 },
    { courseCode: "RGC1075", courseName: "진로탐색과설계", category: "공통교양", area: "대학", credits: 1 },
    { courseCode: "RGC1076", courseName: "취업전략과기술", category: "공통교양", area: "대학", credits: 1 },
    { courseCode: "RGC1077", courseName: "대학생활과자기관리", category: "공통교양", area: "대학", credits: 1 },
    { courseCode: "RGC1078", courseName: "학습전략과스킬", category: "공통교양", area: "대학", credits: 1 },
    { courseCode: "RGC1079", courseName: "글쓰기의기초", category: "공통교양", area: "글", credits: 3 },
    { courseCode: "RGC1082", courseName: "고급영어회화", category: "공통교양", area: "영어", credits: 2 },
    { courseCode: "RGC1083", courseName: "비즈니스영어", category: "공통교양", area: "영어", credits: 2 },
    { courseCode: "RGC1084", courseName: "영어프레젠테이션", category: "공통교양", area: "영어", credits: 2 },
  ];

  // 필터링 로직 - 항상 적용
  const courses = allCourses.filter(course => {
    const matchesCredit = selectedCredits.length === 0 || selectedCredits.includes(course.credits);
    const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(course.area);
    return matchesCredit && matchesArea;
  });

  const isFiltered = selectedCredits.length > 0 || selectedAreas.length > 0;

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12">
          
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-baseline gap-1 mb-2">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] sm:text-[22px] text-gray-900">
                현재{" "}
              </p>
              <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[22px] sm:text-[28px] text-[#e4811c]">
                71
              </p>
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] sm:text-[22px] text-gray-900">
                개 학과/전공 데이터를 제공하고 있습니다
              </p>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] sm:text-[14px] text-gray-500">
              필터링을 통해 다른 학우들이 많이 듣는 교양을 찾아보세요!
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-4 sm:p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Credits Filter */}
              <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-3">
                  학점
                </p>
                <div className="flex flex-wrap gap-2">
                  {creditOptions.map((credit) => (
                    <FilterButton
                      key={credit}
                      label={`${credit} 학점`}
                      isActive={selectedCredits.includes(credit)}
                      onClick={() => toggleCredit(credit)}
                    />
                  ))}
                </div>
              </div>

              {/* Area Filter */}
              <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-3">
                  공통교양 영역
                </p>
                <div className="flex flex-wrap gap-2">
                  {areaOptions.map((area) => (
                    <FilterButton
                      key={area}
                      label={area}
                      isActive={selectedAreas.includes(area)}
                      onClick={() => toggleArea(area)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-between items-center mt-6">
              <div>
                {isFiltered && (
                  <div className="flex items-center gap-3">
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-600">
                      <span className="font-bold text-[#e4811c]">{courses.length}</span>개의 과목이 검색되었습니다
                    </p>
                    <button
                      className="text-[13px] text-gray-500 underline hover:text-gray-700"
                      onClick={handleReset}
                    >
                      필터 초기화
                    </button>
                  </div>
                )}
              </div>
              <div 
                className="bg-[#f38e1d] rounded-[8px] px-8 py-2 cursor-pointer hover:bg-[#d1710f] transition-colors"
                onClick={handleReset}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-center text-white">
                  검색하기
                </p>
              </div>
            </div>
          </div>

          {/* Rankings Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] sm:text-[18px] text-gray-900">
                📘 교양 순위 {isFiltered && `(${courses.length})`}
              </p>
              {isFiltered && selectedCredits.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCredits.map(credit => (
                    <span key={credit} className="bg-[#e4811c] text-white px-3 py-1 rounded-full text-[11px]">
                      {credit}학점
                    </span>
                  ))}
                </div>
              )}
              {isFiltered && selectedAreas.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedAreas.map(area => (
                    <span key={area} className="bg-[#e4811c] text-white px-3 py-1 rounded-full text-[11px]">
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table Header */}
                <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-t-[10px] px-4 py-3 flex">
                  <div className="w-[15%]">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                      학수번호
                    </p>
                  </div>
                  <div className="w-[30%]">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                      과목명
                    </p>
                  </div>
                  <div className="w-[25%]">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                      이수구분
                    </p>
                  </div>
                  <div className="w-[20%]">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                      영역
                    </p>
                  </div>
                  <div className="w-[10%]">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                      학점
                    </p>
                  </div>
                </div>

                {/* Table Body */}
                <div className="border-x border-b border-[#e5e7eb] rounded-b-[10px]">
                  {courses.length > 0 ? (
                    courses.map((course, index) => (
                      <div 
                        key={index}
                        className={`px-4 py-3 flex border-b border-[#eef2f7] last:border-b-0 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-[#fbfbfd]'
                        }`}
                      >
                        <div className="w-[15%]">
                          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                            {course.courseCode}
                          </p>
                        </div>
                        <div className="w-[30%]">
                          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                            {course.courseName}
                          </p>
                        </div>
                        <div className="w-[25%]">
                          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                            {course.category}
                          </p>
                        </div>
                        <div className="w-[20%]">
                          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                            {course.area}
                          </p>
                        </div>
                        <div className="w-[10%]">
                          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                            {course.credits}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-12 text-center bg-white">
                      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500 mb-2">
                        선택한 조건에 맞는 과목이 없습니다
                      </p>
                      <button
                        className="text-[13px] text-[#e4811c] underline hover:text-[#d1710f]"
                        onClick={handleReset}
                      >
                        필터 초기화하기
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HoneyCoursesPage({ 
  onBackToHome, 
  onLoginClick,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: NavbarProps) {
  return (
    <div className="bg-white relative min-h-screen w-full">
      <Navbar 
        onBackToHome={onBackToHome} 
        onLoginClick={onLoginClick}
        onHoneyCoursesClick={onHoneyCoursesClick}
        onAcademicInfoClick={onAcademicInfoClick}
        onRecommendationsClick={onRecommendationsClick}
        onMyPageClick={onMyPageClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <HoneyCoursesContent />
    </div>
  );
}