"use client";

import styled from "@emotion/styled";
import Thumbnail from "./Thumbnail";
import Profile from "./Profile";
import ContentInfo from "./ContentInfo";
// import { stringToUTF16BEString } from "pdfjs-dist/types/src/shared/util";
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
            <Thumbnail src={thumbnailSrc} type="founder" is_approve={false}/>
            <Wrapper>
                <ContentInfo 
                    title={name}
                    company={companyName}
                    service_name={serviceName}
                    type="upload" business_progress={""}                />
                {/* <ButtonsWrapper>
                    <EditButton>
                        <Icon src="/icons/Pencil.svg"/> */}
                        {/* <PencilIcon /> */}
                    {/* </EditButton> */}
                    {/* <DeleteButton>
                        <Icon src="/icons/Trash.svg"/> */}
                        {/* <TrashIcon /> */}
                    {/* </DeleteButton>
                </ButtonsWrapper> */}
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

    /* width: 25.8125rem; */
    width: 100%;
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

    img {
        width: 1.5rem;
        height: 1.5rem;
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

    gap: 1.5rem;
`;

const EditButton = styled.button`
    /* width: 1.5rem;
    height: 1.5rem; */
    
    border: none;
    background-color: transparent;
`;

const DeleteButton = styled.button`
    /* width: 1.5rem;
    height: 1.5rem; */
    
    border: none;
    background-color: transparent;
`;

const Icon = styled.div<{src:string;}>`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--gray-scale-60);

    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image:url(${({ src }) => src});

    :hover{
        background-color: var(--gray-scale-80);
        transition: all 0.3s;
    }
    :active{
        background-color: var(--gray-scale-100);
        transition: all 0.3s;
    }
`;