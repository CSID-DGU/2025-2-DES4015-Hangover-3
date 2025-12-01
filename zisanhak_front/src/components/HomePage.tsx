import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import svgPaths from "../imports/svg-uls95e5voy";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import imgImage16 from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";

// UUID 생성 함수
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Asia/Seoul 시간대 기준으로 오늘 날짜 가져오기 (YYYY-MM-DD)
function getTodayInSeoul(): string {
  const now = new Date();
  // UTC 시간에 한국 시간 오프셋(+9시간) 추가
  const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const year = koreaTime.getUTCFullYear();
  const month = String(koreaTime.getUTCMonth() + 1).padStart(2, '0');
  const day = String(koreaTime.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 디바이스 UUID 가져오기 (없으면 생성)
function getDeviceUUID(): string {
  let deviceUUID = localStorage.getItem('device_uuid_v4');
  if (!deviceUUID) {
    deviceUUID = generateUUID();
    localStorage.setItem('device_uuid_v4', deviceUUID);
  }
  return deviceUUID;
}

function HeroSection({ onCheckClick }: { onCheckClick?: () => void }) {
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalChecks, setTotalChecks] = useState(0);

  useEffect(() => {
    // Asia/Seoul 기준 오늘 날짜
    const today = getTodayInSeoul();
    const visitorKey = `visitorCount_v4_${today}`;
    
    // 디바이스 UUID 가져오기
    const deviceUUID = getDeviceUUID();
    const visitRecordKey = `visit_${today}_${deviceUUID}`;
    
    // 오늘 이 디바이스가 이미 방문했는지 확인
    const alreadyVisited = localStorage.getItem(visitRecordKey);
    
    if (!alreadyVisited) {
      // 처음 방문하는 경우에만 카운트 증가
      const currentVisitors = parseInt(localStorage.getItem(visitorKey) || '0');
      const newVisitors = currentVisitors + 1;
      localStorage.setItem(visitorKey, newVisitors.toString());
      
      // 방문 기록 저장
      localStorage.setItem(visitRecordKey, 'true');
      
      setTodayVisitors(newVisitors);
    } else {
      // 이미 방문한 경우 현재 카운트만 불러오기
      const currentVisitors = parseInt(localStorage.getItem(visitorKey) || '0');
      setTodayVisitors(currentVisitors);
    }

    // 총 회원 수 불러오기 (초기값 1)
    const currentMembers = parseInt(localStorage.getItem('totalMembers_v5') || '1');
    setTotalMembers(currentMembers);

    // 총 검사 수 불러오기 (초기값 0)
    const currentChecks = parseInt(localStorage.getItem('totalChecks_v5') || '0');
    setTotalChecks(currentChecks);
  }, []);

  const handleCheckClick = () => {
    // 검사하기 버튼 클릭 - 총 검사 수는 ResultsPage에서 증가
    if (onCheckClick) {
      onCheckClick();
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ko-KR');
  };
  return (
    <div className="relative w-full" data-name="login">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Orange Gradient Overlay - Right Side */}
      <div className="absolute bottom-0 left-[58%] right-0 top-0 pointer-events-none" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 953">
          <path d={svgPaths.p16ec8d80} fill="url(#paint0_linear_1_289)" id="Vector" opacity="0.8" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_289" x1="0" x2="605" y1="0" y2="0">
              <stop stopColor="#F38E1D" stopOpacity="0.92" />
              <stop offset="1" stopColor="#F38E1D" stopOpacity="0.78" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 min-h-[calc(100vh-62px-89px)]">
        <div className="flex flex-col lg:flex-row lg:justify-end">
          {/* Right Side Content */}
          <div className="w-full lg:w-[32%] flex flex-col items-center lg:items-start gap-6 lg:gap-8 lg:mt-[3%]">
            {/* Text Content */}
            <div className="flex flex-col gap-0.5 lg:gap-1 text-center lg:text-left w-full">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[22px] sm:text-[26px] lg:text-[30px] leading-normal">
                동국 학우분을 위한
              </p>
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[22px] sm:text-[26px] lg:text-[30px] leading-normal">
                간편한 졸업요건
              </p>
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[22px] sm:text-[26px] lg:text-[30px] leading-normal">
                검사 사이트
              </p>
              <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[#fbe7cd] text-[16px] sm:text-[18px] lg:text-[20px] leading-normal mt-2">
                Graduate CHECKER @ Dongguk
              </p>
            </div>

            {/* Check Button */}
            <div 
              className="relative w-[180px] sm:w-[190px] lg:w-[207px] h-[56px] lg:h-[64px] cursor-pointer"
              onClick={handleCheckClick}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 64">
                <path d={svgPaths.p27985a00} fill="var(--fill-0, #E4811C)" id="Vector" />
              </svg>
              <p className="absolute inset-0 font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[23px] sm:text-[25px] lg:text-[27px] text-center text-white flex items-center justify-center">
                검사하기
              </p>
            </div>

            {/* Stats Cards */}
            <div className="w-full max-w-[340px] lg:max-w-[310px] flex flex-col gap-3 lg:gap-4">
              {/* Today's visitors */}
              <div className="relative w-full h-[60px] lg:h-[63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 63">
                  <path d={svgPaths.p2caa2300} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[14px] lg:text-[15px]">
                    오늘 방문자 수: <span className="text-[#fbe7cd]">{formatNumber(todayVisitors)}</span>
                  </p>
                </div>
              </div>

              {/* Total members */}
              <div className="relative w-full h-[60px] lg:h-[63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 63">
                  <path d={svgPaths.p2caa2300} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[14px] lg:text-[15px]">
                    총 회원 수: <span className="text-[#fbe7cd]">{formatNumber(totalMembers)}</span>
                  </p>
                </div>
              </div>

              {/* Total checks */}
              <div className="relative w-full h-[60px] lg:h-[63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 63">
                  <path d={svgPaths.p17881f80} fill="var(--fill-0, black)" fillOpacity="0.18" id="Vector" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-white text-[14px] lg:text-[15px]">
                    총 검사 수: <span className="text-[#fbe7cd]">{formatNumber(totalChecks)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Ginkgo Leaf - Top Right */}
        <div className="hidden lg:block absolute right-[5.28%] top-[40px] w-[10%] max-w-[144px] aspect-[1205/1122]" data-name="image 16">
          <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgImage16} />
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full h-[89px] bg-[#111827] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-[1440px] w-full">
          <p className="font-['Inter:Regular',sans-serif] text-gray-200 text-[10px] sm:text-[11px] lg:text-[12px] text-center lg:text-left whitespace-pre-wrap">
            {`- Contact              - Email: lee010320123@gmail.com                      - GitHub: https://github.com/leehyunro123`}
          </p>
        </div>
      </div>
    </div>
  );
}

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
}

interface HomePageProps {
  onLoginClick?: () => void;
  onCheckClick?: () => void;
  onHoneyCoursesClick?: () => void;
  onAcademicInfoClick?: () => void;
  onRecommendationsClick?: () => void;
  onMyPageClick?: () => void;
  onAdminPageClick?: () => void;
  onGraduationSimulationClick?: () => void;
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

export default function HomePage({ 
  onLoginClick, 
  onCheckClick, 
  onHoneyCoursesClick, 
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  onAdminPageClick,
  onGraduationSimulationClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: HomePageProps) {
  return (
    <div className="bg-white relative">
      <div className="flex flex-col">
        {/* Navbar */}
        <Navbar 
        onBackToHome={undefined}
        onLoginClick={onLoginClick} 
        onHoneyCoursesClick={onHoneyCoursesClick} 
        onAcademicInfoClick={onAcademicInfoClick}
        onRecommendationsClick={onRecommendationsClick}
        onMyPageClick={onMyPageClick}
        onAdminPageClick={onAdminPageClick}
        onGraduationSimulationClick={onGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
        />
        <HeroSection onCheckClick={onCheckClick} />
      </div>
    </div>
  );
}