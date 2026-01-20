import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/ricky_primayuda_putra_cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="relative">
      <Particle />
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-20 md:pt-28">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 leading-tight">
          My <span className="text-primary">Resume</span>
        </h1>

        {/* Download Button - Top */}
        <div className="flex justify-center mb-12">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300 flex items-center gap-2 font-semibold hover:shadow-lg hover:scale-105"
          >
            <AiOutlineDownload className="text-xl" />
            Download CV
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex justify-center mb-12 bg-bg-card rounded-lg p-4">
          <Document file={pdf} className="flex justify-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Download Button - Bottom */}
        <div className="flex justify-center mb-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300 flex items-center gap-2 font-semibold hover:shadow-lg hover:scale-105"
          >
            <AiOutlineDownload className="text-xl" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
