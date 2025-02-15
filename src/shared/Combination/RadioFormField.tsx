import React from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import RadioComponent from "@/shared/RadioComponent";
import CustomRow from "@/shared/CustomRow";

interface RadioFormFieldProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  checkedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const RadioFormField: React.FC<RadioFormFieldProps> = ({
  label,
  options,
  name,
  checkedValue,
  onChange,
}) => {
  return (
    <LabelWithCaptionWrapper label={label} required={true} error={false}>
      <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
        {options.map((option) => (
          <RadioComponent
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            checked={checkedValue === option.value}
            onChange={onChange}
          />
        ))}
      </CustomRow>
    </LabelWithCaptionWrapper>
  );
};

export default RadioFormField;
