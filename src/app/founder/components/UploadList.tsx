"use client";

import styled from "@emotion/styled";
import UploadComponent from '@/shared/Box/UploadComponent';

interface UploadItem {
    id:number;
    thumbnail:string;
    title : string;
    company : string;
    service_name : string;
}

interface UploadListProps {
    data:UploadItem[];
}

const UploadList:React.FC<UploadListProps>=({data})=>{
    const itemLists = Array.from({length:Math.ceil(data.length / 3)},(_, index)=>
        data.slice(index*3, index*3+3)
    );

    return(
        <Container>
            {itemLists.map((itemList, rowIndex) => (
                // <Row itemCount={itemList.length/3}>
                    
                // </Row>
                <UploadComponentWrapper  key={rowIndex}>
                {itemList.map((item, index) => (
                    <UploadComponent
                        key={index}
                        thumbnailSrc={item.thumbnail}
                        name={item.title}
                        companyName={item.company}
                        serviceName={item.service_name}
                    />
                ))}
            </UploadComponentWrapper>
            ))}
        </Container>
    )
};

export default UploadList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-shrink: 0;

    margin: 0 5rem ;
    width: 100%;

    flex-wrap: wrap;
    gap: 1.5rem;
`;

const UploadComponentWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    width: 100%;
    
    align-items: center;

    gap: 1.25rem; */
    display: grid;
    grid-template-columns: repeat(3, 1fr); // ✅ 1줄에 4개 
    grid-column-gap: 1.5rem; // ✅ 간격 3개 유지
    grid-row-gap: 1.5rem;
    place-items: center;

    width: 100%;
`;