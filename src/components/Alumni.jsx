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
        <div className='m-20 rounded-md flex justify-between bg-gradient-to-r from-blue-50 h-56'>
          
        <div>
        <div className='text-xl mt-4 mx-8 text-[#003482] font-semibold '>Our Alumni Network</div>
        <div className='text-md mt-1 text-[#003482] font-medium mx-8'>Our Brand Who Created There Brand  </div>
        <div className='mt-8 mx-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        
        
        <div
                    className="w-2/6 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(244, 248, 254, 1), rgba(244, 248, 254, 0)), url(${logo})`,
                        width: '40%',
                        backgroundPosition: 'right center',
                    }}
                ></div>
        
        
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
            <AlumniNet/>
      </div>
    <div className="flex px-24 relative overflow-hidden m-12 lg:text-sm">
            <div className="min-w-[15rem] mr-8">
                <div className="w-[15rem] h-[15rem] overflow-hidden">
                    <img src={fimg} alt="samp" className="object-cover object-top w-full h-full" />
                </div>
                
            </div>
            <div>
                <h1 className="text-2xl text-[#932323] font-bold">Prof. Rajeev Shorey</h1>
                <Info title="Computer Science Engineering,B.tech 24'">
                    Indian Institute of Information Technology Surat
                </Info>
                <Info title="email id"><i>director@iiitsurat.ac.in</i> <button className=' ml-44 h-12  rounded-3xl  w-32 bg-[#003482] text-white font-semibold text-lg justify-center items-center flex'>Resume</button></Info>
               
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?</Info>
            </div>
            <img className='absolute bottom-0 right-0 pr-24' src={comms} alt="comms" />
            
           </div>
           <div className='mt-2 ml-5'>
           <button className=' ml-32 h-12  rounded-3xl  w-40 bg-[#003482] text-white font-semibold text-lg justify-center items-center flex'>Experience</button>
           <div className="h-full mx-auto ">
              <Contentsection 
               information={information}
              />
          </div>
           </div>
           

      </>
  )
}

export default Alumni;