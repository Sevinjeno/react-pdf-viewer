import { Document, Page } from "react-pdf";
import { useState } from "react";

interface Props {
  fileUrl: string;
}

const PdfViewer = ({ fileUrl }: Props) => {
  const [numPages, setNumPages] = useState(0);

  return (
    <div className="pdf-wrapper">
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={index}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;