// p. 1.1.1
"use client"

import React, { useState } from 'react';
import Input from '@/shared/Input/Input';
import FilledButton from '@/shared/Button/FIlledButton';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomColumn from '@/shared/CustomColumn';
import CustomRow from '@/shared/CustomRow';

export default function SignupPage() {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

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

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const isButtonDisabled = userId.trim() === '' || password.trim() === '' || !validatePassword(password);


  return (
    <div>
      <CustomColumn $width='100%' $gap='24px' $alignitems="flex-start" $justifycontent="center">
        <LabelWithCaptionWrapper
          label="아이디"
          required={true}
          error={false}
        >
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <Input
              placeholder="아이디"
              scale="m"
              icon={false}
              onChange={(e) => console.log(e.target.value)}
              value={userId}
              state="default"
            />
            <FilledButton
              scale="xs"
              state={buttonState}
              onClick={handleClick}
            >
              중복확인
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper
          label="비밀번호"
          caption='*최소 8자 이상 (영문, 숫자, 특수문자 포함 )'
          captionPosition="after"
          required={true}
          error={false}
        >
          <Input
            placeholder="비밀번호"
            scale="l"
            icon={true}
            iconSrc="/icons/Eyecrossed.svg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelWithCaptionWrapper>
        <FilledButton
          scale="l"
          state={buttonState}
          onClick={handleClick}
          disabled={isButtonDisabled} // 버튼 비활성화 상태
        >
          다음
        </FilledButton>
      </CustomColumn>
    </div>
  )
}
