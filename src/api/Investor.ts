import axiosInstance from './axiosInstance';
import { InvestorMainResponse } from './type';

export const fetchInvestorMain = async(
    category:string='전체',
    page:number=1,
    page_size:number=12,
):Promise<InvestorMainResponse> => {
    try{
        const response = await axiosInstance.get<InvestorMainResponse>("/api/investors/main/",{
            params: { 
                category: "전체", // 처음 통신하는 값은 전체(All)로 설정
                page: {page}, 
                page_size: {page_size}, 
                "business_progress":"business_progress"
            },
            
            // 토큰 부분 추가로 작업하기
            // headers: { Authorization: `Bearer ${token}` }
        })
        return response.data;
    }catch(error){
        console.error('[ 🚨 투자자 메인페이지 조회 실패 ] : ',error);
        throw error
    }
};