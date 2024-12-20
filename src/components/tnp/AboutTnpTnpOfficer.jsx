import React from 'react';

function AboutTnpTnpOfficer() {
  return (
    <div className="flex z-10 flex-col px-5 md:px-20 mt-0 w-full max-w-screen-xl mx-auto">
      {/* Main content container */}
      <div className="mt-16 md:mt-10 w-full">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          
          {/* Left Sidebar (Commented out, but you can enable it later) */}
          {/* <Sidebar /> */}

          {/* Main Content */}
          <div className="flex flex-col md:w-[77%] w-full">
            <div className="grow mt-8 md:mt-10">
              <div className="flex flex-col md:flex-row gap-5">
                
                {/* Profile Section */}
                <div className="flex flex-col md:w-[29%] w-full">
                  <div className="flex flex-col">
                    <div className="bg-sky-100 rounded-3xl overflow-hidden">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=1200 1200w"
                        alt="Profile Image"
                        className="w-full aspect-[0.88] object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center px-16 py-3 mt-4 text-xl font-semibold text-white bg-blue-500 rounded-full md:px-5">
                      <button className="h-full">TPO Profile</button>
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div className="flex flex-col md:w-[71%] w-full">
                  <div className="mt-2.5 text-2xl font-semibold text-[#660000] font-[Poppins]">
                    <div className="text-3xl font-bold" id="tpo-profile">
                      Dr. Vijaykumar Radadiya
                    </div>
                    <div className="mt-5 text-lg font-medium text-[#003481]">
                      Ph.D, Communication Networks,
                      <br />
                      IISc, Bangalore, India (ECE)
                    </div>
                    <div className="mt-7 text-lg font-semibold text-[#003481]">
                      email id
                    </div>
                    <div className="mt-2.5 text-lg italic font-medium text-black">
                      tnpoffice@iiitsurat.ac.in
                    </div>
                    <div className="mt-8 text-lg text-black font-[Poppins]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat
                      optio minima, totam ipsum sed fugit voluptatem, recusandae
                      illo quisquam assumenda asperiores voluptatum tempore ipsa
                      delectus. Aliquam tenetur provident quia ab corrupti aut
                      assumenda dicta dignissimos, vitae debitis ad alias nisi?
                      Voluptatum molestiae in doloremque!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Words from T&P Officer Section */}
      <div className="mt-14 text-2xl font-semibold font-[Poppins] leading-9 text-[#660000] flex justify-start items-center">
        Words from T&P Officer
        <hr className="ml-5 border-t border-gray-400 flex-grow" />
      </div>
      <div className="mt-9 text-lg text-justify font-[Poppins] font-normal text-black px-4 md:px-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        obcaecati magni voluptates nihil iure quaerat optio minima, totam ipsum
        sed fugit voluptatem, recusandae illo quisquam assumenda asperiores
        voluptatum tempore ipsa delectus. Aliquam tenetur provident quia ab
        corrupti aut assumenda dicta dignissimos, vitae debitis ad alias nisi.
        Voluptatum molestiae in doloremque. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Doloribus obcaecati magni voluptates
        nihil iure quaerat optio minima, totam ipsum sed fugit voluptatem,
        recusandae illo quisquam assumenda asperiores voluptatum tempore ipsa
        delectus. Aliquam tenetur provident quia ab corrupti aut assumenda dicta
        dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae in
        doloremque!
      </div>
    </div>
  );
}

export default AboutTnpTnpOfficer;
