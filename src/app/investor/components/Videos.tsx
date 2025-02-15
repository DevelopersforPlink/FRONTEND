"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import InvestorMainBox from "@/shared/Box/InvestorMainComponent";
import { boxList } from '@/constant/testVideos';

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
    
    margin-top: 3rem;
    gap: 1.5rem;
    width: 100%;
`;

const VideoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // ✅ 1줄에 4개 
    grid-column-gap: 1.5rem; // ✅ 간격 3개 유지
    grid-row-gap: 1.5rem;
    place-items: center;
`;