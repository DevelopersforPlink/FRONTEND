"use client";

import styled from '@emotion/styled';

/* 아이콘 정의 */
import allIcon from '../../../../public/icons/category/all.svg'
import finaceIcon from '../../../../public/icons/category/finaceBanking.svg';
import itIcon from '../../../../public/icons/category/it.svg';
import saleIcon from '../../../../public/icons/category/sales.svg';
import mfIcon from '../../../../public/icons/category/manufacturing.svg';
import studyIcon from '../../../../public/icons/category/study.svg';
import ctIcon from '../../../../public/icons/category/constructionIndustry.svg';
import medicalIcon from '../../../../public/icons/category/medical.svg';
import mediaIcon from '../../../../public/icons/category/media.svg';
import cultureIcon from '../../../../public/icons/category/culture.svg';

/* 네비게이션 요소 불러옴 */
import Filed from './filed';

const filedList:Array<{icon:string;tag:string;}> = [
    {
        // icon:'/icons/category/All.svg',
        icon:'/icons/All.svg',
        tag:'전체'
    },
    {
        icon:'/icons/category/FinaceBanking.svg',
        tag:'금융·은행업'
    },
    {
        icon:'/icons/category/It.svg',
        tag:'IT·정보통신업'
    },
    {
        icon:'/icons/category/Sales.svg',
        tag:'판매·유통업'
    },
    {
        icon:'/icons/category/Manufacturing.svg',
        tag:'제조·생산·화학업'
    },
    {
        icon:'/icons/category/Study.svg',
        tag:'교육업'
    },
    {
        icon:'/icons/category/ConstructionIndustry.svg',
        tag:'건설업'
    },
    {
        icon:'/icons/category/Medical.svg',
        tag:'의료·제약업'
    },
    {
        icon:'/icons/category/Media.svg',
        tag:'미디어·광고업'
    },
    {
        icon:'/icons/category/Culture.svg',
        tag:'문화·예술·디자인업'
    },

]

const Category=()=>{

    return(
        <Container>
            {filedList.map(({icon,tag},index)=>(
                <Filed key={index} src={icon} tag={tag} />
            ))}
        </Container>
    )
}

export default Category;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
`;