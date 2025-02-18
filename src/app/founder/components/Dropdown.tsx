import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button2 } from '@/app/typography';
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';

const DropdownContainer = styled.div`
  width: 414px;
  height: 48px;
  border: 1px solid var(--gray-scale-40);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  transition: border-color 0.2s;

  &.active {
    border: 1px solid var(--primary-color-60);
  }
`;

const DropdownText = styled(Button2)`
  color: var(--gray-scale-90);
  flex-grow: 1;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const DropdownMenu = styled.div`
  width: 414px;
  height: 410px;
  overflow-y: hidden;
  border: 1px solid var(--gray-scale-40);
  border-radius: 10px;
  position: absolute;
  top: 90px;
  background-color: var(--common-white);
  z-index: 2;
`;

const MenuItem = styled(Button2)`
  height: 41px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--gray-scale-10);
  }
`;

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('사업 주제');
  const [active, setActive] = useState(false);

  const business_type = [
    '서비스업',
    '금융/은행업',
    'IT/정보통신업',
    '판매/유통업',
    '제조/생산/화학업',
    '교육업',
    '건설업',
    '의료/제약업',
    '미디어/광고업',
    '문화/예술/디자인업',
  ];

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    setActive(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <LabelWithCaptionWrapper label='사업 주제' required={true}>
      <DropdownContainer className={active ? 'active' : ''} onClick={handleDropdownToggle}>
        <DropdownText>{selectedItem}</DropdownText>
        <Icon src={ isOpen ? '/icons/Angelsmallup.svg' : '/icons/Angelsmalldown.svg'} alt="Icon" />
      </DropdownContainer>
      {isOpen && (
        <DropdownMenu>
          {business_type.map((business_type, index) => (
            <MenuItem key={index} onClick={() => handleItemClick(business_type)}>
              {business_type}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
      </LabelWithCaptionWrapper>
    </div>
  );
};

export default Dropdown;
