"use client";

import React,{ useState } from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";


// core viewer
// import { Viewer } from "@react-pdf-viewer/core";
// // plugins
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// // import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // ✅ `@react-pdf-viewer/core`와 `@react-pdf-viewer/default-layout`을 서버에서 실행되지 않도록 동적 import 적용
// const Viewer = dynamic(() => import("@react-pdf-viewer/core").then((mod) => mod.Viewer), { ssr: false });
// // ✅ `defaultLayoutPlugin`은 컴포넌트가 아니므로 그냥 import
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// // ✅ CSS 파일 임포트 (Next.js에서 이 부분은 유지)
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// // ✅ Next.js에서 `canvas` 모듈을 사용하지 않도록 설정
// if (typeof window !== "undefined") {
//     // 브라우저 환경에서만 실행되도록 `pdfjs-dist` 설정
//     import("pdfjs-dist/build/pdf").then((pdfjs) => {
//         pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
//     });
// }


// ✅ Next.js 환경에서 `pdfjs-dist` 타입 문제 해결 (타입 선언한 후 사용)
// import("pdfjs-dist/build/pdf").then((pdfjs: any) => {
//     pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
// });


interface ModalProps {
    isOpen : boolean;
    onClose : () => void;
    pdfUrl : string;
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, pdfUrl}) => {
    // const [numPages, setNumPages] = useState<number | null>(null);
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }:{numPages:number}){
        setNumPages(numPages);
        setPageNumber(1);
    }
    
    const IconUrl = '/icons/Cross.svg';
    if (!isOpen ) return null;

    // create new plugin instance
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();


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
                    {/* <Document
                        // file={pdfUrl}
                        file='/modalTest.pdf'
                        // onLoadSuccess={({numPages})=> setNumPages(numPages)}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (_, index)=>(
                            <Page key={index} pageNumber={pageNumber} height={600}/>
                        ))}
                    </Document>
                    Page {pageNumber} of {numPages}
                    {pageNumber > 1 && (
                        <button onClick={() => setPageNumber(prev => prev + -1)}>
                        이전페이지
                        </button>
                    )}
                    {pageNumber < numPages && <button onClick={() => setPageNumber(prev => prev + +1)}>다음페이지</button>} */}
                    {/* <Viewer
                        fileUrl={pdfUrl}
                        plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,
                        ]}
                    /> */}
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

    color: var(--common-white);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    position: relative;
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