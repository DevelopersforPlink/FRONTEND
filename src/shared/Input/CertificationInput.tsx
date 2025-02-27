"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Caption1 } from "@/app/typography";

interface InputProps {
  state?: "default" | "error" | "pressed" | "after";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  showTimer?: boolean; // 타이머 표시를 위한 prop 추가
  pauseTimer?: boolean; // 타이머 정지 여부를 위한 prop 추가
  resetTimer?: boolean; // 타이머 초기화를 위한 prop 추가
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
  border-radius: 10px;
  /* background-color: ${(props) => (props.state === "error" ? "var(--gray-scale-10)" : "white")}; */
  background-color: "white";
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
  showTimer = false, // 타이머 표시 여부
  pauseTimer = false, // 타이머 정지 여부
  resetTimer = false, // 타이머 초기화 여부
  ...props
}: {
  placeholder?: string;
  state?: "default" | "error" | "pressed" | "after";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showTimer?: boolean; // 타이머 표시 여부 prop 추가
  pauseTimer?: boolean; // 타이머 정지 여부를 위한 prop 추가
  resetTimer?: boolean; // 타이머 초기화를 위한 prop 추가
}) => {
  const [inputState, setInputState] = useState<"default" | "error" | "pressed" | "after">(state || "default");
  const [codeValue, setCodeValue] = useState(value || "");
  const [timer, setTimer] = useState(600); //초 기준
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

  // 외부에서 state prop이 변경되면 내부 상태 업데이트
  useEffect(() => {
    setInputState(state);
  }, [state]);

  // 외부에서 value prop이 변경되면 내부 상태 업데이트
  useEffect(() => {
    setCodeValue(value || "");
  }, [value]);

  // resetTimer prop이 true로 변경될 때 타이머 초기화
  useEffect(() => {
    if (resetTimer) {
      setTimer(600); // 타이머를 10분(600초)으로 재설정
    }
  }, [resetTimer]);

  // 타이머 관련 로직
  useEffect(() => {
    if (timerInterval) {
      clearInterval(timerInterval); // 기존 타이머 정리
    }

    // showTimer가 true이고 pauseTimer가 false일 때만 타이머 진행
    if (showTimer && !pauseTimer && timer > 0) {
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
  }, [showTimer, pauseTimer, timer]); // showTimer, pauseTimer, timer가 변경될 때 타이머 재설정

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
    
    // 에러메시지 한 번 뜨면 쭉 에러상태이게끔 하기 위해 아래 내용 주석
    // if (inputState === "error") {
    //   setInputState("pressed");
    // }
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
        {/* <Timer>{formatTime(timer)}</Timer> */}
        {showTimer && <Timer>{formatTime(timer)}</Timer>}
      </InputFieldWrapper>
    </InputContainer>
  );
};

export default CertificationInput;
