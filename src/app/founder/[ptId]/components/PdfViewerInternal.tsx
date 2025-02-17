import { useEffect,useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewerInternal = ({pdfUrl}:{pdfUrl:string})=>{
	const [numPages, setNumPages] = useState<number|null>(null)
	const [pageNumber, setPageNumber] = useState(1);
	
	function onDocumentLoadSuccess({numPages}:{numPages:number}){
		setNumPages(numPages);
		setPageNumber(1);
	}
	
	return(
		<Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
			<Page pageNumber={pageNumber}/>
		</Document>
	);
};

export default PdfViewerInternal;