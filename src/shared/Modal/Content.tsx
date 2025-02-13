"use client";

import styled from "@emotion/styled";
import Profile from '../Box/Profile';
import { Title7,Caption2,Caption6 } from '@/app/typography';

interface ContentProps {
    title : string;
    header : string;
    info : string;
}

const Content:React.FC<ContentProps> = ({title, header, info}) => {

    return(
        <Container>
            <Profile />
            <ContentInfo>
                <InfoTitle>{title}</InfoTitle>
                <CaptionArea>
                    <InfoCaptionHeader>{header}</InfoCaptionHeader>
                    <InfoCaptionInfo>{info}</InfoCaptionInfo>
                </CaptionArea>
            </ContentInfo>
        </Container>
    )
};

export default Content;

const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;

    width: 23.125rem;
    padding: 0.5rem;
    gap: 0.75rem;

    border-radius: 0.625rem;
    background-color: transparent;

    border: none;

    :hover{
        background-color: var(--gray-scale-10);
    }

    :active{
        background-color: var(--gray-scale-20);
    }
`;

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.5rem;
`;

const InfoTitle = styled(Title7)`
    color: var(--gray-scale-100);
`;

const CaptionArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.5rem;
`;

const InfoCaptionHeader = styled(Caption2)`
    color: var(--gray-scale-100);
`;

const InfoCaptionInfo = styled(Caption6)`
    color: var(--gray-scale-90);
`;
