"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import InvestorMainBox from "@/shared/Box/InvestorMainComponent";
import Image from "next/image";
import EmptyContent from "@/shared/EmptyContent";

interface VideosItemProps {
    id:string;
    thumbnail:string;
    profile:string;
    title : string;
    company : string;
    service_name : string;
    business_type:string;
    business_progress:string;
    is_approve:boolean;
    created_at:string;
}

interface VideosProps {
    presentations:VideosItemProps[]|null;
    onClick:()=>void;
    type: "investor" | "founder"; 
}

const Videos:React.FC<VideosProps> = ({presentations, onClick,type}) => {
    const router = useRouter();
    return(
        <Container>
            <VideoWrapper>
                {presentations?.map(({
                    id,
                    thumbnail,
                    profile,
                    title,
                    company,
                    service_name,
                    business_type,
                    business_progress,
                    is_approve
                },index)=>(
                    <React.Fragment key={index}>
                        <InvestorMainBox 
                            id={id}
                            thumbnail={thumbnail}
                            profile={profile}
                            title={title}
                            company={company} 
                            service_name={service_name}
                            business_type={business_type}
                            business_progress={business_progress}
                            
                            is_approve={is_approve}
                            onClick={()=> router.push(`/investor/${id}`)}
                            type={type}
                            />
                    </React.Fragment>
                ))}
            </VideoWrapper>
            {presentations === null &&         
                <EmptyContent type='category'/>
            }
        </Container>
    )
};

export default Videos;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 3rem;
    /* gap: 1.5rem; */
    width: 100%;
`;

const VideoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // ✅ 1줄에 4개 
    grid-column-gap: 2rem; // ✅ 간격 3개 유지
    grid-row-gap: 1.5rem;
    place-items: center;

    /* background-color: yellow; */
`;