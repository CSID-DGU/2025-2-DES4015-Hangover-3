import { useState } from "react";
import Navbar from "./Navbar";
import svgPaths from "../imports/svg-t9ce4x4jqn";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import imgGuide1 from "figma:asset/33fb9ec1edbd7d394dcca9b3667afdd6e3366430.png";
import imgGuide2 from "figma:asset/aecfaa62508eed8e707d92336cfe5b12fb78ce2b.png";
import imgGuide3 from "figma:asset/8890f3e78409e6c6e08f3902d010aa685e9b64d8.png";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
  hasCheckedGraduationRequirements?: boolean;
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
  onSubmit?: (file: File | null) => void;
  onGoToResults?: () => void; // 이미 확인한 경우 결과 페이지로 이동
}

function UploadIcon() {
  return (
    <div className="relative w-[72px] h-[38px]" data-name="Upload Icon">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 40">
          <path d={svgPaths.p24727200} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-[5px] left-[31px]">
        <svg className="block w-[11px] h-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
          <path d={svgPaths.pd3513c0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-[10px] left-[36px]">
        <svg className="block w-[2px] h-[11px]" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
          <path d="M1 0V10.3584" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function UploadFormSection({ onSubmit }: { onSubmit?: (file: File | null) => void }) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setIsUploading(true);
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setIsUploading(true);
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemove = () => {
    setUploadedFile(null);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]" data-name="login">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12 min-h-[831px]">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Scrollable Guide Steps */}
            <div className="bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb] p-6 overflow-y-auto max-h-[calc(100vh-250px)] lg:max-h-[700px]">
              <div className="flex flex-col gap-8">
                
                {/* STEP 1 */}
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center bg-[#f3f4f6] rounded-full px-4 py-1 w-fit">
                    <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[12px] text-center text-gray-500">
                      STEP 1
                    </p>
                  </div>
                  <div>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-2">
                      엔드림스 접속
                    </p>
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                      포털 로그인 후 NDRIMS 이동
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde2e8] rounded-[10px] overflow-hidden">
                    <img 
                      src={imgGuide1} 
                      alt="엔드림스 로그인 화면" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center bg-[#f3f4f6] rounded-full px-4 py-1 w-fit">
                    <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[12px] text-center text-gray-500">
                      STEP 2
                    </p>
                  </div>
                  <div>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-2">
                      취득학점확인서 조회
                    </p>
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                      왼쪽 메뉴에서 졸업 {'>'} 취득학점확인서조회 선택
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde2e8] rounded-[10px] overflow-hidden">
                    <img 
                      src={imgGuide2} 
                      alt="취득학점확인서 조회 메뉴" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center bg-[#f3f4f6] rounded-full px-4 py-1 w-fit">
                    <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[12px] text-center text-gray-500">
                      STEP 3
                    </p>
                  </div>
                  <div>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-2">
                      PDF 저장
                    </p>
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
                      상단의 저장 아이콘 클릭하여 PDF 저장 후 업로드
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde2e8] rounded-[10px] overflow-hidden">
                    <img 
                      src={imgGuide3} 
                      alt="PDF 저장" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - PDF Upload */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] text-gray-900 mb-2">
                  취득학점확인서 PDF 업로드
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                  PDF 1개, 최대 10MB
                </p>
              </div>

              {/* Upload Progress (shown when uploading) */}
              {isUploading && (
                <div className="mb-4">
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
                    Uploading...
                  </p>
                  <div className="relative w-full h-[7px] bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[60%] rounded-full bg-gradient-to-r from-[#f38e1d] to-[#f5d592]" />
                  </div>
                </div>
              )}

              {/* Upload Drop Zone */}
              <div 
                className="border-2 border-dashed border-[#dde2e8] rounded-[10px] bg-white p-8 sm:p-12 flex flex-col items-center justify-center gap-4 min-h-[254px] cursor-pointer hover:bg-gray-50 transition-colors"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('file-input')?.click()}
              >
                <UploadIcon />
                <div className="text-center">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-gray-600 mb-2">
                    여기로 PDF를 끌어다 놓으세요
                  </p>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                    또는 클릭하여 파일 선택
                  </p>
                </div>
                <input
                  id="file-input"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Uploaded Files Section */}
              <div className="mt-4">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-4">
                  업로드된 파일
                </p>
                <div className="border-t border-[#e5e7eb]" />
                
                {uploadedFile && (
                  <div className="border border-[#e5e7eb] rounded-[8px] bg-white mt-4 p-4">
                    <div className="flex items-center gap-4">
                      {/* PDF Icon */}
                      <div className="relative w-[44px] h-[46px] flex-shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
                          <path d={svgPaths.p256b200} fill="var(--fill-0, #FEE2E2)" id="Vector" stroke="var(--stroke-0, #FCA5A5)" />
                        </svg>
                        <p className="absolute inset-0 font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[12px] text-center text-red-700 flex items-center justify-center">
                          PDF
                        </p>
                      </div>
                      
                      {/* File Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 truncate">
                          {uploadedFile.name}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                          {Math.round(uploadedFile.size / 1024)} KB
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <div 
                          className="bg-[#e4811c] border border-[#d1d5db] rounded-[8px] px-4 py-2 cursor-pointer"
                          onClick={() => document.getElementById('file-input')?.click()}
                        >
                          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-white whitespace-nowrap">
                            변경
                          </p>
                        </div>
                        <div 
                          className="bg-white border border-[#d1d5db] rounded-[8px] px-4 py-2 cursor-pointer hover:bg-gray-50"
                          onClick={handleRemove}
                        >
                          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-gray-900 whitespace-nowrap">
                            삭제
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="border-t border-[#e5e7eb] mt-12 pt-6 flex justify-between items-center flex-wrap gap-4">
            <div className="bg-white border border-[#d1d5db] rounded-[8px] px-6 py-3 cursor-pointer hover:bg-gray-50">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-gray-900">
                임시저장
              </p>
            </div>
            <div 
              className="bg-[#e4811c] rounded-[8px] px-8 py-3 cursor-pointer hover:bg-[#d1710f]"
              onClick={() => onSubmit && onSubmit(uploadedFile)}
            >
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-white">
                제출
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UploadPage({ 
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
  onSubmit,
  onGoToResults
}: NavbarProps) {
  // 이미 졸업요건을 확인한 사용자는 바로 결과 페이지로 리다이렉션
  if (currentUser?.hasCheckedGraduationRequirements && onGoToResults) {
    onGoToResults();
    return null;
  }

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
      <UploadFormSection onSubmit={onSubmit} />
    </div>
  );
}