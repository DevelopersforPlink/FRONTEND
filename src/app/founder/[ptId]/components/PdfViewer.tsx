"use client";

import { useEffect,useState } from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

import { ScrollMode, SpecialZoomLevel, Viewer, ViewMode, Worker } from "@react-pdf-viewer/core";
// 플러그인 도구들 레이아웃 가져옴
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { ViewportBoundary } from "next/dist/lib/metadata/metadata-boundary";

// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "@react/pdf-viewer/core/lib/styles/index.css";

import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

// Import styles
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

interface PdfViewerProps {
    fileUrl:string;
}

const PdfViewer:React.FC<PdfViewerProps> = ({fileUrl})=>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin()

    return(
        <Container className="h-screen w-screen">
            <WorkerComponent workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
                <ViewerComponent 
                    // fileUrl={'/modalTest.pdf'}
                    fileUrl={'/test02.pdf'}
                    // fileUrl={'/test03.pdf'}
                    // fileUrl={'/testPDF.pdf'}
                    defaultScale={SpecialZoomLevel.PageFit} 
                    scrollMode={ScrollMode.Vertical} 
                    viewMode={ViewMode.SinglePage}              
                />
            </WorkerComponent>
        </Container>
    )
};

export default PdfViewer;

const Container=styled.div`
    width: 100%;
    /* width: fit-content; */
    height: 100%;

    display: flex;
    justify-content: center;
    align-content: center;
    overflow: auto; // 스크롤 가능하게 설정

    border-radius: 0.625rem;

    color: white;
`;

const WorkerComponent = styled(Worker)`
    width: 100%;
    width: fit-content;
    align-content: center;
    align-items: center;
`;

const ViewerComponent = styled(Viewer)`
    width: 100%;
    /* width: fit-content; */
    /* width: 55.7818rem; */
    /* max-width: 100%;  */
    height: auto;
    border-radius: 0.625rem;
`;