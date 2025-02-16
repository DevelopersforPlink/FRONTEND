"use client"

import React, { useState } from "react";
import CustomColumn from "@/shared/CustomColumn";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import ThumbnailComponent from "@/shared/Button/ThumbnailComponent";
import InputFormField from "@/shared/Combination/InputFormField";
import InputGroupFormField from "@/shared/Combination/InputGroupFormField";
import DropDown from "./Dropdown";
import Textarea from "@/shared/Input/Textarea";

interface PTInfoFieldProps {
  buttonState: "default" | "pressed" | "disabled" | "hover";
  onFileSelect: (fileSelected: boolean, file: string | null, field: string) => void;
}

const PTInfoField: React.FC<PTInfoFieldProps> = ({ buttonState }) => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [service_name, setService_name] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [total_link, setTotal_link] = useState<string>("");
  // const [business_type, setBusiness_type] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const [linkError, setLinkError] = useState(false);
  const [totalLinkError, setTotalLinkError] = useState(false);

  const validateLink = (url: string) => {
    if (!url.startsWith('https://www.youtube.com/')) {
      return true; // 에러
    }
    return false; // 유효한 링크
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLink(value);
    setLinkError(validateLink(value)); // 링크 검사
  };

  const handleTotalLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTotal_link(value);
    setTotalLinkError(validateLink(value)); // 링크 검사
  };

  return (
    <div>
      <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
        <LabelWithCaptionWrapper label="프레젠테이션 썸네일" required={true} error={false}>
        <ThumbnailComponent
        iconSrc={thumbnail || "/icons/Pluscircle.svg"}
      />
        </LabelWithCaptionWrapper>

        <InputFormField
          label="서비스명"
          required={true}
          value={service_name}
          onChange={(e) => setService_name(e.target.value)}
          placeholder="서비스명"
        />
        <InputFormField
          label="프레젠테이션명"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="프레젠테이션명"
        />

        <InputGroupFormField
          label="프레젠테이션 링크"
          caption={linkError || totalLinkError ? "유튜브 링크만 허용됩니다." : ""}
          captionPosition="after"
          error={!validateLink(link) || !validateLink(total_link) }
          fields={[
            {
              label: "1분 프레젠테이션",
              value: link,
              onChange: handleLinkChange,
              placeholder: "https://www.youtube.com/",
              scale: "l",
            },
            {
              label: "전체 프레젠테이션",
              value: total_link,
              onChange: handleTotalLinkChange,
              placeholder: "https://www.youtube.com/",
              scale: "l",
            },
          ]}
        />
        <DropDown />
        <LabelWithCaptionWrapper label="프레젠테이션 요약" required={true} error={false}>
          <Textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="프레젠테이션 내용을 간략하게 입력해주세요."
            required
          />
        </LabelWithCaptionWrapper>
      </CustomColumn>
    </div>
  );
};

export default PTInfoField;

