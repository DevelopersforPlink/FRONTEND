"use client";

import styled from "@emotion/styled";
import UploadComponent from '@/shared/Box/UploadComponent';

interface UploadItem {
    name:string;
    companyName:string;
    serviceName:string;
    src:string;
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
                        thumbnailSrc={item.src}
                        name={item.name}
                        companyName={item.companyName}
                        serviceName={item.serviceName}
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

    margin: 0 5rem ;
    width: 100%;

    flex-wrap: wrap;
    gap: 1.5rem;

`;

const UploadComponentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    width: 100%;
    
    align-items: center;

    gap: 1.25rem;
`;