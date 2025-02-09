import React from 'react';
import styled from '@emotion/styled';
import { Label2 } from '@/app/typography';

const CheckboxWrapper = styled.div<{ disabled: boolean; checked: boolean; hovered: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Checkbox = styled.input<{ checked: boolean; hovered: boolean; disabled: boolean }>`
  width: 20px;
  height: 20px;
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
      ? 'var(--primary-color-60)'
      : 'var(--common-white)'};
  border-radius: 2px;
  appearance: none;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: var(--primary-color-60);
    border: 2px solid var(--primary-color-60);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 3.5px;
    width: 5px;
    height: 11px;
    border: solid var(--common-white);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? 'var(--gray-scale-10)'
        : props.checked
        ? 'var(--primary-color-40)'
        : 'var(--primary-color-10)'};
    border-color: ${(props) =>
      props.disabled
        ? 'var(--gray-scale-40)'
        : 'var(--primary-color-40)'};
  }
`;

const CheckboxLabel = styled(Label2)<{ disabled: boolean; checked: boolean }>`
  color: ${(props) =>
    props.disabled
      ? 'var(--gray-scale-60)'
      : props.checked
      ? 'var(--gray-scale-100)'
      : 'var(--gray-scale-100)'};
  margin-left: 8px;
`;

interface CheckboxComponentProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  label,
  checked,
  disabled = false,
  onChange
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <CheckboxWrapper disabled={disabled} checked={checked} hovered={hovered}>
      <Checkbox
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {label && (
        <CheckboxLabel disabled={disabled} checked={checked}>
          {label}
        </CheckboxLabel>
      )}
    </CheckboxWrapper>
  );
};

export default CheckboxComponent;