// p.4

"use client";

import React,{ useEffect,useState } from 'react';
import styled from '@emotion/styled';
import Gnb from '@/shared/Gnb';
import Category from './components/Category';
import StateDropDown from './components/stateDropDown';
import Videos from './components/Videos';
import { Pagination } from '@/shared/Pagination';

export default function InvestorMain() {
  const [selectedFiled, setSelectedFiled] = useState<number | null>(null);


  const handleFiledClick = (index: number) => {
      setSelectedFiled(index); // ✅ 클릭한 `Filed`의 index를 저장 (active 유지)
  };

  // Category 기본 값 : All 필드 선택
  useEffect(()=>{
    setSelectedFiled(0);
    // api 요청도 밑에 추가하기
  },[])

  // 선택된 요소가 달라질때마다 axios요청 보내기.
  // 1. category에서 다른 필드값 클릭
  // 2. Videos에 전달
  // useEffect(()=>{
  // },[selectedFiled])

  return (
    <Container>
      <Category onClick={handleFiledClick} selectedFiled={selectedFiled}/>
      <Videos />
      <Pagination number='5'/>
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  

  padding: 0 5rem;
`;