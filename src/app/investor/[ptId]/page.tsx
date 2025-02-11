// p.4.1.2
// 동적 라우트기 때문에 추후에 백엔드랑 주소 맞출 때 변수명 잘 맞출 것
// '/investor/[ptId]'로 접속하면 진입 가능
// [ptId]자리에는 무슨 숫자를 쓰든 접속 가능

"use client";

import React from 'react';
import styled from '@emotion/styled';
import BoxComponent from './components/BoxComponent';
import OutlinedButtonComponent from '@/shared/Button/OutlinedButtonComponent';

const TestData:{name : string, summation : string, companyName : string, serviceName : string} = {
  name : '테스트01-플링크',
  summation : '투자자에게 아웃바운드 딜 소싱, 창업가에게는 1분 PT 및 사업기획안 어필의 기회를 제공한다.',
  companyName : 'Plers(플러스)',
  serviceName : 'Plink(플링크)'
}

export default function PtPage() {
  return (
    <Container>
      <BoxComponent 
        name={TestData.name}
        summation={TestData.summation}
        companyName={TestData.companyName}
        serviceName={TestData.serviceName}
      />
      <ButtonsWrapper>
        <OutlinedButtonComponent 
          scale='m'
          state='default'
          children='원페이퍼 사업기획서'
          iconSrc='/icons/Folder.svg'
        />
      </ButtonsWrapper>
    </Container>
  )
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--common-white);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 2.5rem 5rem;
`;
