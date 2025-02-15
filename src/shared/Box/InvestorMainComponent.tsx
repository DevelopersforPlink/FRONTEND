"use client";

// 정사각형 Box 요소들은 Square로 이름 변경할지 고민중

import styled from "@emotion/styled";
import Thumbnail from "./Thumbnail";
import Profile from "./Profile";
import ContentInfo from "./ContentInfo";

interface InvestorMainBoxProps {
    id:number;
    thumbnail ?:string;
    profile ?:string;
    title : string;
    company : string;
    service_name : string;
    business_type:string;
    business_type_display:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;

    type:'investor'|'founder';
}

/* 추후 아래 주석으로 변경 */
const InvestorMainBox:React.FC<InvestorMainBoxProps> = ({
    id,
    thumbnail, 
    profile, 
    title, 
    company, 
    service_name,
    business_type,
    business_type_display,
    onClick,

    type,
}) =>{

    return(
        <Container onClick={onClick}>
            <Thumbnail src={thumbnail} type={type}/>
            <Wrapper>
                <Profile src={profile}/>
                <ContentInfo 
                    title={title}
                    company={company}
                    service_name={service_name}
                    business_type_display={business_type_display}
                    // 컴포넌트 재사용을 위한 type 지정
                    type='investormain'
                />
            </Wrapper>
        </Container>
    )
};

export default InvestorMainBox;

const Container = styled.button`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-shrink: 0;

    width: 19.0625rem;
    height: 14.6875rem;
    padding: 0.3125rem;
    gap: 0.75rem;

    border: none;
    border-radius: 0.625rem;
    background: var(--common-white, #FFF);

    :hover{
        background-color: var(--gray-scale-10);
        transition: all 0.2s;
    }

    :active{
        background-color: var(--primary-color-10);
        transition: all 0.2s;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
`;