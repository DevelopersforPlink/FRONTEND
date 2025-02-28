import axiosInstance from "../axiosInstance";

interface Request {
    password: string;
}

export default async function patchPwModify(data: Request) {
    try{
        const response = await axiosInstance.patch(`api/user/password/`, data);
        console.log("비밀번호 수정 성공:", response)
        return response.data;
    } catch (error) {
        console.error("비밀번호 수정 실패: ", error);
        throw error;
    }
}  