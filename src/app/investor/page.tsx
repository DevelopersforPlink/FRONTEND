// p.4
"use client";

import React,{ useEffect,useState } from 'react';
import styled from '@emotion/styled';
import { fetchInvestorMain } from '@/api/Investor';
import { InvestorMainResponse, Presentation } from '@/api/type';

import Category from './components/Category';
import StateDropDown from './components/stateDropDown';
import Videos from './components/Videos';
import Pagination from '@/shared/Pagination';
import { boxList } from '@/constant/testVideos';
import { data } from '../../constant/testApiPagination';

// api 연동
import getInvestorMain from '../../api/get/getInvestorMain';

export default function InvestorMain() {
  const [category, setCategory] = useState<string>('전체'); // 카테고리 선택 default / api 기준 : category 저장
  const [videos, setVideos] = useState<Presentation[]>([]); // api 기준 : presentations 저장
  
  // pagination states
  const [page, setPage] = useState(1); // api 기준 : page (number) -> 현제 페이지
  const [totalPage, setTotalPage] = useState(1); // api 기준 : total_pages(number) -> 해당 카테고리의 모든 페이지 수
 

  // 2차 mvp 상태
  // const [business_progress, setBusiness_progress] = useState<string>('사업 진행중');
  
  const handleFiledClick = (category: string) => {
    setCategory(category); // ✅ 클릭한 `Filed`의 category 저장 (active 유지)
    console.log('선택한 카테고리 : ', category);
  };

  // const handlePageClick = (page:number) => {
  // }

  // Category 기본 값 : All 필드 선택
  useEffect(()=>{
    setCategory('전체');

    // const getData = async() => {
    //   try{
    //     const data : InvestorMainResponse = await fetchInvestorMain(category, page,12);
    //     setCategory(data.category); // 첫 api 통신은 무조건 '전체(All)'로 통신
    //     setVideos(data.presentations);
        
        

    //   } catch(error){
    //     console.error('[ 🚨 데이터 로딩 실패 ] : ',error);
    //   }
    // };
    // getData();

  },[])

  // const handlePaginationNumber = async(page) => {
  //   try {
  //     const data : InvestorMainResponse = await fetchInvestorMain(category, page, 12);
  //     setVideos(data.presentations)

  //   } catch(error) {
  //     alert('[error] : 데이터 로딩 실패')
  //   }
  // }

  // 페이지 네이션 코드
  // 선택된 요소가 달라질때마다 axios요청 보내기.
  // 1. category에서 다른 필드값 클릭
  // 2. Videos에 전달
  // useEffect(()=>{
  //   const getData = async() => {
  //     try{
  //       const data : InvestorMatinResponse = await fetchInvestorMain(category, page,12);
  //       setPresentations(data.project);
  //       setTotalPages(data.total_page);
  //     } catch(error){
  //       console.error('[ 🚨 데이터 로딩 실패 ] : ',error);
  //     }
  //   };
  //   getData();
  // },[category, page])
  

  return (
    <Container>
      <Category onClick={handleFiledClick} selectedFiled={category}/>
      <Videos 
        presentations={data.presentations} 
        onClick={()=>alert('비디오 클릭!')} 
      
        // type 고정. 수정 X
        type='investor'
      />
      <Pagination 
        // onClick={} 
        current_page={data.page}
        total_page = {data.total_pages}
        onPageChange = {()=>console.log('click!')}
        />
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 0 5rem;
`;