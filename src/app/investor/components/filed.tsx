"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

type FiledIconProps = {
    src: string; // ✅ public 폴더 내 SVG 파일의 경로
    tag: string;
    state : boolean;
    onClick:()=>void;
};

export const Filed: React.FC<FiledIconProps> = ({ src, tag, state, onClick }) => {

    return (
        <Container isActive={state} onClick={onClick}>
            <IconWrapper src={src} isActive={state}/>
            <Tag>{tag}</Tag>
        </Container>
    );
};

export default Filed;

const Container = styled.div<{isActive:boolean}>`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    position: relative; /*  border-bottom 효과를 위한 설정 */

    padding: 1rem 1.25rem;
    gap: 0.75rem;
    /* width: 9.0625rem;
    height: 5.25rem; */
    width: 10%;
    height: auto;

    flex-shrink: 0;

    color: ${({ isActive }) => (isActive ? "var(--primary-color-60)" : "var(--gray-scale-60)")};
    /* border-bottom을 가상 요소로 이동하여 hover 시 크기 변화 방지 */
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${({ isActive }) => (isActive ? "3px" : "1px")};
        background-color:${({ isActive }) =>
            isActive ? "var(--PrimaryColor-60, #0759E6)" : "var(--GrayScale-60, #848F9A)"};
        transition: all 0.3s;
    }

    :hover {
        color: ${({ isActive }) => (isActive ? "var(--primary-color-60)" : "var(--gray-scale-80)")};
        /* ✅ border-bottom을 hover 시 두껍게 변경 */
        &::after {
            height: 3px;
            color: ${({ isActive }) => (isActive ? "var(--primary-color-60)" : "var(--gray-scale-80)")};
        }

        /* ✅ 아이콘 색상 변경 */
        div { background-color: ${({ isActive }) => (isActive ? "var(--primary-color-60)" : "var(--gray-scale-80)")}; }
    }

    :active {
        p {
            font-weight: 600;
            color: var(--primary-color-50);
        }
        color: var(--primary-color-60);

        /* ✅ border-bottom active 상태 */
        &::after {
            height: 3px;
            background-color: var(--PrimaryColor-60, #0759E6);
        }

        /* ✅ 아이콘 색상 변경 */
        div { background-color: var(--primary-color-60);}
    }
`;

const Tag = styled.p`
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 0.975rem */
`;

// ✅ `mask-image`를 활용한 SVG 색상 변경 (hover, active 상태 반응)
const IconWrapper = styled.div<{ src: string; isActive:boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ isActive }) =>
        isActive ? "var(--primary-color-60)" : "var(--gray-scale-60)"};
    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image: url(${({ src }) => src});

    // hover, active 시 크기 변화 방지
    transition: background-color 0.3s ease;
`;
