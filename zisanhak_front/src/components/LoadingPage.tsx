import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import svgPaths from "../imports/svg-7ds0yu9dg8";
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

function LoadingSpinner() {
  return (
    <div className="relative w-[90px] h-[93px]">
      {/* Background Circle */}
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 103">
          <path d={svgPaths.p2139c580} stroke="#F5F6F8" strokeWidth="10" />
        </svg>
      </div>
      {/* Animated Arc */}
      <div className="absolute inset-0 animate-spin">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 100">
          <path d={svgPaths.p9238118} stroke="#E4811C" strokeLinecap="round" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full mb-8 sm:mb-12">
      <div className="relative w-full h-[7px] bg-[#e5e7eb] rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #E4811C 0%, #F5D592 100%)'
          }}
        />
      </div>
      
      {/* Progress Steps */}
      <div className="flex justify-between mt-4">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
          1/3 업로드 확인
        </p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-center text-gray-500">
          2/3 텍스트 추출
        </p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-right text-gray-500">
          3/3 교과목 매칭
        </p>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="bg-[#f8fafc] border border-[#eef2f7] rounded-[8px] px-4 sm:px-6 py-3 sm:py-4">
      <div className="grid grid-cols-5 gap-2 sm:gap-4">
        <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
        <div className="bg-[#e5e7eb] h-[18px] rounded-[9px] col-span-2" />
        <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
        <div className="bg-[#e5e7eb] h-[18px] rounded-[9px]" />
      </div>
    </div>
  );
}

function LoadingContent({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleCourses, setVisibleCourses] = useState(0);
  const [currentStep, setCurrentStep] = useState("업로드 확인");

  const mockCourses = [
    "RGC0005 기술보고서작성및발표 · 3학점 · A0",
    "PRI4001 미적분학및연습1 · 3학점 · A+",
    "PRI4035 프로그래밍기초와실습 · 3학점 · B0",
    "RGC1080 <영어>EAS1 · 2학점 · A+",
    "INC2029 객체지향언어와실습 · 3학점 · B+",
    "INC4059 운영체제 · 3학점 · A+"
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger navigation to verify page after loading completes
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        
        // Update step based on progress
        if (prev < 33) {
          setCurrentStep("업로드 확인");
        } else if (prev < 66) {
          setCurrentStep("텍스트 추출");
        } else {
          setCurrentStep("교과목 매칭");
        }
        
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Add courses progressively
  useEffect(() => {
    if (progress > 20 && visibleCourses < mockCourses.length) {
      const courseInterval = setInterval(() => {
        setVisibleCourses(prev => {
          if (prev >= mockCourses.length) {
            clearInterval(courseInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 800);
      
      return () => clearInterval(courseInterval);
    }
  }, [progress, visibleCourses, mockCourses.length]);

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-6 sm:p-8 md:p-12 min-h-[831px]">
          
          {/* Header */}
          <div className="mb-8">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] sm:text-[24px] text-gray-900 mb-2">
              PDF 분석 중...
            </p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              업로드한 파일에서 과목/학점/성적 정보를 추출하고 있어요
            </p>
          </div>

          {/* Loading Spinner */}
          <div className="flex justify-center mb-8">
            <LoadingSpinner />
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={progress} />

          {/* Preview Section */}
          <div className="mt-8 sm:mt-12">
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900">
                미리보기
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#e4811c]">
                {currentStep} 중...
              </p>
            </div>
            
            {/* Course List */}
            <div className="flex flex-col gap-2">
              {mockCourses.slice(0, visibleCourses).map((course, index) => (
                <div 
                  key={index}
                  className="bg-[#f8fafc] border border-[#eef2f7] rounded-[8px] px-4 sm:px-6 py-3 sm:py-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                    {course}
                  </p>
                </div>
              ))}
              
              {/* Remaining Skeleton Rows */}
              {Array.from({ length: Math.max(0, 6 - visibleCourses) }).map((_, i) => (
                <SkeletonRow key={`skeleton-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingPage({ 
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
      <LoadingContent onLoadingComplete={onLoadingComplete} />
    </div>
  );
}