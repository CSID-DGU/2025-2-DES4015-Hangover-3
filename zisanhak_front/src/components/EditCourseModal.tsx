import { useState, useEffect } from "react";
import { X } from "lucide-react";

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

interface EditCourseModalProps {
  course: CourseData;
  onSave: (updatedCourse: CourseData) => void;
  onClose: () => void;
}

export default function EditCourseModal({ course, onSave, onClose }: EditCourseModalProps) {
  const [editedCourse, setEditedCourse] = useState<CourseData>(course);

  useEffect(() => {
    setEditedCourse(course);
  }, [course]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedCourse);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[15px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between rounded-t-[15px]">
          <div className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[20px] text-gray-900">
            과목 정보 수정
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* 년도-학기 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              년도-학기
            </label>
            <input
              type="text"
              value={editedCourse.semester}
              onChange={(e) => setEditedCourse({ ...editedCourse, semester: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
              placeholder="예: 2021-1"
            />
          </div>

          {/* 학년 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              학년
            </label>
            <select
              value={editedCourse.grade}
              onChange={(e) => setEditedCourse({ ...editedCourse, grade: Number(e.target.value) })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
            >
              <option value={1}>1학년</option>
              <option value={2}>2학년</option>
              <option value={3}>3학년</option>
              <option value={4}>4학년</option>
            </select>
          </div>

          {/* 이수구분 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              이수구분
            </label>
            <select
              value={editedCourse.category}
              onChange={(e) => setEditedCourse({ ...editedCourse, category: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
            >
              <option value="공교">공교</option>
              <option value="일교">일교</option>
              <option value="전공">전공</option>
              <option value="학기">학기</option>
            </select>
          </div>

          {/* 교과목명 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              교과목명
            </label>
            <input
              type="text"
              value={editedCourse.courseName}
              onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
              placeholder="예: PRI4001 미적분학및연습1"
            />
          </div>

          {/* 학점 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              학점
            </label>
            <input
              type="number"
              min="0"
              max="6"
              step="0.5"
              value={editedCourse.credits}
              onChange={(e) => setEditedCourse({ ...editedCourse, credits: Number(e.target.value) })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
            />
          </div>

          {/* 성적 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              성적
            </label>
            <select
              value={editedCourse.score}
              onChange={(e) => setEditedCourse({ ...editedCourse, score: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
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
            </select>
          </div>

          {/* 영역/구분 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              영역/구분
            </label>
            <input
              type="text"
              value={editedCourse.area}
              onChange={(e) => setEditedCourse({ ...editedCourse, area: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
              placeholder="예: 글쓰기 영역, 전공, 공통교양"
            />
          </div>

          {/* 상태 */}
          <div>
            <label className="block font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px] text-gray-700 mb-2">
              상태
            </label>
            <select
              value={editedCourse.status}
              onChange={(e) => setEditedCourse({ ...editedCourse, status: e.target.value as "일치" | "불일치" })}
              className="w-full px-4 py-2.5 border border-[#d1d5db] rounded-[8px] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e4811c] focus:border-transparent"
            >
              <option value="일치">일치</option>
              <option value="불일치">불일치</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-[#d1d5db] rounded-[8px] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-gray-700 hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#e4811c] rounded-[8px] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-white hover:bg-[#d1710f] transition-colors"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
