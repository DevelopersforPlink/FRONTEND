import React from 'react'
import styled from '@emotion/styled'
import { Button4 } from '@/app/typography'
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
const Devider = styled.div`
  width: 1px;
  height: 15px;
  border: 1px solid var(--gray-scale-20);
`

function AuthNavigation() {
  const router = useRouter();
  
  // 경로 매핑
  const navigationLinks = [
    { label: '회원가입', path: '/auth/signup' },
    { label: '아이디 찾기', path: '/auth/findID' },
    { label: '비밀번호 재설정', path: '/auth/resetPW' },
  ]

  return (
    <CustomRow $gap='10px' $margin='32px 0 0 0' >
      {navigationLinks.map((item, index) => (
        <React.Fragment key={item.path}>
          <NavigationButton onClick={() => router.push(item.path)}>
            <Button4>{item.label}</Button4>
          </NavigationButton>
          {index < navigationLinks.length - 1 && <Devider />}
        </React.Fragment>
      ))}
    </CustomRow>
  )
}

export default AuthNavigation;
