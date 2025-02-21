"use client"

import React, { useState } from 'react';
import styled from '@emotion/styled';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '@/shared/CustomColumn';
import { Label1, Title5 } from '@/app/typography';
import CustomRow from '@/shared/CustomRow';

interface ModalProps {
  modalText: string;
  modalDescription: React.ReactNode;
  closeModal: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
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
  width: 28.875rem;
  height: 20.625rem;
  background-color: var(--common-white);
  position: relative;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
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

const CircleWrapper = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: var(--sementic-color-notice);
  flex-shrink: 0;
`;

const MainIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem; 
  flex-shrink: 0;
`;

const ModalText = styled(Title5)`
  text-align: center;
  color: var(--gray-scale-90);
`;

const ModalDescription = styled(Label1)`
  text-align: center;
  color: var(--gray-scale-90);
`;

const ContentWrapper = styled.div`
  margin-top: 24px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteModal: React.FC<ModalProps> = ({ modalText, modalDescription, closeModal, onConfirm }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleCancelClick = () => {
    closeModal();
  };

  const handleDeleteClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick} />
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <img src="/icons/Crossmall.svg" alt="Close" />
        </CloseButton>
        <ContentWrapper>
          <CustomColumn $width='100%' $alignitems="center" $justifycontent="center" $marginTop='0.5rem'>
            <CircleWrapper>
              <MainIcon src="/icons/Trash.svg" alt="Trash Icon" />
            </CircleWrapper>
            <CustomColumn $gap='0.75rem'>
              <ModalText>{modalText}</ModalText>
              <ModalDescription>{modalDescription}</ModalDescription>
            </CustomColumn>
            <CustomRow $gap='0.75rem'>
            <FilledButton
              scale="s"
              state="pressed"
              onClick={handleCancelClick}
            >
              취소
            </FilledButton>
            <FilledButton
              scale="s"
              state="default"
              onClick={handleDeleteClick}
            >
              탈퇴
            </FilledButton>
            </CustomRow>
          </CustomColumn>
        </ContentWrapper>
      </ModalWrapper>
    </>
  );
};

export default DeleteModal;
