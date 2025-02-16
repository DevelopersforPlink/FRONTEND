"use client";

import styled from "@emotion/styled";

interface ThumbnailProps {
    src ?: string;
    type ?: 'investor' | 'founder';
    is_approve:boolean;
}

const SizeMap = {
    investor:{
        width:'18.4375rem',
        height:'10rem'
    },
    founder:{
        // width:'25.1875rem',
        width:'100%',
        height:'14.125rem',
    }
}

// const Thumbnail = styled.div<ThumbnailProps>`
//     width: ${({ type = "investor" }) => SizeMap[type]?.width || "18.4375rem"};
//     height: ${({ type = "investor" }) => SizeMap[type]?.height || "10rem"};

//     border-radius: 0.3rem;
//     background: ${({ src }) =>
//         src ? `url(${src}) center/cover no-repeat` : "var(--gray-scale-40, #B3BAC1)"};
// `;

const Thumbnail = styled.div<ThumbnailProps>`
    width: ${({ type = "investor" }) => SizeMap[type]?.width || "18.4375rem"};
    height: ${({ type = "investor" }) => SizeMap[type]?.height || "10rem"};
    border-radius: 0.3rem;
    position: relative; /* ✅ gradient를 올바르게 겹치도록 설정 */

    background: ${({ src, is_approve }) => src
        ? `url(${src}) center/cover no-repeat`  /* ✅ 기본적으로 썸네일 이미지 적용 */
        : "var(--gray-scale-40, #B3BAC1)"
    };

    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
        background: ${({ is_approve }) => !is_approve
            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.60) -7.19%, rgba(0, 0, 0, 0.00) 22.81%)"
            : "none"
        };
    }
`;

export default Thumbnail;