"use client";

import styled from '@emotion/styled';

/* 네비게이션 요소 불러옴 */
import Filed from './filed';
import FiledIcon from '@/constant/FiledIcon'; // icon list

interface CategoryProps {
    selectedFiled : string;
    onClick : (category: string)=>void;
}

const Category:React.FC<CategoryProps>=({onClick,selectedFiled})=>{

    return(
        <Container>
            {FiledIcon.map(({icon,business_type_display},index)=>(
                <Filed 
                    key={index} 
                    src={icon} 
                    tag={business_type_display}
                    state={selectedFiled === business_type_display} // 선택된 filed만 active 상태 유지
                    onClick={()=>{onClick(business_type_display)}}
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
    /* margin: 0 5rem; */
    
`;