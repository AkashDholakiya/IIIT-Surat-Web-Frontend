import React from "react";

function AboutTnp() {
  return (
    <div className="relative overflow-hidden flex-col mt-10 font-semibold min-h-[300px] max-w-full">

      {/* Background Image */}
      <div className="bg-cover bg-center h-[300px] mt-7"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Frametnpbanner.png)` }}>
        <div className="flex flex-col items-start px-12 pt-12 pb-6 max-w-full">
          <div className="text-4xl leading-9 text-emerald-500">
            Training & Placement Cell - IIIT, Surat
          </div>
          <div className="mt-4 text-3xl text-blue-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            obcaecati magni voluptates.
          </div>
          <div className="flex gap-5 mt-12 flex-wrap">
            <div className="px-8 py-3 bg-blue-500 rounded-full">
              <button className="text-white">T & P Officer</button>
            </div>
            <div className="px-8 py-3 bg-blue-500 rounded-full">
              <button className="text-white">Tnp Brochure</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="self-center w-full max-w-[1350px] mt-[50px] ml-9">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="w-[25%] max-w-full">
            <div className="flex flex-col text-2xl font-semibold text-blue-500 max-md:mt-10">
              <div className="flex gap-4 items-center">
                {/* Adjusted to Tailwind CSS classes */}
                <div className="flex-auto">About TnP Cell</div>
              </div>
              <div className="flex flex-col mt-6">
                <div>T&P officer</div>
                <div className="mt-2 text-xl font-medium">
                  Dr. Vijaykumar Radadiya
                </div>
                <div className="mt-4">Placement Team</div>
                <div className="mt-2 text-xl font-medium">
                  Working for a better future
                </div>
                <div className="mt-4">Placement Statistics</div>
                <div className="mt-2 text-xl font-medium">
                  Well-equipped 3 labs
                </div>
                <div className="mt-4">Our Achievers</div>
                <div className="mt-2 text-xl font-medium">
                  Alumni working in top MNCs
                </div>
                <div className="mt-4">Placement Guidelines</div>
                <div className="mt-2 text-xl font-medium">Our Recruiters</div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-[75%] max-w-full">
            <div className="flex flex-col grow mt-1.5 text-4xl font-semibold leading-9 text-emerald-500 max-md:mt-10 max-md:max-w-full">
              <div>About us</div>
              <div className="mt-9 text-2xl text-justify text-blue-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus obcaecati magni voluptates nihil iure quaerat optio
                minima, totam ipsum sed fugit voluptatem, recusandae illo
                quisquam assumenda asperiores voluptatum tempore ipsa delectus.
                Aliquam tenetur provident quia ab corrupti aut assumenda dicta
                dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae
                in doloremque.Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Doloribus obcaecati magni voluptates nihil
                iure quaerat optio minima, totam ipsum sed fugit voluptatem,
                recusandae illo quisquam assumenda asperiores voluptatum tempore
                ipsa delectus. Aliquam tenetur provident quia ab corrupti aut
                assumenda dicta dignissimos, vitae debitis ad alias nisi.
              </div>
              <div className="mt-12">Training</div>
              <div className="mt-6 text-2xl text-justify text-blue-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus obcaecati magni voluptates nihil iure quaerat optio
                minima, totam ipsum sed fugit voluptatem, recusandae illo
                quisquam assumenda asperiores voluptatum tempore ipsa delectus.
                Aliquam tenetur provident quia ab corrupti aut assumenda dicta
                dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae
                in doloremque.Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Doloribus obcaecati magni voluptates nihil
                iure quaerat optio minima, totam ipsum sed fugit voluptatem,
                recusandae illo quisquam assumenda asperiores voluptatum tempore
                ipsa delectus. Aliquam tenetur provident quia ab corrupti aut
                assumenda dicta dignissimos, vitae debitis ad alias nisi.
              </div>
              <div className="mt-12">Placements</div>
              <div className="mt-9 text-2xl text-justify text-blue-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus obcaecati magni voluptates nihil iure quaerat optio
                minima, totam ipsum sed fugit voluptatem, recusandae illo
                quisquam assumenda asperiores voluptatum tempore ipsa delectus.
                Aliquam tenetur provident quia ab corrupti aut assumenda dicta
                dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae
                in doloremque.Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Doloribus obcaecati magni voluptates nihil
                iure quaerat optio minima, totam ipsum sed fugit voluptatem,
                recusandae illo quisquam assumenda asperiores voluptatum tempore
                ipsa delectus. Aliquam tenetur provident quia ab corrupti aut
                assumenda dicta dignissimos, vitae debitis ad alias nisi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTnp;
