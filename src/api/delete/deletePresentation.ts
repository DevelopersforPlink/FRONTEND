import axiosInstance from "../axiosInstance";

export default async function deletePresentation(id:string){
    try{
        const response = await axiosInstance.delete(`api/presentations/${id}/`);
        console.log(`[ 🔍 등록한 프레젠테이션 삭제 연동 성공 ] : ,${response}`);
        return response.data
    }catch(error){
        console.error(`[ ❌ 등록한 프레젠테이션 삭제 연동 실패 ] : `, error)
        throw error
    }
}