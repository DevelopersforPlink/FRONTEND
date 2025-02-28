import axiosInstance from "../axiosInstance";

export default async function getIdCheck(username: string) {
  if (!username) {
    throw new Error("ID를 입력하세요.");
  }

  try {
    const response = await axiosInstance.get(`api/user/id-check/?username=${username}`);
    return response.data;
  } catch (error: any) {
    console.error("아이디 중복 체크 실패: ", error);
    throw error.response?.data?.message || "아이디 중복 체크 중 오류 발생";
  }
}