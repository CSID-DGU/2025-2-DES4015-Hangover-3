/**
 * 🚨 개발자 전용 컴포넌트 - 프로덕션 배포 전에 반드시 삭제할 것!
 * 
 * 이 파일을 삭제하고, 사용하는 곳에서 <DevLogin /> 컴포넌트를 제거하면 됩니다.
 * 
 * 사용 위치:
 * - /components/LoginPage.tsx
 * - /components/SignupPage.tsx
 */

import { toast } from "sonner@2.0.3";

interface DevLoginProps {
  onLoginSuccess?: (user: any) => void;
  onSignupSuccess?: () => void;
  mode?: 'login' | 'signup';
}

export default function DevLogin({ onLoginSuccess, onSignupSuccess, mode = 'login' }: DevLoginProps) {
  // 미리 정의된 테스트 계정들
  const testAccounts = [
    {
      email: "test1@dgu.ac.kr",
      studentId: "2021111111",
      name: "테스트학생1",
      password: "Test1234!",
      emailVerified: true,
      hasCheckedGraduationRequirements: true  // 졸업요건 확인 완료
    },
    {
      email: "test2@dgu.ac.kr",
      studentId: "2021222222",
      name: "테스트학생2",
      password: "Test1234!",
      emailVerified: true,
      hasCheckedGraduationRequirements: false  // 졸업요건 미확인
    },
    {
      email: "test3@dongguk.edu",
      studentId: "2021333333",
      name: "테스트학생3",
      password: "Test1234!",
      emailVerified: true,
      hasCheckedGraduationRequirements: true  // 졸업요건 확인 완료
    }
  ];

  // 관리자 계정
  const adminAccount = {
    email: "admin@dgu.ac.kr",
    studentId: "0000000000",
    name: "관리자",
    password: "Admin1234!",
    emailVerified: true,
    hasCheckedGraduationRequirements: true  // 관리자는 기본적으로 접근 가능
  };

  // 빠른 로그인 (테스트 계정 1로 자동 로그인)
  const handleQuickLogin = () => {
    const users = JSON.parse(localStorage.getItem('users_v5') || '[]');
    const testAccount = testAccounts[0];
    
    // 테스트 계정이 없으면 생성
    const existingUser = users.find((u: any) => u.email === testAccount.email);
    if (!existingUser) {
      users.push(testAccount);
      localStorage.setItem('users_v5', JSON.stringify(users));
      toast.success("테스트 계정 생성 완료!", {
        description: `${testAccount.email} / ${testAccount.password}`
      });
    }
    
    // 로그인
    if (onLoginSuccess) {
      const user = users.find((u: any) => u.email === testAccount.email) || testAccount;
      onLoginSuccess(user);
      toast.success("🚀 개발자 빠른 로그인 성공!", {
        description: `${testAccount.name} (${testAccount.email})`
      });
    }
  };

  // 관리자 로그인
  const handleAdminLogin = () => {
    const users = JSON.parse(localStorage.getItem('users_v5') || '[]');
    
    // 관리자 계정이 없으면 생성
    const existingAdmin = users.find((u: any) => u.email === adminAccount.email);
    if (!existingAdmin) {
      users.push(adminAccount);
      localStorage.setItem('users_v5', JSON.stringify(users));
      toast.success("관리자 계정 생성 완료!", {
        description: `${adminAccount.email} / ${adminAccount.password}`
      });
    }
    
    // 관리자 로그인
    if (onLoginSuccess) {
      const admin = users.find((u: any) => u.email === adminAccount.email) || adminAccount;
      onLoginSuccess(admin);
      toast.success("🔐 관리자 로그인 성공!", {
        description: `${adminAccount.name} (${adminAccount.email})`,
        duration: 3000
      });
    }
  };

  // 모든 테스트 계정 생성
  const handleCreateAllTestAccounts = () => {
    const users = JSON.parse(localStorage.getItem('users_v5') || '[]');
    let createdCount = 0;
    
    testAccounts.forEach(account => {
      const exists = users.find((u: any) => u.email === account.email);
      if (!exists) {
        users.push(account);
        createdCount++;
      }
    });
    
    if (createdCount > 0) {
      localStorage.setItem('users_v5', JSON.stringify(users));
      toast.success(`${createdCount}개의 테스트 계정이 생성되었습니다!`, {
        description: "비밀번호: Test1234!",
        duration: 5000
      });
      
      if (onSignupSuccess) {
        onSignupSuccess();
      }
    } else {
      toast.info("모든 테스트 계정이 이미 존재합니다.");
    }
  };

  // 랜덤 테스트 계정 생성 및 자동 로그인
  const handleCreateRandomAccount = () => {
    const users = JSON.parse(localStorage.getItem('users_v5') || '[]');
    const randomNum = Math.floor(Math.random() * 10000);
    const newAccount = {
      email: `test${randomNum}@dgu.ac.kr`,
      studentId: `2021${String(randomNum).padStart(6, '0')}`,
      name: `테스트학생${randomNum}`,
      password: "Test1234!",
      emailVerified: true,
      hasCheckedGraduationRequirements: false  // 졸업요건 미확인
    };
    
    users.push(newAccount);
    localStorage.setItem('users_v5', JSON.stringify(users));
    
    toast.success("랜덤 테스트 계정 생성 완료!", {
      description: `${newAccount.email} / ${newAccount.password}`,
      duration: 5000
    });
    
    // 즉시 로그인
    if (onLoginSuccess) {
      onLoginSuccess(newAccount);
    }
    
    if (onSignupSuccess) {
      onSignupSuccess();
    }
  };

  // LocalStorage 초기화
  const handleResetUsers = () => {
    if (window.confirm('⚠️ 모든 사용자 데이터를 삭제하시겠습니까?')) {
      localStorage.removeItem('users_v5');
      toast.success("사용자 데이터가 초기화되었습니다.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-2xl p-4 border-2 border-white">
        {/* 헤더 */}
        <div className="flex items-center gap-2 mb-3">
          <div className="text-2xl">🛠️</div>
          <div>
            <div className="font-['Pretendard:Bold',sans-serif] text-white text-[14px]">
              개발자 모드
            </div>
            <div className="font-['Pretendard:Regular',sans-serif] text-white/80 text-[10px]">
              프로덕션에서 삭제 필요!
            </div>
          </div>
        </div>

        {/* 버튼들 */}
        <div className="flex flex-col gap-2">
          {mode === 'login' && (
            <>
              <button
                onClick={handleQuickLogin}
                className="bg-white hover:bg-gray-100 text-purple-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
                  ⚡ 빠른 로그인
                </span>
              </button>
              
              <button
                onClick={handleCreateRandomAccount}
                className="bg-white/90 hover:bg-white text-pink-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
                  🎲 랜덤 계정 생성+로그인
                </span>
              </button>
              
              <button
                onClick={handleAdminLogin}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
                  🔐 관리자 로그인
                </span>
              </button>
            </>
          )}
          
          {mode === 'signup' && (
            <>
              <button
                onClick={handleCreateAllTestAccounts}
                className="bg-white hover:bg-gray-100 text-purple-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
                  👥 테스트 계정 3개 생성
                </span>
              </button>
              
              <button
                onClick={handleCreateRandomAccount}
                className="bg-white/90 hover:bg-white text-pink-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
                  🎲 랜덤 계정 생성+로그인
                </span>
              </button>
            </>
          )}
          
          <button
            onClick={handleResetUsers}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span className="font-['Pretendard:SemiBold',sans-serif] text-[13px]">
              🗑️ 전체 초기화
            </span>
          </button>
        </div>

        {/* 안내 */}
        <div className="mt-3 pt-3 border-t border-white/30">
          <div className="font-['Pretendard:Regular',sans-serif] text-white/90 text-[11px]">
            📝 비밀번호: Test1234!
          </div>
          <div className="font-['Pretendard:Regular',sans-serif] text-white/70 text-[9px] mt-1">
            삭제 방법: DevLogin.tsx 파일 삭제 후<br/>
            사용처에서 &lt;DevLogin /&gt; 제거
          </div>
        </div>
      </div>
    </div>
  );
}