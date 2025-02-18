// p.7.1.2
// p.7.1.1
"use client"

import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Headline1 } from "@/app/typography";
import Gnb from '@/shared/Gnb';
import CustomColumn from '@/shared/CustomColumn';
import PTInfoField from '../components/PTInfoField';
import FileUploadField from '../components/FileUploadField';
import RadioFormField from '@/shared/Combination/RadioFormField';
import FilledButton from '@/shared/Button/FIlledButton';
import Modal from '@/shared/Modal/Modal';
import { useRouter } from 'next/navigation';

export default function PtUpload() {
  const router = useRouter();

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const [isModalOpen, setIsModalOpen] = useState(false);



  // 파일 상태 관리
  const [fileStatus, setFileStatus] = useState<any>({
    summary_business_plan: { selected: false, fileName: null },
    business_plan: { selected: false, fileName: null },
    pitch_deck: { selected: false, fileName: null },
    traction_data: { selected: false, fileName: null },
  });

  // 사업 진행도 상태 관리
  const [business_progress, setBusiness_progress] = useState<string>("");

  const handleFileSelect = (fileSelected: boolean, fileName: string | null, field: string) => {
    setFileStatus((prevState: any) => ({
      ...prevState,
      [field]: { selected: fileSelected, fileName: fileName },
    }));
  };
  
  // 사업 진행도 변경 핸들러
  const handleBusinessProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusiness_progress(e.target.value);
  };

  const radioOptions = [
    { label: "아이디어", value: "founder" },
    { label: "사업 진행중", value: "investor" },
  ];

  const isButtonDisabled = () => {
    return !(
      fileStatus.summary_business_plan.selected &&
      fileStatus.business_plan.selected &&
      fileStatus.pitch_deck.selected &&
      fileStatus.traction_data.selected &&
      business_progress
    );
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsModalOpen(true);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Gnb />
      <Container>
        <Title>프레젠테이션 등록</Title>
        <CustomColumn $width="25.875rem" $gap='1.5rem' $alignitems='flex-start'>
          <PTInfoField
            buttonState={buttonState}
            onFileSelect={handleFileSelect}
          />

          <FileUploadField
            buttonState={buttonState}
            onFileSelect={handleFileSelect}
          />

          <RadioFormField
            label="사업 진행도"
            options={radioOptions}
            name="business_progress"
            checkedValue={business_progress}
            onChange={handleBusinessProgressChange}
            disabled={false}
          />

          <FilledButton
            scale="l"
            state={buttonState}
            onClick={handleClick}
            disabled={isButtonDisabled()}
          >
            등록하기
          </FilledButton>
          {isModalOpen && (
            <Modal
              modalText="프레젠테이션 등록이 요청되었어요"
              closeModal={toggleModal}
              modalType="request"
              onConfirm={() => router.push('/founder')}
            />
          )}
        </CustomColumn>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2.5rem 0 11.78rem 0;
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

const Title = styled(Headline1)`
  margin: 2.5rem 0;
  width: 25.875rem;
  align-items: flex-start; 
`