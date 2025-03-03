"use client"

import React, { useState } from 'react';
import styled from '@emotion/styled';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '../CustomColumn';
import { Title5 } from '@/app/typography';
import { useRouter } from "next/navigation";
import { Label1 } from '@/app/typography';
import * as Typography from '@/app/typography'

interface ModalProps {
  modalText: string;
  closeModal: () => void;
  modalType: 'request' | 'pay' | 'secession';
  onConfirm?: ()=> void;
  children?: React.ReactNode;
  caption?:string | null;
  customButtonText?: string; // 버튼 텍스트를 커스터마이징할 수 있는 prop 추가
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 26, 28, 0.6);
  z-index: 1;
`;

const ModalWrapper = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: relative; */
  position: absolute;
  top: 50%;
  left: 50%;

  width: 462px;
  height: 323px;

  /* padding: 20px; */
  padding: 1.5rem;
  
  border-radius: 16px;
  background-color: var(--common-white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--gray-scale-10);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

const CircleWrapper = styled.div<{ modalType: 'request' | 'pay' | 'secession'}>`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  margin-right: 0;

  ${({ modalType }) => modalType === 'request' && `
    background-color: var(--primary-color-60);
  `}
  ${({ modalType }) => (modalType === 'pay' || modalType === 'secession') && `
    background-color: var(--sementic-color-notice);
  `}
`;

const MainIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ModalText = styled(Title5)`
  text-align: center;
  color: var(--gray-scale-90);
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.13rem;

  white-space: pre-line;
`;

const Caption = styled(Label1)`
  color: var(--gray-scale-90, #2E3338);
  text-align: center;
`;

const Modal: React.FC<ModalProps> = ({ modalText, closeModal, modalType, onConfirm, caption, customButtonText}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Overlay 클릭 시 모달 닫기
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const router = useRouter();

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");

    if (onConfirm) {
      onConfirm();  // 부모 컴포넌트에서 전달된 경로 변경 함수 호출
      closeModal();  // 모달 닫기
    }
  };


  return (
    <>
      <Overlay onClick={handleOverlayClick} />
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <img src="/icons/Crossmall.svg" alt="Close" />
        </CloseButton>
        <ContentWrapper>
          <CustomColumn $width='100%' 
          // $gap='36px' 
          $alignitems="center" 
          $justifycontent="center" 
          // $marginTop='5.75rem'
          >
            <CircleWrapper modalType={modalType}>
              <MainIcon src={modalType === 'request' ? '/icons/Check.svg' : '/icons/Card.svg'} alt="Main Icon" />
            </CircleWrapper>
            <ModalText>{modalText}</ModalText>
            {caption && <Caption>{caption}</Caption>}
            <FilledButton
              scale="l"
              state="default"
              onClick={handleClick}
            >
              <Typography.Button2>
                {customButtonText || "확인"} {/* 커스텀 텍스트가 있으면 사용, 없으면 기본값 */}
              </Typography.Button2>
            </FilledButton>
          </CustomColumn>
        </ContentWrapper>
      </ModalWrapper>
    </>
  );
};

export default Modal;
