import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "./Navbar";
import DevLogin from "./DevLogin";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import imgImage3 from "figma:asset/08463e23a0100526c2eeef596616e207ea29c188.png";
import { login as loginRequest } from "../services/authApi";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
}

interface LoginPageProps {
  onBackToHome?: () => void;
  onSignupClick?: () => void;
  onLoginSuccess?: (user: any) => void;
  onHoneyCoursesClick?: () => void;
  onAcademicInfoClick?: () => void;
  onRecommendationsClick?: () => void;
  onMyPageClick?: () => void;
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1">
          <path d="M6 9L12 15L17.5 9" id="Vector 1" stroke="var(--stroke-0, #707070)" />
        </g>
      </svg>
    </div>
  );
}

interface LoginFormSectionProps {
  onSignupClick?: () => void;
  onLoginSuccess?: (user: any) => void;
}

function LoginFormSection({ onSignupClick, onLoginSuccess }: LoginFormSectionProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginClick = async () => {
    if (!email || !password) {
      toast.error("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const user = await loginRequest({ email, password });
      toast.success("로그인 성공!");
      onLoginSuccess?.(user);
    } catch (error) {
      const message = error instanceof Error ? error.message : "로그인에 실패했습니다.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]" data-name="login">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 min-h-[calc(100vh-62px)] flex items-center justify-center">
        <div className="w-full max-w-[343px] flex flex-col items-center gap-6 sm:gap-8">
          {/* Dongguk Logo */}
          <div className="w-[200px] sm:w-[234px] h-[90px] sm:h-[105px] mb-4 sm:mb-8" data-name="image 3">
            <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgImage3} />
          </div>

          {/* Email Input */}
          <div className="w-full h-[45px] rounded-[20px] border border-[#707070]">
            <div className="flex items-center h-full px-[19px] py-[8px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="학교 이메일"
                className="font-['Pretendard:Regular',sans-serif] text-[#333] text-[17px] tracking-[-0.5px] bg-transparent border-none outline-none w-full placeholder:text-[#707070]"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="w-full h-[45px] rounded-[20px] border border-[#707070]">
            <div className="flex items-center h-full px-[19px] py-[8px] gap-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="font-['Pretendard:Regular',sans-serif] text-[#333] text-[17px] tracking-[-0.5px] bg-transparent border-none outline-none flex-1 placeholder:text-[#707070]"
              />
              <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                {showPassword ? <Eye size={20} className="text-[#707070]" /> : <EyeOff size={20} className="text-[#707070]" />}
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-[204px] h-[56px] bg-[#cb6015] rounded-[20px] flex items-center justify-center cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            onClick={handleLoginClick}
            disabled={isSubmitting}
          >
            <p className="font-['Pretendard:Regular',sans-serif] text-white text-[24px] tracking-[-0.5px]">
              {isSubmitting ? "로그인 중..." : "로그인"}
            </p>
          </button>

          {/* Links */}
          <div className="flex items-center gap-8 mt-4">
            <p 
              className="font-['Pretendard:Regular',sans-serif] text-[#707070] text-[12px] underline cursor-pointer"
              onClick={onSignupClick}
            >
              회원가입
            </p>
            <p className="font-['Pretendard:Regular',sans-serif] text-[#707070] text-[12px] underline cursor-pointer">
              비밀번호 찾기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage({ 
  onBackToHome, 
  onSignupClick, 
  onLoginSuccess,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: LoginPageProps) {
  return (
    <div className="bg-white relative min-h-screen w-full">
      <Navbar 
        onBackToHome={onBackToHome}
        onLoginClick={() => {}}
        onHoneyCoursesClick={onHoneyCoursesClick}
        onAcademicInfoClick={onAcademicInfoClick}
        onRecommendationsClick={onRecommendationsClick}
        onMyPageClick={onMyPageClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <LoginFormSection onSignupClick={onSignupClick} onLoginSuccess={onLoginSuccess} />
      
      {/* 🚨 개발자 전용 - 프로덕션 배포 전에 아래 라인 삭제할 것! */}
      <DevLogin onLoginSuccess={onLoginSuccess} mode="login" />
    </div>
  );
}