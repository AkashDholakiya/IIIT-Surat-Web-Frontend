import research from "../assets/images/Rnc.png"
const AboutRnc = () => {
  return (
    <div className="flex flex-col px-20 -mt-8 w-full max-w-[100%] max-md:px-5">
      <div className="relative overflow-hidden flex justify-center items-center mt-12 w-full max-w-[1262px] min-h-[205px] max-md:mt-10 max-md:max-w-full top-10 ">
        <img
          loading="lazy"
          src={research}
          className="absolute inset-0 object-cover w-full h-full left-100 "
          alt="rnc-image"
        />
        <div className="relative flex flex-col items-start px-12 py-7 max-md:px-5 max-md:max-w-full">
          <div className="text-2xl font-semibold leading-9 text-blue-900 max-md:max-w-full">
            Research & Innovation Cell - IIIT, Surat
          </div>
          <div className="mt-3.5 text-zinc-700 max-w-[506px] max-md:max-w-full">
            This Page is Under Construction...
          </div>
          <div className="flex gap-4 mt-8 font-medium text-white max-md:flex-wrap">
            <div className="px-8 py-2.5 bg-blue-900 rounded-[50px] max-md:px-5">
              <button>R & C coordinator</button>
            </div>
            <div className="px-8 py-2 bg-blue-900 rounded-[50px] max-md:px-5">
              <button>SSIP Brochure</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">

          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-xl font-semibold text-red-950 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <div className="grow">About department</div>
                <div className="flex-grow border-t border-[#660000] border-bold" />

              </div>
              <div className="mt-9 text-lg text-justify text-zinc-700 max-md:max-w-full">
                This Page is Under Construction...
                <br />
                This Page is Under Construction...
              </div>
              <div className="mt-10 max-md:max-w-full">Research</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="mt-6 text-lg text-justify text-zinc-700 max-md:max-w-full">
                This Page is Under Construction...
                <br />
                This Page is Under Construction...
              </div>
              <div className="mt-10 max-md:max-w-full">Innovation</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="mt-6 text-lg text-justify text-zinc-700 max-md:max-w-full my-11">
                This Page is Under Construction...
                <br />
                This Page is Under Construction...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutRnc;
