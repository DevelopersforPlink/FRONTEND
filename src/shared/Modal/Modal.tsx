import React, {useState} from 'react';
import styled from '@emotion/styled';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '../CustomColumn';
import { Title5 } from '@/app/typography';

interface ModalProps {
  modalText: string;
  closeModal: () => void;
  modalType: 'request' | 'pay';
  children?: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 26, 28, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 462px;
  height: 323px;
  background-color: var(--common-white);
  position: relative;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000; /* 모달이 오버레이보다 위에 오도록 설정 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 중앙에 배치 */
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

const CircleWrapper = styled.div<{ modalType: 'request' | 'pay' }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${({ modalType }) => modalType === 'request' && `
    background-color: var(--primary-color-60);
  `}
  ${({ modalType }) => modalType === 'pay' && `
    background-color: var(--semantic-color-notice);
  `}
`;

const MainIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ModalText = styled(Title5)`
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

const Modal: React.FC<ModalProps> = ({ modalText, closeModal, modalType }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Overlay 클릭 시 모달 닫기
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick} />
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <img src="/icons/Crossmall.svg" alt="Close" />
        </CloseButton>
        <CustomColumn $width='100%' $gap='36px' $alignitems="center" $justifycontent="center" $marginTop='40px'>
        <CircleWrapper modalType={modalType}>
          <MainIcon src={modalType === 'request' ? '/icons/Check.svg' : '/icons/Card.svg'} alt="Main Icon" />
        </CircleWrapper>
        <ModalText>{modalText}</ModalText>
        <FilledButton
          scale="l"
          state="pressed"
          onClick={handleClick}
        >
          확인
        </FilledButton>
        </CustomColumn>
      </ModalWrapper>
    </>
  );
};

export default Modal;
