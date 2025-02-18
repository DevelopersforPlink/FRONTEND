"use client"

import React, { useState } from "react";
import styled from "@emotion/styled";
import * as Typography from "@/app/typography";

interface ThumbnailProps {
  Thumbnail?: string;
  iconSrc: string;
}

const buttonSizes = {
  width: "414px",
  height: "229px",
};

// const getButtonColors = (state: string) => {
//   const isPressed = state === "pressed";
//   const isHovered = state === "hover";

//   let textColor = "var(--gray-scale-60)"; 
//   let borderColor = "var(--gray-scale-40)"; 

//   if (isPressed || isHovered) {
//     textColor = "var(--gray-scale-100)"; 
//   }

//   if (isPressed) {
//     borderColor = "var(--primary-color-60)"; 
//   } else if (isHovered) {
//     borderColor = "var(--primary-color-40)"; 
//   }

//   return {
//     backgroundColor: "var(--common-white)", 
//     textColor,
//     borderColor,
//   };
// };

const ThumbnailButton = styled.div<{ hasThumbnail: boolean }>`
  border: 1px solid var(--gray-scale-70);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  width: ${buttonSizes.width};
  height: ${buttonSizes.height};

  ${({ hasThumbnail }) =>
    hasThumbnail && `background-color: var(--common-white);`}

  ${Typography.Button2} 

  svg {
    width: 2rem;
    height: 2rem; 
    color: inherit;
  }
`;

const ThumbnailComponent: React.FC<ThumbnailProps> = ({ iconSrc, Thumbnail}) => {
  const [thumbnailSrc, setThumbnailSrc] = useState(Thumbnail);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailSrc(reader.result as string); // 선택된 이미지로 업데이트
      };
      reader.readAsDataURL(file); // 선택된 파일을 읽어서 미리보기
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <>
      <ThumbnailButton hasThumbnail={!!thumbnailSrc} onClick={handleClick}>
        {thumbnailSrc ? (
          <img src={thumbnailSrc} alt="thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
        ) : (
          <img src={iconSrc} alt="icon" style={{ width: '2rem', height: '2rem' }}/>
        )}
      </ThumbnailButton>

      <input
        type="file"
        id="fileInput" 
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </>
  );
};

export default ThumbnailComponent;
