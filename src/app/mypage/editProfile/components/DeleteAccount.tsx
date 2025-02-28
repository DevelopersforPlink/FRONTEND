import React, { useState } from "react";
import styled from "@emotion/styled";
import * as Typograghy from '@/app/typography';
import DeleteModal from "./DeleteModal";

const DeleteAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <DeleteAccountContainer>
      <Text>
        더 이상 Plink 이용을 원하지 않으신가요?
      </Text>
      <Button onClick={toggleModal}>회원 탈퇴</Button>
      {isModalOpen && (
        <DeleteModal
          modalText="정말 탈퇴하시겠어요?"
          modalDescription={<>
            탈퇴 버튼 선택 시, <br />
            계정은 삭제되며 복구되지 않습니다.
          </>}
          closeModal={toggleModal}
        />
      )}
    </DeleteAccountContainer>
  );
};

const DeleteAccountContainer = styled.div`
  display: flex;
  width: 25.875rem;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  color: var(--gray-scale-80);
  ${Typograghy.Caption6}
`;

const Button = styled.div`
  color: var(--gray-scale-80);
  text-align: center;
  ${Typograghy.Button4}
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default DeleteAccount;
