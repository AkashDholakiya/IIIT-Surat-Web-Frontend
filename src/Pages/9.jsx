import DirectorImg from "../components/Director/DirectorImg";
import DirectorInfo from "../components/Director/DirectorInfo";
import Info from "../components/Director/Info";
import video from "../assets/images/video.png";
export default function Nine(){
    return (
        <>
        <main className=" flex mt-16 mx-36">
        <DirectorImg/>
        <DirectorInfo/>
        
      </main>
      <section className=" flex mt-16 mx-36">
        <div className=" min-w-[50rem] mr-8">
          <img className="rounded-xl" src={video} alt="image" />
        </div>
        <div>
        <h1 className="text-3xl text-[#932323] text-justify font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis!</h1>
        <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo corrupti aliquid ipsam quod labore omnis rerum ab modi perferendis optio dignissimos veritatis eos asperiores eligendi, in quas veniam molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur quia quae repudiandae vero molestias et inventore eos laborum tempore necessitatibus, autem, debitis ratione ex perspiciatis accusamus facere numquam! Saepe, dolores! Quae odit ullam consequatur ut consectetur deserunt cum, voluptatibus architecto doloribus? Pariatur voluptatibus, obcaecati modi voluptatem esse totam odit. Expedita dolores veritatis voluptate aliquam ad veniam harum id, quo perferendis officia perspiciatis facere velit tempore, molestiae officiis cumque cupiditate necessitatibus modi excepturi consectetur ipsum soluta fuga. Facere aperiam minus mollitia saepe, dolore sapiente. Magnam vel itaque libero sint soluta aliquam id vero inventore. Nam dolor consectetur numquam a quibusdam!</Info></div>
      </section>
      </>
    )
}