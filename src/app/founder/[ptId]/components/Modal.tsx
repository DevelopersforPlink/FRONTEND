"use client";

import React,{ useState } from "react";
import styled from "@emotion/styled";
import PdfViewer from "./PdfViewer";
import PdfViewerInternal from "./PdfViewerInternal";
import {BsFillXCircleFill} from 'react-icons/bs';

interface ModalProps {
    isOpen : boolean;
    onClose : () => void;
    fileUrl : string;
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, fileUrl}) => {
    // const [numPages, setNumPages] = useState<number | null>(null);
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }:{numPages:number}){
        setNumPages(numPages);
        setPageNumber(1);
    }
    
    if (!isOpen ) return null;

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(event.target === event.currentTarget){
            onClose();
        }
    }

    return(
        <Container onClick={handleOutsideClick}>
            <Wrapper>
                <CrossButton onClick={onClose}>
                    <CrossIcon />
                </CrossButton>
                <PdfViewer fileUrl='/test03.pdf'/>
            </Wrapper>
        </Container>
    )
}

export default Modal;

const Container = styled.div`
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(23, 26, 28, 0.50);
    backdrop-filter: blur(10px);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80%;
    height: 80%;
`;

const CrossButton = styled.button`
    cursor: pointer;
    z-index: 10;

    margin: 0 0.8rem auto auto;

    position: sticky;
    top: 6rem;
    right: -6rem;

    width: fit-content;
    width: auto;
    
    border: none;
    background-color: none;

    color: var(--gray-scale-50);
    opacity: 0.5;
    background-color: transparent;

    :hover{
        color: var(--gray-scale-70);
        opacity: 0.5;
        transition: all 0.2s;
    }

    :active{
        color: var(--gray-scale-70);
        transition: all 0.2s;
    }
`;

const CrossIcon = styled(BsFillXCircleFill)`
    width: 2rem;
    height: 2rem;
`;