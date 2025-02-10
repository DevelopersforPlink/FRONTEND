"use client";

import styled from '@emotion/styled';

type FiledIconProps = React.SVGAttributes<SVGSVGElement> &{
    src : string; // svg 컴포넌트
    tag : string;
}

export const Filed:React.FC<FiledIconProps> =({src,tag,...props})=>{

    return(
        <Container>
            {/* <svg {...props} width="50" height="50">
                <image xlinkHref={src} width="100%" height="100%" />
            </svg> */}
            <Icon src={src} alt={tag}/>
            {/* <SvgIcon {...props}>
                <use href={src}/>
            </SvgIcon> */}
            <Tag>{tag}</Tag>
        </Container>
    )
}

export default Filed;

const Container = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    padding: 1rem 1.25rem;
    gap: 0.75rem;
    width: 9.0625rem;
    flex-shrink: 0;

    color: var(--gray-scale-60);
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid var(--GrayScale-60, #848F9A);

    svg{
        width: 1.5rem;
        height: 1.5rem;
    }
    
    :hover{
        p{ font-weight: 600; }

        background-color: var(--gray-scale-10);
        transition: all 0.3s;
    }
    :active {
        p{
            font-weight: 600;
            color: var(--primary-color-50);
        }
        /* svg{
            fill: var(--primary-color-50);
        } */
        background-color: var(--primary-color-10);
        border-bottom: 1px solid var(--PrimaryColor-60, #0759E6);
        transition: all 0.3s;
    }

`;

const Tag=styled.p`
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 0.975rem */
`;
const Icon=styled.img`
    fill: inherit;
`;

// const SvgIcon=styled.svg`
//     width: 1.5rem;
//     height: 1.5rem;
//     fill: currentColor;
//     /* fill: var(--gray-scale-60); */
//     /* color: red; */
//     transition : fill 0.3s ease-in-out;
// `;