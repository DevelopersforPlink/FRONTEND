"use client";

import React,{useEffect,useState} from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

// 1️⃣ 동적 improt로 'react-pdf'를 클라이언트에서만 실행
const Document = dynamic(
    ()=> import('react-pdf').then((mod)=>mod.Document),
    { ssr: false }
);
const Page = dynamic(
    ()=> import('react-pdf').then((mod)=>mod.Page),
    {ssr:false}
)

// 2️⃣ Next.js 환경에서 workerSrc 설정
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';


interface ModalProps {
    isOpen : boolean;
    onClose : () => void;
    pdfUrl : string;
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, pdfUrl}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    
    const IconUrl = '/icons/Cross.svg';
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
                    <img src={IconUrl} alt="close" />
                </CrossButton>
                <PdfViewer>
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={({numPages})=> setNumPages(numPages)}
                    >
                        {Array.from(new Array(numPages), (_, index)=>(
                            <Page key={index} pageNumber={index+1}/>
                        ))}
                    </Document>
                </PdfViewer>
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
    justify-content: right;
    position: relative;

    background-color: red;
`;

const CrossButton = styled.button`
    cursor: pointer;

    position: absolute;
    
    border: none;
    background-color: none;

    img {
        width: 2rem;
        height: 2rem;
    }
`;

const PdfViewer = styled.div`
    width: 100%;
    height: auto;
    overflow-y: auto;
`;