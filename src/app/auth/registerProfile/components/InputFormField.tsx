// FormField.tsx
import React from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import Input from "@/shared/Input/Input";

interface InputFormFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
  error?: boolean;
  scale?: "s" | "m" | "l";
}

const InputFormField: React.FC<InputFormFieldProps> = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  error = false,
  scale = "l",
}) => {
  return label ? (
    <LabelWithCaptionWrapper label={label} required={required} error={error}>
      <Input
        placeholder={placeholder}
        scale={scale}
        onChange={onChange}
        value={value}
      />
    </LabelWithCaptionWrapper>
  ) : (
    <Input
      placeholder={placeholder}
      scale={scale}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputFormField;
