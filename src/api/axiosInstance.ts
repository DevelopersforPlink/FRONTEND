import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

// 토큰 관련 함수
const getAccessToken = (): string | null => localStorage.getItem("accessToken");
const getRefreshToken = (): string | null => localStorage.getItem("refreshToken");
const getUserId = (): string | null => localStorage.getItem("userId"); // 사용자 ID 가져오기
const setAccessToken = (token: string): void => localStorage.setItem("accessToken", token);
const clearTokens = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000, // 5초
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    console.log("Access Token:", accessToken); // 토큰 값 확인(변수명accessToken을 저장 시(postLogin.ts참고)의 변수명과 동일하게 맞춰야함.)

    //회원가입 요청은 accessToken을 추가하지 않음
    if (config.url?.includes("/api/user/join")) {
      console.log("회원가입 요청 - Authorization 헤더 제외");
      return config;
    }

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`; //`Bearer ${accessToken}` 원래는 이건데 이번에는 백에서 Bearer를 붙여서 줘서 뺌
      console.log("Authorization 헤더:", config.headers.Authorization);
    }
    console.log("config 확인:", config);
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 토큰 갱신 실패 카운터 (전역 변수)
let tokenRefreshFailCount = 0;

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    // 401 에러 처리: 액세스 토큰이 만료되었거나 유효하지 않다고 판단.
    if (error.response?.status === 401) {
      // 토큰 갱신 시도: 이 값이 없으면 재로그인 필요
      // const refreshToken = getRefreshToken(); //리프레시 토큰을 서버에서 관리하므로 제거.
      const userId = getUserId();

      // if (refreshToken && userId) {
      if (userId) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/refresh-token/`, {
            user_id: userId
          });

          // 토큰 갱신 성공 시 카운터 초기화
          tokenRefreshFailCount = 0;
          
          // 새 토큰 저장 및 원래 요청 재시도
          setAccessToken(data.access);
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${data.access}`;
          }

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // 토큰 갱신 실패 시 카운터 증가 (3번까지 시도)
          tokenRefreshFailCount++;
          console.error(`토큰 갱신 실패 (${tokenRefreshFailCount}회)`, refreshError);
          
          // 3회 이상 실패 시 재로그인 유도
          if (tokenRefreshFailCount >= 3) {
            console.error("토큰 갱신 실패 횟수 초과, 재로그인 필요");
            clearTokens();
            
            // 사용자에게 재로그인이 필요하다는 알림
            alert("보안을 위해 다시 로그인해주세요.");
            
            // 로그인 페이지로 이동
            if (typeof window !== 'undefined') {
              window.location.href = "/auth/login";
            }
          }
        }
      } else {
        // refreshToken이나 userId가 없는 경우
        clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = "/auth/login";
        }
      }
      
      return Promise.reject(error);
    }

    // 401 이외의 에러는 그대로 반환
    return Promise.reject(error);
  }
);

// Next.js가 아닌 환경에서 라우팅 처리를 위한 함수
// const navigateToLogin = () => {
//   // 브라우저 환경인 경우
//   if (typeof window !== 'undefined') {
//     window.location.href = "/auth/login";
//   }
// };

// 응답 인터셉터
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as any; // any 타입으로 임시 처리
//     originalRequest._retryCount = originalRequest._retryCount || 0;

//     if (error.response?.status === 401 && originalRequest._retryCount < 3) {
//       originalRequest._retryCount += 1;
      
//       // 재시도 횟수가 3회 이상이면 로그인 페이지로 리디렉션
//       if (originalRequest._retryCount >= 3) {
//         console.error("토큰 갱신 실패 횟수 초과");
//         clearTokens();
//         navigateToLogin();
//         return Promise.reject(error);
//       }

//       const refreshToken = getRefreshToken();
//       const userId = getUserId();

//       if (refreshToken && userId) {
//         try {
//           const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/refresh-token/`, {
//             user_id: userId // API 명세서에 맞게 수정
//           });

//           setAccessToken(data.access); // 응답 형식에 맞게 수정
//           if (originalRequest.headers) {
//             originalRequest.headers.Authorization = `Bearer ${data.access}`;
//           }

//           return axiosInstance(originalRequest);
//         } catch (refreshError) {
//           console.error("토큰 갱신 실패:", refreshError);
//           clearTokens();
//           navigateToLogin();
//         }
//       } else {
//         clearTokens();
//         navigateToLogin();
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;