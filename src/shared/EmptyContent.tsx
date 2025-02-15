"use client";

import styled from '@emotion/styled';
import { Title5,Body5 } from '@/app/typography';

interface EmptyContentProps {
    type: keyof typeof TypeContent; // ✅ `category` 또는 `upload`만 허용
}

interface TypeContentProps {
    title: string;
    body: string;
}

const TypeContent: Record<string, TypeContentProps> = {
    category: {
        title: "해당 카테고리에 프레젠테이션이 없어요",
        body: "전체 카테고리에서 다양한 프레젠테이션을 탐색해보세요",
    },
    upload: {
        title: "등록한 프레젠테이션이 없어요",
        body: "자신만의 프레젠테이션을 등록해보세요",
    },
};

const EmptyContent:React.FC<EmptyContentProps> = ({type}) => {

    return(
        <Container>
            <Icon src='/icons/Crosscircle.svg'/>
            <Caption>
                <Title5>{TypeContent[type].title}</Title5>
                <Body5>{TypeContent[type].body}</Body5>
            </Caption>
        </Container>
    )
};

export default EmptyContent;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height:30rem;;
`;
const Icon = styled.div<{src:string;}>`
    margin-bottom: 2rem;

    width: 6.25rem;
    height: 6.25rem;
    background-color: var(--primary-color-20);

    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image:url(${({ src }) => src});
`;

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`;