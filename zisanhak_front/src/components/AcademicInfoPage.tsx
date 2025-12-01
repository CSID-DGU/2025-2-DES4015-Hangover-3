import Navbar from "./Navbar";

interface User {
  email: string;
  studentId: string;
  name: string;
  password: string;
  emailVerified: boolean;
}

interface AcademicInfoPageProps {
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

type PdfResource = {
  title: string;
  description: string;
  size: string;
  updatedAt: string;
};

const pdfSections: Array<{ year: number; resources: PdfResource[] }> = [
  {
    year: 2025,
    resources: [
      {
        title: "2025학년도 신입생을 위한 학사제도 및 학업이수 가이드",
        description: "신입생 필독 학사제도 정리 PDF",
        size: "7.2MB",
        updatedAt: "2025-02-27",
      },
      {
        title: "2025학년도 교육과정",
        description: "전 학과 공통 교육과정 안내",
        size: "3.1MB",
        updatedAt: "2025-02-01",
      },
    ],
  },
  {
    year: 2024,
    resources: [
      {
        title: "2024학년도 학사제도 및 학업이수 가이드",
        description: "2024년 기준 졸업요건, 행정 일정",
        size: "6.1MB",
        updatedAt: "2024-02-12",
      },
      {
        title: "2024학년도 교육과정",
        description: "전공/교양 별 학점 편성표",
        size: "3.0MB",
        updatedAt: "2024-02-03",
      },
    ],
  },
  {
    year: 2023,
    resources: [
      {
        title: "2023학년도 학사제도 및 학업이수 가이드",
        description: "복수전공·연계전공 안내 포함",
        size: "5.8MB",
        updatedAt: "2023-02-10",
      },
      {
        title: "2023학년도 교육과정",
        description: "필수/선택 과목 목록",
        size: "2.9MB",
        updatedAt: "2023-02-01",
      },
    ],
  },
  {
    year: 2022,
    resources: [
      {
        title: "2022학년도 학사제도 및 학업이수 가이드",
        description: "졸업 요건 및 행정 절차",
        size: "5.5MB",
        updatedAt: "2022-02-10",
      },
      {
        title: "2022학년도 교육과정",
        description: "과목 코드 및 학점표",
        size: "2.8MB",
        updatedAt: "2022-02-01",
      },
    ],
  },
];

export default function AcademicInfoPage({
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
  onLogout,
}: AcademicInfoPageProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#fdf3e6] via-[#f0f6ff] to-white">
      <Navbar
        onBackToHome={onBackToHome}
        onLoginClick={onLoginClick}
        onHoneyCoursesClick={onHoneyCoursesClick}
        onAcademicInfoClick={onAcademicInfoClick}
        onRecommendationsClick={onRecommendationsClick}
        onMyPageClick={onMyPageClick}
        onAdminPageClick={onAdminPageClick}
        onGraduationSimulationClick={onGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 pb-20 pt-10 sm:px-6">
        <section className="rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0px_30px_90px_rgba(12,45,113,0.08)] backdrop-blur">
          <header className="flex flex-col gap-4 border-b border-[#fde7c7] pb-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ffe9cc] px-4 py-2 text-sm font-semibold text-[#c87319]">
              학사 정보 PDF 목록
            </div>
            <h1 className="text-2xl font-bold text-[#1d2433] sm:text-3xl">
              학사 정보 PDF 한 번에 확인하기
            </h1>
            <p className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm text-[#d67a0c]">
              TIP: Ctrl + F (맥은 ⌘ + F)로 학과/단과대를 검색하면 원하는 자료를 빠르게 찾을 수 있어요.
            </p>
          </header>

          <div className="mt-6 flex flex-col gap-10">
            {pdfSections.map((section) => (
              <div key={section.year} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#fde2c5] px-3 py-1 text-xs font-semibold text-[#c87319]">
                    {section.year}
                  </span>
                  <h2 className="text-xl font-bold text-[#1d2433]">
                    {section.year} 교육과정 안내서
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.resources.map((resource) => (
                    <article
                      key={resource.title}
                      className="flex flex-col gap-4 rounded-2xl border border-[#e7e9f1] bg-white/95 p-4 shadow-sm transition hover:shadow-[0px_14px_45px_rgba(12,25,54,0.08)] sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex flex-1 flex-col gap-1">
                        <p className="text-sm font-semibold text-[#c7422a]">PDF</p>
                        <h3 className="text-base font-bold text-[#1d2433] sm:text-lg">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-[#6b7280]">{resource.description}</p>
                        <p className="text-xs text-[#9aa0b5]">
                          업데이트 {resource.updatedAt} · {resource.size}
                        </p>
                      </div>
                      <button className="w-full rounded-full bg-[#f38e1d] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#e47f12] sm:w-auto">
                        PDF 다운로드
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


