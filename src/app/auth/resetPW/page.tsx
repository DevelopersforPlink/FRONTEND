// p.1.1.1 비밀번호 재설정 페이지
"use client"

import React, { useState } from 'react'
import Input from '@/shared/Input/Input';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '@/shared/CustomColumn';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomRow from '@/shared/CustomRow';
import Image from 'next/image';
import * as Typography from '@/app/typography'
import CertificationInput from '@/shared/Input/CertificationInput';

export default function ResetPWPage() {
  const [userId, setUserId] = useState('');
  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const [codeValue, setCodeValue] = useState("");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
  }
  
  const isButtonDisabled = userId.trim() === '' || codeValue.trim() === '';

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
          가입한 계정 정보를 입력해주세요. <br/>
          가입 계정 이메일로 인증번호를 보내드립니다.
        </Typography.Body5>
      </CustomColumn> 

      <CustomColumn $width='100%' $gap='1.5rem' $alignitems="flex-start" $justifycontent="center">
        <LabelWithCaptionWrapper
          required={true}
          error={false}
        >
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <Input
              placeholder="example@google.com"
              scale="m"
              icon={false}
              value={userId}
              state="default"
              // onChange={(e) => console.log(e.target.value)}
              onChange={(e) => setUserId(e.target.value)}
            />
            <FilledButton
              scale="xs"
              state={buttonState}
              onClick={handleClick}
            >
              인증
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper label='인증번호'>
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <CertificationInput
              placeholder="인증코드"
              value={codeValue}
              onChange={handleInputChange}
              state="default"
            />
            <FilledButton
              scale="xs"
              state={buttonState}
              onClick={handleClick}
            >
              재전송
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
      </CustomColumn>

      <FilledButton
        scale="l"
        state={buttonState}
        onClick={handleClick}
        disabled={isButtonDisabled} // 버튼 비활성화 상태
      >
        다음
      </FilledButton>
    </CustomColumn>
  )
}