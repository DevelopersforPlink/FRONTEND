"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { Label1 } from "@/app/typography";

interface TextareaProps {
  state?: "default" | "error" | "pressed" | "after";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const TextareaField = styled.textarea<TextareaProps>`
  width: 414px;
  min-height: 176px;
  padding: 16px;
  border: 1px solid
    ${(props) => {
    if (props.state === "error") {
      return "var(--sementic-color-negative)";
    }
    if (props.state === "pressed") {
      return "var(--primary-color-60)";
    }
    return "var(--gray-scale-20)";
  }};
  border-radius: 4px;
  color: ${(props) =>
    props.state === "error"
      ? "var(--sementic-color-negative)"
      : props.state === "pressed" || props.state === "after"
        ? "var(--gray-scale-100)"
        : "var(--gray-scale-60)"};
  background: white;
  resize: none;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  outline: none;

  &::placeholder {
    color: var(--gray-scale-60);
  }
`;

const Textarea = ({
  state = "default",
  value,
  onChange,
  required = false,
  placeholder,
  ...props
}: TextareaProps) => {
  const [inputState, setInputState] = useState(state);
  const [inputValue, setInputValue] = useState(value || "");

  const handleFocus = () => {
    setInputState("pressed");
  };

  const handleBlur = () => {
    setInputState("after");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <>
      <Label1>
        <TextareaField
          {...props}
          state={inputState}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
        />
      </Label1>
    </>
  );
};

export default Textarea;
