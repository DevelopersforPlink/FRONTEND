"use client";

import styled from "@emotion/styled";
import UserInfo from "./UserInfo";
import ContentInfo from "./ContentInfo";
import Profile from "@/shared/Box/Profile";
import Thumbnail from "@/shared/Box/Thumbnail";
import FilledButton from "@/shared/Button/FIlledButton";

interface BoxProps {
    name : string;
    summation : string;
    companyName : string;
    serviceName : string;
}

const videoTest = `https://i.pinimg.com/736x/75/81/8f/75818fb615b8b9f205bc17653b4ae345.jpg`;

const BoxComponent: React.FC<BoxProps> = ({name, summation, companyName, serviceName}) => {

    return(
        <Container>
            <InfoWrapper>
                <ContentInfo name={name} summation={summation}/>
                <UserInfoWrapper>
                    <Profile />
                    <UserInfo companyName={companyName} serviceName={serviceName}/>
                </UserInfoWrapper>
            </InfoWrapper>

            <VideoWrapper>
                {/* 왜 src test가 안될깡..? */}
                <Video src={videoTest}/>
                <FilledButton scale="l" state="default" children='재생하기'/>
            </VideoWrapper>
        </Container>
    )
}

export default BoxComponent;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 6.69rem 5rem;
    background-color: var(--common-black);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 1.5rem;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 1.5rem;
`;

const Video = styled(Thumbnail)`
    width: 25.875rem;
    height: 14.625rem;
    align-self: stretch;
    border-radius: 0.625rem;
    background: var(--GrayScale-20, #D8DBDF);
    box-shadow: 0px 0px 200px 0px rgba(7, 89, 230, 0.80);
`;