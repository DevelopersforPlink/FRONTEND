import axiosInstance from "../axiosInstance";

export default async function getPresentationDetail(id:string){
    try{
        const response = await axiosInstance.get(`api/presentations/${id}/pages/`);
        console.log(`[ 🔍 프레젠테이션 상세 페이지 연동 성공 ] : ,${response}`);
        return response.data
    }catch(error){
        console.error(`[ ❌ 프레젠테이션 상세 페이지 연동 실패 ] : `, error)
        throw error
    }
}