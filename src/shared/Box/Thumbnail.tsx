"use client";

import styled from "@emotion/styled";

interface ThumbnailProps {
    src ?: string;
    type ?: 'investor' | 'founder';
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

const Thumbnail = styled.div<ThumbnailProps>`
    width: ${({ type = "investor" }) => SizeMap[type]?.width || "18.4375rem"};
    height: ${({ type = "investor" }) => SizeMap[type]?.height || "10rem"};

    border-radius: 0.3rem;
    background: ${({ src }) =>
        src ? `url(${src}) center/cover no-repeat` : "var(--gray-scale-40, #B3BAC1)"};
`;

export default Thumbnail;