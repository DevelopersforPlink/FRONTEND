"use client";

import { useState } from "react";
import styled from '@emotion/styled';

/* 네비게이션 요소 불러옴 */
import Filed from './filed';
import FiledIcon from '@/constant/FiledIcon'; // icon list


const Category=()=>{
    const [selectedFiled, setSelectedFiled] = useState<number | null>(null);

    const handleFiledClick = (index: number) => {
        setSelectedFiled(index); // ✅ 클릭한 `Filed`의 index를 저장 (active 유지)
    };

    return(
        <Container>
            {FiledIcon.map(({icon,business_type_display},index)=>(
                <Filed 
                key={index} 
                src={icon} 
                tag={business_type_display}
                state={selectedFiled === index} // 선택된 filed만 active 상태 유지
                onClick={()=>handleFiledClick(index)}
                />
            ))}
        </Container>
    )
}

export default Category;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
`;