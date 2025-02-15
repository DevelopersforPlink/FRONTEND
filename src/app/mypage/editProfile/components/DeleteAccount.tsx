import React from "react";
import styled from "@emotion/styled";
import * as Typograghy from '@/app/typography';

const DeleteAccount = () => {
  return (
    <DeleteAccountContainer>
      <Text>
        더 이상 Plink 이용을 원하지 않으신가요?
      </Text>
      <Button>회원 탈퇴</Button>
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
