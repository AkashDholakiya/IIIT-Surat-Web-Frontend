import React, { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function App() {
  // State for the currently selected PDF
  const [pdfFile, setPdfFile] = useState("/Physical_Reporting_B.Tech_2024_25.pdf");

  // Initialize the plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // List of PDF links
  const pdfLinks = [
    { name: "Physical Reporting for B.Tech. Programme", file: "/Physical_Reporting_B.Tech_2024_25.pdf" },
    { name: "Seat Matrix for 2025-26", file: "/Admission_Guidelines.pdf" },
    { name: "Fee Structure 2025-26", file: "/Fee_Structure.pdf" },
    { name: "Schedule Of Events Of JoSAA (ONLINE REPORTING) 2025-26", file: "/Fee_Structure.pdf" },
    { name: "Business Rules For Joint Seat Allocation 2025-26", file: "/Fee_Structure.pdf" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen m-28 bg-white">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-orange-400 shadow-lg p-4 overflow-y-auto flex flex-col items-center h-1/2 rounded-2xl">
        <h2 className="text-lg font-bold mb-4">Admission 2025-26</h2>
        <ul className="space-y-3">
          {pdfLinks.map((pdf, index) => (
            <li key={index} className="w-full">
              <button
                className="w-full text-left text-gray-800 hover:text-indigo-600 hover:text-lg hover:underline transition-all duration-300 ease-in-out"
                onClick={() => setPdfFile(pdf.file)}
              >
                {pdf.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden m-4 lg:m-0">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="h-full overflow-y-auto p-4">
            <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdfFile} />
          </div>
        </Worker>
      </div>
    </div>
  );
}

export default App;
