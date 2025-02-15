import React from "react";
import styled from "@emotion/styled";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import RadioComponent from "@/shared/RadioComponent";
import CustomRow from "@/shared/CustomRow";

interface RadioFormFieldProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  checkedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const RadioFormField: React.FC<RadioFormFieldProps> = ({
  label,
  options,
  name,
  checkedValue,
  onChange,
  disabled = false,
}) => {
  return (
    <Container>
    <LabelWithCaptionWrapper label={label} required={true} error={false}>
      <CustomRow $width="100%" $justifycontent="flex-start" $alignself="stretch">
        {options.map((option) => (
          <RadioComponent
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            checked={checkedValue === option.value}
            onChange={onChange}
            disabled={disabled}
          />
        ))}
      </CustomRow>
    </LabelWithCaptionWrapper>
    </Container>
  );
};

export default RadioFormField;

const Container = styled.div`
  display: flex;
  width: 25.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`