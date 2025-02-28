import axiosInstance from "../axiosInstance";

interface clientData {
  user: string;
  name: string;
  phone: string;
  image: string | null;
  company: string;
  company_position: string;
  company_email: string;
  certificate_employment: string | null;
  client_position: string;
  summit_count: number;
  pt_count: number;
  is_approve: boolean | null;
  status: string;
};

export default async function getUserClientInfo () {
  try {
    const response = await axiosInstance.get(`api/user/client-info/`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("회원 정보 불러오기 실패: ", error);
    throw error; // 오류 처리를 호출자에게 전달하기 위해 throw 사용
  }
}

