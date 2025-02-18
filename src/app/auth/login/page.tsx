// p.1
"use client"

import React, { useState } from 'react';
import Input from '@/shared/Input/Input';
import CheckboxComponent from '@/shared/CheckboxComponent';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '@/shared/CustomColumn';
import Image from 'next/image';
import CustomRow from '@/shared/CustomRow';
import AuthNavigation from './components/AuthNavigation';
import styled from '@emotion/styled'
import { useRouter } from 'next/navigation';

const Container = styled.div`
  width: 500px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--Common-White, #FFF);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.10); 
`

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const isButtonDisabled = userId.trim() === '' || password.trim() === '';

  const validatePassword = (value: string) => {
    if (value.length < 8) return false;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasLetter && hasNumber && hasSpecialChar;
  };

  const handleLogin = () => {
    if (!userId || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호 형식이 올바르지 않습니다.');
      return;
    }

    // 실제로는 API 호출이 필요하지만, 임시로 성공 메시지 표시
    router.push('/auth/registerProfile') 
  };
  
  return (
    <Container>
      <CustomRow $padding='60px 0 40px 0'>
        <Image 
          src="/Logo.svg"
          alt='logo' 
          width={142} 
          height={68} 
          layout="intrinsic"  //원본 비율을 유지하면서 컨테이너 크기에 맞춰 자동 조정
        />
      </CustomRow>
      
      {/* 로그인 버튼 정렬 */}
      <CustomColumn $width='100%' $gap='16px' $alignitems='center' $justifycontent='center'> 
        {/* 아이디, 비번 정렬 */}
        <CustomColumn $width='100%' $gap='8px' $alignitems="center" $justifycontent="center">
          <Input
            placeholder="아이디"
            scale="l"
            icon={false}
            required={true}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            scale="l"
            icon={true}
            required={true}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomColumn>

        {/* 아이디 저장 정렬 */}
        <CustomColumn $width='100%' $padding='0 0 0 43px' $alignitems="flex-start" $justifycontent="center"> 
          <CheckboxComponent
            label="아이디 저장"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </CustomColumn>

        <FilledButton
          scale="l"
          state={buttonState}
          // onClick={handleClick}
          onClick={handleLogin}
          disabled={isButtonDisabled}
        >
          로그인
        </FilledButton>
      </CustomColumn>

      <AuthNavigation/>
    </Container>
  )
}
