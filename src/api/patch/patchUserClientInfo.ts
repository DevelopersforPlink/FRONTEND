import axiosInstance from "../axiosInstance";

interface UserData {
  user: string;
  name: string;
  phone: string;
  image: null;
  company: string;
  company_position: string;
  company_email: string;
  certificate_employment: string;
  client_position: string;
}

export default async function patchUserClientInfo(data: UserData) {
  try {
      const response = await axiosInstance.patch(`api/user/client-info/`, data);
      // console.log(response.data);
      return response.data;
  } catch (error) {
    console.error("회원 정보 수정 실패: ", error);
    throw error; // 오류 처리를 호출자에게 전달하기 위해 throw 사용
  }
}