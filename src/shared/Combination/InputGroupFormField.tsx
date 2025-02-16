import React from "react";
import styled from "@emotion/styled";
import {Title7} from "@/app/typography";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import CustomColumn from "../CustomColumn";
import InputFormField from "./InputFormField";

interface InputGroupFormFieldProps {
  label: string;
  caption?: string;
  captionPosition?: "before" | "after";
  error?: boolean;
  fields: {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    scale: "s" | "m" | "l";
  }[];
}

const InputGroupFormField: React.FC<InputGroupFormFieldProps> = ({ label, caption,
  captionPosition, fields }) => {
  return (
    <LabelWithCaptionWrapper label={label} required={true} caption={caption} captionPosition={captionPosition} error={true}>
      <CustomColumn $width="100%" $gap="0.75rem" $alignitems="center" $justifycontent="flex-start">
        {fields.map((field, index) => (
          <div key={index}>
            {field.label && <Label>{field.label}</Label>}
            <InputFormField
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
              scale={field.scale}
            />
          </div>
        ))}
      </CustomColumn>
    </LabelWithCaptionWrapper>
  );
};

export default InputGroupFormField;

const Label = styled(Title7)`
  margin-bottom: 0.75rem;
  color: var(--gray-scale-70);
`