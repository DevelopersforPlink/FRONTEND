"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Caption1 } from "@/app/typography";

interface InputProps {
  state?: "default" | "error" | "pressed" | "after";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputFieldWrapper = styled.div<{ state: "default" | "error" | "pressed" | "after" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 305px;
  height: 48px;
  padding: 0 16px;
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
  background-color: ${(props) => (props.state === "error" ? "var(--gray-scale-10)" : "white")};
  color: ${(props) =>
    props.state === "error"
      ? "var(--sementic-color-negative)"
      : props.state === "pressed" || props.state === "after"
        ? "var(--gray-scale-100)"
        : "var(--gray-scale-60)"};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gray-scale-60);
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
  }
`;

const InputField = styled.input<InputProps>`
  flex-grow: 1;
  height: 48px;
  border: none;
  outline: none;
  background: transparent;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-scale-100);
  padding: 0;

  &::placeholder {
    color: var(--gray-scale-60);
  }
`;

const Timer = styled(Caption1)`
  color: var(--primary-color-60);
`;

const CertificationInput = ({
  placeholder,
  state = "default",
  value,
  onChange,
  ...props
}: {
  placeholder?: string;
  state?: "default" | "error" | "pressed" | "after";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [inputState, setInputState] = useState<"default" | "error" | "pressed" | "after">(state || "default");
  const [codeValue, setCodeValue] = useState(value || "");
  const [timer, setTimer] = useState(10);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerInterval) {
      clearInterval(timerInterval); // 기존 타이머 정리
    }

    // 타이머가 끝났을 때 error 상태로 변경
    if (timer > 0 && inputState !== "error") {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(interval);
            setInputState("error"); // 타이머 종료 시 error 상태로 변경
            return 0;
          }
        });
      }, 1000);
      setTimerInterval(interval);
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval); // 컴포넌트 언마운트 시 타이머 정리
      }
    };
  }, [inputState, timer]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "00")}`;
  };

  const handleFocus = () => {
    if (inputState !== "error") {
      setInputState("pressed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
    onChange?.(e); // 외부 onChange 전달
    if (inputState === "error") {
      setInputState("pressed");
    }
  };

  return (
    <InputContainer>
      <InputFieldWrapper state={inputState}>
        <InputField
          {...props}
          placeholder={placeholder}
          state={inputState}
          value={codeValue}
          onFocus={handleFocus}
          onChange={handleChange}
        />
        <Timer>{formatTime(timer)}</Timer>
      </InputFieldWrapper>
    </InputContainer>
  );
};

export default CertificationInput;
