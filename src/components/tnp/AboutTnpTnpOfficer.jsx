import React from 'react';
import Sidebar from './Sidebar';
// import  { useRef } from 'react';
function AboutTnpTnpOfficer() {
  // const aboutRef = useRef(null);

  // const scrollToSection = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="flex z-10 flex-col px-20 mt-0 w-full max-md:px-5 max-md:max-w-full">
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-8 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-8">
                    <div className="flex flex-col justify-center bg-sky-100 rounded-3xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a015c22120f8f6ecba46033d67b10b13e6e70cb2d07c7cc206787face4da26c?apiKey=7c5b01f694034c0fb3ba724488afa998&"
                        alt='tmp-profile-image'
                        className="w-full aspect-[0.88]" />
                    </div>
                    <div className="justify-center align-middle items-center px-16 py-3 mt-4 text-xl font-semibold text-white bg-blue-500 rounded-[50px] max-md:px-5">
                      <button> TPO Profile </button>   
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-2.5 text-[20px] font-semibold text-[#003481] font-[Poppins] max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full" id="tpo-profile">
                      Dr. Vijaykumar Radadiya
                    </div>
                    <div className="mt-5 leading-6 text-[20px] font-semibold text-[#003481] font-[Poppins] max-md:max-w-full">
                      Ph.D, Communication Networks,
                      <br />
                      IISc, Bangalore, India (ECE)
                    </div>
                    <div className="mt-7 text-[20px] font-semibold text-[#003481] font-[Poppins] max-md:max-w-full">
                      email id
                    </div>
                    <div className="mt-2.5 text-[18px] italic font-medium text-black max-md:max-w-full">
                      tnpoffice@iiitsurat.ac.in
                    </div>
                    <div className="mt-8 text-[18px] font-normal text-black font-[Poppins] max-md:max-w-full">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Doloribus obcaecati magni voluptates nihil iure quaerat
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
      
      {/* Words from T&P Officer */}
      <div className="self-start mt-14 text-[20px] font-semibold font-[Poppins] leading-9 text-[#003481] max-md:mt-10 max-md:max-w-full flex justify-start items-center" id="words-from-tpo">
        Words from T&P Officer
        <hr className="ml-5 border-t border-gray-400 flex-grow"/>
      </div>
      <div className="self-end mt-9 text-[18px] text-justify font-[Poppins] font-normal text-black max-md:max-w-full mt-11 p-4 ">
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
