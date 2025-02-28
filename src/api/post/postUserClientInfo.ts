import axiosInstance from "../axiosInstance";

interface RegisterData {
  name: string;
  phone: string;
  image: string | null;
  company: string;
  company_position: string;
  company_email: string;
  certificate_employment: string | null;
  client_position: string;
}

export default async function postUserClientInfo(data: RegisterData) {
  try {
    const formData = new FormData();
    
    // 필수 필드 추가
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('company', data.company);
    formData.append('company_position', data.company_position);
    formData.append('company_email', data.company_email);
    formData.append('client_position', data.client_position);

    const response = await axiosInstance.post(`api/user/client-info/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("회원 정보 등록 실패: ", error);
    throw error; // 오류 처리를 호출자에게 전달하기 위해 throw 사용
  }
}