import axiosInstance from "../axiosInstance";

interface RequestData {
  username: string;
  password: string;
}

interface ResponseData {
  message: string;
  access: string;
  user_id: string;
  is_agree: boolean;
  // 기타 response.data에 포함된 다른 필드들
}

export default async function postLogin(data: RequestData) {
  try {
    const response = await axiosInstance.post<ResponseData>(`/api/user/login/`, data);
    console.log('로그인 된 유저', response.data.user_id);

    // localStorage 저장은 useLoginStore에서 처리하도록 이동
    return {
        accessToken: response.data.access,
        userId: response.data.user_id,
        isAgree: response.data.is_agree,
        // 필요한 경우 다른 데이터도 반환
        //프론트 변수명: 백 변수명
    };
  } catch (error) {
    console.error("로그인 요청 실패: ", error);
    throw error;
  }
}