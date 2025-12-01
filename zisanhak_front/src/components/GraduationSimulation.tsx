import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import { Sparkles, Plus, Trash2, GraduationCap, BookOpen, X, Search } from "lucide-react";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
  hasCheckedGraduationRequirements?: boolean; // 졸업요건 확인 여부
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
}

interface SimulationCourse {
  id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  category: string;
  isAIRecommended?: boolean;
}

interface GraduationRequirement {
  category: string;
  required: number;
  completed: number;
  simulated: number;
}

interface AvailableCourse {
  courseCode: string;
  courseName: string;
  credits: number;
  category: string;
  difficulty?: string;
  isPopular?: boolean;
  isHoney?: boolean;
}

function GraduationSimulationContent({ 
  currentUser, 
  onMyPageClick 
}: { 
  currentUser?: User | null;
  onMyPageClick?: () => void;
}) {
  // 졸업요건 확인 여부 체크
  const hasCheckedRequirements = currentUser?.hasCheckedGraduationRequirements || false;

  // 졸업요건을 확인하지 않은 경우 안내 화면 표시
  if (!hasCheckedRequirements) {
    return (
      <div className="relative w-full min-h-[calc(100vh-62px)]">
        {/* Background Image */}
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          src={imgLogin}
        />

        {/* Main Content Container */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 min-h-[calc(100vh-62px)] flex items-center justify-center">
          <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-8 sm:p-12 text-center">
            {/* 아이콘 */}
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-[#fef8f3] rounded-full flex items-center justify-center border-2 border-[#f5e6d3]">
                <GraduationCap className="w-10 h-10 text-[#e4811c]" />
              </div>
            </div>

            {/* 제목 */}
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[24px] sm:text-[28px] text-gray-900 mb-3">
              졸업요건을 먼저 확인해주세요
            </p>

            {/* 설명 */}
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[15px] text-gray-600 mb-8 leading-relaxed">
              졸업 시뮬레이션을 이용하려면<br />
              먼저 취득학점서를 업로드하여 졸업요건을 확인해야 합니다.<br />
              마이페이지에서 취득학점서를 업로드해주세요.
            </p>

            {/* 안내 사항 */}
            <div className="bg-[#fef8f3] rounded-[8px] p-5 mb-8 text-left border border-[#f5e6d3]">
              <p className="font-['Noto_Sans_KR:Medium',sans-serif] text-[14px] text-gray-900 mb-3">
                📌 졸업요건 확인 방법
              </p>
              <ol className="space-y-2 text-[13px] text-gray-700 list-decimal list-inside font-['Noto_Sans_KR:Regular',sans-serif]">
                <li>마이페이지로 이동합니다</li>
                <li>취득학점서 업로드 버튼을 클릭합니다</li>
                <li>취득학점서 PDF를 업로드합니다</li>
                <li>크로스체크 및 졸업요건을 확인합니다</li>
              </ol>
            </div>

            {/* 버튼 */}
            <button
              onClick={onMyPageClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#e4811c] hover:bg-[#d1710f] text-white rounded-[8px] transition-colors font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px]"
            >
              마이페이지로 이동
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 졸업요건 (실제로는 사용자의 취득학점서에서 가져와야 함)
  const [requirements, setRequirements] = useState<GraduationRequirement[]>([
    { category: "총 이수학점", required: 130, completed: 59, simulated: 0 },
    { category: "전공필수", required: 45, completed: 24, simulated: 0 },
    { category: "전공선택", required: 21, completed: 12, simulated: 0 },
    { category: "공통교양", required: 18, completed: 8, simulated: 0 },
    { category: "핵심교양", required: 9, completed: 0, simulated: 0 },
    { category: "자유선택", required: 37, completed: 15, simulated: 0 },
  ]);

  const [simulatedCourses, setSimulatedCourses] = useState<SimulationCourse[]>([]);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // 필터 상태
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedCredits, setSelectedCredits] = useState<string>("전체");
  const [selectedGrade, setSelectedGrade] = useState<string>("전체");

  // Mock AI 추천 과목
  const aiRecommendedCourses: AvailableCourse[] = [
    { courseCode: "CSE3001", courseName: "운영체제", credits: 3, category: "전공필수", difficulty: "중", isPopular: true },
    { courseCode: "CSE3002", courseName: "소프트웨어공학", credits: 3, category: "전공필수", difficulty: "중", isHoney: true },
    { courseCode: "CSE3004", courseName: "인공지능", credits: 3, category: "전공선택", difficulty: "상", isPopular: true },
    { courseCode: "CSE3005", courseName: "머신러닝", credits: 3, category: "전공선택", difficulty: "상" },
    { courseCode: "RGC1008", courseName: "문학의이해", credits: 3, category: "핵심교양", difficulty: "하", isHoney: true },
    { courseCode: "RGC1009", courseName: "역사의이해", credits: 3, category: "핵심교양", difficulty: "하", isHoney: true },
    { courseCode: "RGC0010", courseName: "글쓰기", credits: 2, category: "공통교양", difficulty: "중", isPopular: true },
  ];

  // Mock 전체 과목 데이터베이스
  const [allAvailableCourses] = useState<AvailableCourse[]>([
    ...aiRecommendedCourses,
    { courseCode: "CSE3003", courseName: "네트워크", credits: 3, category: "전공필수", difficulty: "중" },
    { courseCode: "CSE3006", courseName: "딥러닝", credits: 3, category: "전공선택", difficulty: "상" },
    { courseCode: "CSE3007", courseName: "컴퓨터그래픽스", credits: 3, category: "전공선택", difficulty: "중" },
    { courseCode: "CSE3008", courseName: "웹프로그래밍", credits: 3, category: "전공선택", difficulty: "하", isHoney: true },
    { courseCode: "RGC1010", courseName: "철학의이해", credits: 3, category: "핵심교양", difficulty: "중" },
    { courseCode: "PHY1001", courseName: "일반물리학1", credits: 3, category: "자유선택", difficulty: "중" },
    { courseCode: "CHE1001", courseName: "일반화학1", credits: 3, category: "자유선택", difficulty: "중" },
    { courseCode: "MAT2001", courseName: "선형대수학", credits: 3, category: "자유선택", difficulty: "중" },
  ]);

  // 시뮬레이션 과목 추가 시 졸업요건 재계산
  useEffect(() => {
    const updatedRequirements = requirements.map(req => {
      if (req.category === "총 이수학점") {
        const simulated = simulatedCourses.reduce((sum, course) => sum + course.credits, 0);
        return { ...req, simulated };
      } else {
        const simulated = simulatedCourses
          .filter(course => course.category === req.category)
          .reduce((sum, course) => sum + course.credits, 0);
        return { ...req, simulated };
      }
    });
    setRequirements(updatedRequirements);
  }, [simulatedCourses]);

  const handleAddCourse = (course: AvailableCourse, isAI: boolean = false) => {
    const newCourse: SimulationCourse = {
      id: Date.now().toString() + Math.random(),
      courseCode: course.courseCode,
      courseName: course.courseName,
      credits: course.credits,
      category: course.category,
      isAIRecommended: isAI,
    };
    setSimulatedCourses([...simulatedCourses, newCourse]);
    setShowAIModal(false);
    setShowAddModal(false);
  };

  const handleRemoveCourse = (id: string) => {
    setSimulatedCourses(simulatedCourses.filter(course => course.id !== id));
  };

  const filteredCourses = allAvailableCourses.filter(course => {
    // 검색어 필터
    const matchesSearch = course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 카테고리 필터
    const matchesCategory = selectedCategory === "전체" || course.category === selectedCategory;
    
    // 학점 필터
    const matchesCredits = selectedCredits === "전체" || course.credits.toString() === selectedCredits;
    
    return matchesSearch && matchesCategory && matchesCredits;
  });

  const getProgressWithSimulation = (req: GraduationRequirement) => {
    const total = req.completed + req.simulated;
    return Math.min((total / req.required) * 100, 100);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        src={imgLogin}
      />

      {/* Main Content Container */}
      <div className="relative max-w-[1306px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-7 h-7 text-[#e4811c]" />
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[22px] sm:text-[28px] text-[#e4811c]">
                졸업 시뮬레이션
              </p>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              과목을 추가하여 졸업 요건 충족 여부를 미리 확인해보세요
            </p>
          </div>

          {/* 졸업요건 현황 */}
          <div className="bg-[#fef8f3] rounded-[10px] p-5 mb-6 border border-[#f5e6d3]">
            <div className="flex items-center justify-between mb-4">
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[16px] text-gray-900">
                졸업요건 현황
              </p>
              <div className="flex items-center gap-4 text-[12px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#e4811c]"></div>
                  <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-gray-600">이수 완료</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#fbbf24]"></div>
                  <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-gray-600">시뮬레이션</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {requirements.map((req, index) => {
                const currentTotal = req.completed + req.simulated;
                const isCompleted = currentTotal >= req.required;
                const progressPercentage = getProgressWithSimulation(req);

                return (
                  <div key={index} className="bg-white rounded-[8px] p-4 border border-[#e5e7eb]">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-1">
                          {req.category}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className={`font-['Inter:Bold',sans-serif] text-[20px] ${isCompleted ? 'text-green-600' : 'text-[#e4811c]'}`}>
                            {currentTotal}
                          </span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-gray-400">
                            / {req.required}
                          </span>
                        </div>
                      </div>
                      {isCompleted && (
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[10px]">✓</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      {/* 이수 완료 (오렌지) */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#e4811c] transition-all duration-300"
                        style={{ width: `${Math.min((req.completed / req.required) * 100, 100)}%` }}
                      />
                      {/* 시뮬레이션 (노란색) */}
                      {req.simulated > 0 && (
                        <div
                          className="absolute top-0 h-full bg-[#fbbf24] transition-all duration-300"
                          style={{
                            left: `${Math.min((req.completed / req.required) * 100, 100)}%`,
                            width: `${Math.min((req.simulated / req.required) * 100, 100 - (req.completed / req.required) * 100)}%`
                          }}
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-['Inter:Regular',sans-serif] text-[11px] text-gray-500">
                        {progressPercentage.toFixed(0)}%
                      </span>
                      {req.simulated > 0 && (
                        <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[11px] text-[#fbbf24]">
                          +{req.simulated} 추가
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 과목 추가 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => setShowAIModal(true)}
              className="flex-1 bg-[#e4811c] hover:bg-[#d1710f] text-white rounded-[8px] px-5 py-3.5 flex items-center justify-center gap-2.5 transition-colors border border-[#e4811c]"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px]">
                AI 추천 과목
              </span>
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex-1 bg-white hover:bg-[#fef8f3] text-gray-900 border-2 border-[#e5e7eb] hover:border-[#e4811c] rounded-[8px] px-5 py-3.5 flex items-center justify-center gap-2.5 transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px]">
                과목 직접 추가
              </span>
            </button>
          </div>

          {/* 추가된 과목 리스트 (장바구니) */}
          <div className="bg-white rounded-[10px] border-2 border-[#e5e7eb] overflow-hidden">
            <div className="bg-[#fef8f3] px-5 py-3.5 border-b border-[#e5e7eb]">
              <div className="flex items-center justify-between">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px] text-gray-900">
                  시뮬레이션 장바구니
                </p>
                <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-600">
                  {simulatedCourses.length}개 과목
                </span>
              </div>
            </div>

            {simulatedCourses.length === 0 ? (
              <div className="px-5 py-12 text-center">
                <BookOpen className="w-14 h-14 text-gray-300 mx-auto mb-3" />
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500 mb-1">
                  추가된 과목이 없습니다
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-400">
                  위의 버튼을 눌러 과목을 추가해보세요
                </p>
              </div>
            ) : (
              <div className="divide-y divide-[#f0f0f0]">
                {simulatedCourses.map((course) => (
                  <div key={course.id} className="px-5 py-4 hover:bg-[#fafafa] transition-colors group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-500">
                            {course.courseCode}
                          </span>
                          {course.isAIRecommended && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#e4811c] text-white text-[11px] rounded-md">
                              <Sparkles className="w-2.5 h-2.5" />
                              AI 추천
                            </span>
                          )}
                        </div>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 mb-1.5">
                          {course.courseName}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                            {course.credits}학점
                          </span>
                          <span className="px-2 py-0.5 bg-[#fef8f3] text-[#e4811c] rounded-md text-[11px] border border-[#f5e6d3]">
                            {course.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveCourse(course.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-50 rounded-lg text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 졸업 가능 여부 요약 */}
          {simulatedCourses.length > 0 && (
            <div className="mt-5 bg-green-50 border border-green-200 rounded-[10px] p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {requirements.every(req => (req.completed + req.simulated) >= req.required) ? (
                    <span className="text-[24px]">🎉</span>
                  ) : (
                    <span className="text-[24px]">📚</span>
                  )}
                </div>
                <div>
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[15px] text-green-800 mb-1">
                    시뮬레이션 결과
                  </p>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-green-700">
                    {requirements.every(req => (req.completed + req.simulated) >= req.required)
                      ? "축하합니다! 모든 졸업요건을 충족했습니다!"
                      : "아직 졸업요건을 충족하지 못했습니다. 과목을 더 추가해보세요."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI 추천 과목 모달 */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[10px] max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col border border-[#e5e7eb]">
            <div className="px-5 py-4 border-b border-[#e5e7eb] flex items-center justify-between bg-[#fef8f3]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#e4811c]" />
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[17px] text-gray-900">
                  AI 추천 과목
                </p>
              </div>
              <button onClick={() => setShowAIModal(false)} className="p-1 hover:bg-white rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="px-5 py-3 bg-[#fffbf7] border-b border-[#f5e6d3]">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-600">
                졸업요건을 효율적으로 채우기 위해 AI가 추천하는 과목입니다
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <div className="space-y-3">
                {aiRecommendedCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e5e7eb] hover:border-[#e4811c] rounded-[8px] p-4 transition-all cursor-pointer group"
                    onClick={() => handleAddCourse(course, true)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-500">
                            {course.courseCode}
                          </span>
                          {course.isHoney && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[11px] rounded-md">
                              🍯 꿀강
                            </span>
                          )}
                          {course.isPopular && (
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[11px] rounded-md">
                              🔥 인기
                            </span>
                          )}
                        </div>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 mb-2">
                          {course.courseName}
                        </p>
                        <div className="flex items-center gap-3 text-[12px]">
                          <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-gray-500">
                            {course.credits}학점
                          </span>
                          <span className="px-2 py-0.5 bg-[#fef8f3] text-[#e4811c] rounded-md border border-[#f5e6d3]">
                            {course.category}
                          </span>
                          <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-gray-500">
                            난이도: {course.difficulty}
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-[#e4811c] text-white rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-[13px] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic">
                        추가
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 과목 직접 추가 모달 - 에브리타임 스타일 테이블 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[10px] max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-[#e5e7eb]">
            {/* 헤더 */}
            <div className="px-5 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Plus className="w-5 h-5 text-[#e4811c]" />
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[17px] text-gray-900">
                  과목 검색 및 추가
                </p>
              </div>
              <button 
                onClick={() => {
                  setShowAddModal(false);
                  setSearchQuery("");
                  setSelectedCategory("전체");
                  setSelectedCredits("전체");
                }} 
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* 검색 및 필터 */}
            <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#fafafa]">
              {/* 검색창 */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="과목명 또는 과목코드로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-[#e5e7eb] rounded-[8px] focus:outline-none focus:border-[#e4811c] transition-colors text-[14px] bg-white"
                />
              </div>

              {/* 필터 버튼들 */}
              <div className="flex flex-wrap gap-2">
                {/* 카테고리 필터 */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] text-gray-600 font-['Noto_Sans_KR:Medium',sans-serif] mr-1">분류:</span>
                  {["전체", "전공필수", "전공선택", "공통교양", "핵심교양", "자유선택"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-md text-[12px] transition-colors ${
                        selectedCategory === cat
                          ? "bg-[#e4811c] text-white"
                          : "bg-white border border-[#e5e7eb] text-gray-700 hover:border-[#e4811c]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* 학점 필터 */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] text-gray-600 font-['Noto_Sans_KR:Medium',sans-serif] mr-1">학점:</span>
                  {["전체", "1", "2", "3", "4"].map((credit) => (
                    <button
                      key={credit}
                      onClick={() => setSelectedCredits(credit)}
                      className={`px-3 py-1.5 rounded-md text-[12px] transition-colors ${
                        selectedCredits === credit
                          ? "bg-[#e4811c] text-white"
                          : "bg-white border border-[#e5e7eb] text-gray-700 hover:border-[#e4811c]"
                      }`}
                    >
                      {credit}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 테이블 헤더 */}
            <div className="px-5 py-3 border-b-2 border-[#e5e7eb] bg-[#f8f9fa]">
              <div className="grid grid-cols-[80px_180px_1fr_80px_100px_100px] gap-3 text-[12px] font-['Noto_Sans_KR:Medium',sans-serif] text-gray-700">
                <div>구분</div>
                <div>학수번호</div>
                <div>교과목명</div>
                <div className="text-center">학점</div>
                <div className="text-center">난이도</div>
                <div className="text-center"></div>
              </div>
            </div>

            {/* 테이블 바디 */}
            <div className="flex-1 overflow-y-auto">
              {filteredCourses.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
                    검색 결과가 없습니다
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#f0f0f0]">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="px-5 py-3.5 hover:bg-[#fafafa] transition-colors group"
                    >
                      <div className="grid grid-cols-[80px_180px_1fr_80px_100px_100px] gap-3 items-center text-[13px]">
                        {/* 구분 */}
                        <div>
                          <span className={`px-2 py-1 rounded text-[11px] ${
                            course.category === "전공필수" 
                              ? "bg-red-50 text-red-700 border border-red-200" 
                              : course.category === "전공선택"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : course.category === "공통교양"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : course.category === "핵심교양"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-gray-50 text-gray-700 border border-gray-200"
                          }`}>
                            {course.category}
                          </span>
                        </div>

                        {/* 학수번호 */}
                        <div className="font-['Inter:Regular',sans-serif] text-gray-600">
                          {course.courseCode}
                        </div>

                        {/* 교과목명 */}
                        <div className="flex items-center gap-2">
                          <span className="font-['Noto_Sans_KR:Regular',sans-serif] text-gray-900">
                            {course.courseName}
                          </span>
                          {course.isHoney && (
                            <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] rounded">
                              🍯
                            </span>
                          )}
                          {course.isPopular && (
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded">
                              🔥
                            </span>
                          )}
                        </div>

                        {/* 학점 */}
                        <div className="text-center font-['Inter:Regular',sans-serif] text-gray-700">
                          {course.credits}
                        </div>

                        {/* 난이도 */}
                        <div className="text-center">
                          <span className={`px-2 py-0.5 rounded text-[11px] ${
                            course.difficulty === "하"
                              ? "bg-green-50 text-green-700"
                              : course.difficulty === "중"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                          }`}>
                            {course.difficulty}
                          </span>
                        </div>

                        {/* 추가 버튼 */}
                        <div className="text-center">
                          <button
                            onClick={() => handleAddCourse(course, false)}
                            className="px-3 py-1.5 bg-[#e4811c] hover:bg-[#d1710f] text-white rounded text-[12px] font-['Noto_Sans_KR:Medium',sans-serif] transition-colors"
                          >
                            담기
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 하단 정보 */}
            <div className="px-5 py-3 border-t border-[#e5e7eb] bg-[#fafafa]">
              <p className="text-[12px] text-gray-600 font-['Noto_Sans_KR:Regular',sans-serif]">
                총 <span className="text-[#e4811c] font-['Noto_Sans_KR:Medium',sans-serif]">{filteredCourses.length}</span>개의 과목
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GraduationSimulation(props: NavbarProps) {
  return (
    <div className="bg-white relative min-h-screen w-full">
      <Navbar {...props} />
      <GraduationSimulationContent 
        currentUser={props.currentUser} 
        onMyPageClick={props.onMyPageClick} 
      />
    </div>
  );
}