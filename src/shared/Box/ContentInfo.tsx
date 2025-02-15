"use client";

import { Title4, Title6, Caption3, Caption5 } from "@/app/typography";
import styled from "@emotion/styled";

/* 확장성 고려해서 interface로 선언 */
interface ContentInfoProps {
    title : string;
    company : string;
    service_name : string;
    business_type_display:string;

    type:'investormain' | 'upload'
}

const typograpyMap = {
    investormain:{
        name:Title6,
        caption:Caption5,
    },
    upload:{
        name:Title4,
        caption:Caption3,
    },
    // 박스 요소 더 만들어지면 그거에 맞게 추가하기
};

const ContentInfo:React.FC<ContentInfoProps> = ({
    title, 
    company, 
    service_name, 
    business_type_display,
    type
}) =>{
    const NameComponent = typograpyMap[type].name;
    const CaptionComponent = typograpyMap[type].caption;

    return(
        <Container >
            <NameComponent>{title}</NameComponent>
            <CaptionsWrapper>
                <CaptionComponent>{company}</CaptionComponent>
                <CaptionSeparator />
                <CaptionComponent>{service_name}</CaptionComponent>
            </CaptionsWrapper>
        </Container>
    )
}

export default ContentInfo;

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    gap: 0.5rem;
`;

const CaptionsWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`;

const CaptionSeparator = styled.div`
    /* width: 0.0625rem; */
    width: 0.1rem;
    height: 0.75rem;
    background: var(--GrayScale-40, #B3BAC1);
`;