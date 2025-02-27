// p.1.1.1 비밀번호 재설정 페이지
"use client"

import React, { useState, useEffect } from 'react'
import Input from '@/shared/Input/Input';
import FilledButton from '@/shared/Button/FIlledButton';
import CustomColumn from '@/shared/CustomColumn';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomRow from '@/shared/CustomRow';
import Image from 'next/image';
import * as Typography from '@/app/typography'
import CertificationInput from '@/shared/Input/CertificationInput';
import { useRouter } from 'next/navigation';
import styled from "@emotion/styled";

// 에러 메시지 스타일
const ErrorMessage = styled(Typography.Caption7)`
  color: var(--sementic-color-negative);
  margin-top: 8px;
  /* height: 14px; 에러 메시지가 차지할 고정 높이 설정 */
`;

export default function ResetPWPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const [codeValue, setCodeValue] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifyButtonText, setVerifyButtonText] = useState("인증");
  const [verifyButtonDisabled, setVerifyButtonDisabled] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [verifyCodeButtonDisabled, setVerifyCodeButtonDisabled] = useState(true);
  const [codeInputState, setCodeInputState] = useState<"default" | "error" | "pressed" | "after">("default");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // const handleClick = () => {
  //   setButtonState(buttonState === "pressed" ? "default" : "pressed");
  // };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCodeValue(e.target.value);
  // }
  
  // const isButtonDisabled = userId.trim() === '' || codeValue.trim() === '';

  // 이메일 입력 상태에 따라 인증 버튼 활성화/비활성화
  useEffect(() => {
    if (userId.trim() === '') {
      setVerifyButtonDisabled(true);
    } else {
      setVerifyButtonDisabled(false);
    }
  }, [userId]);

  // 인증코드 입력 상태에 따라 확인 버튼 활성화/비활성화
  useEffect(() => {
    if (codeValue.length === 6) {
      setVerifyCodeButtonDisabled(false);
    } else {
      setVerifyCodeButtonDisabled(true);
    }
  }, [codeValue]);

  // resetTimer 플래그를 초기화하는 효과
  useEffect(() => {
    if (resetTimer) {
      // 타이머가 초기화된 후에는 resetTimer 플래그를 다시 false로 변경
      setTimeout(() => {
        setResetTimer(false);
      }, 100);
    }
  }, [resetTimer]);

  const handleEmailVerification = () => {
    setCodeValue(""); // 인증번호 입력창 초기화
    setCodeInputState("default");
    setErrorMessage(null);
    
    setShowTimer(true); // 인증 버튼 클릭 시 타이머 표시 시작  
    setResetTimer(true); // 타이머 초기화 플래그 설정
    
    if (!isEmailVerified) {
      // 첫 인증 시도
      setIsEmailVerified(true);
      setVerifyButtonText("재전송");
      // 여기에 인증 메일 발송 로직 추가
    } else {
      // 재전송 로직
      // 여기에 인증 메일 재전송 로직 추가
    }
  };

  // 인증코드 확인을 위한 가상의 올바른 코드 (실제로는 서버에서 검증)
  const correctCode = "123456";

  const handleCodeVerification = () => {
    // 인증코드 검증 로직
    if (codeValue === correctCode) {
      setVerificationSuccess(true);
      setButtonState("pressed");
      setPauseTimer(true);
      setCodeInputState("default");
      setErrorMessage(null); // 성공 시에만 에러 메시지 제거
    } else {
      // 인증 실패 시
      setVerificationSuccess(false);
      setCodeInputState("error");
      setErrorMessage("인증번호가 일치하지 않습니다. 다시 확인해주세요.");
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 6자리로 제한
    const newValue = e.target.value.slice(0, 6);
    setCodeValue(newValue);
  }

  // 다음 버튼은 이메일 입력, 인증코드 6글자 입력, 코드 확인 성공 시에만 활성화
  const isNextButtonDisabled = userId.trim() === '' || codeValue.length !== 6 || !verificationSuccess;

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
              state={verifyButtonDisabled ? "disabled" : "default"}
              onClick={handleEmailVerification}
              disabled={verifyButtonDisabled}
            >
              <Typography.Button2>
                {verifyButtonText}
              </Typography.Button2>
            </FilledButton>
          </CustomRow>
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper 
          label='인증번호'
          caption={
            <>
              * 인증 메일이 오지 않으면 스팸 메일함을 확인해주세요. <br />
              * 인증 메일로 수신되지 않을 경우, 정확한 정보로 재시도 해주세요.
            </>
          }
        >
          {/* <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
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
          </CustomRow> */}
          <CustomColumn $width="100%" $alignitems="flex-start" $gap="0">
            <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
              <div style={{ width: '100%', position: 'relative' }}>
                <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
                  <CertificationInput
                    placeholder="인증코드"
                    value={codeValue}
                    onChange={handleInputChange}
                    state={codeInputState}
                    showTimer={showTimer}
                    pauseTimer={pauseTimer}
                    resetTimer={resetTimer}
                  />
                  <FilledButton
                    scale="xs"
                    state={verifyCodeButtonDisabled ? "disabled" : "default"}
                    onClick={handleCodeVerification}
                    disabled={verifyCodeButtonDisabled}
                  >
                    <Typography.Button2>
                      확인
                    </Typography.Button2>
                  </FilledButton>
                </CustomRow>
                {verificationSuccess && (
                  <div style={{ position: 'absolute', right: '-64px', top: '50%', transform: 'translateY(-50%)' }}>
                    <Image 
                      src="/icons/CircleCheck.svg"
                      alt="verification success"
                      width={44}
                      height={44}
                    />
                  </div>
                )}
              </div>
            </CustomRow>
            <ErrorMessage>
                {errorMessage}
            </ErrorMessage>
          </CustomColumn>
        </LabelWithCaptionWrapper>
      </CustomColumn>

      <FilledButton
        scale="l"
        state={isNextButtonDisabled ? "disabled" : "default"}
        onClick={() => router.push('/auth/resetPW/changePW')}
        disabled={isNextButtonDisabled} // 버튼 비활성화 상태
      >
        다음
      </FilledButton>
    </CustomColumn>
  )
}