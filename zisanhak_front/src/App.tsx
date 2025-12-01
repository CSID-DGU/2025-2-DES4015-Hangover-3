import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { getCurrentUser, logout as logoutRequest, verifyEmail } from "./services/authApi";
import { clearTokens } from "./lib/tokenStorage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import UploadPage from "./components/UploadPage";
import LoadingPage from "./components/LoadingPage";
import VerifyPage from "./components/VerifyPage";
import ResultsLoadingPage from "./components/ResultsLoadingPage";
import ResultsPage from "./components/ResultsPage";
import DetailsPage from "./components/DetailsPage";
import RecommendationsPage from "./components/RecommendationsPage";
import HoneyCoursesPage from "./components/HoneyCoursesPage";
import AcademicInfoPage from "./components/AcademicInfoPage";
import MyPage from "./components/MyPage";
import AdminPage from "./components/AdminPage";
import GraduationSimulation from "./components/GraduationSimulation";

interface User {
  id?: string;
  email: string;
  studentId: string;
  name: string;
  password?: string;
  emailVerified?: boolean;
  hasCheckedGraduationRequirements?: boolean; // 졸업요건 확인 여부
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "login" | "signup" | "upload" | "loading" | "verify" | "resultsLoading" | "results" | "details" | "recommendations" | "honeyCourses" | "academicInfo" | "myPage" | "adminPage" | "graduationSimulation">("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [uploadedPdfFile, setUploadedPdfFile] = useState<File | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);

  // 로그인 상태 복원
  useEffect(() => {
    let isMounted = true;

    const checkEmailVerificationToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("verifyToken");
      if (!token) {
        return;
      }

      try {
        setIsVerifyingEmail(true);
        await verifyEmail(token);
        if (!isMounted) return;
        toast.success("이메일 인증이 완료되었습니다. 로그인해주세요.");
        params.delete("verifyToken");
        const query = params.toString();
        const newUrl = `${window.location.pathname}${query ? `?${query}` : ""}`;
        window.history.replaceState({}, "", newUrl);
        setCurrentPage("login");
      } catch (error) {
        if (!isMounted) return;
        const message = error instanceof Error ? error.message : "이메일 인증에 실패했습니다.";
        toast.error(message);
      } finally {
        if (!isMounted) return;
        setIsVerifyingEmail(false);
      }
    };

    checkEmailVerificationToken();

    const restoreSession = async () => {
      try {
        const user = await getCurrentUser();
        if (!isMounted) return;
        setCurrentUser(user as User);
        setIsLoggedIn(true);
      } catch (error) {
        clearTokens();
        if (!isMounted) return;
        setCurrentUser(null);
        setIsLoggedIn(false);
      } finally {
        if (isMounted) {
          setIsAuthLoading(false);
        }
      }
    };

    restoreSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  const handleSignupClick = () => {
    setCurrentPage("signup");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleCheckClick = () => {
    // 로그인 체크
    if (!isLoggedIn) {
      setCurrentPage("login");
      return;
    }
    setCurrentPage("upload");
  };

  const handleSubmit = (file: File | null) => {
    setUploadedPdfFile(file);
    setCurrentPage("loading");
  };

  const handleLoadingComplete = () => {
    setCurrentPage("verify");
  };

  const handleConfirm = () => {
    setCurrentPage("resultsLoading");
  };

  const handleResultsLoadingComplete = () => {
    setCurrentPage("results");
  };

  const handleGoToResults = () => {
    setCurrentPage("results");
  };

  const handleDetailsClick = () => {
    setCurrentPage("details");
  };

  const handleBackToResults = () => {
    setCurrentPage("results");
  };

  const handleExport = () => {
    // Export report as PDF
    alert("진단 보고서를 다운로드합니다. (실제 환경에서는 PDF가 생성됩니다)");
    console.log("Exporting report...");
  };

  const handleDownloadReport = () => {
    // Download diagnosis report
    alert("진단 보고서(PDF)를 다운로드합니다. (실제 환경에서는 PDF가 생성됩니다)");
    console.log("Downloading diagnosis report...");
  };

  const handleFinalConfirm = () => {
    // TODO: Navigate to final confirmation or dashboard
    console.log("Final confirmed!");
  };

  const handleRecommendationsClick = () => {
    setCurrentPage("recommendations");
  };

  const handleHoneyCoursesClick = () => {
    setCurrentPage("honeyCourses");
  };

  const handleAcademicInfoClick = () => {
    setCurrentPage("academicInfo");
  };

  const handleMyPageClick = () => {
    setCurrentPage("myPage");
  };

  const handleAdminPageClick = () => {
    setCurrentPage("adminPage");
  };

  const handleGraduationSimulationClick = () => {
    setCurrentPage("graduationSimulation");
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const handleLogout = async () => {
    try {
      await logoutRequest();
    } catch (error) {
      console.error("logout failed", error);
      clearTokens();
    } finally {
      setCurrentUser(null);
      setIsLoggedIn(false);
      setCurrentPage("home");
    }
  };

  const handleSignupSuccess = () => {
    setCurrentPage("login");
  };

  if (isAuthLoading) {
    return (
      <>
        <Toaster position="top-center" richColors />
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-600">
          {isVerifyingEmail ? "이메일 인증을 확인하는 중입니다..." : "인증 정보를 불러오는 중입니다..."}
        </div>
      </>
    );
  }

  if (currentPage === "login") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <LoginPage onBackToHome={handleBackToHome} onSignupClick={handleSignupClick} onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  if (currentPage === "signup") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <SignupPage onBackToHome={handleBackToHome} onLoginClick={handleLoginClick} onSignupSuccess={handleSignupSuccess} />
      </>
    );
  }

  if (currentPage === "upload") {
    return (
      <UploadPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onSubmit={handleSubmit}
        onGoToResults={handleGoToResults}
      />
    );
  }

  if (currentPage === "loading") {
    return (
      <LoadingPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onLoadingComplete={handleLoadingComplete} 
      />
    );
  }

  if (currentPage === "verify") {
    return (
      <VerifyPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onConfirm={handleConfirm}
        uploadedPdfFile={uploadedPdfFile}
      />
    );
  }

  if (currentPage === "resultsLoading") {
    return (
      <ResultsLoadingPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onLoadingComplete={handleResultsLoadingComplete} 
      />
    );
  }

  if (currentPage === "results") {
    return (
      <ResultsPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onFinalConfirm={handleFinalConfirm} 
        onDetailsClick={handleDetailsClick}
        onDownloadReport={handleDownloadReport}
      />
    );
  }

  if (currentPage === "details") {
    return (
      <DetailsPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        onBack={handleBackToResults} 
        onExport={handleExport} 
      />
    );
  }

  if (currentPage === "recommendations") {
    return (
      <RecommendationsPage 
        onBackToHome={handleBackToHome} 
        onLoginClick={handleLoginClick}
        onHoneyCoursesClick={handleHoneyCoursesClick}
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    );
  }

  if (currentPage === "honeyCourses") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <HoneyCoursesPage 
          onBackToHome={handleBackToHome} 
          onLoginClick={handleLoginClick}
          onHoneyCoursesClick={handleHoneyCoursesClick}
          onAcademicInfoClick={handleAcademicInfoClick}
          onRecommendationsClick={handleRecommendationsClick}
          onMyPageClick={handleMyPageClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </>
    );
  }

  if (currentPage === "academicInfo") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <AcademicInfoPage 
          onBackToHome={handleBackToHome} 
          onLoginClick={handleLoginClick} 
          onHoneyCoursesClick={handleHoneyCoursesClick}
          onAcademicInfoClick={handleAcademicInfoClick}
          onRecommendationsClick={handleRecommendationsClick}
          onMyPageClick={handleMyPageClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </>
    );
  }

  if (currentPage === "myPage") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <MyPage 
          onBackToHome={handleBackToHome} 
          onLoginClick={handleLoginClick} 
          onHoneyCoursesClick={handleHoneyCoursesClick}
          onAcademicInfoClick={handleAcademicInfoClick}
          onRecommendationsClick={handleRecommendationsClick}
          onMyPageClick={handleMyPageClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </>
    );
  }

  if (currentPage === "adminPage") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <AdminPage 
          onBackToHome={handleBackToHome} 
          onLoginClick={handleLoginClick} 
          onHoneyCoursesClick={handleHoneyCoursesClick}
          onAcademicInfoClick={handleAcademicInfoClick}
          onRecommendationsClick={handleRecommendationsClick}
          onMyPageClick={handleMyPageClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </>
    );
  }

  if (currentPage === "graduationSimulation") {
    return (
      <>
        <Toaster position="top-center" richColors />
        <GraduationSimulation 
          onBackToHome={handleBackToHome} 
          onLoginClick={handleLoginClick} 
          onHoneyCoursesClick={handleHoneyCoursesClick}
          onAcademicInfoClick={handleAcademicInfoClick}
          onRecommendationsClick={handleRecommendationsClick}
          onMyPageClick={handleMyPageClick}
          onGraduationSimulationClick={handleGraduationSimulationClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <HomePage 
        onLoginClick={handleLoginClick} 
        onCheckClick={handleCheckClick} 
        onHoneyCoursesClick={handleHoneyCoursesClick} 
        onAcademicInfoClick={handleAcademicInfoClick}
        onRecommendationsClick={handleRecommendationsClick}
        onMyPageClick={handleMyPageClick}
        onAdminPageClick={handleAdminPageClick}
        onGraduationSimulationClick={handleGraduationSimulationClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    </>
  );
}


