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
    <div>
      <div className="resume-section">
        <Particle />
        
        {/* Download Button - Top */}
        <div className="flex justify-center relative mb-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded border border-[#623686] text-white bg-[#623686] hover:bg-[#6d20c5d7] transition-all flex items-center gap-2"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="resume flex justify-center">
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
        <div className="flex justify-center relative mt-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded border border-[#623686] text-white bg-[#623686] hover:bg-[#6d20c5d7] transition-all flex items-center gap-2"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
