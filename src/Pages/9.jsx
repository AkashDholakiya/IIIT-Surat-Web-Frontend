import DirectorImg from "../components/Director/DirectorImg";
import DirectorInfo from "../components/Director/DirectorInfo";
import Info from "../components/Director/Info";
import video from "../assets/images/video.png";
export default function Nine() {
  return (
    <>
      <main className=" flex mt-16 mx-36">
        <DirectorImg />
        <DirectorInfo />
      </main>
      <section className=" flex my-16 mx-24">
        <div className=" min-w-[50rem] mr-8 ">
          <img className="rounded-xl float-left max-w-[40rem] mr-6 mb-6" src={video} alt="vid" />
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
        {/* <div>
            
          </div> */}
      </section>
    </>
  );
}
