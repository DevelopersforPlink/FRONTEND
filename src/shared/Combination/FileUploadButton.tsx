import React, { useRef, useState } from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import OutlinedButtonComponent from "@/shared/Button/OutlinedButtonComponent";
import styled from "@emotion/styled";

interface FileUploadButtonProps {
  label: string;
  buttonState: "default" | "pressed" | "disabled" | "hover";
}

const CaptionContainer = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ label, buttonState }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the file is a PDF
      if (file.type !== "application/pdf") {
        setCaption("PDF 파일만 첨부할 수 있습니다.");
        setError(true);
        return;
      }

      const maxSize = 50 * 1024 * 1024; // 50MB in bytes
      // Check if the file size is greater than 50MB
      if (file.size > maxSize) {
        setCaption("파일 크기는 50MB 이하만 첨부할 수 있습니다.");
        setError(true);
        return;
      }


      setCaption(`${file.name}`);
      setError(false);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <CaptionContainer>
    <LabelWithCaptionWrapper label={label} caption={caption} required={true} error={error}>
      <OutlinedButtonComponent scale="l" state={buttonState} iconSrc="/icons/Folderadd.svg" onClick={handleButtonClick}>
        파일 첨부 (최대 50MB PDF만 첨부)
      </OutlinedButtonComponent>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        style={{ display: "none" }} 
        onChange={handleFileChange} 
      />
    </LabelWithCaptionWrapper>
    </CaptionContainer>
  );
};

export default FileUploadButton;
