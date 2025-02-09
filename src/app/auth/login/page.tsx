// p.1
"use client"

import React, { useState } from 'react';
import Input from '@/shared/Input/Input';
import CheckboxComponent from '@/shared/CheckboxComponent';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '@/shared/CustomColumn';

export default function SignupPage() {

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

  return (
    <div>
      <CustomColumn $width='100%' $gap='16px' $alignitems="flex-start" $justifycontent="center">
        <CustomColumn $width='100%' $gap='8px' $alignitems="flex-start" $justifycontent="center">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomColumn>
        <CheckboxComponent
          label="아이디 저장"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <FilledButton
          scale="l"
          state={buttonState}
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          로그인
        </FilledButton>
      </CustomColumn>
    </div>
  )
}
