// p.7, 7.2.1

"use client";
import React,{useEffect} from 'react';
import { useRouter } from 'next/navigation';
import UploadList from './components/UploadList';
import { Headline1,Title2 } from '../typography';
import OutlinedButtonComponent from '@/shared/Button/OutlinedButtonComponent';
// import { styleText } from 'util';
import styled from '@emotion/styled';
import { boxList } from '@/constant/testVideos';
import { Pagination } from '@/shared/Pagination';

const FounderMain=()=>{
  const router = useRouter();

  // 임시 : 마운트 될 때마다 localStorage에 accessToken 설정
  useEffect(()=>{
    localStorage.setItem('accessToken','login');
  },[])

  return (
  <Container>
    <Title>등록한 프레젠테이션</Title>
    <UploadButton 
      scale='xs'
      state='default'
      children='등록하기'
      iconSrc='/icons/Pluscircle.svg'
      onClick={()=>{router.push('/founder/upload')}}
    />
    <UploadList data={boxList}/>
    <Pagination number='3'/>
  </Container>
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
  margin: 2.5rem auto auto 0;
`;

const UploadButton = styled(OutlinedButtonComponent)`
  margin: 1.38rem 0 1.38rem auto;
`;