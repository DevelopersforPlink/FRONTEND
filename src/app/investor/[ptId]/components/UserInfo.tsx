"use client";

import styled from "@emotion/styled";
import { Caption3, Title5 } from "@/app/typography";

interface UserInfoProps {
    companyName : string;
    serviceName : string;
}

const UserInfo:React.FC<UserInfoProps> = ({companyName,serviceName}) => {

    return(
        <Container>
            <Caption3>{companyName}</Caption3>
            <Title5>{serviceName}</Title5>
        </Container>
    )
}

export default UserInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    gap: 0.75rem;

    color: var(--common-white);
`