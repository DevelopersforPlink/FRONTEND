import React from 'react';
import styled from '@emotion/styled';
import { Label2 } from '@/app/typography';

const RadioWrapper = styled.div<{ disabled: boolean; checked: boolean; hovered: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Radio = styled.input<{ checked: boolean; hovered: boolean; disabled: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.disabled
        ? 'var(--gray-scale-40)' 
        : props.hovered
        ? 'var(--primary-color-40)' 
        : 'var(--gray-scale-60)'};
  background-color: ${(props) =>
    props.disabled
      ? 'var(--gray-scale-10)'
      : props.checked
      ? 'var(--common-white)' 
      : 'var(--common-white)'};
  appearance: none;
  position: relative;
  /* transition: all 0.3s ease; */

  /* 선택된 상태 */
  &:checked {
    background-color: var(--common-white);
    border: 2px solid var(--primary-color-60);
  }

  /* 선택된 라디오 버튼 안의 동그라미 */
  &:checked::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 10px; 
    height: 10px; 
    background-color: var(--primary-color-60);  
    border-radius: 50%;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover::before {
    background-color: ${(props) =>
      props.checked ? 'var(--primary-color-40)' : 'var(--primary-color-40)'};
  }
`;

const RadioLabel = styled(Label2)<{ disabled: boolean; checked: boolean }>`
  color: ${(props) =>
    props.disabled
      ? 'var(--gray-scale-60)'
      : props.checked
      ? 'var(--primary-color-100)'
      : 'var(--gray-scale-100)'};
  margin-left: 8px;
`;

interface RadioComponentProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  label,
  checked,
  disabled = false,
  value,
  name,
  onChange
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <RadioWrapper disabled={disabled} checked={checked} hovered={hovered}>
      <Radio
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        name={name} 
        onChange={onChange}
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {label && (
        <RadioLabel disabled={disabled} checked={checked}>
          {label}
        </RadioLabel>
      )}
    </RadioWrapper>
  );
};

export default RadioComponent;
