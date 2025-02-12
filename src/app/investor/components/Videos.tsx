"use client";

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import InvestorMainBox from "@/shared/Box/InvestorMainComponent";

const boxList:Array<{thumbnailSrc ?:string; profileSrc ?:string; name : string; companyName : string; serviceName : string;id:number}>=[
    {
        thumbnailSrc: 'https://i.pinimg.com/736x/60/64/51/606451347f254811ae6a2841e70b3014.jpg',
        profileSrc :'https://i.pinimg.com/736x/03/c5/63/03c5638d323961e848155c8cf6863540.jpg' ,
        name : '테스트 1입니다',
        companyName : '테스트 1',
        serviceName : 'test-01',
        id:1,
    },
    {
        profileSrc:'https://i.pinimg.com/736x/08/fc/c3/08fcc39b4dc798e91db8208d732bc56b.jpg',
        name : '테스트 2입니다',
        companyName : '테스트 2',
        serviceName : 'test-02',
        id:2,
    },
    {
        thumbnailSrc: 'https://i.pinimg.com/736x/df/59/6d/df596da6fa8c58c404ef1066376272d4.jpg',
        profileSrc :'https://i.pinimg.com/736x/8c/05/8c/8c058cc527b3f60c8055215b95f38b3f.jpg' ,
        name : '테스트 3입니다',
        companyName : '테스트 3',
        serviceName : 'test-03',
        id:3,
    },
    {
        profileSrc:'https://i.pinimg.com/736x/2c/ea/36/2cea3612832722e2094f48630dc81a40.jpg',
        name : '테스트 4입니다',
        companyName : '테스트 4',
        serviceName : 'test-04',
        id:4,
    },
]

const Videos = () => {
    const router = useRouter();

    return(
        <Container>
            <VideoWrapper>
                {boxList.map(({thumbnailSrc,profileSrc,name,companyName,serviceName,id},index)=>(
                    <InvestorMainBox 
                        thumbnailSrc={thumbnailSrc}
                        profileSrc={profileSrc}
                        name={name}
                        companyName={companyName} 
                        serviceName={serviceName}
                        
                        key={index}
                        onClick={()=> router.push(`/investor/${id}`)}
                        />
                ))}
            </VideoWrapper>
            <VideoWrapper>
                {boxList.map(({thumbnailSrc,profileSrc,name,companyName,serviceName,id},index)=>(
                    <InvestorMainBox 
                        thumbnailSrc={thumbnailSrc}
                        profileSrc={profileSrc}
                        name={name}
                        companyName={companyName} 
                        serviceName={serviceName}
                        
                        key={index}
                        onClick={()=> router.push(`/investor/${id}`)}
                        />
                ))}
            </VideoWrapper>
        </Container>
    )
};

export default Videos;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto 5rem;
    gap: 1.5rem;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
`;