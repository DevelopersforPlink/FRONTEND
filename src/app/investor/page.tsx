// p.4

"use client";

import React from 'react';
import styled from '@emotion/styled';
import Gnb from '@/shared/Gnb';
import Category from './components/Category';
import StateDropDown from './components/stateDropDown';
import Videos from './components/Videos';

export default function InvestorMain() {
  return (
    <div>
      <Container>
        <Gnb />
        <Category />
        {/* <StateDropDown click={false} state={'테스트'}/> */}
        <Videos />
      </Container>
    </div>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;