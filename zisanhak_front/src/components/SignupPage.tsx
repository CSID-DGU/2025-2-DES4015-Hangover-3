import { useEffect, useState } from "react";
import { toast } from "sonner@2.0.3";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "./Navbar";
import DevLogin from "./DevLogin";
import imgImage3 from "figma:asset/08463e23a0100526c2eeef596616e207ea29c188.png";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import { sendVerificationCode, signup as signupRequest, verifyEmailCode } from "../services/authApi";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
}

interface SignupPageProps {
  onBackToHome?: () => void;
  onLoginClick?: () => void;
  onSignupSuccess?: () => void;
  onHoneyCoursesClick?: () => void;
  onAcademicInfoClick?: () => void;
  onRecommendationsClick?: () => void;
  onMyPageClick?: () => void;
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}



interface SignupFormSectionProps {
  onLoginClick?: () => void;
  onSignupSuccess?: () => void;
}

function SignupFormSection({ onLoginClick, onSignupSuccess }: SignupFormSectionProps) {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [codeTimer, setCodeTimer] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const allowedDomains = ['@dgu.ac.kr', '@dongguk.edu'];
    return allowedDomains.some(domain => email.endsWith(domain));
  };

  useEffect(() => {
    if (codeTimer <= 0) return;
    const timer = setInterval(() => {
      setCodeTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [codeTimer]);

  const handleSendVerificationCode = async () => {
    if (!email) {
      toast.error("이메일을 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("학교 이메일만 사용 가능합니다. (@dgu.ac.kr, @dongguk.edu)");
      return;
    }

    if (isSendingCode || (isCodeSent && codeTimer > 0)) {
      return;
    }

    try {
      setIsSendingCode(true);
      await sendVerificationCode(email);
      toast.success("인증코드가 이메일로 전송되었습니다.");
      setIsCodeSent(true);
      setIsCodeVerified(false);
      setVerificationCode("");
      setCodeTimer(300);
    } catch (error) {
      const message = error instanceof Error ? error.message : "인증코드 전송에 실패했습니다.";
      toast.error(message);
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      toast.error("인증코드를 입력해주세요.");
      return;
    }
    if (verificationCode.length !== 5) {
      toast.error("인증코드는 5자리입니다.");
      return;
    }
    if (codeTimer <= 0) {
      toast.error("인증 시간이 만료되었습니다. 재전송 후 다시 시도해주세요.");
      return;
    }

    try {
      setIsVerifyingCode(true);
      await verifyEmailCode(email, verificationCode);
      toast.success("이메일 인증이 완료되었습니다!");
      setIsCodeVerified(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "인증코드 확인에 실패했습니다.";
      toast.error(message);
      setIsCodeVerified(false);
    } finally {
      setIsVerifyingCode(false);
    }
  };

  const handleSignupClick = async () => {
    // 유효성 검사
    if (!email || !studentId || !name || !password || !passwordConfirm) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("학교 이메일만 사용 가능합니다. (@dgu.ac.kr, @dongguk.edu)");
      return;
    }

    // 이메일 인증 확인
    if (!isCodeVerified) {
      toast.error("이메일 인증을 먼저 완료해주세요.");
      return;
    }

    // 학번은 정확히 10자리 숫자
    if (!/^\d{10}$/.test(studentId)) {
      toast.error("학번은 10자리 숫자로 입력해주세요.");
      return;
    }

    // 비밀번호 길이 체크
    if (password.length < 8 || password.length > 14) {
      toast.error("비밀번호는 8~14자로 작성해주세요.");
      return;
    }

    // 비밀번호 조건 체크 (숫자, 영문, 기호 포함)
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    if (!hasNumber || !hasLetter || !hasSymbol) {
      toast.error("비밀번호는 숫자, 영문, 기호를 모두 포함해야 합니다.");
      return;
    }

    // 비밀번호 확인
    if (password !== passwordConfirm) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      await signupRequest({
        email,
        studentId,
        name,
        password,
      });
      toast.success("회원가입이 완료되었습니다! 로그인 후 이용해주세요.");
      onSignupSuccess?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : "회원가입에 실패했습니다.";
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
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)] flex items-center justify-center">
        <div className="bg-white rounded-[25px] w-full max-w-[390px] py-[53px] px-4 flex flex-col items-center">
          {/* Dongguk Logo */}
          <div className="w-[189px] h-[56px] mb-12" data-name="image 3">
            <img alt="" className="w-full h-full object-cover pointer-events-none" src={imgImage3} />
          </div>

          {/* Email Input */}
          <div className="w-full max-w-[358px] mb-[30px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-2 items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="학교 이메일을 입력해주세요."
                  className="font-['머니그라피TTF:Rounded',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro] flex-1 disabled:text-gray-400"
                  disabled={isCodeVerified}
                />
                <button
                  onClick={handleSendVerificationCode}
                  className="bg-[#e4811c] hover:bg-[#cb6015] text-white px-4 py-2 rounded-[10px] transition-colors shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={isCodeSent && codeTimer > 0}
                >
                  <p className="font-['Pretendard:Medium',sans-serif] text-[13px] whitespace-nowrap">
                    {isCodeSent ? "재전송" : "인증코드"}
                  </p>
                </button>
              </div>
              <div className="h-[2px] w-full bg-[#8a8a8a]" />
              <p className="font-['머니그라피TTF:Rounded',sans-serif] text-[#8a8a8a] text-[11px]">
                학교 이메일만 사용 가능합니다. (@dgu.ac.kr, @dongguk.edu)
              </p>
              {isCodeSent && !isCodeVerified && (
                <p className="font-['머니그라피TTF:Rounded',sans-serif] text-[#e4811c] text-[11px]">
                  인증 가능 시간 {new Date(codeTimer * 1000).toISOString().substring(14, 19)}
                </p>
              )}
            </div>
          </div>

          {/* Verification Code Input */}
          {isCodeSent && !isCodeVerified && (
            <div className="w-full max-w-[358px] mb-[41px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                      if (value.length <= 5) {
                        setVerificationCode(value);
                      }
                    }}
                    placeholder="5자리 인증코드 입력"
                    maxLength={5}
                    className="font-['Pretendard:Medium',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro] flex-1"
                  />
                  <button
                    onClick={handleVerifyCode}
                    className="bg-[#e4811c] hover:bg-[#cb6015] text-white px-4 py-2 rounded-[10px] transition-colors shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={verificationCode.length !== 5 || isVerifyingCode || codeTimer <= 0}
                  >
                    <p className="font-['Pretendard:Medium',sans-serif] text-[13px] whitespace-nowrap">
                      {isVerifyingCode ? "확인중..." : "확인"}
                    </p>
                  </button>
                </div>
                <div className="h-[2px] w-full bg-[#e4811c]" />
                <div className="flex items-center justify-between">
                  <p className="font-['머니그라피TTF:Rounded',sans-serif] text-[#8a8a8a] text-[11px]">
                    이메일로 전송된 5자리 코드를 입력하세요
                  </p>
                  <button
                    onClick={handleSendVerificationCode}
                    className="font-['Pretendard:Medium',sans-serif] text-[#e4811c] text-[11px] hover:underline disabled:text-gray-400"
                    disabled={codeTimer > 0}
                  >
                    재전송
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Student ID Input */}
          <div className="w-full max-w-[358px] mb-[41px]">
            <div className="flex flex-col gap-[8px]">
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="학번을 입력해주세요."
                maxLength={10}
                className="font-['Pretendard:Medium',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro]"
              />
              <div className="h-[2px] w-full bg-[#8a8a8a]" />
              <p className="font-['머니그라피TTF:Rounded',sans-serif] text-[#8a8a8a] text-[11px]">
                학번을 10자리 정확하게 기입바랍니다.
              </p>
            </div>
          </div>

          {/* Name Input */}
          <div className="w-full max-w-[358px] mb-[41px]">
            <div className="flex flex-col gap-[8px]">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요."
                className="font-['Pretendard:Medium',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro]"
              />
              <div className="h-[2px] w-full bg-[#8a8a8a]" />
            </div>
          </div>

          {/* Password Input */}
          <div className="w-full max-w-[358px] mb-[41px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요."
                  className="font-['Pretendard:Medium',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro] flex-1"
                />
                <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                  {showPassword ? <Eye size={20} className="text-[#8A8A8A]" /> : <EyeOff size={20} className="text-[#8A8A8A]" />}
                </div>
              </div>
              <div className="h-[2px] w-full bg-[#8a8a8a]" />
              <p className="font-['Pretendard:ExtraLight',sans-serif] text-[#8a8a8a] text-[11px]">
                숫자, 영문, 기호를 포함하여 8~14자로 작성해주세요.
              </p>
            </div>
          </div>

          {/* Password Confirm Input */}
          <div className="w-full max-w-[358px] mb-[41px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="비밀번호를 다시 한 번 입력해주세요."
                  className="font-['Pretendard:Medium',sans-serif] text-[#333] text-[17px] bg-transparent border-none outline-none placeholder:text-[gainsboro] flex-1"
                />
                <div onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} className="cursor-pointer">
                  {showPasswordConfirm ? <Eye size={20} className="text-[#8A8A8A]" /> : <EyeOff size={20} className="text-[#8A8A8A]" />}
                </div>
              </div>
              <div className="h-[2px] w-full bg-[#8a8a8a]" />
              <p className="font-['Pretendard:ExtraLight',sans-serif] text-[#8a8a8a] text-[11px]">
                입력한 비밀번호와 똑같이 입력해주세요.
              </p>
            </div>
          </div>

          {/* Signup Button */}
          <div className="w-full max-w-[358px]">
            <button
              type="button"
              onClick={handleSignupClick}
              disabled={isSubmitting}
              className="bg-[#e4811c] h-[45px] rounded-[10px] flex items-center justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              <p className="font-['머니그라피TTF:Rounded',sans-serif] text-white text-[20px]">
                {isSubmitting ? "처리중..." : "회원가입하기"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage({ 
  onBackToHome, 
  onLoginClick, 
  onSignupSuccess,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  isLoggedIn = false,
  currentUser,
  onLogout
}: SignupPageProps) {
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
      <SignupFormSection onLoginClick={onLoginClick} onSignupSuccess={onSignupSuccess} />
      
      {/* 🚨 개발자 전용 - 프로덕션 배포 전에 아래 라인 삭제할 것! */}
      <DevLogin onLoginSuccess={onLoginClick} onSignupSuccess={onSignupSuccess} mode="signup" />
    </div>
  );
}