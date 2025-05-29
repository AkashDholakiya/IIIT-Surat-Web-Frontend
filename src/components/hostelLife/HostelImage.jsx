import Hostelimage from "../../assets/images/hostel_background.png";

export default function HostelImage() {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-gradient-to-r h-[24rem] from-[#091a34] to-[#07377b] via-[#07295e] w-full relative">
        {/* Background Image with Overlay */}
        <img
          src={Hostelimage}
          className="w-full h-full object-cover absolute mix-blend-overlay opacity-40"
          alt="Hostel Background"
        />

        {/* Text Container */}
        <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-32">
          {/* Title */}
          <div className="w-full md:w-2/3 lg:w-1/2 mb-4">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
              Hostel Life
            </h1>
            <p className="text-white text-sm md:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              officiis nulla.
            </p>
          </div>

          {/* Description */}
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="text-white text-sm md:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum aliquam sed quidem labore ipsum consequuntur earum
              laboriosam fuga saepe beatae corrupti provident pariatur,
              voluptatibus ducimus aperiam quis quaerat a? Delectus accusamus
              culpa optio ex nihil doloremque natus velit eligendi, dolorem
              beatae deserunt, dignissimos eos, ad praesentium. Eos, perferendis
              aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
