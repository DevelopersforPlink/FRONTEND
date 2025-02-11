"use client";

import styled from "@emotion/styled";
import Cross from '/icons/Cross.svg';

const Modal:React.FC = () => {

    return(
        <Container>
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

export default Modal;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
`;
