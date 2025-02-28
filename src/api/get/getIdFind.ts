import axiosInstance from "../axiosInstance";

export default async function getIdFind() {
    try{
        const response = await axiosInstance.get(`api/user/id/`);
        console.log("아이디 조회 성공:", response)
        return response.data;
    } catch (error) {
        console.error("아이디 조회 실패: ", error);
        throw error;
    }
}  