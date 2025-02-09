import DirectorImg from "../components/Director/DirectorImg";
import DirectorInfo from "../components/Director/DirectorInfo";
import Info from "../components/Director/Info";
import video from "../assets/images/video.png";

export default function Nine() {
  return (
    <>
      <main class="flex flex-wrap justify-center md:justify-start mt-16 mx-4 md:mx-16 lg:mx-36 gap-6">
        <DirectorImg />
        <DirectorInfo />
      </main>
      <section className="flex flex-wrap my-16 mx-4 md:mx-12 lg:mx-24">
        <div className="w-full lg:min-w-[50rem] lg:mr-8">
          <img
            className="rounded-xl w-full md:max-w-[40rem] mr-0 md:mr-6 mb-6"
            src={video}
            alt="vid"
          />
          <div>
            <h1 className="text-xl text-[#932323] text-justify font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, debitis!
            </h1>
            <Info>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis illo corrupti aliquid ipsam quod labore omnis rerum
              ab modi perferendis optio dignissimos veritatis eos asperiores
              eligendi, in quas veniam molestias. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam, porro?
            </Info>
          </div>
        </div>
      </section>
    </>
  );
}
