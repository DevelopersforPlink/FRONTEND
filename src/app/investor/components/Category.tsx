"use client";

import styled from '@emotion/styled';


/* 네비게이션 요소 불러옴 */
import Filed from './filed';

interface FiledTypeProps {
    icon:string;
    business_type_display:string,
}

const filedList:Array<FiledTypeProps> = [
    {
        icon:'/icons/All.svg',
        business_type_display:'전체',
    },
    {
        icon:'/icons/FinaceBanking.svg',
        business_type_display:'금융·은행업'
    },
    {
        icon:'/icons/It.svg',
        business_type_display:'IT·정보통신업'
    },
    {
        icon:'/icons/Sales.svg',
        business_type_display:'판매·유통업'
    },
    {
        icon:'/icons/Manufacturing.svg',
        business_type_display:'제조·생산·화학업'
    },
    {
        icon:'/icons/Study.svg',
        business_type_display:'교육업'
    },
    {
        icon:'/icons/ConstructionIndustry.svg',
        business_type_display:'건설업'
    },
    {
        icon:'/icons/Medical.svg',
        business_type_display:'의료·제약업'
    },
    {
        icon:'/icons/Media.svg',
        business_type_display:'미디어·광고업'
    },
    {
        icon:'/icons/Culture.svg',
        business_type_display:'문화·예술·디자인업'
    },

]

const Category=()=>{

    return(
        <Container>
            {filedList.map(({icon,business_type_display},index)=>(
                <Filed key={index} 
                src={icon} 
                tag={business_type_display} 
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