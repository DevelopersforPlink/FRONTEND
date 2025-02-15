import React from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import CustomColumn from "../CustomColumn";
import InputFormField from "./InputFormField";

interface InputGroupFormFieldProps {
  label: string;
  fields: {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    scale: "s" | "m" | "l";
  }[];
}

const InputGroupFormField: React.FC<InputGroupFormFieldProps> = ({ label, fields }) => {
  return (
    <LabelWithCaptionWrapper label={label} required={true} error={false}>
      <CustomColumn $width="100%" $gap="8px" $alignitems="center" $justifycontent="flex-start">
        {fields.map((field, index) => (
          <InputFormField
            key={index}
            label={field.label}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            scale={field.scale}
          />
        ))}
      </CustomColumn>
    </LabelWithCaptionWrapper>
  );
};

export default InputGroupFormField;
