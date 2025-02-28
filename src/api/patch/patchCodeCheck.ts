import axiosInstance from "../axiosInstance";

interface Request {
    email: string;
    code: string;
}

export default async function patchCodeSend(data: Request) {
    try{
        const response = await axiosInstance.patch(`api/user/verification-code/`, data);
        console.log("인증코드 확인 성공:", response)
        return response.data;
    } catch (error) {
        console.error("인증코드 확인 실패: ", error);
        throw error;
    }
}  