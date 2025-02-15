import React, { useState } from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import InputFormField from "../../../../shared/Combination/InputFormField";

interface FounderTabProps {
  company_email: string;
  setCompany_email: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const FounderTab: React.FC<FounderTabProps> = ({
  company_email,
  setCompany_email
}) => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setCompany_email(e);

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
          value={company_email}
          onChange={handleEmailChange}
          placeholder="example@google.com"
        />
      </LabelWithCaptionWrapper>
    </div>
  );
};

export default FounderTab;