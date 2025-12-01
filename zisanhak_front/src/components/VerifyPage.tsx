import { useState } from "react";
import Navbar from "./Navbar";
import EditCourseModal from "./EditCourseModal";
import PdfViewerModal from "./PdfViewerModal";
import svgPaths from "../imports/svg-5zpijan0ic";
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
  onConfirm?: () => void;
  uploadedPdfFile?: File | null;
}

interface CourseData {
  semester: string;
  grade: number;
  category: string;
  courseName: string;
  credits: number;
  score: string;
  area: string;
  status: "일치" | "불일치";
}

const courseData: CourseData[] = [
  {
    semester: "2021-1",
    grade: 1,
    category: "공교",
    courseName: "RGC0005 기술보고서작성및발표",
    credits: 3,
    score: "A0",
    area: "글쓰기 영역",
    status: "일치"
  },
  {
    semester: "2021-1",
    grade: 1,
    category: "학기",
    courseName: "PRI4001 미적분학및연습1",
    credits: 3,
    score: "A+",
    area: "공통교양",
    status: "일치"
  },
  {
    semester: "2021-1",
    grade: 1,
    category: "학기",
    courseName: "PRI4035 프로그래밍기초와실습",
    credits: 3,
    score: "B0",
    area: "공통교양",
    status: "일치"
  },
  {
    semester: "2021-2",
    grade: 1,
    category: "공교",
    courseName: "RGC1080 <영어>EAS1",
    credits: 2,
    score: "A+",
    area: "영어",
    status: "일치"
  },
  {
    semester: "2024-2",
    grade: 2,
    category: "전공",
    courseName: "INC2029 객체지향언어와실습",
    credits: 3,
    score: "B+",
    area: "전공",
    status: "불일치"
  }
];

function FilterButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <div 
      className={`px-4 py-1.5 rounded-full cursor-pointer ${active ? 'bg-[#e4811c]' : 'bg-[#f3f4f6]'}`}
      onClick={onClick}
    >
      <p className={`font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center whitespace-nowrap ${active ? 'text-white' : 'text-gray-700'}`}>
        {children}
      </p>
    </div>
  );
}

function VerifyContent({ onConfirm, uploadedPdfFile }: { onConfirm?: () => void; uploadedPdfFile?: File | null }) {
  const [gradeFilter, setGradeFilter] = useState<number[]>([1, 2, 3, 4]);
  const [semesterFilter, setSemesterFilter] = useState<string[]>(["1학기", "2학기", "겨울학기"]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>(["공교", "일교", "전공", "학기"]);
  const [courses, setCourses] = useState<CourseData[]>(courseData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);

  // 필터링된 과목 목록
  const filteredCourses = courses.filter(course => {
    const semesterPart = course.semester.includes('-1') ? '1학기' : 
                        course.semester.includes('-2') ? '2학기' : 
                        course.semester.includes('겨울') ? '겨울학기' : '1학기';
    
    const matchesGrade = gradeFilter.includes(course.grade);
    const matchesSemester = semesterFilter.includes(semesterPart);
    const matchesCategory = categoryFilter.includes(course.category);
    
    return matchesGrade && matchesSemester && matchesCategory;
  });

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSave = (updatedCourse: CourseData) => {
    if (editingIndex !== null) {
      const newCourses = [...courses];
      newCourses[editingIndex] = updatedCourse;
      setCourses(newCourses);
      setEditingIndex(null);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-62px)]">
        {/* Background Image */}
        <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

        {/* Main Content Container */}
        <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
          <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12 min-h-[831px]">
            
            {/* Header */}
            <div className="mb-6">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] sm:text-[22px] text-gray-900 mb-2">
                학기별 과목 체크
              </p>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                PDF에서 추출된 데이터입니다 과목 정보가 맞는지 체크해주세요
              </p>
            </div>

            {/* Student Info Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
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

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Grade Filter */}
              <div>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
                  학년
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton 
                    active={gradeFilter.includes(1)}
                    onClick={() => setGradeFilter(prev => 
                      prev.includes(1) ? prev.filter(g => g !== 1) : [...prev, 1]
                    )}
                  >
                    1학년
                  </FilterButton>
                  <FilterButton 
                    active={gradeFilter.includes(2)}
                    onClick={() => setGradeFilter(prev => 
                      prev.includes(2) ? prev.filter(g => g !== 2) : [...prev, 2]
                    )}
                  >
                    2학년
                  </FilterButton>
                  <FilterButton 
                    active={gradeFilter.includes(3)}
                    onClick={() => setGradeFilter(prev => 
                      prev.includes(3) ? prev.filter(g => g !== 3) : [...prev, 3]
                    )}
                  >
                    3학년
                  </FilterButton>
                </div>
              </div>

              {/* Semester Filter */}
              <div>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
                  학기
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton 
                    active={semesterFilter.includes("1학기")}
                    onClick={() => setSemesterFilter(prev => 
                      prev.includes("1학기") ? prev.filter(s => s !== "1학기") : [...prev, "1학기"]
                    )}
                  >
                    1학기
                  </FilterButton>
                  <FilterButton 
                    active={semesterFilter.includes("2학기")}
                    onClick={() => setSemesterFilter(prev => 
                      prev.includes("2학기") ? prev.filter(s => s !== "2학기") : [...prev, "2학기"]
                    )}
                  >
                    2학기
                  </FilterButton>
                  <FilterButton 
                    active={semesterFilter.includes("겨울학기")}
                    onClick={() => setSemesterFilter(prev => 
                      prev.includes("겨울학기") ? prev.filter(s => s !== "겨울학기") : [...prev, "겨울학기"]
                    )}
                  >
                    겨울학기
                  </FilterButton>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500 mb-2">
                  이수구분
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton 
                    active={categoryFilter.includes("공교")}
                    onClick={() => setCategoryFilter(prev => 
                      prev.includes("공교") ? prev.filter(c => c !== "공교") : [...prev, "공교"]
                    )}
                  >
                    공교
                  </FilterButton>
                  <FilterButton 
                    active={categoryFilter.includes("일교")}
                    onClick={() => setCategoryFilter(prev => 
                      prev.includes("일교") ? prev.filter(c => c !== "일교") : [...prev, "일교"]
                    )}
                  >
                    일교
                  </FilterButton>
                  <FilterButton 
                    active={categoryFilter.includes("전공")}
                    onClick={() => setCategoryFilter(prev => 
                      prev.includes("전공") ? prev.filter(c => c !== "전공") : [...prev, "전공"]
                    )}
                  >
                    전공
                  </FilterButton>
                </div>
              </div>
            </div>

            {/* Table - Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Table Header */}
                <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-t-[8px] px-4 py-3">
                  <div className="grid grid-cols-[90px_50px_80px_1fr_50px_50px_120px_80px_80px] gap-2">
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">년도-학기</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">학년</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">이수구분</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">교과목명</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">학점</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">성적</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">영역/구분</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900">상태</p>
                    <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900"></p>
                  </div>
                </div>

                {/* Table Body */}
                {filteredCourses.map((course, index) => {
                  const originalIndex = courses.findIndex(c => c === course);
                  return (
                    <div 
                      key={index}
                      className={`border-x border-b border-[#eef2f7] px-4 py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-[#fbfbfd]'}`}
                    >
                      <div className="grid grid-cols-[90px_50px_80px_1fr_50px_50px_120px_80px_80px] gap-2 items-center">
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.semester}</p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.grade}</p>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{course.category}</p>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{course.courseName}</p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.credits}</p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.score}</p>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{course.area}</p>
                        <p className={`font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center ${course.status === "일치" ? 'text-green-600' : 'text-[#a84315]'}`}>
                          {course.status}
                        </p>
                        <div className="flex justify-center">
                          <div 
                            className="bg-[#e4811c] rounded-[8px] px-4 py-1.5 cursor-pointer hover:bg-[#d1710f] transition-colors"
                            onClick={() => handleEdit(originalIndex)}
                          >
                            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-center text-white">
                              수정
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Table - Mobile */}
            <div className="md:hidden space-y-4">
              {filteredCourses.map((course, index) => {
                const originalIndex = courses.findIndex(c => c === course);
                return (
                  <div key={index} className="bg-[#f8fafc] border border-[#eef2f7] rounded-[8px] p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-1">
                            {course.courseName}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                            {course.semester} · {course.grade}학년 · {course.category}
                          </p>
                        </div>
                        <div className={`font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] ${course.status === "일치" ? 'text-green-600' : 'text-[#a84315]'}`}>
                          {course.status}
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex gap-4">
                          <div>
                            <p className="font-['Inter:Regular',sans-serif] text-[11px] text-gray-500">학점</p>
                            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.credits}</p>
                          </div>
                          <div>
                            <p className="font-['Inter:Regular',sans-serif] text-[11px] text-gray-500">성적</p>
                            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">{course.score}</p>
                          </div>
                          <div>
                            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[11px] text-gray-500">영역</p>
                            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">{course.area}</p>
                          </div>
                        </div>
                        <div 
                          className="bg-[#e4811c] rounded-[8px] px-3 py-1.5 cursor-pointer hover:bg-[#d1710f] transition-colors"
                          onClick={() => handleEdit(originalIndex)}
                        >
                          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-center text-white">
                            수정
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Buttons */}
            <div className="border-t border-[#e5e7eb] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div 
                className="bg-[#e4811c] rounded-[8px] px-6 py-3 cursor-pointer hover:bg-[#d1710f] w-full sm:w-auto transition-colors" 
                onClick={() => setPdfViewerOpen(true)}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-center text-white">
                  PDF 원본보기
                </p>
              </div>
              <div 
                className="bg-[#e4811c] rounded-[8px] px-8 py-3 cursor-pointer hover:bg-[#d1710f] w-full sm:w-auto transition-colors"
                onClick={onConfirm}
              >
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-center text-white">
                  확정하기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {editingIndex !== null && (
        <EditCourseModal
          course={courses[editingIndex]}
          onSave={handleSave}
          onClose={() => setEditingIndex(null)}
        />
      )}

      {pdfViewerOpen && (
        <PdfViewerModal
          pdfFile={uploadedPdfFile || null}
          onClose={() => setPdfViewerOpen(false)}
        />
      )}
    </>
  );
}

export default function VerifyPage({ 
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
  onConfirm,
  uploadedPdfFile
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
      <VerifyContent onConfirm={onConfirm} uploadedPdfFile={uploadedPdfFile} />
    </div>
  );
}