// "use client";

// import styled from "@emotion/styled";
// import UserInfo from "./UserInfo";
// import ContentInfo from "./ContentInfo";
// import Profile from "@/shared/Box/Profile";
// import Thumbnail from "@/shared/Box/Thumbnail";
// import FilledButton from "@/shared/Button/FIlledButton";

// interface BoxProps {
//     name : string;
//     summary : string;
//     companyName : string;
//     serviceName : string;
//     profile:string;
//     thumbnail:string;
//     is_approve:boolean;
// }

// const videoTest = `https://i.pinimg.com/736x/75/81/8f/75818fb615b8b9f205bc17653b4ae345.jpg`;

// const BoxComponent: React.FC<BoxProps> = ({
//     name, 
//     summary, 
//     companyName, 
//     serviceName,
//     profile, 
//     thumbnail,
//     is_approve
// }) => {

//     return(
//         <Container>
//             <InfoWrapper>
//                 <ContentInfo name={name} summary={summary}/>
//                 <UserInfoWrapper>
//                     <Profile src={profile}/>
//                     <UserInfo companyName={companyName} serviceName={serviceName}/>
//                 </UserInfoWrapper>
//             </InfoWrapper>

//             <VideoWrapper>
//                 {/* 왜 src test가 안될깡..? */}
//                 <Video 
//                     src={thumbnail} 
//                     // type="investormain"
//                     is_approve={is_approve}
//                     />
//                 <FilledButton scale="l" state="default" children='재생하기' />
//             </VideoWrapper>
//         </Container>
//     )
// }

// export default BoxComponent;

// const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;

//     width: 100%;

//     padding: 6.69rem 5rem;
//     background-color: var(--common-black);
// `;

// const InfoWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-start;
// `;

// const UserInfoWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;

//     gap: 1.5rem;
// `;

// const VideoWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;

//     gap: 1.5rem;
// `;

// const Video = styled(Thumbnail)`
//     width: 25.875rem;
//     height: 14.625rem;
//     align-self: stretch;
//     border-radius: 0.625rem;
//     background: ${({src})=> src ? `url(${src}) center/cover no-repeat`:'var(--gray-scale-20, #D8DBDF)'};
//     box-shadow: 0px 0px 200px 0px rgba(7, 89, 230, 0.80);
// `;

"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import UserInfo from "./UserInfo";
import ContentInfo from "./ContentInfo";
import Profile from "@/shared/Box/Profile";
import Thumbnail from "@/shared/Box/Thumbnail";
import FilledButton from "@/shared/Button/FIlledButton";

interface BoxProps {
    name: string;
    summary: string;
    companyName: string;
    serviceName: string;
    profile: string;
    thumbnail: string;
    is_approve: boolean;
}

const BoxComponent: React.FC<BoxProps> = ({
    name,
    summary,
    companyName,
    serviceName,
    profile,
    thumbnail,
    is_approve
}) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // 유튜브 영상 URL (예시)
    const videoUrl = "https://www.youtube.com/embed/N03vQ8kEdF8"; // URL을 iFrame 포맷으로 변환

    const handlePlayClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <Container>
            <InfoWrapper>
                <ContentInfo name={name} summary={summary} />
                <UserInfoWrapper>
                    <Profile src={profile} />
                    <UserInfo companyName={companyName} serviceName={serviceName} />
                </UserInfoWrapper>
            </InfoWrapper>

            <VideoWrapper>
                {isVideoPlaying ? (
                    <VideoPlayerWrapper>
                        {/* iFrame으로 유튜브 영상 삽입 */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </VideoPlayerWrapper>
                ) : (
                    <Video src={thumbnail} is_approve={is_approve} />
                )}
                <FilledButton
                    scale="l"
                    state="default"
                    children="재생하기"
                    onClick={handlePlayClick}
                />
            </VideoWrapper>
        </Container>
    );
};

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
    background: ${({ src }) =>
        src ? `url(${src}) center/cover no-repeat` : "var(--gray-scale-20, #D8DBDF)"};
    box-shadow: 0px 0px 200px 0px rgba(7, 89, 230, 0.8);
`;

const VideoPlayerWrapper = styled.div`
    width: 25.875rem;
    height: 14.625rem;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0px 0px 200px 0px rgba(7, 89, 230, 0.8);
`;
