import axios from 'axios';

const API_BASE_URL= process.env.NEXT_PUBLIC_API_BASE_URL || '';

const axiosInstance = axios.create({
    baseURL:API_BASE_URL,
    timeout : 5000, // 5초 이상 응답이 없으면 요청 취소
    headers:{
        "Content-Type":"application/json"
    },
});

// 요청 인터셉터 : 모든 요청에 Authorization 헤더 자동 추가
axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined'){
            // 임시로 token localStorage에서 가져오는 방식으로 구현
            const token = localStorage.getItem('token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response){
            console.error('[ 🚨 API 응답 오류 ] : ', error.response);
            // if(error.response.status == 401){
            //     alert("인증이 필요합니다. 다시 로그인해주세요.")
            //     window.location.href='/auth/login'; // 인증 실패시 로그인 페이지로 이동
            // }
        }
        return Promise.reject(error)
    }
);

export default axiosInstance;


