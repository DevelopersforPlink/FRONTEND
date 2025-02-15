// p.1.1.2 비밀번호 재설정 페이지
"use client"

import React, { useState } from 'react';
import Input from '@/shared/Input/Input';
import FilledButton from '@/shared/Button/FIlledButton';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomColumn from '@/shared/CustomColumn';
import CustomRow from '@/shared/CustomRow';
import Image from 'next/image';
import * as Typography from '@/app/typography'

export default function PasswordChangePage() {
  const [password, setPassword] = useState('');
  const [checkPw, setCheckPw] = useState('');

  const validatePassword = (value: string) => {
    // 길이 체크 (8자 ~ 15자)
    if (value.length < 8 || value.length > 15) {
      return false;
    }

    // 영문 대소문자, 숫자, 특수문자 존재 여부 체크
    const hasUpperCase = /[A-Z]/.test(value); // 대문자 포함 여부
    const hasLowerCase = /[a-z]/.test(value); // 소문자 포함 여부
    const hasNumber = /\d/.test(value); // 숫자 포함 여부
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value); // 특수문자 포함 여부

    // 두 가지 이상 조합인지 확인
    const criteriaCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

    return criteriaCount >= 2;
  };

  // 비밀번호 일치 여부를 확인하는 함수 추가
  const validatePasswordMatch = () => {
    return password === checkPw;
  };

  //
  const isButtonDisabled = 
    !password || // 비밀번호 입력값이 없으면 true
    !checkPw || // 비밀번호 확인 입력값이 없으면 true
    !validatePassword(password) || // 비밀번호가 유효성 검사를 통과하지 못하면 true
    !validatePasswordMatch(); // 비밀번호와 비밀번호 확인이 일치하지 않으면 true

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  return (
    <CustomColumn $gap='2.5rem'>
      <CustomColumn $width='100%' $gap='1.5rem' $alignitems='flex-start'>
        <Image 
          src="/SmallLogo.svg"
          alt='smalllogo' 
          width={80} 
          height={80} 
          layout="intrinsic"  //원본 비율을 유지하면서 컨테이너 크기에 맞춰 자동 조정
        />
        <Typography.Title4>
          비밀번호를 잊어버리셨나요?
        </Typography.Title4>
        <Typography.Body5>
          가입한 계정 정보를 입력해주세요.<br/>
          가입 계정 이메일로 인증번호를 보내드립니다.
        </Typography.Body5>
      </CustomColumn>      

      <CustomColumn $width='100%' $gap='1.5rem' $alignitems="flex-start" $justifycontent="center">
        <LabelWithCaptionWrapper
          label="변경할 비밀번호"
          caption='*최소 8자 이상 (영문, 숫자, 특수문자 포함 )'
          captionPosition="after"
          required={true}
          error={false}
        >
          <Input
            placeholder="비밀번호"
            scale="l"
            icon={true}
            required={true}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelWithCaptionWrapper>
        
        <LabelWithCaptionWrapper
          label="변경할 비밀번호 확인"
          captionPosition="after"
          required={true}
          error={false}
        >
          <Input 
            placeholder='비밀번호 확인'
            scale='l'
            icon={true}
            required={true}
            type="password"
            value={checkPw}  // value 속성 추가
            onChange={(e) => setCheckPw(e.target.value)}  // setCheckPw로 수정
          />
        </LabelWithCaptionWrapper>

        <FilledButton
          scale="l"
          state={buttonState}
          onClick={handleClick}
          disabled={isButtonDisabled} // 버튼 비활성화 상태
        >
          <Typography.Button1>
            비밀번호 변경하기
          </Typography.Button1>
        </FilledButton>
      </CustomColumn>
    </CustomColumn>
  )
}