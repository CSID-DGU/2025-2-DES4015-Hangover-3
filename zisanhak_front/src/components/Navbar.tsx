import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { toast } from "sonner@2.0.3";
import { Menu } from "lucide-react";
import imgImage16 from "figma:asset/87b3bff839854ede64f6d1d8d13886052e668860.png";
import imgImage17 from "figma:asset/d8216d3bd99a674ff31ca90f214061487565771c.png";

function Logo({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center gap-0.5`} data-name="로고">
      <div className="h-full aspect-[2333/1122]" data-name="image 17">
        <img alt="" className="h-full w-full object-contain pointer-events-none" src={imgImage17} />
      </div>
      <div className="h-full aspect-[1205/1122]" data-name="image 16">
        <img alt="" className="h-full w-full object-contain pointer-events-none" src={imgImage16} />
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

interface NavbarProps {
  onBackToHome?: () => void;
  onLoginClick?: () => void;
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

export default function Navbar({ 
  onBackToHome, 
  onLoginClick, 
  onHoneyCoursesClick, 
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  onAdminPageClick,
  onGraduationSimulationClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAIRecommendationsClick = () => {
    if (!isLoggedIn) {
      toast.error("로그인 후 사용가능합니다", {
        description: "AI 추천과목 확인 기능은 로그인이 필요합니다.",
        duration: 3000,
      });
    } else if (onRecommendationsClick) {
      onRecommendationsClick();
      setIsMenuOpen(false);
    }
  };

  const handleMenuItemClick = (callback?: () => void) => {
    if (callback) {
      callback();
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#e4811c] w-full" data-name="Navbar / 1 /">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 h-[62px] py-[6px]">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer" onClick={onBackToHome}>
            <Logo className="h-[33px] w-[120px]" />
          </div>

          {/* Title */}
          <div className="hidden sm:block flex-1 min-w-0">
            <p className="font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] text-white text-[14px] sm:text-[16px] lg:text-[20px] tracking-[-0.2px] truncate" style={{ fontVariationSettings: "'wght' 700" }}>
              동국대학교 졸업요건 확인사이트
            </p>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <p 
              className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-white text-[16px] cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity" 
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              onClick={onAcademicInfoClick}
            >
              학사 정보
            </p>
            <p 
              className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-white text-[16px] cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity" 
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              onClick={onHoneyCoursesClick}
            >
              꿀교양 찾기
            </p>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-3">
                <p className="font-['Noto_Sans:Regular',sans-serif] text-white text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  {currentUser?.name} ({currentUser?.studentId})
                </p>
                <div className="shrink-0">
                  <div 
                    className="h-[30px] rounded-[100px] border-[1.5px] border-[rgba(255,255,255,0.33)] px-5 py-2 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={onLogout}
                  >
                    <p className="font-['Noto_Sans:Medium',sans-serif] text-white text-[14px] sm:text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      로그아웃
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="shrink-0">
                <div 
                  className="h-[30px] rounded-[100px] border-[1.5px] border-[rgba(255,255,255,0.33)] px-5 py-2 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={onLoginClick}
                >
                  <p className="font-['Noto_Sans:Medium',sans-serif] text-white text-[14px] sm:text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    로그인
                  </p>
                </div>
              </div>
            )}

            {/* Hamburger Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="shrink-0 p-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="메뉴"
                >
                  <Menu className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] text-white" strokeWidth={2} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white text-gray-900 shadow-[0px_25px_80px_rgba(0,0,0,0.35)]">
                <SheetHeader>
                  <SheetTitle className="font-['Noto_Sans_KR:Bold',sans-serif] text-gray-900">
                    메뉴
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    사이트 메뉴 - 학사 정보, 꿀교양 찾기, AI 추천과목, 마이페이지
                  </SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col gap-1 mt-6">
                  {/* 학사 정보 */}
                  <div
                    className="p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => handleMenuItemClick(onAcademicInfoClick)}
                  >
                    <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-gray-900 text-[15px]">
                      학사 정보
                    </p>
                    <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-gray-500 text-[12px] mt-1">
                      교육과정 안내서 및 학사제도 가이드
                    </p>
                  </div>

                  {/* 꿀교양 찾기 */}
                  <div
                    className="p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => handleMenuItemClick(onHoneyCoursesClick)}
                  >
                    <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-gray-900 text-[15px]">
                      꿀교양 찾기
                    </p>
                    <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-gray-500 text-[12px] mt-1">
                      다른 학우들이 많이 듣는 교양 확인
                    </p>
                  </div>

                  {/* AI 추천과목 확인 */}
                  <div
                    className="p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={handleAIRecommendationsClick}
                  >
                    <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-gray-900 text-[15px]">
                      AI 추천과목 확인
                    </p>
                    <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-gray-500 text-[12px] mt-1">
                      {isLoggedIn ? "나에게 맞는 과목 추천받기" : "로그인 후 사용 가능"}
                    </p>
                  </div>

                  {/* 졸업 시뮬레이션 - 로그인 시에만 표시 */}
                  {isLoggedIn && (
                    <div
                      className="p-4 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50"
                      onClick={() => handleMenuItemClick(onGraduationSimulationClick)}
                    >
                      <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-purple-900 text-[15px]">
                        🎓 졸업 시뮬레이션
                      </p>
                      <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-purple-600 text-[12px] mt-1">
                        과목 추가로 졸업요건 충족 시뮬레이션
                      </p>
                    </div>
                  )}

                  {/* 마이페이지 - 로그인 시에만 표시 */}
                  {isLoggedIn && (
                    <div
                      className="p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => handleMenuItemClick(onMyPageClick)}
                    >
                      <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-gray-900 text-[15px]">
                        마이페이지
                      </p>
                      <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-gray-500 text-[12px] mt-1">
                        내 정보 및 설정 관리
                      </p>
                    </div>
                  )}

                  {/* 관리자 페이지 - 관리자만 표시 */}
                  {isLoggedIn && currentUser?.email === 'admin@dgu.ac.kr' && (
                    <div
                      className="p-4 rounded-lg hover:bg-red-50 cursor-pointer transition-colors border border-red-200"
                      onClick={() => handleMenuItemClick(onAdminPageClick)}
                    >
                      <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-red-600 text-[15px]">
                        🔐 관리자 페이지
                      </p>
                      <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-red-500 text-[12px] mt-1">
                        졸업요건 데이터 관리
                      </p>
                    </div>
                  )}
                </div>

                {/* 하단 영역 */}
                <div className="absolute bottom-6 left-4 right-4">
                  {isLoggedIn ? (
                    <div className="space-y-3">
                      {/* 사용자 정보 */}
                      <div className="bg-[#f5e6d3] rounded-[12px] p-4">
                        <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[#1a1a1a] text-[13px] mb-1">
                          {currentUser?.name}
                        </p>
                        <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[#e4811c] text-[13px]">
                          학번: {currentUser?.studentId}
                        </p>
                        <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[#e4811c] text-[13px] mt-0.5">
                          {currentUser?.email}
                        </p>
                      </div>
                      {/* 로그아웃 버튼 */}
                      <button
                        onClick={() => {
                          if (onLogout) {
                            onLogout();
                          }
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-[#1a1d29] hover:bg-[#252936] text-white rounded-[12px] py-3.5 px-4 transition-colors flex items-center justify-between"
                      >
                        <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[15px]">
                          로그아웃
                        </p>
                        <span className="text-[20px]">⎋</span>
                      </button>
                    </div>
                  ) : (
                    <div className="bg-[#f5e6d3] rounded-[12px] p-4">
                      <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[#e4811c] text-[12px]">
                        💡 로그인하면 더 많은 기능을 이용할 수 있습니다
                      </p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}