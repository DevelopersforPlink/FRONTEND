"use client";

import styled from '@emotion/styled';
import { Title5,Title7 } from '@/app/typography';
import Content from './Content';

const Test = {
    title : '테스트01',
    header : '플링크',
    info : '· 반려 사유 - @@ 기준 위반'
}

const Alert = () => {

    return(
        <Container>
            <HeaderArea><Header>알림</Header></HeaderArea>
            <Wrapper>
                <ContentsArea>
                    <ContentHeader>어제</ContentHeader>
                    <Content 
                        title={Test.title}
                        header={Test.header}
                        info={Test.info}
                    />
                </ContentsArea>
                <Line />
                <ContentsArea>
                    <ContentHeader>최근 30일</ContentHeader>
                    <Content 
                        title={Test.title}
                        header={Test.header}
                        info={Test.info}
                    />
                </ContentsArea>
            </Wrapper>
        </Container>
    )
}

export default Alert;

const Container = styled.div`
    position: absolute;
    top: 4rem;
    right: 5rem;

    width: 26.25rem;

    border-radius: 0.625rem;
    border: 1px solid var(--gray-scale-80, #4E575F);
    background: var(--common-white, #FFF);
`;

const HeaderArea = styled.div`
    padding: 1.5rem 1.88rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem 1.56rem;
    gap: 1.5rem;
`;
const Header = styled(Title5)``;

const Line = styled.div`
    width: 23.125rem;
    height: 0.0625rem;

    background: var(--gray-scale-20, #D8DBDF);
`;

const ContentsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1.5rem;
`;

const ContentHeader = styled(Title7)``;
