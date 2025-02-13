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
                    {/* SVG를 직접 JSX로 추가 (색상 적용 문제 해결) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                        <g clipPath="url(#clip0_667_9317)">
                            <path d="M31.609 0.390382C31.359 0.140421 31.0199 0 30.6664 0C30.3128 0 29.9737 0.140421 29.7237 0.390382L15.9997 14.1144L2.27572 0.390382C2.02568 0.140421 1.6866 0 1.33305 0C0.979496 0 0.640419 0.140421 0.390382 0.390382C0.140421 0.640419 0 0.979496 0 1.33305C0 1.6866 0.140421 2.02568 0.390382 2.27572L14.1144 15.9997L0.390382 29.7237C0.140421 29.9737 0 30.3128 0 30.6664C0 31.0199 0.140421 31.359 0.390382 31.609C0.640419 31.859 0.979496 31.9994 1.33305 31.9994C1.6866 31.9994 2.02568 31.859 2.27572 31.609L15.9997 17.885L29.7237 31.609C29.9737 31.859 30.3128 31.9994 30.6664 31.9994C31.0199 31.9994 31.359 31.859 31.609 31.609C31.859 31.359 31.9994 31.0199 31.9994 30.6664C31.9994 30.3128 31.859 29.9737 31.609 29.7237L17.885 15.9997L31.609 2.27572C31.859 2.02568 31.9994 1.6866 31.9994 1.33305C31.9994 0.979496 31.859 0.640419 31.609 0.390382Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_667_9317">
                                <rect width="32" height="32" fill="currentColor"/>
                            </clipPath>
                        </defs>
                    </svg>
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

    color: var(--common-white);
    background-color: transparent;
`;

const PdfViewer = styled.div`
    width: 100%;
    height: auto;
    overflow-y: auto;
`;