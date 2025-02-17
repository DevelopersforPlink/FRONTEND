"use client";

import styled from '@emotion/styled';
import { Caption1,Caption3 } from '@/app/typography';

interface StateProps{
    type:string;
}


const ContentState:React.FC<StateProps> = ({type}) => {
    
    const typeContents={
        editing:'수정중',
        review:'심사중'
    }
    return(
        <Container>
            <Content>{typeContents[type as keyof typeof typeContents] || "알 수 없음"}</Content>
        </Container>
    )
};

export default ContentState;

const Container = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* width: 2.16rem;
    height: 1rem; */
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;

    width: 3.5rem;
    padding: 0.25rem 0.75rem;
    gap: 0.625rem;
    
    border-radius: 0.625rem;
    background-color: #FFDCD0;
    backdrop-filter: blur(10px);
`;

const Content = styled(Caption3)`
    color: var(--sementic-color-notice);
    font-weight: 700;
`;