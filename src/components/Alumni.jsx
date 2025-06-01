import React from 'react'
import fimg from "../assets/images/case.png";
import comms from "../assets/images/comms.png";
import logo from "../assets/images/page30img.png"
const information=[
    {"title":'Lorem ipsum dolor sit amet consectetur adipisicin',
        "description":'reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat!',
        "date":'June 2023 - May 2024',
    },
    {"title":'Lorem ipsum dolor sit amet consectetur adipisicin',
        "description":'reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat!',
        "date":'June 2023 - May 2024',
    },
    {"title":'Lorem ipsum dolor sit amet consectetur adipisicin',
        "description":'reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat!',
        "date":'June 2023 - May 2024',
    },
    {"title":'Lorem ipsum dolor sit amet consectetur adipisicin',
        "description":'reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat!',
        "date":'June 2023 - May 2024',
    },
]
const Info = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-lg mt-5 text-[#003482] font-semibold flex">{title}</h1>
            <p className="text-lg font-normal text-gray-700 text-justify flex">{children}</p>
        </div>
    );
};
const ExpSection = ({ title, description, date }) => {
    return (
        <div>
         <div className='m-5 p-3'>
  <h2 className="text-m font-semibold text-base text-[#003482] flex justify-between items-center">
    <span>{title}</span>
    <span className='text-gray-600 font-normal'>{date}</span>
  </h2>
  <p className="text-gray-600 text-sm">{description}</p>
</div>

        </div>
      );
    };
    
const AlumniNet =()=>{
    return(
        <>
        <div className='m-20 rounded-md flex justify-between bg-blue-50 h-56'>
          
        <div>
        <div className='text-xl mt-4 mx-8 text-[#003482] font-semibold '>Our Alumni Network</div>
        <div className='text-md mt-1 text-[#003482] font-medium mx-8'>Our Brand Who Created There Brand  </div>
        <div className='mt-8 mx-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        
        
       
        
        
        </div></>
    );
}
const Contentsection = ({ information}) => {
    return (
      <div className="w-full">
        <div className=" gap-4 my-11 mx-10">
          {information.map((item, index) => (
            <ExpSection
              key={index}
              title={item.title}
              description={item.description} 
              date={item.date} 
            />
            
          ))}
          
        </div>
      </div>
    );
  };

const Alumni = () => {
  return (
    <>
    <div className="">
            {/* <AlumniNet/> */}
      </div>
    <div className="flex px-8 relative overflow-hidden m-12 mt-16 lg:text-sm">
            
            <div>
                <h1 className="text-2xl text-[#932323] font-bold">The College as Your Loopback Address</h1>
                
                <Info>As an institute, we see ourselves as the loopback address in the network of your lives. Just as the loopback address returns traffic to its source, we are always here, at the heart of your journey, ready to connect, support, and nurture you—no matter where life takes you.
<br></br>
<br></br>
Though you have ventured far and wide, acquiring your own IP Addresses, making your mark in various domains, the college remains a central, unwavering part of your story. You may move forward, but we are always here for you, just as the loopback address is always present, quietly facilitating connections.
<br></br>
<br></br>
In this ever-evolving world, we invite you to continue returning to us. As alumni, you are an integral part of the foundation we've built together. The knowledge, values, and networks forged within these walls are the ties that bind us, and we hope you will loop back to share your experiences, mentor the next generation, and continue to grow alongside us.
<br></br>
<br></br>
No matter the distance, you will always have a home here. The college is your loopback address, and we are eager to see how you will continue to contribute to the legacy we've all created. We would be glad to "host" you as always!</Info>

            </div>
           
           </div>
           <div className='mt-2 ml-5 px-12'>
           
            <div className="text-2xl text-[#932323] font-bold">Vision</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="my-4 text-lg text-justify text-zinc-700 max-md:max-w-full">
                Connecting the Past, Empowering the Future</div>
              
         
           </div>
           <div className='mt-2 ml-5 px-12'>
           
            <div className="text-2xl text-[#932323] font-bold">Mission</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="my-4 text-lg text-justify text-zinc-700 max-md:max-w-full">
                The Alumni Association has been established to foster a stronger community for graduates. It will serve as a vital channel for communication and collaboration between alumni and the institute. With a continuous flow of ideas and suggestions, the Association will provide students with fresh perspectives and opportunities for growth.</div>
              
         
           </div>
              <div className='mt-2 ml-5 px-12'>
           
            <div className="text-2xl text-[#932323] font-bold">Contact Us</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="my-4 text-lg text-justify text-zinc-700 max-md:max-w-full">
                Reach Out to the Alumni Office at 
                 <a href= "mailto:alumni_association@iiitsurat.ac.in" className='text-blue-700'> alumni_association@iiitsurat.ac.in</a>

</div>
              
         
           </div>
              <div className='mt-2 ml-5 px-12'>
           
            <div className="text-2xl text-[#932323] font-bold">Faculty Coordinators</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="my-4 text-lg text-justify text-zinc-700 max-md:max-w-full">
                Dr. Sudeep Sharma</div>
              
         
           </div>
   <div className='mt-2 ml-5 px-12'>
           
            <div className="text-2xl text-[#932323] font-bold">Student Coordinators
</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
              <div className="my-4 text-lg text-justify text-zinc-700 max-md:max-w-full">
                Bhumil Ashokbhai Rangholiya<br/>
Jugal Ishvarbhai Patel<br/>
Spaarsh Mitesh Thakkar</div>
              
         
           </div>
      </>
  )
}

export default Alumni;