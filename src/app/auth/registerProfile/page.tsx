// p.2
// profilModal(회원정보 등록 요청 모달) 관련해서는 패러랠라우트로 할지 그냥 페이지로 할지 컴포넌트로 분리할지 고민이라 아직 폴더로만 냅둠.
"use client"

import React, { useState } from 'react';
import CustomColumn from '@/shared/CustomColumn';
import Profile from '@/shared/Profile';
import OutlinedButtonComponent from '@/shared/Button/OutlinedButtonComponent';
import Modal from '@/shared/Modal/Modal';
import CheckboxComponent from '@/shared/CheckboxComponent';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import FilledButton from '@/shared/Button/FIlledButton';

export default function RegisterProfilePage() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'request' | 'pay'>('request');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <CustomColumn $width='100%' $gap='16px' $alignitems="flex-start" $justifycontent="center">
        <Profile
          profileImage="" // 프로필 사진 URL
          mainIcon="/icons/User.svg" // 기본 아이콘 경로
          secondaryIcon="/icons/Pic.svg" // 하단 아이콘 경로
        />
        <LabelWithCaptionWrapper
          label="재직 증명서 사본"
          required={true}
          error={false}
        >
          <OutlinedButtonComponent
            scale="l"
            state={buttonState}
            iconSrc="/icons/Folderadd.svg">
            파일 첨부 (최대 50MB PDF만 첨부)
          </OutlinedButtonComponent>
        </LabelWithCaptionWrapper>
        <CheckboxComponent
          label="필수 약관 전체 동의"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
                <FilledButton
          scale="l"
          state={buttonState}
          onClick={() => { setModalType('request'); toggleModal(); }}
        >
          등록하기
        </FilledButton>
        {isModalOpen && (
          <Modal
            modalText="회원정보 등록이 요청되었어요"
            closeModal={toggleModal}
            modalType='request'
          >
          </Modal>)}
      </CustomColumn>
    </div>
  )
}