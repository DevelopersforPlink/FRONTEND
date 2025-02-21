import React from 'react';
import styled from '@emotion/styled';
import {Caption6} from '@/app/typography';

interface StatusChipProps {
  is_approve: boolean | null;
}

const ChipWrapper = styled.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: var(--primary-color-10, #E6F3FF);
  backdrop-filter: blur(10px);
`;

const StatusText = styled(Caption6)`
  color: var(--primary-color-60);
`;

const StatusChip: React.FC<StatusChipProps> = ({ is_approve }) => {
  return (
    <ChipWrapper>
      <StatusText>
        {is_approve ? '승인 완료' : '심사 중'}
      </StatusText>
    </ChipWrapper>
  );
};

export default StatusChip;
