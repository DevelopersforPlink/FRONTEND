"use client";

import styled from "@emotion/styled";
import Thumbnail from "./Thumbnail";
import Profile from "./Profile";
import ContentInfo from "./ContentInfo";
import { stringToUTF16BEString } from "pdfjs-dist/types/src/shared/util";
// import PencilIcon from '/icon/Pencil.svg';
// import TrashIcon from '/icon/Trash.svg';

interface UploadComponentProps {
    thumbnailSrc ?:string;
    name : string;
    companyName : string;
    serviceName : string;
}

const UploadComponent:React.FC<UploadComponentProps> = ({thumbnailSrc,name,companyName,serviceName}) =>{

    return(
        <Container>
            <Thumbnail src={thumbnailSrc} type="upload"/>
            <Wrapper>
                <ContentInfo 
                    name={name}
                    companyName={companyName}
                    serviceName={serviceName}
                    type="upload"
                />
                <ButtonsWrapper>
                    <EditButton>
                        <img src="/icon/Pencil.svg"/>
                        {/* <PencilIcon /> */}
                    </EditButton>
                    <DeleteButton>
                        <img src="/icon/Trash.svg"/>
                        {/* <TrashIcon /> */}
                    </DeleteButton>
                </ButtonsWrapper>
            </Wrapper>
        </Container>
    )
};

export default UploadComponent;

const Container = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    width: 25.8125rem;
    /* height: 20.8125rem; */
    padding: 0.3125rem;
    gap: 0.75rem;

    border-radius: 0.625rem;
    background-color: var(--common-white);
    :hover{
        background-color: var(--gray-scale-10);
    }
    :active{
        background-color: var(--gray-scale-20);
    }

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const EditButton = styled.button`
    border: none;
`;

const DeleteButton = styled.button`
    border: none;
`;