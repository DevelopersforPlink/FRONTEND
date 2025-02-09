// p.1.1.1 비밀번호 재설정 페이지
"use client"

import React, { useState } from 'react';
import CustomRow from '@/shared/CustomRow';
import CertificationInput from '@/shared/Input/CertificationInput';
import FilledButton from '@/shared/Button/FIlledButton';

export default function ResetPWPage() {

    const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  
    const handleClick = () => {
      setButtonState(buttonState === "pressed" ? "default" : "pressed");
    };
  
    const [codeValue, setCodeValue] = useState("");
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCodeValue(e.target.value);
    }

  return (
    <div>
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
    </div>
  )
}