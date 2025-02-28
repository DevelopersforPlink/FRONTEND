import axiosInstance from "../axiosInstance";

interface Request {
    email: string;
}

export default async function postCodeSend(data: Request) {
    try{
        const response = await axiosInstance.post(`api/user/verification-code/`, data);
        console.log("이메일 인증 번호 발송 성공:", response)
        return response.data;
    } catch (error) {
        console.error("이메일 인증 번호 발송 실패: ", error);
        throw error;
    }
}  