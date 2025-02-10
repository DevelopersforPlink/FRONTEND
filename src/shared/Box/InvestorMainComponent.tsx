"use client";

// 정사각형 Box 요소들은 Square로 이름 변경할지 고민중

import styled from "@emotion/styled";
import Thumbnail from "./Thumbnail";
import Profile from "./Profile";
import ContentInfo from "./ContentInfo";

interface InvestorMainBoxProps {
    thumbnailSrc ?:string;
    profileSrc ?:string;
    name : string;
    companyName : string;
    serviceName : string;
}

/* 추후 아래 주석으로 변경 */
const InvestorMainBox:React.FC<InvestorMainBoxProps> = ({thumbnailSrc, profileSrc, name, companyName, serviceName}) =>{
// const InvestorMainBox = () =>{

    return(
        <Container>
            <Thumbnail src={thumbnailSrc}/>
            <Wrapper>
                <Profile src={profileSrc}/>
                <ContentInfo 
                    name={name}
                    companyName={companyName}
                    serviceName={serviceName}/>
            </Wrapper>
        </Container>
    )
};

export default InvestorMainBox;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-shrink: 0;

    width: 19.0625rem;
    height: 14.6875rem;
    padding: 0.3125rem;
    gap: 0.75rem;

    border-radius: 0.625rem;
    background: var(--common-white, #FFF);

    :hover{
        background-color: var(--gray-scale-10);
    }

    :active{
        background-color: var(--primary-color-10);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
`;