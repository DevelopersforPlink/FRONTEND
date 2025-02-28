// p.9
"use client"

import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import * as Typography from '@/app/typography';
import Gnb from "@/shared/Gnb";
import CustomRow from "@/shared/CustomRow";
import CustomColumn from "@/shared/CustomColumn";
import Image from "@/app/mypage/components/Image";
import FilledButton from "@/shared/Button/FIlledButton";
import { useRouter } from "next/navigation";
import StatusChip from "@/shared/StatusChip";
import getUserClientInfo from "@/api/get/getUserClientInfo";

interface clientData {
  user: string,
  name: string,
  phone: string,
  image: null,
  company: string,
  company_position: string,
  company_email: string,
  certificate_employment: null,
  client_position: string,
  summit_count: number,
  pt_count: number,
  is_approve: boolean | null,
  status: string,
}

export default function MyPage() {
  const router = useRouter();
  const [clientData, setClientData] = useState<clientData | null>(null);

  useEffect(() => {
    async function fetchClientInfo() {
      try {
        const data = await getUserClientInfo();
        setClientData(data);
      } catch (error) {
        console.error("회원 정보 불러오기 실패: ", error)
      }
    }
    fetchClientInfo();
  }, []);

  const getApprovalStatus = (status: string) => {
    if (status === 'Y') return true;
    if (status === 'N') return false;
    return null;
  }

  return (
    <>
      <Gnb />
      <Container>
        <CustomRow $width="25.875rem" $gap="1.5rem" $justifycontent="flex-start">
          <Typography.Headline1>내 정보</Typography.Headline1>
          {clientData && clientData.status && (
            <StatusChip is_approve={getApprovalStatus(clientData.status)} />
          )}
        </CustomRow>
        {clientData && (
          <CustomRow $width="25.9rem" $gap="1.25rem" $justifycontent="flex-start" $alignitems="center" $margin="2.5rem 0 0 0">
            <Image profileImage={clientData.image || ""} mainIcon="/icons/User.svg" />
            <CustomColumn $gap="0.5rem" $alignitems="flex-start">
              <CustomRow $gap="0.5rem" $alignitems="flex-end" $alignself="stretch">
                <Typography.Title5>{clientData.name}</Typography.Title5>
                <Typography.Caption5>{clientData.client_position}</Typography.Caption5>
              </CustomRow>
              <Typography.Caption6>{clientData.company} | {clientData.company_position}</Typography.Caption6>
            </CustomColumn>
          </CustomRow>
        )}
        <Others>
          <CustomRow $gap="3.125rem" $alignself="stretch">
            <Label>전화번호</Label>
            <Value>{clientData?.phone || '정보 없음'}</Value>
          </CustomRow>
          <CustomRow $gap="3.125rem" $alignself="stretch">
            <Label>이메일</Label>
            <Value>{clientData?.company_email || '정보 없음'}</Value>
          </CustomRow>
        </Others>
        <FilledButton
          scale="l"
          state="default"
          onClick={() => router.push('/mypage/editProfile')}
        >
          내 정보 수정하기
        </FilledButton>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2.5rem 0;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Others = styled.div`
  display: flex;
  width: 25.875rem;
  margin: 2rem 0 2.5rem 0;
  padding: 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid var(--gray-scale-20);
  background: #FFF;
`

const Label = styled.div`
  ${Typography.Caption1}
  color: var(--gray-scale-90);
  width: 8.125rem;
`

const Value = styled.div`
  ${Typography.Caption5}
  color: var(--gray-scale-100);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
`