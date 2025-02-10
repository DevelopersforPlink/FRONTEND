"use client";

import styled from "@emotion/styled";

interface ThumbnailProps {
    src ?: string;
}

const Thumbnail = styled.div<ThumbnailProps>`
    width: 18.4375rem;
    height: 10rem;

    /* border-radius: 0.625rem; */
    border-radius: 0.3rem;
    background: ${({src}) => src ? `url(${src}) center/cover no-repeat`:"var(--gray-scale-40, #B3BAC1)"};
`;

export default Thumbnail;