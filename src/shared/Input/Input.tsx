"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

interface InputProps {
  state?: "default" | "error" | "pressed" | "after";
  scale?: "s" | "m" | "l";
  icon?: boolean;
  iconSrc?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputFieldWrapper = styled.div<InputProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => {
    switch (props.scale) {
      case "s":
        return "89px";
      case "m":
        return "305px";
      case "l":
        return "414px";
      default:
        return "414px";
    }
  }};
  height: 48px;
  padding: 0 16px;
  color: ${(props) =>
    props.state === "error"
      ? "var(--sementic-color-negative)"
      : props.state === "pressed" || props.state === "after"
      ? "var(--gray-scale-100)"
      : "var(--gray-scale-60)"};
  background: ${(props) => (props.disabled ? "var(--gray-scale-10)" : "white")};
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

  &:focus {
    outline: none;
  }

  &:disabled {
    background: var(--gray-scale-10);
    color: var(--gray-scale-40);
  }

  &::placeholder {
    color: var(--gray-scale-60);
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
  }

  ${(props) =>
    props.icon &&
    props.scale !== "s" &&
    `
    padding-right: 40px; /* 아이콘 공간 확보 */
  `}
`;

const InputField = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-scale-100);

  &::placeholder {
    color: var(--gray-scale-60);
  }
`;

const IconWrapper = styled.img`
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
`;

const Input = ({
  state = "default",
  scale = "l",
  icon = false,
  iconSrc,
  disabled = false,
  value,
  onChange,
  required = false,
  placeholder,
  ...props
}: InputProps) => {
  const [inputState, setInputState] = useState(state);
  const [inputValue, setInputValue] = useState(value || "");

  const handleFocus = () => {
    setInputState("pressed");
  };

  const handleBlur = () => {
    setInputState("after");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <InputContainer>
      <InputFieldWrapper
        state={inputState}
        scale={scale}
        icon={icon}
        disabled={disabled}
        placeholder={placeholder}
      >
        <InputField
          {...props}
          state={inputState}
          scale={scale}
          disabled={disabled}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
        />
        {icon && iconSrc && <IconWrapper src={iconSrc} alt="icon" />}
      </InputFieldWrapper>
    </InputContainer>
  );
};

export default Input;
