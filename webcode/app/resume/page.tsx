"use client"; // Ensures this is a Client Component

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { pdfjs } from "react-pdf";

// Dynamically import react-pdf components (Disables SSR)
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });

// Set the worker source correctly (ensure /public/pdf.worker.min.js exists)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const ResumePage = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfFile, setPdfFile] = useState<string | null>(null);

  useEffect(() => {
    setPdfFile("/resume.pdf"); // Ensure resume.pdf is inside /public/
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {pdfFile ? (
        <Document
          file={pdfFile}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      ) : (
        <p>Loading PDF...</p>
      )}

      <a
        href="/resume.pdf"
        download="Minhazur_Rakin_Resume.pdf"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePage;
