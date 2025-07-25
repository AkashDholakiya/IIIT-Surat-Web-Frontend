import React from "react";
import phd_fee_pdf from "../../assets/Academics/PhD_Fee_structure-2022-23.pdf";

const Phdfee = () => {
  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      {/* Page Header */}
      <div className="flex items-center w-full mb-5">
        <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
        <h1
  className="flex flex-col text-xl text-[#660000] font-bold m-0 text-center"
  style={{ fontFamily: "Poppins, sans-serif" }}
>PhD Fee Structure</h1>

      </div>

      {/* PDF Viewer Section */}
      <main className="w-full max-w-screen-xl">
        <div className="flex flex-col gap-5 w-full">
          <section className="flex flex-col w-full px-0 md:px-5">
            <div className="flex flex-col items-center w-full gap-5">
              {/* Responsive PDF Viewer */}
              <div className="w-full">
                <iframe
                  src={phd_fee_pdf}
                  title="PhD Fee Structure - 2022-23"
                  className="w-full h-[90vh] min-h-[600px] border border-gray-300 rounded-md"
                ></iframe>
              </div>

              {/* Download Button */}
              <a
                href={phd_fee_pdf}
                download="PhD_Fee_Structure-2022-23.pdf"
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

export default Phdfee;
