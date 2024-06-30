import React from 'react'

export default function Footer() {
  return (
    <div className='m-[50px] mt-0 mb-[25px]'>

        <div  className='grid grid-cols-3 p-[50px] pt-0  gap-x-[90px]'>
            <div>
                <p className='text-custom-red font-semibold text-[20px] leading-[32px]'>USEFUL LINKS</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}  className='text-footer-gray font-normal text-[18px] leading-[35px]'>
                    <li>National Overseas Scholarship Scheme For The 2022-23</li>
                    <li>Loksabha Research Fellowships</li>
                    <li>National Scholarship Portal</li>
                    <li>Uttar Pradesh Government - Scholarship System</li>
                    <li>Sitemap</li>
                    <li>Term Of Use</li>
                </ul>
            </div>
            <div>
                <p className='text-custom-red font-semibold text-[20px] leading-[32px] mb-[5px]' >Our partner</p>
             <div>
           
                    <div className='flex items-center space-x-[10px] mb-[10px]'>
                        <img src='./images/partner.png' alt='partner-image'className='w-[65px] h-[65px] rounded-[12px]' />
                        <div>
                        <p className='text-custom-blue font-semibold text-[20px] leading-[24px]'>GNFC</p>
                        <p className='text-footer-gray font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center space-x-[10px] mb-[10px]'>
                        <img src='./images/partner.png' alt='partner-image'className='w-[65px] h-[65px] rounded-[12px]' />
                        <div>
                        <p className='text-custom-blue font-semibold text-[20px] leading-[24px]'>Gujarat Informatics Limited</p>
                        <p className='text-footer-gray font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                   
                    <div className='flex items-center space-x-[10px] mb-[10px]'>
                        <img src='./images/partner.png' alt='partner-image'className='w-[65px] h-[65px] rounded-[12px]' />
                        <div>
                        <p className='text-custom-blue font-semibold text-[20px] leading-[24px]'>Gujarat Gas Limited</p>
                        <p className='text-footer-gray font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center space-x-[10px] mb-[10px]'>
                        <img src='./images/partner.png' alt='partner-image'className='w-[65px] h-[65px] rounded-[12px]' />
                        <div>
                        <p className='text-custom-blue font-semibold text-[20px] leading-[24px]'>SBI Collect</p>
                        <p className='text-footer-gray font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
             </div>
            </div>
            <div className='ml-11'>
                <div className='text-[18px] leading-[25px]'>
                    <p className='text-custom-red font-semibold text-[20px] leading-[32px]'>CONTACT</p>
                    <p className='text-custom-blue font-medium'>Indian Institute of Information Technology, Surat</p>
                    <span className='text-custom-sky font-normal'>

                    <p>Kholvad Campus</p>
                    <p>Kamrej, Surat - 394190, Gujarat</p>
                    <p>Phone : 02621-298060</p>
                    <p>Email : office@iiitsurat.ac.in</p>
                    </span>

                    
                </div>
                <div className='mt-10 font-semibold text-custom-blue text-[18px] leading-[25px]'>
                    <p className='text-custom-red  text-[25px] leading-[32px]'>Surat, Gujarat</p>
                    <p>1:15 am,Tuesday 18th June, 2024 </p>
                    <p> <span className='text-custom-sky font-normal'>Temp:</span> 38.09°C</p>
                    <p> <span className='text-custom-sky font-normal'>Humidity:</span> 30%   <span className='text-custom-sky font-normal text-[18px] leading-[25px]'>Wind:</span> 2.06km/h;</p>
                    
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 p-[25px] pt-0 pb-[20px] border-custom-red' style={{borderBottomWidth: "0.5px"}}>
            <div className='flex items-center space-x-[10px] mb-[10px]'>
                <img src='./images/logo.png' alt='logo' />
                <div className='text-custom-blue'>
                <p className='font-medium text-[18px] leading-[27px]'>Indian Institute of Information Technology, Surat</p>
                <p className='font-normal text[16px] leading-[24px]'>An Institute of National Importance Under Act of Parmilment</p>
                </div>
            </div>

            <div className='text-right text-custom-blue font-medium'>
                <p className='text-[16px] leading-[24px]'>Indian Institute of Information Technology, Surat</p>
                <p className='text-[18px] leading-[27px]'>भारतीय सूचना प्रौद्योगिकी संस्थान, सूरत </p>
            </div>
        </div>

        <div className='grid grid-cols-2 p-[25px] pb-0 text-custom-blue font-medium'>
            <div>
                <p className='text-[16px] leading-[24px]'>Terms of uses  .  Privacy Policy  .  Visit us  .  Contact us</p>
                <p className='text-[18px] leading-[27px]'>All copyright <span className='font-semibold italic'>©</span> recieved on 2024 by IIIT Surat.</p>
            </div>

            <div className='text-right'>
                <p className='text-[16px] leading-[24px]'>Designed and developed by IIIT Surat students</p> 
                <p className='text-[18px] leading-[27px]'>website last update on 1:15 am,Tuesday 18th June, 2024</p> 
            </div>
        </div>

    </div>
  )
}
