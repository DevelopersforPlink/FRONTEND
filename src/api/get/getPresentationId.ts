import axiosInstance from "../axiosInstance";

interface presentationData {
  presentation: {
    id: string,
    thumbnail: string,
    service_name: string,
    title: string,
    link: string,
    total_link: string,
    business_type: string,
    summary: string,
    summary_business_plan: string,
    business_plan: string,
    pitch_deck: string,
    traction_data: string,
    business_progress: string,
    is_summit: string,
  }[];
  has_previous_version: boolean;
};

export default async function getPresentationId(id: string): Promise<presentationData> {
  try {
    const response = await axiosInstance.get(`api/presentations/${id}/`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("회원 정보 등록 실패: ", error);
    throw error; // 오류 처리를 호출자에게 전달하기 위해 throw 사용
  }
}

