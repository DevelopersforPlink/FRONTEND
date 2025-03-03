import axiosInstance from "../axiosInstance";

export default async function getFounderMain(){
    try{
        const response = await axiosInstance.get(`api/presentations/uploaded/`);
        console.log(`[ 🔍 창업가 메인 페이지 연동 성공 ] : ,${response}`);
        return response.data
    }catch(error){
        console.error(`[ ❌ 창업가 메인 페이지 연동 실패 ] : `, error);
        throw error
    }
}