import React from "react";
import tnp_pdf from "../../assets/pdf/TNP_Brochure_2024_25_U1.pdf";

const PlacementGuidelines = () => {
  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      {/* Page Header */}
      <div className="flex items-center w-full mb-5">
        <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
        <h1
          className="font-poppins text-[25px] text-[#660000] m-0 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our Guidelines
        </h1>
      </div>

      {/* PDF Viewer Section */}
      <main className="w-full max-w-full">
        <div className="flex flex-col gap-5 max-md:flex-col w-full">
          <section className="flex flex-col w-full px-5 md:w-[90%]">
            <div className="flex flex-col mt-1">
              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem", // Responsive font size for the paragraph
                  color: "black",
                  marginBottom: "20px",
                  textAlign: "left", // Align description text to the left
                }}
              >
                Here are our guidelines. You can view the document below and
                download it for further reference.
              </p>

              {/* PDF Viewer and Download Section */}
              <div className="flex flex-col items-center w-full gap-5">
                {/* Embedded PDF Viewer */}
                <iframe
                  src={tnp_pdf}
                  title="TNP Brochure"
                  style={{
                    width: "100%",
                    height: "600px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                ></iframe>

                {/* Download Button */}
                <a
                  href={tnp_pdf}
                  download="TNP_Brochure_2024_25_U1.pdf"
                  className="py-2 px-5 bg-[#660000] text-white rounded-md text-center hover:bg-[#990000] transition duration-300"
                  style={{ textDecoration: "none", fontFamily: "Poppins, sans-serif" }}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PlacementGuidelines;
