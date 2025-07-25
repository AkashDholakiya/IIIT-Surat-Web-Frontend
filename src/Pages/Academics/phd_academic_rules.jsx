import React, { useState } from "react";
import other_pdf from "../../assets/Academics/PhD_Ordinance_Rules_2021_22.pdf"; 
import first_pdf from "../../assets/Academics/PhD_Ordinance_Rules_Nov_2024.pdf";

const pdfOptions = [
  {
    key: "other",
    label: "A. Y. 2024-25 Onwards",
    file: other_pdf,
    downloadName: "PhD_Ordinance_Rules_Nov_2024.pdf"
  },
  {
    key: "first",
    label: "A. Y. 2021-22", 
    file: first_pdf,
    downloadName: "PhD_Ordinance_Rules_2021_22.pdf"
  }
];

const Phdrules = () => {
  const [selectedPdf, setSelectedPdf] = useState(pdfOptions[0]);

  return (
    <div className="flex flex-col items-center px-2 sm:px-5 w-full mt-0">
      {/* Page Header */}
      <div className="flex items-center w-full mb-5">
        <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
        <h1
          className="flex flex-col text-lg sm:text-xl text-[#660000] font-bold m-0 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >PhD Academic Rules</h1>
      </div>

      {/* PDF Selector Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 w-full max-w-screen-md">
        {pdfOptions.map((pdf) => (
          <button
            key={pdf.key}
            onClick={() => setSelectedPdf(pdf)}
            className={`w-full sm:w-auto py-2 px-4 rounded-md font-medium text-xs transition duration-200 ${
              selectedPdf.key === pdf.key
                ? "bg-[#660000] text-white"
                : "bg-gray-200 text-[#660000] hover:bg-[#990000] hover:text-white"
            }`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {pdf.label}
          </button>
        ))}
      </div>

      {/* PDF Viewer Section */}
      <main className="w-full max-w-screen-xl">
        <div className="flex flex-col gap-5 w-full">
          <section className="flex flex-col w-full px-0 md:px-5">
            <div className="flex flex-col items-center w-full gap-5">
              {/* Responsive PDF Viewer */}
              <div className="w-full">
                <div className="relative pb-[100%] sm:pb-[80%] md:pb-[70%] h-0">
                  <iframe
                    src={selectedPdf.file}
                    title={selectedPdf.label}
                    className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-md"
                  ></iframe>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={selectedPdf.file}
                download={selectedPdf.downloadName}
                className="py-2 px-5 bg-[#660000] text-white rounded-md text-center hover:bg-[#990000] transition duration-300"
                style={{ textDecoration: "none", fontFamily: "Poppins, sans-serif" }}
              >
                Download PDF
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Phdrules;
