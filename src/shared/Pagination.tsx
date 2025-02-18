"use client";
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Caption2,Caption7 } from '@/app/typography';

interface PaginationProps {
    current_page:number;
    total_page:number;

    // investor/page.tsx에서 api 통신 함수 받아옴.
    onPageChange : (pag:number)=>void;
}

const Pagination:React.FC<PaginationProps>=({
    current_page,
    total_page,
    onPageChange
})=>{

    const pagePerGroup = 5;
    const totalGroup = Math.ceil(total_page/pagePerGroup); // 총 페이지 그룹 수( 페이지 수를 5씩 나눈 그룹의 수 )

    const [currentPageGroup, setCurrentPageGroup] = useState(Math.floor((current_page-1)/pagePerGroup));
    // api 통신을 위한 내부 상태로 현제 페이지 관리
    const [currentPage, setCurrentPage] = useState(current_page);

    // 현재 그룹의 첫 페이지 및 마지막 페이지 계산
    const startPage = currentPageGroup * pagePerGroup + 1;
    const endPage = Math.min(startPage + pagePerGroup -1, total_page);

    const handlePageClick = (page:number) => {
        setCurrentPage(page); // 현재 페이지 업데이트
        onPageChange(page); // 부모에서 api 호출
    }

    return(
        <Container>
            {total_page>5 && currentPageGroup > 0 && (
                <Icon 
                    src='/icons/Anglesmallleft.svg' 
                    onClick={()=>{
                        // 클릭시 <ListNumber>에 출력되는 값들이 5의 배수로 작아져야함
                        if (currentPageGroup >0) {
                            setCurrentPageGroup((prev)=>prev-1);
                        }
                    }}
                />
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                <ListNumber 
                key={page}
                
                // api 통신 부분 추가해야함.
                // category는 유지하고, page만 달라지게 GET 요청
                // 클릭시 부모엥서 api 호출
                onClick={()=> {
                    handlePageClick(page);
                    console.log(`${page}를 클릭했습니다!`)
                }}
                    isActive={page === currentPage} // 현재 페이지와 동일하면 활성화 스타일 적용
                >
                    {page}
                </ListNumber>
            ))}
            {total_page > 5 && currentPageGroup < totalGroup -1 && (
                <Icon 
                    src='/icons/Anglesmallright.svg' 
                    onClick={()=>{
                        // 클릭시 <ListNumber>에 출력되는 값들이 5의 배수로 커져야함.
                        if(currentPageGroup<totalGroup -1){
                            setCurrentPageGroup((prev)=>prev+1)
                        }
                    }}
                />
            )}
        </Container>
    )
};

export default Pagination;

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
    /* width: 1.5rem;
    height: 1.5rem; */
    cursor: pointer;

    width: 1.25rem;
    height: 1.25rem;
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

const ListNumber = styled.button<{isActive:boolean}>`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3125rem 0.75rem;
    /* gap: 0.625rem; */
    flex-shrink: 0;

    border: none;
    border-radius: 0.5rem;
    color: ${({ isActive }) => (isActive ? "var(--primary-color-60)" : "var(--gray-scale-100)")}; 
    background-color: ${({ isActive }) => (isActive ? "var(--primary-color-10)" : "var(--common-white)")}; 

    ${({ isActive }) => (isActive ? css(Caption2) : css(Caption7))}; // ✅ 스타일 적용

    :hover{
        color: var(--gray-scale-90);
        background-color: var(--gray-scale-10);
        transition: all 0.2s;
    }
    /* :active{

        color: var(--primary-color-60);
        background-color: var(--primary-color-10);
        transition: all 0.2s;
    } */
`