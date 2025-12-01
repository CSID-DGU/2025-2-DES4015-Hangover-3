import { useEffect, useState } from "react";
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
  onLoadingComplete?: () => void;
}

function SkeletonRow() {
  return (
    <div className="grid grid-cols-[1fr_80px_1fr_1fr_60px] gap-2 animate-pulse">
      <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
      <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
      <div className="bg-[#e5e7eb] h-[18px] rounded-[9px] col-span-2" />
      <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
    </div>
  );
}

function ResultsLoadingContent({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger navigation to results page after loading completes
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + 1.5; // Slightly slower than first loading
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12 min-h-[700px] flex flex-col">
          
          {/* Header */}
          <div className="mb-8">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] sm:text-[22px] text-gray-900 mb-2">
              졸업요건 검사 중...
            </p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
              업로드한 성적표를 기반으로 졸업요건 충족 여부를 분석하고 있습니다
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-[#e5e7eb] h-[12px] rounded-full overflow-hidden mb-2">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #E4811C 0%, #F5D592 100%)'
                }}
              />
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-between mt-4">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                1/3 데이터 확인
              </p>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-center text-gray-500">
                2/3 졸업요건 분석
              </p>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-right text-gray-500">
                3/3 결과 생성
              </p>
            </div>
          </div>

          {/* Status Messages */}
          <div className="space-y-3 mb-8">
            <div className={`flex items-center gap-3 transition-all duration-500 ${progress > 10 ? 'opacity-100' : 'opacity-30'}`}>
              {progress > 10 ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              )}
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                {progress > 10 ? '✓ 학생 정보 확인 완료' : '학생 정보 확인 중...'}
              </p>
            </div>
            <div className={`flex items-center gap-3 transition-all duration-500 ${progress > 30 ? 'opacity-100' : 'opacity-30'}`}>
              {progress > 30 ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : progress > 10 ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#e4811c] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#e4811c] animate-pulse" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              )}
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                {progress > 30 ? '✓ 이수 학점 분석 완료' : progress > 10 ? '이수 학점 분석 중...' : '이수 학점 분석 대기'}
              </p>
            </div>
            <div className={`flex items-center gap-3 transition-all duration-500 ${progress > 50 ? 'opacity-100' : 'opacity-30'}`}>
              {progress > 50 ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : progress > 30 ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#e4811c] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#e4811c] animate-pulse" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              )}
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                {progress > 50 ? '✓ 전공 필수 과목 확인 완료' : progress > 30 ? '전공 필수 과목 확인 중...' : '전공 필수 과목 확인 대기'}
              </p>
            </div>
            <div className={`flex items-center gap-3 transition-all duration-500 ${progress > 70 ? 'opacity-100' : 'opacity-30'}`}>
              {progress > 70 ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : progress > 50 ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#e4811c] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#e4811c] animate-pulse" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              )}
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                {progress > 70 ? '✓ 교양 및 영어 과목 검증 완료' : progress > 50 ? '교양 및 영어 과목 검증 중...' : '교양 및 영어 과목 검증 대기'}
              </p>
            </div>
            <div className={`flex items-center gap-3 transition-all duration-500 ${progress > 90 ? 'opacity-100' : 'opacity-30'}`}>
              {progress > 90 ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : progress > 70 ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#e4811c] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#e4811c] animate-pulse" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              )}
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                {progress > 90 ? '✓ 졸업 진단 보고서 생성 완료' : progress > 70 ? '졸업 진단 보고서 생성 중...' : '졸업 진단 보고서 생성 대기'}
              </p>
            </div>
          </div>

          <div className="flex-1" />

          {/* Preview Section */}
          <div className="mt-8 sm:mt-12">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-4">
              분석 중인 항목
            </p>
            
            {/* Skeleton Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-[#f8fafc] border border-[#e5e7eb] rounded-[10px] p-4 animate-pulse">
                  <div className="bg-[#e5e7eb] h-[16px] rounded w-2/3 mb-3" />
                  <div className="bg-[#e5e7eb] h-[24px] rounded w-1/2 mb-2" />
                  <div className="bg-[#e5e7eb] h-[14px] rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsLoadingPage({ 
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
  onLoadingComplete 
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
      <ResultsLoadingContent onLoadingComplete={onLoadingComplete} />
    </div>
  );
}