"use client";
import styled from '@emotion/styled';

interface PaginationProps {
    number:string;
    // onClick:()=>void;
}

export const Pagination:React.FC<PaginationProps>=({number})=>{

    return(
        <Container>
            <Icon src='/icons/Anglesmallleft.svg' />
            <ListNumber>{number}</ListNumber>
            <Icon src='/icons/Anglesmallright.svg' />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    margin: 4rem 0;
    width: fit-content;
`;
// ✅ `mask-image`를 활용한 SVG 색상 변경 (hover, active 상태 반응)
const Icon = styled.div<{ src: string;}>`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--gray-scale-70);
    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image: url(${({ src }) => src});

    :hover{
        background-color: var(--gray-scale-100);
        transition: all 0.2s;
    }

    :active{
        background-color: var(--primary-color-60);
        transition: all 0.2s;
    }

    // hover, active 시 크기 변화 방지
    transition: background-color 0.3s ease;
`;

const ListNumber = styled.button`
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3125rem 0.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;

    border: none;
    border-radius: 0.5rem;
    color: var(--gray-scale-100);
    background-color: var(--common-white);

    :hover{
        color: var(--gray-scale-90);
        background-color: var(--gray-scale-10);
        transition: all 0.2s;
    }
    :active{
        color: var(--primary-color-60);
        background-color: var(--primary-color-10);
        transition: all 0.2s;
    }
`