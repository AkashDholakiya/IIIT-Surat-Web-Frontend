import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function HostelFees() {
  // Path to a single PDF file
  const pdfFile = "/images/Physical_Reporting_B.Tech_2024_25.pdf";

  // Initialize the plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="h-[80vh] p-4">
            <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdfFile} />
          </div>
        </Worker>
      </div>
    </div>
  );
};
