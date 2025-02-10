"use client";

import { Title6,Caption5 } from "@/app/typography";
import styled from "@emotion/styled";

/* 확장성 고려해서 interface로 선언 */
interface ContentInfoProps {
    name : string;
    companyName : string;
    serviceName : string;
}

const ContentInfo:React.FC<ContentInfoProps> = ({name, companyName, serviceName}) =>{

    return(
        <Container>
            <Title6>{name}</Title6>
            <CaptionsWrapper>
                <Caption5>{companyName}</Caption5>
                <CaptionSeparator />
                <Caption5>{serviceName}</Caption5>
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