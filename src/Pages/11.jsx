import React from 'react'

const Eleven = () => {
  return (
    <div>
        {/* Vision & Mission Statements Section */}
        <div className='mt-20 bg-background-blue mx-4 md:mx-[125px] rounded-lg mb-0'>
            <div className='pl-6 md:pl-[50px] pb-[25px] pt-[25px] pr-6 md:pr-[60px]'>
                <p className='text-custom-blue font-semibold text-[20px] md:text-[25px] leading-[35px]'>Vision & Mission </p>
                {/* <p className='text-custom-gray font-normal text-[16px] md:text-[18px] leading-[27px]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat.
                </p> */}
                <div className='mt-[30px]'>
                    <button className='bg-custom-blue text-white h-[31px] px-6 md:px-8 rounded-[50px] font-medium text-[16px] md:text-[18px] leading-[27px] mr-4 mb-4 md:mb-0 w-full md:w-auto'>
                        About us
                    </button>
                    <button className='bg-custom-blue text-white h-[31px] px-6 md:px-10 rounded-[50px] font-medium text-[16px] md:text-[18px] leading-[27px] w-full md:w-auto'>
                        Message from director desk
                    </button>
                </div>
            </div>
        </div>

        {/* Vision & Mission Paragraphs Section (using flexbox) */}
        <div className='flex flex-col md:flex-row mx-4 md:mx-[75px] gap-y-8 md:gap-x-[58px] mb-0 mt-[30px]'>
          {/* Vision Section */}
          <div className='pl-6 md:pl-[50px] flex-1'>
            <p className='text-custom-red font-semibold text-[18px] md:text-[20px] leading-[30px] mb-[15px]'>Vision</p>
            <p className='text-custom-gray font-normal text-[16px] md:text-[18px] leading-[27px] text-justify custom-border'>
            To develop a globally competitive Centre of Excellence in the field of Computer Science and Technology to inspire the younger generation of Engineers to realize the 'Make in India' dream a reality.
            </p>
          </div>

          {/* Mission Section */}
          <div className='pl-6 md:pl-[50px] flex-1'>
            <p className='text-custom-red font-semibold text-[18px] md:text-[20px] leading-[30px] mb-[15px]'>Mission</p>
            <p className='text-custom-gray font-normal text-[16px] md:text-[18px] leading-[27px] text-justify custom-border'>
            Imparting preeminent knowledge in the field of Information Technology to younger generations so that they can serve the Society and Nation through evolving excellence in technology and innovations.
            </p>
          </div>
        </div>

        {/* About Department Section */}
        <div className='mx-4 md:mx-[75px] mt-[40px]'>
            <div className='pl-6 md:pl-[50px] pr-6 md:pr-[50px]'>
                <p className='text-custom-red font-semibold text-[18px] md:text-[20px] leading-[30px] mb-[15px]'>Objectives</p>
                <p className='text-custom-gray font-normal text-[16px] md:text-[18px] leading-[27px] text-justify custom-border'>
                
                <ul class="mt-6 list-disc pl-6 text-gray-700 text-[16px] md:text-[18px] leading-[27px] space-y-4">
    <li>
        Enrich the upcoming young engineers with contemporary knowledge of Computer Science and Engineering and Electronics and Communication Engineering.
    </li>
    <li>
        Evolve seamless acquaintance in various technical fields through innovation and research.
    </li>
    <li>
        Cultivate effective communication skills for establishing upbeat interaction to inspire leadership qualities in young Engineers.
    </li>
    <li>
        Setting up excellent facilities and creating an environment for advanced studies in Science and Technology to foster innovative ideas linked with globally competitive areas of research.
    </li>
    <li>
        Nurture lifelong learning practices, ethical and human values in youngsters.
    </li>
    <li>
        Conduct campus outreach programmes for facilitating solutions to practical problems in small-scale industries and other occupations including agriculture.
    </li>
</ul>
</p>
            </div>
        </div>
    </div>
  )
}

export default Eleven
