import axiosInstance from "../axiosInstance";

interface RequestData {
  username: string;
  password: string;
}

export default async function postJoin(data: RequestData) {
  try {
      const response = await axiosInstance.post(`/api/user/join/`, data);
      // console.log(response.data);
      return response.data;
  } catch (error) {
    console.error("회원가입 요청 실패: ", error);
    throw error; // 오류 처리를 호출자에게 전달하기 위해 throw 사용
  }
}