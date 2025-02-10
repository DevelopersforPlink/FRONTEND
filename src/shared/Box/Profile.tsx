"use client";

import styled from "@emotion/styled";

interface BoxProfileProps {
    src? : string;
}

const Profile = styled.div<BoxProfileProps>`
    width: 3.125rem;
    height: 3.125rem;

    border-radius: 6.25rem;
    background: ${({src})=> src ? `url(${src}) center/cover no-repeat`:'var(--gray-scale-20, #D8DBDF)'};
`;

export default Profile;