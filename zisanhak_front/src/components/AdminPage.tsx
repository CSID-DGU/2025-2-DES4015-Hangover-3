import { useState } from "react";
import { Upload, FileSpreadsheet, Check, AlertCircle, Download } from "lucide-react";
import * as XLSX from "xlsx";
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
  isLoggedIn?: boolean;
  currentUser?: User | null;
  onLogout?: () => void;
}

interface DepartmentRequirement {
  department: string;
  totalCredits: number;
  majorCredits: number;
  majorRequired: number;
  generalEducation: number;
  designCourses: number;
  englishCourses: number;
}

interface RequiredCourse {
  department: string;
  courseCode: string;
  courseName: string;
  credits: number;
  category: string;
}

function AdminContent() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [parsedData, setParsedData] = useState<{
    requirements?: DepartmentRequirement[];
    requiredCourses?: RequiredCourse[];
  }>({});

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus("loading");
    setMessage("엑셀 파일을 읽는 중...");

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);

      // 시트 1: 학과별 졸업요건 (예시)
      const requirementsSheet = workbook.Sheets[workbook.SheetNames[0]];
      const requirementsData: DepartmentRequirement[] = XLSX.utils.sheet_to_json(requirementsSheet);

      // 시트 2: 전공필수 과목 (있다면)
      const requiredCoursesData: RequiredCourse[] = [];
      if (workbook.SheetNames.length > 1) {
        const coursesSheet = workbook.Sheets[workbook.SheetNames[1]];
        const courses: RequiredCourse[] = XLSX.utils.sheet_to_json(coursesSheet);
        requiredCoursesData.push(...courses);
      }

      // 데이터 저장 (localStorage 사용)
      localStorage.setItem('graduationRequirements_v1', JSON.stringify(requirementsData));
      if (requiredCoursesData.length > 0) {
        localStorage.setItem('requiredCourses_v1', JSON.stringify(requiredCoursesData));
      }

      setParsedData({
        requirements: requirementsData,
        requiredCourses: requiredCoursesData
      });

      setUploadStatus("success");
      setMessage(`성공적으로 업로드되었습니다! (학과 ${requirementsData.length}개, 필수과목 ${requiredCoursesData.length}개)`);
    } catch (error) {
      setUploadStatus("error");
      setMessage("파일 읽기 실패. 엑셀 파일 형식을 확인해주세요.");
      console.error("Excel parsing error:", error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.xls'))) {
      const input = document.createElement('input');
      input.type = 'file';
      const event = { target: { files: [file] } } as any;
      handleFileUpload(event);
    }
  };

  const downloadTemplate = () => {
    // 엑셀 템플릿 생성
    const wb = XLSX.utils.book_new();
    
    // 시트 1: 학과별 졸업요건
    const requirementsData = [
      {
        "학과명": "정보통신공학전공",
        "총이수학점": 130,
        "전공학점": 75,
        "전공필수학점": 24,
        "교양학점": 30,
        "설계과목수": 2,
        "영어과목수": 2
      },
      {
        "학과명": "컴퓨터공학전공",
        "총이수학점": 130,
        "전공학점": 75,
        "전공필수학점": 27,
        "교양학점": 30,
        "설계과목수": 2,
        "영어과목수": 2
      }
    ];
    const ws1 = XLSX.utils.json_to_sheet(requirementsData);
    XLSX.utils.book_append_sheet(wb, ws1, "졸업요건");

    // 시트 2: 전공필수 과목
    const coursesData = [
      {
        "학과명": "정보통신공학전공",
        "과목코드": "INC2001",
        "과목명": "자료구조",
        "학점": 3,
        "구분": "전공필수"
      },
      {
        "학과명": "정보통신공학전공",
        "과목코드": "INC2002",
        "과목명": "컴퓨터구조",
        "학점": 3,
        "구분": "전공필수"
      },
      {
        "학과명": "컴퓨터공학전공",
        "과목코드": "CSE2001",
        "과목명": "자료구조",
        "학점": 3,
        "구분": "전공필수"
      }
    ];
    const ws2 = XLSX.utils.json_to_sheet(coursesData);
    XLSX.utils.book_append_sheet(wb, ws2, "전공필수과목");

    // 파일 다운로드
    XLSX.writeFile(wb, "졸업요건_템플릿.xlsx");
  };

  const clearData = () => {
    if (confirm("저장된 모든 졸업요건 데이터를 삭제하시겠습니까?")) {
      localStorage.removeItem('graduationRequirements_v1');
      localStorage.removeItem('requiredCourses_v1');
      setParsedData({});
      setUploadStatus("idle");
      setMessage("데이터가 삭제되었습니다.");
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-62px)]">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" src={imgLogin} />

      {/* Main Content Container */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[calc(100vh-62px)]">
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-6 sm:p-8 md:p-12">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FileSpreadsheet className="text-[#e4811c]" size={32} />
              <h1 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[24px] sm:text-[28px] text-gray-900">
                관리자 - 졸업요건 데이터 관리
              </h1>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
              엑셀 파일로 학과별 졸업요건과 필수 과목 데이터를 일괄 등록하세요.
            </p>
          </div>

          {/* Template Download */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-[10px]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] text-blue-900 mb-1">
                  엑셀 템플릿 다운로드
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-blue-700">
                  샘플 데이터가 포함된 엑셀 템플릿을 다운로드하여 형식에 맞게 작성하세요.
                </p>
              </div>
              <button
                onClick={downloadTemplate}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-[8px] transition-colors whitespace-nowrap"
              >
                <Download size={18} />
                <span className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px]">
                  템플릿 다운로드
                </span>
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-[#d1d5db] rounded-[15px] p-8 sm:p-12 mb-6 hover:border-[#e4811c] transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <input
              id="fileInput"
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
            />
            
            <div className="flex flex-col items-center justify-center text-center">
              <div className={`mb-4 ${uploadStatus === 'loading' ? 'animate-pulse' : ''}`}>
                <Upload size={48} className="text-[#e4811c]" />
              </div>
              
              <p className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-2">
                {uploadStatus === 'loading' ? '파일 처리 중...' : '엑셀 파일을 드래그하거나 클릭하세요'}
              </p>
              
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-500">
                .xlsx 또는 .xls 파일만 지원됩니다
              </p>
            </div>
          </div>

          {/* Status Message */}
          {message && (
            <div className={`p-4 rounded-[10px] mb-6 flex items-start gap-3 ${
              uploadStatus === 'success' ? 'bg-green-50 border border-green-200' :
              uploadStatus === 'error' ? 'bg-red-50 border border-red-200' :
              'bg-gray-50 border border-gray-200'
            }`}>
              {uploadStatus === 'success' && <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />}
              {uploadStatus === 'error' && <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />}
              
              <p className={`font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] ${
                uploadStatus === 'success' ? 'text-green-800' :
                uploadStatus === 'error' ? 'text-red-800' :
                'text-gray-700'
              }`}>
                {message}
              </p>
            </div>
          )}

          {/* Data Preview */}
          {parsedData.requirements && parsedData.requirements.length > 0 && (
            <div className="mb-6">
              <h2 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-4">
                업로드된 졸업요건 데이터
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-[#e5e7eb] rounded-[8px]">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">학과명</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">총학점</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">전공학점</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">전공필수</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">교양학점</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.requirements.slice(0, 5).map((req: any, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fbfbfd]'}>
                        <td className="px-4 py-3 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {req.학과명 || req.department}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {req.총이수학점 || req.totalCredits}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {req.전공학점 || req.majorCredits}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {req.전공필수학점 || req.majorRequired}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {req.교양학점 || req.generalEducation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {parsedData.requirements.length > 5 && (
                  <p className="text-center py-2 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                    외 {parsedData.requirements.length - 5}개 학과
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Required Courses Preview */}
          {parsedData.requiredCourses && parsedData.requiredCourses.length > 0 && (
            <div className="mb-6">
              <h2 className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900 mb-4">
                전공필수 과목 데이터
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-[#e5e7eb] rounded-[8px]">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">학과명</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">과목코드</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">과목명</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">학점</th>
                      <th className="px-4 py-3 text-left font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[12px] text-gray-900 border-b border-[#e5e7eb]">구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.requiredCourses.slice(0, 5).map((course: any, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fbfbfd]'}>
                        <td className="px-4 py-3 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {course.학과명 || course.department}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {course.과목코드 || course.courseCode}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {course.과목명 || course.courseName}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {course.학점 || course.credits}
                        </td>
                        <td className="px-4 py-3 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[13px] text-gray-900 border-b border-[#eef2f7]">
                          {course.구분 || course.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {parsedData.requiredCourses.length > 5 && (
                  <p className="text-center py-2 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-gray-500">
                    외 {parsedData.requiredCourses.length - 5}개 과목
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          {parsedData.requirements && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={clearData}
                className="flex-1 px-6 py-3 border border-red-500 text-red-600 rounded-[8px] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] hover:bg-red-50 transition-colors"
              >
                데이터 삭제
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-6 py-3 bg-[#e4811c] text-white rounded-[8px] font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[14px] hover:bg-[#d1710f] transition-colors"
              >
                새로고침
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage({
  onBackToHome,
  onLoginClick,
  onHoneyCoursesClick,
  onAcademicInfoClick,
  onRecommendationsClick,
  onMyPageClick,
  isLoggedIn,
  currentUser,
  onLogout
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
      <AdminContent />
    </div>
  );
}
