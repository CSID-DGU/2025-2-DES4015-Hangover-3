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
  onBack?: () => void;
  onExport?: () => void;
}

interface RequirementSectionProps {
  title: string;
  progress: string;
  percentage: number;
  achievementText: string;
  completedCourses: string[];
  requiredInfo: string[];
  backgroundColor?: string;
}

function RequirementSection({ 
  title, 
  progress, 
  percentage, 
  achievementText, 
  completedCourses, 
  requiredInfo,
  backgroundColor = "bg-[#f9fafb]"
}: RequirementSectionProps) {
  return (
    <div className="border border-[#e5e7eb] rounded-[10px] overflow-hidden mb-6">
      {/* Header */}
      <div className={`${backgroundColor} border-b border-[#e5e7eb] p-4 sm:p-6`}>
        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] sm:text-[18px] text-gray-900 mb-1">
          {title}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500 mb-1">
          {progress}
        </p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-3">
          {achievementText}
        </p>
        
        {/* Progress Bar */}
        <div className="bg-[#e5e7eb] h-[6px] rounded-full overflow-hidden">
          <div 
            className="bg-[#e4811c] h-full rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6">
        {/* Left: Completed Courses */}
        <div>
          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-3">
            인정 과목
          </p>
          <div className="space-y-2">
            {completedCourses.map((course, index) => (
              <p key={index} className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-900">
                · {course}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Required Info */}
        <div>
          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-3">
            필요 과목
          </p>
          <div className="space-y-2">
            {requiredInfo.map((info, index) => (
              <p 
                key={index} 
                className={`font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] ${
                  info.includes('잔여') ? 'text-amber-500' : 'text-gray-900'
                }`}
              >
                {info}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsContent({ onBack, onExport }: { onBack?: () => void; onExport?: () => void }) {
  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12">
          
          {/* Header */}
          <div className="mb-8">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] sm:text-[26px] text-gray-900 mb-2">
              세부 내역
            </p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              각 항목에 포함된 과목과 잔여 조건을 확인하세요.
            </p>
          </div>

          {/* Requirement Sections */}
          
          {/* 1. 이수학점 */}
          <RequirementSection
            title="이수학점"
            progress="총 94 / 130"
            percentage={72}
            achievementText="72% 달성"
            completedCourses={[
              "2024-2 · INC2029 객체지향언어와실습 · 3학점",
              "2024-2 · INC2028 컴퓨터구성 · 3학점",
              "2025-1 · INC4059 운영체제 · 3학점",
              "2021-2 · RGC1080 EAS1 · 2학점"
            ]}
            requiredInfo={[
              "총 이수학점 130 충족(잔여 36)",
              "평점 2.0 이상 유지"
            ]}
          />

          {/* 2. 전공 학점 */}
          <RequirementSection
            title="전공 학점"
            progress="전공 66 / 75"
            percentage={88}
            achievementText="88% 달성"
            completedCourses={[
              "2024-2 · INC2029 객체지향언어와실습 · 3학점",
              "2024-1 · INC2027 자료구조와실습 · 3학점",
              "2025-1 · INC4059 운영체제 · 3학점"
            ]}
            requiredInfo={[
              "전공 이수학점 75 충족(잔여 9)"
            ]}
          />

          {/* 3. 영어 과목 */}
          <RequirementSection
            title="영어 과목"
            progress="2 / 2"
            percentage={100}
            achievementText="100% 달성"
            completedCourses={[
              "2021-2 · RGC1080 EAS1 · 2학점",
              "2021-2 · RGC1081 EAS2 · 2학점"
            ]}
            requiredInfo={[
              "요건 충족 (추가 필요 없음)"
            ]}
          />

          {/* 4. 전공필수 */}
          <RequirementSection
            title="전공필수"
            progress="5 / 6"
            percentage={83}
            achievementText="83% 달성"
            completedCourses={[
              "INC2027 자료구조와실습",
              "INC2028 컴퓨터구성",
              "INC2029 객체지향언어와실습",
              "INC4059 운영체제",
              "INC4116 임베디드SW와스마트모빌리티"
            ]}
            requiredInfo={[
              "잔여 1 과목",
              "권장: INC4020 컴퓨터네트워크"
            ]}
          />

          {/* Bottom Action Buttons */}
          <div className="border-t border-[#e5e7eb] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div 
              className="bg-white border border-[#e5e7eb] rounded-[8px] px-6 py-3 cursor-pointer hover:bg-gray-50 w-full sm:w-auto"
              onClick={onBack}
            >
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-gray-900">
                이전으로 돌아가기
              </p>
            </div>
            <div 
              className="bg-[#e4811c] rounded-[8px] px-8 py-3 cursor-pointer hover:bg-[#d1710f] w-full sm:w-auto"
              onClick={onExport}
            >
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-white">
                보고서 내보내기
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailsPage({ 
  onBackToHome, 
  onLoginClick,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  onGraduationSimulationClick,
  isLoggedIn,
  currentUser,
  onLogout,
  onBack, 
  onExport 
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
        onGraduationSimulationClick={onGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <DetailsContent onBack={onBack} onExport={onExport} />
    </div>
  );
}