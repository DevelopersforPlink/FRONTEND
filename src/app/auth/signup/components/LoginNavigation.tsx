import React from 'react'
import styled from '@emotion/styled'
import { Caption5, Button4 } from '@/app/typography'
import CustomRow from '@/shared/CustomRow';
import { useRouter } from "next/navigation";

const NavigationButton = styled.button`
  font-size: x-small;
  background: none;
  border: none;
  color: var(--gray-scale-80);

  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`;

function LoginNavigation() {
  const router = useRouter();

  return (
    <CustomRow $width='100%' $gap='10px' >
      <Caption5>이미 계정이 있으신가요?</Caption5>
      <NavigationButton onClick={() => router.push("/auth/login")}>
        <Button4>로그인</Button4>
      </NavigationButton>
    </CustomRow>
  )
}

export default LoginNavigation;
