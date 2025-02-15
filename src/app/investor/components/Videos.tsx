"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import InvestorMainBox from "@/shared/Box/InvestorMainComponent";

interface TestBoxListProps {
    id:number;
    thumbnail:string;
    profile:string;
    title : string;
    company : string;
    service_name : string;
    business_type:string;
    business_type_display:string;
    onClick:()=>void;
    type: "investor" | "founder"; 
}

const boxList:Array<TestBoxListProps>=[
    {
        id:1,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트01',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'IT',
        business_type_display:'IT',
        onClick:() => console.log(`클릭됨`),
        type:"investor",  
    },{
        id:2,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'IT',
        business_type_display:'IT',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
];

const Videos = () => {
    const router = useRouter();

    return(
        <Container>
            <VideoWrapper>
                {boxList.map(({
                    thumbnail,
                    profile,
                    title,
                    company,
                    service_name,
                    id,
                    business_type,
                    business_type_display,
                    type
                },)=>(
                    <React.Fragment key={id}>
                    <InvestorMainBox 
                        thumbnail={thumbnail}
                        profile={profile}
                        title={title}
                        company={company} 
                        service_name={service_name}
                        business_type={business_type}
                        business_type_display={business_type_display}
                        
                        key={id}
                        onClick={()=> router.push(`/investor/${id}`)}
                        type={type}
                        id={id}
                        />
                    </React.Fragment>
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