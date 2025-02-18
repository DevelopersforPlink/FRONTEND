"use client";

import styled from "@emotion/styled";
import { Headline1,Body4 } from "@/app/typography";

interface ContentInfoProps {
    name : string;
    summary : string;
}

const ContentInfo :React.FC<ContentInfoProps> = ({name, summary}) => {

    return(
        <Container>
            <Headline1>{name}</Headline1>
            <SummationArea>
                <Body4>{summary}</Body4>
            </SummationArea>
        </Container>
    )
}

export default ContentInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    color: var(--common-white);
`;

const SummationArea = styled.div`
    height: 9.1875rem;
    align-self: stretch;
    
`;