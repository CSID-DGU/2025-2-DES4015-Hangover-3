import { useState, useEffect } from "react";
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
  onGraduationSimulationClick?: () => void;
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

interface InterestTag {
  id: string;
  label: string;
}

interface RecommendedCourse {
  courseCode: string;
  courseName: string;
  credits: string;
  category: string;
  level: string;
  tags: string[];
  matchScore: number;
  reasons: string[];
}

// 관심분야 태그 데이터
const interestTags: InterestTag[] = [
  { id: "ai", label: "인공지능/머신러닝" },
  { id: "web", label: "웹 개발" },
  { id: "mobile", label: "모바일 앱 개발" },
  { id: "data", label: "데이터 분석" },
  { id: "security", label: "보안/해킹" },
  { id: "game", label: "게임 개발" },
  { id: "design", label: "UX/UI 디자인" },
  { id: "blockchain", label: "블록체인" },
  { id: "iot", label: "IoT/임베디드" },
  { id: "cloud", label: "클라우드/DevOps" },
  { id: "startup", label: "창업/스타트업" },
  { id: "finance", label: "핀테크/금융" },
  { id: "education", label: "교육/에듀테크" },
  { id: "marketing", label: "마케팅/광고" },
  { id: "research", label: "연구개발" },
  { id: "consulting", label: "IT 컨설팅" },
];

// Step 1: 환영 화면
function WelcomeStep({ onNext, currentUser }: { onNext: () => void; currentUser?: User | null }) {
  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Content */}
      <div className="relative max-w-[700px] mx-auto px-4 sm:px-6 py-12 sm:py-20 min-h-[calc(100vh-62px)] flex items-center">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-8 sm:p-12 w-full">
          
          {/* Title */}
          <h1 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[24px] sm:text-[32px] text-gray-900 mb-6 text-center">
            AI 과목 추천
          </h1>

          {/* User Info */}
          {currentUser && (
            <div className="bg-[#fef8f3] border border-[#f5e6d3] rounded-[8px] p-5 mb-6 text-center">
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700 mb-1">
                {currentUser.name}님의 전공 정보를 바탕으로
              </p>
              <p className="font-['Noto_Sans_KR:Bold',sans-serif] text-[15px] text-[#e4811c]">
                관심 분야에 맞는 과목을 추천합니다
              </p>
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-600 leading-relaxed text-center mb-6">
              관심 있는 분야를 선택하면 수강 이력, 졸업요건, 개설정보를 분석하여<br className="hidden sm:block" />
              가장 적합한 과목을 추천해드립니다
            </p>

            {/* Features */}
            <div className="space-y-3 max-w-[500px] mx-auto">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-[4px] h-[4px] bg-[#e4811c] rounded-full mt-2"></div>
                <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-700">
                  전공과 졸업요건을 고려한 맞춤 추천
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-[4px] h-[4px] bg-[#e4811c] rounded-full mt-2"></div>
                <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-700">
                  관심 분야와 연계된 과목 분석
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-[4px] h-[4px] bg-[#e4811c] rounded-full mt-2"></div>
                <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-700">
                  실시간 개설정보 및 수강 가능성 반영
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onNext}
            className="w-full bg-[#f38e1d] hover:bg-[#d1710f] text-white rounded-[8px] py-3.5 transition-colors"
          >
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px]">
              시작하기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Step 2: 관심분야 선택
function InterestSelectionStep({ 
  onNext, 
  selectedInterests, 
  setSelectedInterests 
}: { 
  onNext: () => void; 
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
}) {
  const handleToggle = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Content */}
      <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-6 sm:p-8 md:p-10">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[22px] sm:text-[28px] text-gray-900 mb-3">
              관심 분야 선택
            </h2>
            <div className="flex items-center justify-between">
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-600">
                여러 개를 선택할 수 있습니다 (최소 1개)
              </p>
              {selectedInterests.length > 0 && (
                <div className="bg-[#e4811c] text-white rounded-[6px] px-3 py-1">
                  <p className="font-['Noto_Sans_KR:Bold',sans-serif] text-[12px]">
                    {selectedInterests.length}개 선택
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interest Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {interestTags.map((tag) => {
              const isSelected = selectedInterests.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => handleToggle(tag.id)}
                  className={`
                    rounded-[8px] px-4 py-3 border transition-all text-left
                    ${isSelected 
                      ? 'border-[#e4811c] bg-[#fef8f3] shadow-sm' 
                      : 'border-[#e5e7eb] bg-white hover:border-gray-300'
                    }
                  `}
                >
                  <p 
                    className={`font-['Noto_Sans_KR:Medium',sans-serif] text-[13px] ${
                      isSelected ? 'text-[#e4811c]' : 'text-gray-700'
                    }`}
                  >
                    {tag.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <button
            onClick={onNext}
            disabled={selectedInterests.length === 0}
            className={`
              w-full rounded-[8px] py-3.5 transition-colors
              ${selectedInterests.length === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#f38e1d] hover:bg-[#d1710f] text-white'
              }
            `}
          >
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px]">
              분석 시작하기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Step 3: AI 분석 로딩
function AnalysisLoadingStep({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("관심 분야 분석 중");

  useEffect(() => {
    const messages = [
      "관심 분야 분석 중",
      "수강 이력 검토 중",
      "졸업요건 확인 중",
      "최적의 과목 탐색 중",
      "추천 결과 생성 중"
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex++;
      if (messageIndex < messages.length) {
        setCurrentText(messages[messageIndex]);
      }
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Content */}
      <div className="relative max-w-[500px] mx-auto px-4 sm:px-6 min-h-[calc(100vh-62px)] flex items-center">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-8 sm:p-12 text-center w-full">
          
          {/* Title */}
          <h2 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[22px] sm:text-[26px] text-gray-900 mb-6">
            AI 분석 중
          </h2>

          {/* Progress Text */}
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[14px] text-[#e4811c] mb-6 h-[20px]">
            {currentText}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-[#f3f4f6] rounded-full h-2 mb-3 overflow-hidden">
            <div 
              className="bg-[#f38e1d] h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage */}
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-500">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

// Step 4: 추천 결과
function RecommendationResultsStep({ 
  selectedInterests, 
  onHoneyCoursesClick,
  onRestart
}: { 
  selectedInterests: string[];
  onHoneyCoursesClick?: () => void;
  onRestart: () => void;
}) {
  // AI 추천 과목 생성
  const getRecommendedCourses = (): RecommendedCourse[] => {
    const hasAI = selectedInterests.includes("ai");
    const hasWeb = selectedInterests.includes("web");
    const hasData = selectedInterests.includes("data");
    const hasMobile = selectedInterests.includes("mobile");
    const hasSecurity = selectedInterests.includes("security");
    const hasGame = selectedInterests.includes("game");

    const courses: RecommendedCourse[] = [];

    if (hasAI) {
      courses.push({
        courseCode: "INC4050",
        courseName: "인공지능",
        credits: "3학점",
        category: "전공선택",
        level: "전문",
        tags: ["정기개설", "난이도 중"],
        matchScore: 95,
        reasons: [
          "선택하신 '인공지능/머신러닝' 분야와 직접 연관된 과목입니다",
          "전공 선택 학점 충족에 도움이 됩니다",
          "최근 3년간 매 학기 개설되어 수강 기회가 높습니다"
        ]
      });
      courses.push({
        courseCode: "INC4052",
        courseName: "딥러닝",
        credits: "3학점",
        category: "전공선택",
        level: "전문",
        tags: ["격년개설", "난이도 상"],
        matchScore: 92,
        reasons: [
          "인공지능 심화 과목으로 커리어 발전에 유리합니다",
          "실습 위주 과목으로 실무 역량을 강화할 수 있습니다"
        ]
      });
    }

    if (hasWeb) {
      courses.push({
        courseCode: "INC3020",
        courseName: "웹프로그래밍",
        credits: "3학점",
        category: "전공선택",
        level: "심화",
        tags: ["정기개설", "프로젝트"],
        matchScore: 90,
        reasons: [
          "'웹 개발' 관심사와 완벽하게 일치합니다",
          "프론트엔드/백엔드 전반적 학습이 가능합니다",
          "포트폴리오 제작에 직접 활용할 수 있습니다"
        ]
      });
    }

    if (hasData) {
      courses.push({
        courseCode: "INC3040",
        courseName: "데이터베이스",
        credits: "3학점",
        category: "전공필수",
        level: "심화",
        tags: ["전공필수", "정기개설"],
        matchScore: 93,
        reasons: [
          "'데이터 분석' 분야의 필수 기초 과목입니다",
          "전공 필수로 졸업요건 충족이 필요합니다",
          "모든 IT 분야에서 활용도가 매우 높습니다"
        ]
      });
    }

    if (hasMobile) {
      courses.push({
        courseCode: "INC4030",
        courseName: "모바일프로그래밍",
        credits: "3학점",
        category: "전공선택",
        level: "전문",
        tags: ["정기개설", "프로젝트"],
        matchScore: 88,
        reasons: [
          "'모바일 앱 개발' 분야와 직접 연관됩니다",
          "Android/iOS 개발 기초를 학습할 수 있습니다"
        ]
      });
    }

    if (hasSecurity) {
      courses.push({
        courseCode: "INC4060",
        courseName: "정보보안",
        credits: "3학점",
        category: "전공선택",
        level: "전문",
        tags: ["격년개설", "난이도 중"],
        matchScore: 89,
        reasons: [
          "'보안/해킹' 관심사와 직접 연관됩니다",
          "정보보안 전문가로 성장할 수 있는 기초를 다집니다"
        ]
      });
    }

    if (hasGame) {
      courses.push({
        courseCode: "INC3050",
        courseName: "게임프로그래밍",
        credits: "3학점",
        category: "전공선택",
        level: "심화",
        tags: ["정기개설", "프로젝트"],
        matchScore: 87,
        reasons: [
          "'게임 개발' 분야와 직접 연관됩니다",
          "Unity/Unreal 엔진 기초를 학습할 수 있습니다"
        ]
      });
    }

    // 기본 추천 과목
    if (courses.length < 4) {
      courses.push({
        courseCode: "INC4042",
        courseName: "캡스톤디자인",
        credits: "3학점",
        category: "전공(설계)",
        level: "전문",
        tags: ["설계충족", "프로젝트"],
        matchScore: 85,
        reasons: [
          "졸업요건 중 설계 학점 충족이 필요합니다",
          "실전 프로젝트로 포트폴리오를 제작할 수 있습니다"
        ]
      });
    }

    if (courses.length < 5) {
      courses.push({
        courseCode: "INC3030",
        courseName: "소프트웨어공학",
        credits: "3학점",
        category: "전공필수",
        level: "심화",
        tags: ["전공필수", "정기개설"],
        matchScore: 84,
        reasons: [
          "전공 필수 과목으로 졸업요건 충족이 필요합니다",
          "실무에서 필수적인 소프트웨어 개발 방법론을 학습합니다"
        ]
      });
    }

    return courses.sort((a, b) => b.matchScore - a.matchScore);
  };

  const recommendedCourses = getRecommendedCourses();
  const selectedTags = interestTags.filter(tag => selectedInterests.includes(tag.id));

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-6 sm:p-8 md:p-10">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[22px] sm:text-[28px] text-gray-900">
                추천 과목
              </h2>
              <button
                onClick={onRestart}
                className="text-[#e4811c] hover:text-[#d1710f] transition-colors"
              >
                <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[13px]">
                  다시 선택하기
                </p>
              </button>
            </div>
            
            <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-600 mb-4">
              선택하신 관심 분야를 기반으로 최적의 과목을 추천했습니다
            </p>

            {/* Selected Interests */}
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <div 
                  key={tag.id}
                  className="bg-[#fef8f3] border border-[#f5e6d3] rounded-[6px] px-3 py-1.5"
                >
                  <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[12px] text-[#e4811c]">
                    {tag.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Courses */}
          <div className="space-y-4 mb-8">
            {recommendedCourses.map((course, index) => (
              <CourseCard key={index} course={course} rank={index + 1} />
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-[#e5e7eb] pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[14px] text-gray-900 mb-1">
                  더 많은 과목을 찾고 계신가요?
                </p>
                <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-500">
                  다른 학우들이 많이 듣는 교양 과목도 확인해보세요
                </p>
              </div>
              <button
                onClick={onHoneyCoursesClick}
                className="bg-[#f38e1d] hover:bg-[#d1710f] text-white rounded-[8px] py-2.5 px-6 transition-colors whitespace-nowrap"
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px]">
                  꿀교양 찾기
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Course Card Component
function CourseCard({ course, rank }: { course: RecommendedCourse; rank: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddCourse = () => {
    alert(`"${course.courseName}" 과목을 수강바구니에 담았습니다!`);
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden hover:border-[#e4811c] transition-colors">
      {/* Header Bar */}
      <div className="bg-[#fafafa] border-b border-[#e5e7eb] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#e4811c] text-white rounded-[6px] px-2.5 py-1">
            <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[11px]">
              #{rank}
            </p>
          </div>
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[12px] text-[#e4811c]">
            매칭도 {course.matchScore}%
          </p>
        </div>
        <div className="bg-white border border-[#e5e7eb] rounded-[6px] px-3 py-1">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[11px] text-gray-600">
            {course.level}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Course Title */}
        <h3 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] sm:text-[18px] text-gray-900 mb-2">
          {course.courseCode} · {course.courseName}
        </h3>

        {/* Course Info */}
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-500 mb-3">
          {course.credits} · {course.category}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, index) => (
            <div key={index} className="bg-[#f3f4f6] rounded-[6px] px-3 py-1">
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[11px] text-gray-700">
                {tag}
              </p>
            </div>
          ))}
        </div>

        {/* Reasons (Expandable) */}
        {isExpanded && (
          <div className="bg-[#fef8f3] border border-[#f5e6d3] rounded-[8px] p-4 mb-4">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-900 mb-2">
              추천 이유
            </p>
            <div className="space-y-1.5">
              {course.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="shrink-0 w-[3px] h-[3px] bg-[#e4811c] rounded-full mt-2"></div>
                  <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-700 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddCourse}
            className="flex-1 bg-[#f38e1d] hover:bg-[#d1710f] text-white rounded-[8px] py-2.5 transition-colors"
          >
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px]">
              담기
            </p>
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white border border-[#e5e7eb] hover:border-gray-300 text-gray-700 rounded-[8px] px-5 py-2.5 transition-colors"
          >
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px]">
              {isExpanded ? '접기' : '자세히'}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function RecommendationsPage({ 
  onBackToHome, 
  onLoginClick, 
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  onGraduationSimulationClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: NavbarProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleStep1Next = () => setStep(2);
  const handleStep2Next = () => setStep(3);
  const handleStep3Complete = () => setStep(4);
  const handleRestart = () => {
    setStep(2);
    setSelectedInterests([]);
  };

  return (
    <div className="bg-white relative min-h-screen w-full">
      <Navbar 
        onBackToHome={onBackToHome} 
        onLoginClick={onLoginClick}
        onHoneyCoursesClick={onHoneyCoursesClick}
        onAcademicInfoClick={onAcademicInfoClick}
        onRecommendationsClick={onRecommendationsClick}
        onMyPageClick={onMyPageClick}
        onGraduationSimulationClick={onGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      
      {step === 1 && (
        <WelcomeStep 
          onNext={handleStep1Next} 
          currentUser={currentUser}
        />
      )}
      
      {step === 2 && (
        <InterestSelectionStep 
          onNext={handleStep2Next}
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
        />
      )}
      
      {step === 3 && (
        <AnalysisLoadingStep onComplete={handleStep3Complete} />
      )}
      
      {step === 4 && (
        <RecommendationResultsStep 
          selectedInterests={selectedInterests}
          onHoneyCoursesClick={onHoneyCoursesClick}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
