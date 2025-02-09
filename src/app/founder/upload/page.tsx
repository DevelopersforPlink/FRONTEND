// p.7.1.1
"use client"

import React, { useState } from 'react'
import ThumbnailComponent from '@/shared/Button/ThumbnailComponent'
import LabelWithCaptionWrapper from '@/shared/Input/LabelwithCaptionWrapper';
import CustomColumn from '@/shared/CustomColumn';
import CustomRow from '@/shared/CustomRow';
import Textarea from '@/shared/Input/Textarea';
import RadioComponent from '@/shared/RadioComponent';

export default function PtUpload() {

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");

  const handleClick = () => {
    setButtonState(buttonState === "pressed" ? "default" : "pressed");
  };

  const [textValue, setTextValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.checked);
  };


  return (
    <div>
      창업가 - PT 업로드 페이지
      <CustomColumn $width='100%' $gap='24px' $alignitems="flex-start" $justifycontent="center">
        <LabelWithCaptionWrapper
          label="프레젠테이션 썸네일"
          required={true}
          error={false}
        >
          <ThumbnailComponent
            state={buttonState}
            iconSrc="/icons/Pluscircle.svg"
            onClick={handleClick}
          />
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper
          label="프레젠테이션 요약"
          required={true}
          error={false}
        >
          <Textarea
            value={textValue}
            onChange={handleChange}
            placeholder="프레젠테이션 내용을 간략하게 입력해주세요. "
            required
          />
        </LabelWithCaptionWrapper>
        <LabelWithCaptionWrapper
          label="사업 진행도"
          required={true}
          error={false}
        >
          <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-start">
            <RadioComponent
              label="아이디어"
              value="idea"
              name="progress"
              checked={selectedOption}
              onChange={handleRadioChange}
            />
            <RadioComponent
              label="사업 진행중"
              value="business"
              name="progress"
              checked={selectedOption}
              onChange={handleRadioChange}
            />
          </CustomRow>
        </LabelWithCaptionWrapper>
      </CustomColumn>
    </div>
  )
}