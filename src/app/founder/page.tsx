"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UploadList from "./components/UploadList";
import { Headline1, Title2 } from "../typography";
import OutlinedButtonComponent from "@/shared/Button/OutlinedButtonComponent";
import styled from "@emotion/styled";
import { boxList } from "@/constant/testVideos";
import EmptyContent from "@/shared/EmptyContent";
import Pagination from "@/shared/Pagination";

// ✅ API 함수 가져오기
import getFounderMain from "@/api/get/getFounderMain";

const FounderMain = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1); // 현재 페이지 상태
  // const [data, setData] = useState<any>(null); // API 데이터 상태
  const [data, setData] = useState({
    page: 1,
    page_size: 12,
    total_pages: 1,
    total_items: 0,
    presentations: [],
  });

  // ✅ API 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFounderMain();
        if (!response || !response.presentations) {
          throw new Error("유효한 데이터를 받지 못했습니다.");
        }
        console.log("✨ 창업자 메인 페이지 연동 성공", response);
        setData(response);
      } catch (error: any) {
        console.error("[ ❌ 창업자 메인 페이지 연동 실패 ] :", error.response);
        alert(" ❌ 창업자 메인 페이지 연동 실패 ");
        setData({ page: 1, page_size: 12, total_pages: 1, total_items: 0, presentations: [] });
      }
    };
  
    fetchData();
  }, []);
  

  // ✅ 페이지 변경 핸들러
  const handlePageClick = (page: number) => {
    setPage(page); // 클릭한 페이지로 업데이트
  };

  return (
    <Container>
      <Title>등록한 프레젠테이션</Title>
      <UploadButton
        scale="xs"
        state="default"
        children="등록하기"
        iconSrc="/icons/Pluscircle.svg"
        onClick={() => {
          router.push("/founder/upload");
        }}
      />
      {/* <UploadList data={data.presentations} /> */}
      {/* <UploadList data={data?.presentations ?? []} /> */}
      {/* ✅ 프레젠테이션이 있으면 `UploadList` 렌더링 */}
      {data.presentations.length > 0 ? (
        <UploadList data={data.presentations} />
      ) : (
        /* ✅ 프레젠테이션이 없으면 `EmptyContent` 렌더링 */
        <EmptyContent type="upload" />
      )}

      {/* ✅ 페이지가 1개 이상일 때만 Pagination 렌더링 */}
      {data && data.total_pages > 1 && (
        <Pagination
          onPageChange={handlePageClick}
          current_page={data?.page ?? 1}
          total_page={data?.total_pages ?? 1}
        />
      )}
    </Container>
  );
};

export default FounderMain;

// ✅ 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
`;

const Title = styled(Headline1)`
  margin: 2.5rem auto auto 0;
`;

const UploadButton = styled(OutlinedButtonComponent)`
  margin: 1.38rem 0 1.38rem auto;
`;
