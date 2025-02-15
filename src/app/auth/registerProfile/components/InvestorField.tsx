import React, { useState } from "react";
import CustomColumn from "@/shared/CustomColumn";
import CustomRow from "@/shared/CustomRow";
import CertificationInput from "@/shared/Input/CertificationInput";
import FilledButton from "@/shared/Button/FIlledButton";
import FileUploadButton from "@/shared/Combination/FileUploadButton";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";

interface InvestorTabProps {
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonState: "default" | "pressed" | "disabled" | "hover";
  codeValue: string;
  handleCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const caption = (
  <>
    * 인증 메일이 오지 않으면 스팸 메일함을 확인해주세요. <br />
    * 인증 메일로 수신되지 않을 경우, 정확한 정보로 재시도 해주세요.
  </>
);

const InvestorTab: React.FC<InvestorTabProps> = ({
  email,
  setEmail,
  buttonState,
  codeValue,
  handleCodeChange,
  handleClick,
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
      <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
      <LabelWithCaptionWrapper
        label="회사 이메일"
        required={true}
        captionPosition="after"
        caption={isEmailValid ? '' : "이메일 형식이 올바르지 않습니다."}
        error={!isEmailValid}
      >
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <CertificationInput
              placeholder="회사 이메일"
              value={email}
              onChange={handleEmailChange}
              state="default"
            />
            <FilledButton scale="xs" state={buttonState} onClick={handleClick}>
              인증
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper
          label="인증번호"
          captionPosition="after"
          caption={caption}
          required={true}
          error={false}>
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <CertificationInput
              placeholder="000000"
              value={codeValue}
              onChange={handleCodeChange}
              state="default"
            />
            <FilledButton scale="xs" state={buttonState} onClick={handleClick}>
              재전송
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
        <FileUploadButton label="재직 증명서 사본" buttonState={buttonState} />
      </CustomColumn>
    </div>
  );
};

export default InvestorTab;