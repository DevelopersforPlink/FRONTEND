// p.7, 7.2.1

"use client";
import React from 'react';
import UploadList from './components/UploadList';
import { Headline1 } from '../typography';
import OutlinedButtonComponent from '@/shared/Button/OutlinedButtonComponent';
// import { styleText } from 'util';
import styled from '@emotion/styled';

const Test = [
  {
    name:'1-플링크블링블링',
    companyName : '플링플링크',
    serviceName : '플플링크링크',
    src:'https://i.pinimg.com/736x/07/44/c6/0744c62cb86759c810cfe331b75c8d81.jpg'
  },
  {
    name:'2-아이콘이 왜 안될까용',
    companyName : '아이 코',
    serviceName : '시불탱',
    src:'https://i.pinimg.com/736x/01/7e/78/017e7867a931d1fd246570f65f033434.jpg'
  },
  {
    name:'3-카페인 이펙트에요',
    companyName : '죽갰는데',
    serviceName : '죽지 않는',
    src:'https://i.pinimg.com/736x/0f/30/6a/0f306a97a7cdc2df416b2ab50e201e59.jpg'
  },
  {
    name:'4-짜증핑',
    companyName : '왜 피그마랑',
    serviceName : '다르죠?',
    src:'https://i.pinimg.com/736x/40/57/9d/40579dd5bd7100e38efb0993acd8b75a.jpg'
  },
  {
    name:'5-오늘은 면접의 날이에요',
    companyName : '물론 카페만',
    serviceName : '부자가 되고 싶어요',
    src:'https://i.pinimg.com/736x/1a/b8/c9/1ab8c95da9fd175c9721eedd90d8f680.jpg'
  },
  {
    name:'6-으슬추입니다',
    companyName : '감기 조심하세요~',
    serviceName : '뼈아픈 지히가',
    src:'https://i.pinimg.com/736x/23/c3/bb/23c3bb2c559209358c1c90d1a7d2f1a3.jpg'
  },
  {
    name:'1-플링크블링블링',
    companyName : '플링플링크',
    serviceName : '플플링크링크',
    src:'https://i.pinimg.com/736x/07/44/c6/0744c62cb86759c810cfe331b75c8d81.jpg'
  },
  {
    name:'2-아이콘이 왜 안될까용',
    companyName : '아이 코',
    serviceName : '시불탱',
    src:'https://i.pinimg.com/736x/01/7e/78/017e7867a931d1fd246570f65f033434.jpg'
  },
  {
    name:'3-카페인 이펙트에요',
    companyName : '죽갰는데',
    serviceName : '죽지 않는',
    src:'https://i.pinimg.com/736x/0f/30/6a/0f306a97a7cdc2df416b2ab50e201e59.jpg'
  },
  {
    name:'4-짜증핑',
    companyName : '왜 피그마랑',
    serviceName : '다르죠?',
    src:'https://i.pinimg.com/736x/40/57/9d/40579dd5bd7100e38efb0993acd8b75a.jpg'
  },
  {
    name:'5-오늘은 면접의 날이에요',
    companyName : '물론 카페만',
    serviceName : '부자가 되고 싶어요',
    src:'https://i.pinimg.com/736x/1a/b8/c9/1ab8c95da9fd175c9721eedd90d8f680.jpg'
  },
  {
    name:'6-으슬추입니다',
    companyName : '감기 조심하세요~',
    serviceName : '뼈아픈 지히가',
    src:'https://i.pinimg.com/736x/23/c3/bb/23c3bb2c559209358c1c90d1a7d2f1a3.jpg'
  },
]

const FounderMain=()=>{
  return (
    <>
      <Container>
        <Title>등록한 프레젠테이션</Title>
        <UploadButton 
          scale='xs'
          state='default'
          children='등록하기'
          iconSrc='/icons/Pluscicle.svg'
        />
        <UploadList data={Test}/>
      </Container>
    </>
  )
};

export default FounderMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 5rem;
`;

const Title = styled(Headline1)`
  /* margin: auto auto auto 5rem; */
  margin: 2.5rem auto auto 0;
`;

const UploadButton = styled(OutlinedButtonComponent)`
  margin: 1.38rem 0 1.38rem auto;
`;