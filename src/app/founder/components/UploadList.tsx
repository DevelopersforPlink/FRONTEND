"use client";

import styled from "@emotion/styled";
import UploadComponent from '@/shared/Box/UploadComponent';
import EmptyContent from "@/shared/EmptyContent";

interface UploadItem {
    id:number;
    thumbnail:string;
    title : string;
    company : string;
    service_name : string;
}

interface UploadListProps {
    data:UploadItem[]|null;
}

const UploadList:React.FC<UploadListProps>=({data})=>{
    // const itemLists = Array.from({length:Math.ceil(data.length / 3)},(_, index)=>
    //     data?.slice(index*3, index*3+3)
    // );

    // data가 null일 경우 안전하게 처리
    const itemLists = Array.from(
        { length: data ? Math.ceil(data.length / 3) : 0 }, 
        (_, index) => data ? data.slice(index * 3, index * 3 + 3) : []
    );

    return(
        <Container>
            {itemLists.map((itemList, rowIndex) => (
                // <Row itemCount={itemList.length/3}>
                    
                // </Row>
                <UploadComponentWrapper  key={rowIndex}>
                {itemList?.map((item, index) => (
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
            {data === null && <EmptyContent type="upload"/>}
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1.25rem;
    grid-column-gap: 1.5rem; 
    place-items: center;

    width: 100%;
`;