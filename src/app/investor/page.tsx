// p.4

"use client";

import React from 'react';
import styled from '@emotion/styled';
import FiledNavigationBar from './components/fieldNavigationBar';

export default function InvestorMain() {
  return (
    <div>
      <Container>
        <FiledNavigationBar />
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