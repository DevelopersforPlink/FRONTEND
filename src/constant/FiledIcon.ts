"use clinet";
interface FiledTypeProps {
    icon:string;
    business_type_display:string,
}

const FiledIcon:Array<FiledTypeProps> = [
    {
        icon:'/icons/All.svg',
        business_type_display:'전체',
        // business_type:
    },
    {
        icon:'/icons/All.svg',
        business_type_display:'서비스업',
        // business_type:
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

export default FiledIcon