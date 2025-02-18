"use client";

import { useState } from 'react';
import styled from '@emotion/styled';
import * as Typography from '@/app/typography';

const TabMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0; /* 항목 간의 간격 0 */
`;

interface TabItemProps {
  isSelected: boolean;
}

const TabItem = styled.div<TabItemProps>`
  width: 315px;
  height: 58px;
  line-height: 58px; /* 텍스트 세로 정렬 */
  text-align: center;
  border-bottom: 1px solid var(--gray-scale-60); /* 기본 border는 투명 */
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${(props) =>
    props.isSelected &&
    `
      border-bottom: 4px solid var(--primary-color-60); /* 선택된 탭의 색상과 굵기 */
      font-weight: bold;
      color: var(--primary-color-60); /* 선택된 탭의 텍스트 색상 */
  `}
  ${Typography.Title5}
`;


interface TabMenuProps {
  tabs: string[];
  onTabSelect: (tab: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    onTabSelect(tab); // 선택된 탭을 상위 컴포넌트로 전달
  };

  return (
    <TabMenuContainer>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          isSelected={tab === selectedTab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </TabMenuContainer>
  );
};

export default TabMenu;
