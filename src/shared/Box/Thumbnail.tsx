"use client";

import styled from "@emotion/styled";

interface ThumbnailProps {
    src ?: string;
    type : 'investormain' | 'upload';
}

const SizeMap = {
    investormain:{
        width:'18.4375rem',
        height:'10rem'
    },
    upload:{
        // width:'25.1875rem',
        width:'100%',
        height:'14.125rem',
    }
}

const Thumbnail = styled.div<ThumbnailProps>`
    width: ${({type}) => SizeMap[type].width};
    height: ${({type}) => SizeMap[type].height};

    /* border-radius: 0.625rem; */
    border-radius: 0.3rem;
    background: ${({src}) => src ? `url(${src}) center/cover no-repeat`:"var(--gray-scale-40, #B3BAC1)"};
`;

export default Thumbnail;