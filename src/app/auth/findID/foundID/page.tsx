"use client"

import React from 'react'
import CustomRow from '@/shared/CustomColumn';
import CustomColumn from '@/shared/CustomColumn';
import Image from 'next/image';
import * as Typography from '@/app/typography'
import styled from '@emotion/styled'
import FilledButton from '@/shared/Button/FIlledButton';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  width: 40rem;
  height: 12rem;
  padding: 2.375rem 12rem 2.375rem 12rem;;
  border-radius: 1.25rem;
  background: var(--Common-White, #FFF);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.10);
`
const StyledButton = styled.button`
  width: 305px;
  height: 50px;
  background-color: var(--gray-scale-10);
  color: var(--gray-scale-50);
  border-radius: 0.625rem;
  border: none;

  &:hover {
    opacity: 0.8;
    border: 0.15rem solid  var(--gray-scale-50);
  }
`;

function FoundIDPage() {
  const foundID = "abcd1234";
  const router = useRouter();

  return (
    //gap: 30px 먹는 이상한 문제 해결하기 위함
    <CustomColumn $gap='0px'> 
      <CustomColumn $padding='0 0 2.19rem 0'>
        <Image 
          src="/Logo.svg"
          alt='logo' 
          width={142} 
          height={68} 
          layout="intrinsic"  //원본 비율을 유지하면서 컨테이너 크기에 맞춰 자동 조정
        />
        <Typography.Headline1>
          입력하신 정보와 일치하는 아이디를 찾았어요
        </Typography.Headline1>
      </CustomColumn>

      <CustomColumn>
        <Container>
          <CustomColumn $gap='2rem'>
            <Typography.Title9>
              아래 아이디로 로그인 해주세요.
            </Typography.Title9>
            <Typography.Headline1 style={{color: "var(--primary-color-60)"}}>
              {foundID}
            </Typography.Headline1>
          </CustomColumn>
        </Container>
      </CustomColumn>
    
      <CustomRow $width="100%" $padding='2.5rem 0 0 0' $gap='1.25rem'>
            <StyledButton onClick={() => router.push('/auth/resetPW')}>
                <Typography.Button1>
                    비밀번호 재설정하기
                </Typography.Button1>
            </StyledButton>

            <FilledButton
                scale='m'
                state='default'
                onClick={() => router.push('/auth/login')}
            >
                <Typography.Button1>
                    로그인 하러가기
                </Typography.Button1>
            </FilledButton>
      </CustomRow>
    </CustomColumn>
  )
}

export default FoundIDPage;