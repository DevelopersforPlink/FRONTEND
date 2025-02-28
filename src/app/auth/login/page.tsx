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
import * as Typography from '@/app/typography'
import postLogin from '@/api/post/postLogin';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const isButtonDisabled = username.trim() === '' || password.trim() === '';

  const validatePassword = (value: string) => {
    if (value.length < 8) return false;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasLetter && hasNumber && hasSpecialChar;
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호 형식이 올바르지 않습니다.');
      return;
    }

    // 실제로는 API 호출이 필요하지만, 임시로 성공 메시지 표시
    // alert('로그인 되었습니다.');
    // router.push('/founder') 
    const userData = {
      username,
      password,
    }
    console.log('회원가입 데이터: ', userData); // 리퀘스트 데이터

    try {
      const response = await postLogin(userData);
      console.log('로그인 성공: ', response);
      // 로컬스토리지에 유저 아이디, 액세스토큰 저장
      localStorage.setItem('user_id', response.userId);
      localStorage.setItem('accessToken', response.accessToken);

      // is_agree 값에 따라 다른 페이지로 리디렉션
      if (response.isAgree) {
        // is_agree가 true면 이동할 곳 정의.
        // 창업가인지 투자자인지에 따라 다르게 이동해야함.
        router.push('/founder'); 
      } else {
        router.push('/auth/registerProfile');
      }
    } catch (error: any) {
      console.error('에러: ', error.response);
      alert('로그인에 실패했습니다.');
    }
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <Typography.Button2>
            로그인
          </Typography.Button2>
        </FilledButton>
      </CustomColumn>

      <AuthNavigation/>
    </Container>
  )
}
