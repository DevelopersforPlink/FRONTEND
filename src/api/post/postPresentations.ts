import axiosInstance from "../axiosInstance";

interface PresentationData {
  thumbnail: File | null;
  service_name: string;
  title: string;
  link: string;
  total_link: string;
  business_type: string;
  summary: string;
  summary_business_plan: File | null; 
  business_plan: File | null; 
  pitch_deck: File | null; 
  traction_data: File | null;  
  business_progress: string;
  is_summit: boolean;
}

export default async function postPresentations(data: PresentationData) {
  try {
    const formData = new FormData();
    
    formData.append("thumbnail", data.thumbnail || "");
    formData.append("service_name", data.service_name);
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("total_link", data.total_link);
    formData.append("business_type", data.business_type);
    formData.append("summary", data.summary);
    
    if (data.summary_business_plan) formData.append("summary_business_plan", data.summary_business_plan);
    if (data.business_plan) formData.append("business_plan", data.business_plan);
    if (data.pitch_deck) formData.append("pitch_deck", data.pitch_deck);
    if (data.traction_data) formData.append("traction_data", data.traction_data);

    formData.append("business_progress", data.business_progress);
    formData.append("is_summit", String(data.is_summit));
    
    const response = await axiosInstance.post(`api/presentations/`, formData);
    
    return response.data;
  } catch (error) {
    console.error("프레젠테이션 등록 실패: ", error);
    throw error;
  }
}
