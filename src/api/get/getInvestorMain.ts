import axiosInstance from "../axiosInstance";

export default async function getInvestorMain(category:string, page:number, page_size:number, business_progress:string) {
    try{
        const response = await axiosInstance.get(`api/investors/main/?category=${category}&page=${page}&page_size=${page_size}&business_progress=${business_progress}`);
        console.log(`[ 🔍 투자자 메인 페이지 연동 성공 ] : ,${response}`);
        return response.data
    }catch(error){
        console.error(`[ ❌ 창업가 메인 페이지 연동 실패 ] : `, error)
        throw error
    }
}