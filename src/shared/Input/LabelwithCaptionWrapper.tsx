import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Title5, Caption6 } from "@/app/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled(Title5)<{ required?: boolean }>`
  color: var(--gray-scale-90);
  display: flex;
  align-items: center;

  &::after {
    content: ${(props) => (props.required ? "'*'" : "''")};
    color: var(--sementic-color-notice);
    margin-left: 0.3rem;
  }
`;

const Caption = styled(Caption6)<{ error?: boolean }>`
  color: ${(props) =>
    props.error
      ? "var(--sementic-color-negative)"
      : "var(--gray-scale-60)"};
`;

interface LabelWithCaptionWrapperProps {
  label?: string;
  required?: boolean;
  caption?: string | ReactNode;
  error?: boolean;
  captionPosition?: "before" | "after";
  children: React.ReactNode;
}

const LabelWithCaptionWrapper: React.FC<LabelWithCaptionWrapperProps> = ({
  label,
  required = false,
  caption,
  error = false,
  captionPosition = "after",
  children,
}) => {
  return (
    <Wrapper>
      {label && <Label required={required}>{label}</Label>}
      {captionPosition === "before" && caption && (
        <Caption error={error}>{caption}</Caption>
      )}
      {children}
      {captionPosition === "after" && caption && (
        <Caption error={error}>{caption}</Caption>
      )}
    </Wrapper>
  );
};

export default LabelWithCaptionWrapper;