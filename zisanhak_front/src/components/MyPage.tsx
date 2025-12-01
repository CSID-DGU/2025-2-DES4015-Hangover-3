import { useState } from "react";
import { toast } from "sonner@2.0.3";
import Navbar from "./Navbar";
import imgLogin from "figma:asset/98a8ce8578be91801729ba182f16eedb0963ec87.png";
import { FileText, Edit2, Plus, Trash2, Check, X, Sparkles, Search } from "lucide-react";
import { deleteAccount } from "../services/authApi";

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
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

interface Course {
  id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  category: string;
  grade: string;
  semester: string;
  isNewlyAdded?: boolean;
}

interface UploadedPDF {
  id: string;
  fileName: string;
  uploadDate: string;
  status: "processed" | "processing" | "error";
}

interface GraduationRequirement {
  category: string;
  required: number;
  completed: number;
  percentage: number;
}

function MyPageContent({ currentUser, onLogout }: { currentUser?: User | null; onLogout?: () => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "pdf" | "courses">("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedStudentId, setEditedStudentId] = useState(currentUser?.studentId || "");
  const [editedName, setEditedName] = useState(currentUser?.name || "");
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  // Mock data
  const [uploadedPDFs] = useState<UploadedPDF[]>([
    { id: "1", fileName: "취득학점확인서_2024.pdf", uploadDate: "2024-11-15", status: "processed" },
    { id: "2", fileName: "취득학점확인서_2024_1학기.pdf", uploadDate: "2024-09-20", status: "processed" },
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: "1", courseCode: "RGC0003", courseName: "불교와인간", credits: 2, category: "공통교양", grade: "A+", semester: "2024-1" },
    { id: "2", courseCode: "RGC1046", courseName: "인공지능과 미래사회", credits: 2, category: "공통교양", grade: "A0", semester: "2024-1" },
    { id: "3", courseCode: "CSE2003", courseName: "자료구조", credits: 3, category: "전공필수", grade: "B+", semester: "2024-1" },
    { id: "4", courseCode: "RGC2001", courseName: "창의적 사고와 표현", credits: 2, category: "공통교양", grade: "미수강", semester: "2024-2" },
    { id: "5", courseCode: "RGC0005", courseName: "기술보고서작성및발표", credits: 3, category: "공통교양", grade: "A0", semester: "2023-2" },
    { id: "6", courseCode: "RGC1074", courseName: "커리어 디자인", credits: 1, category: "공통교양", grade: "P", semester: "2023-1" },
    { id: "7", courseCode: "CSE1001", courseName: "프로그래밍기초", credits: 3, category: "전공필수", grade: "A+", semester: "2023-1" },
    { id: "8", courseCode: "CSE1002", courseName: "컴퓨터구조", credits: 3, category: "전공필수", grade: "B0", semester: "2023-2" },
    { id: "9", courseCode: "CSE2001", courseName: "알고리즘", credits: 3, category: "전공필수", grade: "A0", semester: "2024-1" },
    { id: "10", courseCode: "CSE2002", courseName: "데이터베이스", credits: 3, category: "전공선택", grade: "B+", semester: "2024-1" },
    { id: "11", courseCode: "RGC1080", courseName: "EAS1(영어)", credits: 2, category: "공통교양", grade: "A+", semester: "2023-1" },
    { id: "12", courseCode: "RGC1081", courseName: "EAS2(영어)", credits: 2, category: "공통교양", grade: "A0", semester: "2023-2" },
    { id: "13", courseCode: "MAT1001", courseName: "미적분학1", credits: 3, category: "자유선택", grade: "B+", semester: "2023-1" },
    { id: "14", courseCode: "MAT1002", courseName: "미적분학2", credits: 3, category: "자유선택", grade: "B0", semester: "2023-2" },
    { id: "15", courseCode: "RGC1007", courseName: "심리학의이해", credits: 3, category: "핵심교양", grade: "A0", semester: "2024-1" },
  ]);

  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [editedCourse, setEditedCourse] = useState<Course | null>(null);

  // 교과목 데이터베이스 (Mock)
  const [availableCourses] = useState([
    { courseCode: "CSE3001", courseName: "운영체제", credits: 3, category: "전공필수" },
    { courseCode: "CSE3002", courseName: "소프트웨어공학", credits: 3, category: "전공필수" },
    { courseCode: "CSE3003", courseName: "네트워크", credits: 3, category: "전공필수" },
    { courseCode: "CSE3004", courseName: "인공지능", credits: 3, category: "전공선택" },
    { courseCode: "CSE3005", courseName: "머신러닝", credits: 3, category: "전공선택" },
    { courseCode: "CSE3006", courseName: "딥러닝", credits: 3, category: "전공선택" },
    { courseCode: "CSE3007", courseName: "컴퓨터그래픽스", credits: 3, category: "전공선택" },
    { courseCode: "CSE3008", courseName: "웹프로그래밍", credits: 3, category: "전공선택" },
    { courseCode: "RGC1008", courseName: "문학의이해", credits: 3, category: "핵심교양" },
    { courseCode: "RGC1009", courseName: "역사의이해", credits: 3, category: "핵심교양" },
    { courseCode: "RGC1010", courseName: "철학의이해", credits: 3, category: "핵심교양" },
    { courseCode: "RGC0010", courseName: "글쓰기", credits: 2, category: "공통교양" },
    { courseCode: "PHY1001", courseName: "일반물리학1", credits: 3, category: "자유선택" },
    { courseCode: "CHE1001", courseName: "일반화학1", credits: 3, category: "자유선택" },
  ]);

  // 졸업요건 탭 모달 상태
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [showCourseSearch, setShowCourseSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const [graduationRequirements] = useState<GraduationRequirement[]>([
    { category: "전공필수", required: 45, completed: 24, percentage: 53 },
    { category: "전공선택", required: 21, completed: 12, percentage: 57 },
    { category: "공통교양", required: 18, completed: 8, percentage: 44 },
    { category: "핵심교양", required: 9, completed: 0, percentage: 0 },
    { category: "자유선택", required: 37, completed: 15, percentage: 41 },
    { category: "총 이수학점", required: 130, completed: 59, percentage: 45 },
  ]);

  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseCode: "",
    courseName: "",
    credits: 3,
    category: "전공선택",
    grade: "A+",
    semester: "2024-2",
  });

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // TODO: Save to backend
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const handleAddCourse = () => {
    const course: Course = {
      id: Date.now().toString(),
      ...newCourse,
      isNewlyAdded: true,
    };
    setCourses([...courses, course]);
    setShowAddCourse(false);
    setNewCourse({
      courseCode: "",
      courseName: "",
      credits: 3,
      category: "전공선택",
      grade: "A+",
      semester: "2024-2",
    });
  };

  const handleEditCourse = (id: string) => {
    const course = courses.find(c => c.id === id);
    if (course) {
      setEditingCourseId(id);
      setEditedCourse(course);
    }
  };

  const handleSaveCourse = () => {
    if (editedCourse) {
      setCourses(courses.map(c => c.id === editingCourseId ? editedCourse : c));
      setEditingCourseId(null);
      setEditedCourse(null);
    }
  };

  const handleCancelCourseEdit = () => {
    setEditingCourseId(null);
    setEditedCourse(null);
  };

  const handleAccountDeletion = async () => {
    if (isDeletingAccount) return;
    const confirmed = confirm("정말 회원 탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.");
    if (!confirmed) return;

    try {
      setIsDeletingAccount(true);
      await deleteAccount();
      toast.success("탈퇴가 완료되었습니다.");
      onLogout?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : "회원 탈퇴에 실패했습니다.";
      toast.error(message);
    } finally {
      setIsDeletingAccount(false);
    }
  };

  const handleOpenAIRecommendation = (category: string) => {
    setSelectedCategory(category);
    setShowAIRecommendation(true);
  };

  const handleOpenCourseSearch = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setShowCourseSearch(true);
  };

  const handleAddCourseFromDB = (course: typeof availableCourses[0]) => {
    const newCourse: Course = {
      id: Date.now().toString(),
      courseCode: course.courseCode,
      courseName: course.courseName,
      credits: course.credits,
      category: selectedCategory,
      grade: "미수강",
      semester: "2025-1",
      isNewlyAdded: true,
    };
    setCourses([...courses, newCourse]);
    setShowCourseSearch(false);
    setShowAIRecommendation(false);
  };

  // 각 카테고리별로 새로 추가된 학점 계산
  const calculateCredits = (category: string) => {
    const categoryCourses = courses.filter(c => c.category === category);
    const existingCredits = categoryCourses
      .filter(c => !c.isNewlyAdded && c.grade !== "미수강")
      .reduce((sum, c) => sum + c.credits, 0);
    const newCredits = categoryCourses
      .filter(c => c.isNewlyAdded)
      .reduce((sum, c) => sum + c.credits, 0);
    return { existingCredits, newCredits };
  };

  const renderProfileTab = () => (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-6">
      <div className="flex justify-between items-center mb-6">
        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900">
          내 정보
        </p>
        {!isEditingProfile ? (
          <button
            onClick={() => setIsEditingProfile(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#f38e1d] text-white rounded-[8px] hover:bg-[#d1710f] transition-colors"
          >
            <Edit2 size={16} />
            <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px]">수정</span>
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSaveProfile}
              className="flex items-center gap-2 px-4 py-2 bg-[#10b981] text-white rounded-[8px] hover:bg-[#059669] transition-colors"
            >
              <Check size={16} />
              <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px]">저장</span>
            </button>
            <button
              onClick={() => {
                setIsEditingProfile(false);
                setEditedStudentId(currentUser?.studentId || "");
                setEditedName(currentUser?.name || "");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-[8px] hover:bg-gray-600 transition-colors"
            >
              <X size={16} />
              <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px]">취소</span>
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
            이메일
          </label>
          <input
            type="text"
            value={currentUser?.email || ""}
            disabled
            className="px-4 py-2 border border-[#e5e7eb] rounded-[8px] bg-gray-50 text-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
            이름
          </label>
          <input
            type="text"
            value={isEditingProfile ? editedName : currentUser?.name || ""}
            onChange={(e) => setEditedName(e.target.value)}
            disabled={!isEditingProfile}
            className={`px-4 py-2 border border-[#e5e7eb] rounded-[8px] ${
              isEditingProfile ? "bg-white" : "bg-gray-50"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-700">
            학번
          </label>
          <input
            type="text"
            value={isEditingProfile ? editedStudentId : currentUser?.studentId || ""}
            onChange={(e) => setEditedStudentId(e.target.value)}
            disabled={!isEditingProfile}
            className={`px-4 py-2 border border-[#e5e7eb] rounded-[8px] ${
              isEditingProfile ? "bg-white" : "bg-gray-50"
            }`}
          />
        </div>
      </div>

      <div className="mt-6 border-t border-[#e5e7eb] pt-4">
        <button
          type="button"
          onClick={handleAccountDeletion}
          disabled={isDeletingAccount}
          className="w-full sm:w-auto px-4 py-2 bg-red-100 text-red-700 border border-red-300 rounded-[8px] hover:bg-red-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isDeletingAccount ? "탈퇴 진행중..." : "회원 탈퇴"}
        </button>
      </div>
    </div>
  );

  const renderPDFTab = () => (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-6">
      <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-6">
        업로드한 PDF
      </p>

      <div className="space-y-3">
        {uploadedPDFs.map((pdf) => (
          <div
            key={pdf.id}
            className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-[8px] hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="text-[#e4811c]" size={24} />
              <div>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900">
                  {pdf.fileName}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                  {pdf.uploadDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-[12px] ${
                  pdf.status === "processed"
                    ? "bg-green-100 text-green-700"
                    : pdf.status === "processing"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {pdf.status === "processed"
                  ? "처리완료"
                  : pdf.status === "processing"
                  ? "처리중"
                  : "오류"}
              </span>
              <button className="text-[#e4811c] hover:text-[#d1710f] text-[13px] underline">
                다운로드
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCoursesTab = () => (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-6">
      <div className="flex justify-between items-center mb-6">
        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900">
          수강 과목 관리
        </p>
        <button
          onClick={() => setShowAddCourse(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#f38e1d] text-white rounded-[8px] hover:bg-[#d1710f] transition-colors"
        >
          <Plus size={16} />
          <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px]">과목 추가</span>
        </button>
      </div>

      {showAddCourse && (
        <div className="mb-6 p-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px]">
          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-4">
            새 과목 추가
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="학수번호"
              value={newCourse.courseCode}
              onChange={(e) => setNewCourse({ ...newCourse, courseCode: e.target.value })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            />
            <input
              type="text"
              placeholder="과목명"
              value={newCourse.courseName}
              onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            />
            <select
              value={newCourse.category}
              onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            >
              <option value="전공필수">전공필수</option>
              <option value="전공선택">전공선택</option>
              <option value="공통교양">공통교양</option>
              <option value="핵심교양">핵심교양</option>
              <option value="자유선택">자유선택</option>
            </select>
            <select
              value={newCourse.credits}
              onChange={(e) => setNewCourse({ ...newCourse, credits: Number(e.target.value) })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            >
              <option value={1}>1학점</option>
              <option value={2}>2학점</option>
              <option value={3}>3학점</option>
            </select>
            <input
              type="text"
              placeholder="학기 (예: 2024-1)"
              value={newCourse.semester}
              onChange={(e) => setNewCourse({ ...newCourse, semester: e.target.value })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            />
            <select
              value={newCourse.grade}
              onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value })}
              className="px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
            >
              <option value="A+">A+</option>
              <option value="A0">A0</option>
              <option value="B+">B+</option>
              <option value="B0">B0</option>
              <option value="C+">C+</option>
              <option value="C0">C0</option>
              <option value="D+">D+</option>
              <option value="D0">D0</option>
              <option value="F">F</option>
              <option value="P">P</option>
              <option value="미수강">미수강</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddCourse}
              className="px-4 py-2 bg-[#10b981] text-white rounded-[8px] hover:bg-[#059669] transition-colors"
            >
              추가
            </button>
            <button
              onClick={() => setShowAddCourse(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-[8px] hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8fafc] border-y border-[#e5e7eb]">
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  학수번호
                </p>
              </th>
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  과목명
                </p>
              </th>
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  이수구분
                </p>
              </th>
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  학점
                </p>
              </th>
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  학기
                </p>
              </th>
              <th className="px-4 py-3 text-left">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  성적
                </p>
              </th>
              <th className="px-4 py-3 text-center">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-500">
                  작업
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={course.id}
                className={`border-b border-[#eef2f7] last:border-b-0 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"
                }`}
              >
                {editingCourseId === course.id && editedCourse ? (
                  // 수정 모드
                  <>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={editedCourse.courseCode}
                        onChange={(e) => setEditedCourse({ ...editedCourse, courseCode: e.target.value })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={editedCourse.courseName}
                        onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={editedCourse.category}
                        onChange={(e) => setEditedCourse({ ...editedCourse, category: e.target.value })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      >
                        <option value="전공필수">전공필수</option>
                        <option value="전공선택">전공선택</option>
                        <option value="공통교양">공통교양</option>
                        <option value="핵심교양">핵심교양</option>
                        <option value="자유선택">자유선택</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={editedCourse.credits}
                        onChange={(e) => setEditedCourse({ ...editedCourse, credits: Number(e.target.value) })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={editedCourse.semester}
                        onChange={(e) => setEditedCourse({ ...editedCourse, semester: e.target.value })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={editedCourse.grade}
                        onChange={(e) => setEditedCourse({ ...editedCourse, grade: e.target.value })}
                        className="w-full px-2 py-1 border border-[#e5e7eb] rounded text-[13px]"
                      >
                        <option value="A+">A+</option>
                        <option value="A0">A0</option>
                        <option value="B+">B+</option>
                        <option value="B0">B0</option>
                        <option value="C+">C+</option>
                        <option value="C0">C0</option>
                        <option value="D+">D+</option>
                        <option value="D0">D0</option>
                        <option value="F">F</option>
                        <option value="P">P</option>
                        <option value="미수강">미수강</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={handleSaveCourse}
                          className="text-green-600 hover:text-green-700"
                          title="저장"
                        >
                          <Check size={16} />
                        </button>
                        <button
                          onClick={handleCancelCourseEdit}
                          className="text-gray-500 hover:text-gray-700"
                          title="취소"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  // 일반 모드
                  <>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.courseCode}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.courseName}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.category}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.credits}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.semester}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-900">
                        {course.grade}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditCourse(course.id)}
                          className="text-blue-500 hover:text-blue-700"
                          title="수정"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="text-red-500 hover:text-red-700"
                          title="삭제"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGraduationTab = () => {
    const filteredCourses = selectedCategory
      ? availableCourses.filter(c => c.category === selectedCategory)
      : availableCourses;

    const searchedCourses = filteredCourses.filter(
      c =>
        c.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.courseCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // AI 추천 과목 (Mock)
    const aiRecommendedCourses = selectedCategory
      ? availableCourses.filter(c => c.category === selectedCategory).slice(0, 3)
      : [];

    return (
      <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-6">
        <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-6">
          졸업 요건 진행 상황
        </p>

        <div className="space-y-4">
          {graduationRequirements.slice(0, -1).map((req, index) => {
            const { existingCredits, newCredits } = calculateCredits(req.category);
            const totalCredits = existingCredits + newCredits;
            const existingPercentage = (existingCredits / req.required) * 100;
            const newPercentage = (newCredits / req.required) * 100;

            return (
              <div key={index} className="p-4 border border-[#e5e7eb] rounded-[8px]">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900">
                    {req.category}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-600">
                      <span className="font-bold text-[#e4811c]">{existingCredits}</span>
                      {newCredits > 0 && <span className="font-bold text-[#7c3aed]"> +{newCredits}</span>}
                      { " "}/ {req.required} 학점
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenAIRecommendation(req.category)}
                        className="p-1.5 bg-[#7c3aed] text-white rounded-md hover:bg-[#6d28d9] transition-colors"
                        title="AI 추천"
                      >
                        <Sparkles size={14} />
                      </button>
                      <button
                        onClick={() => handleOpenCourseSearch(req.category)}
                        className="p-1.5 bg-[#f38e1d] text-white rounded-md hover:bg-[#d1710f] transition-colors"
                        title="과목 검색"
                      >
                        <Search size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
                  <div
                    className={`absolute h-full transition-all ${
                      existingPercentage >= 100 ? "bg-green-500" : "bg-[#e4811c]"
                    }`}
                    style={{ width: `${Math.min(existingPercentage, 100)}%` }}
                  />
                  {newCredits > 0 && (
                    <div
                      className="absolute h-full bg-[#7c3aed] transition-all"
                      style={{
                        left: `${Math.min(existingPercentage, 100)}%`,
                        width: `${Math.min(newPercentage, 100 - existingPercentage)}%`,
                      }}
                    />
                  )}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-gray-500">
                    {newCredits > 0 && <span className="text-[#7c3aed]">● 새 과목 </span>}
                    <span className="text-[#e4811c]">● 기존 과목</span>
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                    {Math.round((totalCredits / req.required) * 100)}%
                  </p>
                </div>
              </div>
            );
          })}

          {/* 총 이수학점 */}
          {(() => {
            const allExistingCredits = courses
              .filter(c => !c.isNewlyAdded && c.grade !== "미수강")
              .reduce((sum, c) => sum + c.credits, 0);
            const allNewCredits = courses
              .filter(c => c.isNewlyAdded)
              .reduce((sum, c) => sum + c.credits, 0);
            const totalCredits = allExistingCredits + allNewCredits;
            const lastReq = graduationRequirements[graduationRequirements.length - 1];
            const existingPercentage = (allExistingCredits / lastReq.required) * 100;
            const newPercentage = (allNewCredits / lastReq.required) * 100;

            return (
              <div className="p-4 border-2 border-[#e4811c] rounded-[8px] bg-[#fff7ed]">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900">
                    총 이수학점
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-600">
                    <span className="font-bold text-[#e4811c]">{allExistingCredits}</span>
                    {allNewCredits > 0 && <span className="font-bold text-[#7c3aed]"> +{allNewCredits}</span>}
                    { " "}/ {lastReq.required} 학점
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
                  <div
                    className={`absolute h-full transition-all ${
                      existingPercentage >= 100 ? "bg-green-500" : "bg-[#e4811c]"
                    }`}
                    style={{ width: `${Math.min(existingPercentage, 100)}%` }}
                  />
                  {allNewCredits > 0 && (
                    <div
                      className="absolute h-full bg-[#7c3aed] transition-all"
                      style={{
                        left: `${Math.min(existingPercentage, 100)}%`,
                        width: `${Math.min(newPercentage, 100 - existingPercentage)}%`,
                      }}
                    />
                  )}
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500 mt-1 text-right">
                  {Math.round((totalCredits / lastReq.required) * 100)}%
                </p>
              </div>
            );
          })()}
        </div>

        <div className="mt-6 p-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px]">
          <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-900 mb-2">
            졸업 가능 여부
          </p>
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-700">
            총 130학점 중 {courses.filter(c => c.grade !== "미수강").reduce((sum, c) => sum + c.credits, 0)}학점을 이수하였습니다. 졸업까지{" "}
            <span className="font-bold text-[#e4811c]">
              {Math.max(0, 130 - courses.filter(c => c.grade !== "미수강").reduce((sum, c) => sum + c.credits, 0))}학점
            </span>
            이 더 필요합니다.
          </p>
        </div>

        {/* AI 추천 모달 */}
        {showAIRecommendation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowAIRecommendation(false)}>
            <div className="bg-white rounded-[10px] p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900">
                  AI 과목 추천 - {selectedCategory}
                </p>
                <button onClick={() => setShowAIRecommendation(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <p className="text-[13px] text-gray-600 mb-4">
                현재 이수 과목을 바탕으로 AI가 추천하는 과목입니다.
              </p>
              <div className="space-y-3">
                {aiRecommendedCourses.map((course, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 border border-[#e5e7eb] rounded-[8px] hover:bg-gray-50">
                    <div>
                      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900">
                        {course.courseName}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                        {course.courseCode} • {course.credits}학점
                      </p>
                    </div>
                    <button
                      onClick={() => handleAddCourseFromDB(course)}
                      className="px-4 py-2 bg-[#7c3aed] text-white rounded-[8px] hover:bg-[#6d28d9] transition-colors"
                    >
                      추가
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 과목 검색 모달 */}
        {showCourseSearch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowCourseSearch(false)}>
            <div className="bg-white rounded-[10px] p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900">
                  과목 검색 - {selectedCategory}
                </p>
                <button onClick={() => setShowCourseSearch(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="과목명 또는 학수번호 검색"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-[#e5e7eb] rounded-[8px]"
                />
              </div>
              <div className="space-y-3">
                {searchedCourses.length > 0 ? (
                  searchedCourses.map((course, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 border border-[#e5e7eb] rounded-[8px] hover:bg-gray-50">
                      <div>
                        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900">
                          {course.courseName}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                          {course.courseCode} • {course.credits}학점 • {course.category}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAddCourseFromDB(course)}
                        className="px-4 py-2 bg-[#f38e1d] text-white rounded-[8px] hover:bg-[#d1710f] transition-colors"
                      >
                        추가
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    검색 결과가 없습니다.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
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
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Header */}
          <div className="mb-6">
            <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[22px] sm:text-[28px] text-[#e4811c] mb-2">
              마이페이지
            </p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              내 정보와 수강 과목을 관리하고 졸업 요건을 확인하세요
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-[#e5e7eb]">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] border-b-2 transition-colors ${
                activeTab === "profile"
                  ? "border-[#e4811c] text-[#e4811c]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              내 정보
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`px-4 py-2 font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] border-b-2 transition-colors ${
                activeTab === "pdf"
                  ? "border-[#e4811c] text-[#e4811c]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              업로드 PDF
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-4 py-2 font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] border-b-2 transition-colors ${
                activeTab === "courses"
                  ? "border-[#e4811c] text-[#e4811c]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              수강 과목
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "profile" && renderProfileTab()}
            {activeTab === "pdf" && renderPDFTab()}
            {activeTab === "courses" && renderCoursesTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyPage({
  onBackToHome,
  onLoginClick,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  isLoggedIn = false,
  currentUser,
  onLogout,
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
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <MyPageContent currentUser={currentUser} onLogout={onLogout} />
    </div>
  );
}