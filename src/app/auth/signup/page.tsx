// p. 1.1.1
"use client"

import React, { useState } from 'react';
import Input from '@/shared/Input/Input';
import FilledButton from '@/shared/Button/FIlledButton';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomColumn from '@/shared/CustomColumn';
import CustomRow from '@/shared/CustomRow';
import Image from 'next/image';
import * as Typography from '@/app/typography'
import LoginNavigation from './components/LoginNavigation';
import { useRouter } from 'next/navigation';
import Modal from '@/shared/Modal/Modal';

export default function SignupPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalType, setModalType] = useState<'idCheck' | 'signupComplete'>('idCheck');

  const validatePassword = (value: string) => {
    // 길이 체크 (8자 ~ 15자)
    if (value.length < 8 || value.length > 15) {
      return false;
    }

    // 영문 대소문자, 숫자, 특수문자 존재 여부 체크
    // const hasUpperCase = /[A-Z]/.test(value); // 대문자 포함 여부
    // const hasLowerCase = /[a-z]/.test(value); // 소문자 포함 여부
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value); // 숫자 포함 여부
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value); // 특수문자 포함 여부

    // 두 가지 이상 조합인지 확인
    // const criteriaCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;
    // return criteriaCount >= 2;
    return hasLetter && hasNumber && hasSpecialChar;
  };

  //41~65줄 추가
  const handleIdCheck = () => {
    // 실제로는 API 호출이 필요하지만, 임시로 항상 사용 가능하다고 표시
    // alert('사용 가능한 아이디입니다.');
    setModalText('사용 가능한 아이디입니다.');
    setModalType('idCheck');
    setModalVisible(true);
    setIsIdChecked(true);
  };
  const handleSignup = () => {
    if (!isIdChecked) {
      alert('아이디 중복확인을 해주세요.');
      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 모두 포함해야 합니다.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 실제로는 API 호출이 필요하지만, 임시로 성공 메시지 표시
    // alert('회원가입이 완료되었습니다.');
    setModalText('회원가입이 완료되었습니다.');
    setModalType('signupComplete');
    setModalVisible(true);
  };

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const isButtonDisabled = userId.trim() === '' || password.trim() === '' || !validatePassword(password);

  const handleModalConfirm = () => {
    if (modalType === 'signupComplete') {
      router.push('/auth/login'); // 회원가입 완료 후 로그인 페이지로 이동
    }
    setModalVisible(false); // 모달 닫기
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
        <Typography.Headline1>
          회원가입
        </Typography.Headline1>
      </CustomColumn>      

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
              value={userId}
              state="default"
              // onChange={(e) => console.log(e.target.value)}
              onChange={(e) => setUserId(e.target.value)}
            />
            <FilledButton
              scale="xs"
              state={buttonState}
              // onClick={handleClick}
              onClick={handleIdCheck}
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
            required={true}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelWithCaptionWrapper>
        
        <LabelWithCaptionWrapper
          label="비밀번호 확인"
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </LabelWithCaptionWrapper>

        <FilledButton
          scale="l"
          state={buttonState}
          // onClick={handleClick}
          onClick={handleSignup}
          disabled={isButtonDisabled} // 버튼 비활성화 상태
        >
          다음
        </FilledButton>
      </CustomColumn>

      <LoginNavigation />


      {modalVisible && (
        <Modal
          modalText={modalText}
          closeModal={() => setModalVisible(false)}
          modalType="request"
          onConfirm={handleModalConfirm}
        />
      )}
    </CustomColumn>
  )
}
