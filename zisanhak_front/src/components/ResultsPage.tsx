import { useEffect } from "react";
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
  onFinalConfirm?: () => void;
  onDetailsClick?: () => void;
  onDownloadReport?: () => void;
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  status?: "충족" | "부족";
  action?: {
    label: string;
    onClick?: () => void;
  };
}

function StatCard({ title, value, subtitle, status, action }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4 sm:p-6 relative">
      <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-500 mb-2">
        {title}
      </p>
      <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic text-[20px] sm:text-[24px] text-gray-900 mb-1">
        {value}
      </p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
        {subtitle}
      </p>
      
      {status && (
        <p className={`font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center inline-block ${
          status === "충족" ? "text-green-600" : "text-[#e4811c]"
        }`}>
          {status}
        </p>
      )}
      
      {action && (
        <div className="mt-2">
          <div 
            className="bg-[#e4811c] rounded-[8px] px-4 py-2 cursor-pointer inline-block"
            onClick={action.onClick}
          >
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-white">
              {action.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface CourseRowProps {
  semester: string;
  category: string;
  courseName: string;
  credits: number;
  grade: string;
  area: string;
  isOdd?: boolean;
}

function CourseRow({ semester, category, courseName, credits, grade, area, isOdd }: CourseRowProps) {
  return (
    <div className={`border-x border-b border-[#eef2f7] px-4 py-3 ${isOdd ? 'bg-white' : 'bg-[#fbfbfd]'}`}>
      <div className="hidden md:grid grid-cols-[90px_80px_1fr_50px_50px_120px] gap-2 items-center">
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{semester}</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{category}</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{courseName}</p>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{credits}</p>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{grade}</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{area}</p>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden space-y-1">
        <div className="flex justify-between">
          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-900">
            {courseName}
          </p>
        </div>
        <div className="flex gap-4 text-[12px] text-gray-500">
          <span>{semester}</span>
          <span>{category}</span>
          <span>{credits}학점</span>
          <span>{grade}</span>
          <span>{area}</span>
        </div>
      </div>
    </div>
  );
}

function ResultsContent({ onFinalConfirm, onDetailsClick, onRecommendationsClick, onDownloadReport }: { onFinalConfirm?: () => void; onDetailsClick?: () => void; onRecommendationsClick?: () => void; onDownloadReport?: () => void }) {
  const completionPercentage = 78;

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12">
          
          {/* Header */}
          <div className="mb-6">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] sm:text-[26px] text-gray-900 mb-2">
              졸업요건 확인
            </p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              업로드한 성적표 기반으로 졸업요건 충족 여부를 진단합니다.
            </p>
          </div>

          {/* Progress Section */}
          <div className="bg-[#fff7ed] border border-[#fdebd2] rounded-[10px] p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] sm:text-[24px] text-[#e4811c]">
                졸업까지...! {completionPercentage}%
              </p>
              <div 
                className="bg-[#e4811c] rounded-[8px] px-6 py-2 cursor-pointer self-start sm:self-auto"
                onClick={onDetailsClick}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-white">
                  상세 보기
                </p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-[#e5e7eb] h-[6px] rounded-full mb-2 overflow-hidden">
              <div 
                className="bg-[#e4811c] h-full rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
              부족 항목: 전공필수 1과목, 설계 1과목, 영어시험 점수 미등록
            </p>
          </div>

          {/* Student Info Tags */}
          <div className="mb-6">
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
              학생 정보
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#f3f4f6] rounded-full px-4 py-1.5">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-gray-700">
                  학과: 정보통신공학전공
                </p>
              </div>
              <div className="bg-[#f3f4f6] rounded-full px-4 py-1.5">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-gray-700">
                  학번: 2021112097
                </p>
              </div>
              <div className="bg-[#f3f4f6] rounded-full px-4 py-1.5">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-gray-700">
                  성명: 이현노
                </p>
              </div>
              <div className="bg-[#f3f4f6] rounded-full px-4 py-1.5">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-gray-700">
                  총취득학점: 94
                </p>
              </div>
              <div className="bg-[#f3f4f6] rounded-full px-4 py-1.5">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-gray-700">
                  평점평균: 4.03
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard
              title="이수 학점"
              value="94 / 130"
              subtitle="총 이수학점 / 졸업필수"
              status="부족"
            />
            <StatCard
              title="전공 학점"
              value="66 / 75"
              subtitle="전공 이수학점 / 졸업필수"
              status="부족"
            />
            <StatCard
              title="영어 과목"
              value="2 / 2"
              subtitle="영어 관련 교과 이수수"
              status="충족"
            />
            <StatCard
              title="전공필수"
              value="5 / 6"
              subtitle="이수한 전공필수 과목 수"
              status="부족"
            />
            <StatCard
              title="설계 과목"
              value="1 / 2"
              subtitle="이수한 설계과목 수"
              status="부족"
            />
            <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4 sm:p-6">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-500 mb-2">
                영어 시험 점수
              </p>
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] sm:text-[24px] text-[#e4811c] mb-1">
                미등록
              </p>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-3">
                TOEIC/TOEFL/OPIc 등 인증 점수 업로드
              </p>
              <div className="bg-[#e4811c] rounded-[8px] px-4 py-2 cursor-pointer inline-block">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-white">
                  점수 등록
                </p>
              </div>
            </div>
          </div>

          {/* Recent Courses Table */}
          <div className="mb-8">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-4">
              최근 반영 과목
            </p>
            
            {/* Table Header - Desktop */}
            <div className="hidden md:block">
              <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-t-[8px] px-4 py-3">
                <div className="grid grid-cols-[90px_80px_1fr_50px_50px_120px] gap-2">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">년도-학기</p>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">이수구분</p>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">교과목명</p>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">학점</p>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">성적</p>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">영역/구분</p>
                </div>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden mb-2">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                최근 과목 목록
              </p>
            </div>

            {/* Table Body */}
            <div className="md:border-0 border border-[#e5e7eb] rounded-[8px] md:rounded-none overflow-hidden">
              <CourseRow
                semester="2024-2"
                category="전공"
                courseName="INC2029 객체지향언어와실습"
                credits={3}
                grade="B+"
                area="기초"
                isOdd={true}
              />
              <CourseRow
                semester="2025-1"
                category="전공"
                courseName="INC4059 운영체제"
                credits={3}
                grade="A+"
                area="전문"
                isOdd={false}
              />
              <CourseRow
                semester="2021-2"
                category="공교"
                courseName="RGC1080 <영어>EAS1"
                credits={2}
                grade="A+"
                area="영어"
                isOdd={true}
              />
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="border-t border-[#e5e7eb] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div 
                className="bg-white border border-[#e5e7eb] rounded-[8px] px-6 py-3 cursor-pointer hover:bg-gray-50 w-full sm:w-auto"
                onClick={onDownloadReport}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-gray-900">
                  진단 보고서(PDF)
                </p>
              </div>
              <div 
                className="bg-white border border-[#e5e7eb] rounded-[8px] px-6 py-3 cursor-pointer hover:bg-gray-50 w-full sm:w-auto"
                onClick={onRecommendationsClick}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-gray-900">
                  AI 추천 과목 보기
                </p>
              </div>
            </div>
            <div 
              className="bg-[#e4811c] rounded-[8px] px-8 py-3 cursor-pointer hover:bg-[#d1710f] w-full sm:w-auto"
              onClick={onFinalConfirm}
            >
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] sm:text-[16px] text-center text-white">
                결과 확정
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage({ 
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
  onFinalConfirm, 
  onDetailsClick,
  onDownloadReport
}: NavbarProps) {
  useEffect(() => {
    // 졸업요건 검사 결과가 나올 때 총 검사 수 증가
    const currentChecks = parseInt(localStorage.getItem('totalChecks_v5') || '0');
    const newChecks = currentChecks + 1;
    localStorage.setItem('totalChecks_v5', newChecks.toString());
  }, []);

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
      <ResultsContent onFinalConfirm={onFinalConfirm} onDetailsClick={onDetailsClick} onRecommendationsClick={onRecommendationsClick} onDownloadReport={onDownloadReport} />
    </div>
  );
}