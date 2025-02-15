import React, { useState } from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import InputFormField from "./InputFormField";

interface FounderTabProps {
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const FounderTab: React.FC<FounderTabProps> = ({
  email,
  setEmail
}) => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(e);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(emailValue));
  };

  return (
    <div>
      <LabelWithCaptionWrapper
        required={true}
        captionPosition="after"
        caption={isEmailValid ? '' : "이메일 형식이 올바르지 않습니다."}
        error={!isEmailValid}
      >
        <InputFormField
          label="회사 이메일"
          required={true}
          value={email}
          onChange={handleEmailChange}
          placeholder="example@google.com"
        />
      </LabelWithCaptionWrapper>
    </div>
  );
};

export default FounderTab;