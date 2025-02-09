import React from 'react';

export default function Footer() {
  return (
    <div className='sm:p-6 py-5 bg-nav-color'>
      {/* First section */}
      <div className='flex flex-col sm:flex-row lg:flex-row justify-between items-start p-5 sm:p-6 pt-0'>
        {/* Useful Links */}
        <div className='flex-1 mb-6 sm:mb-0'>
          <p className='text-custom-red font-semibold text-lg md:text-xl leading-7 md:leading-8'>USEFUL LINKS</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='text-footer-gray text-base md:text-lg leading-7 md:leading-8'>
            {['National Overseas Scholarship Scheme For The 2022-23', 'Loksabha Research Fellowships', 'National Scholarship Portal', 'Uttar Pradesh Government - Scholarship System', 'Sitemap', 'Terms Of Use'].map((link, index) => (
              <li key={index} className='cursor-pointer hover:text-[#660000]'>{link}</li>
            ))}
          </ul>
        </div>

        {/* Our Partner */}
        <div className='flex-1 mb-6 sm:mb-0'>
          <p className='text-custom-red font-semibold text-lg md:text-xl leading-7 md:leading-8 mb-2'>Our partner</p>
          <div>
            {['GNFC', 'Gujarat Informatics Limited', 'Gujarat Gas Limited', 'SBI Collect'].map((partner, index) => (
              <div key={index} className='flex items-center mb-3'>
                <img src='./images/partner.png' alt='partner-image' className='w-14 sm:w-16 h-14 sm:h-16 rounded-lg' />
                <div className='ml-4'>
                  <p className='text-custom-blue font-semibold text-lg'>{partner}</p>
                  <p className='text-footer-gray text-sm sm:text-base'>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className='flex-1'>
          <p className='text-custom-red font-semibold text-lg md:text-xl leading-7 md:leading-8'>CONTACT</p>
          <p className='text-[#6C6C6C] font-medium'>Indian Institute of Information Technology, Surat</p>
          <div className='text-[#6C6C6C]'>
            <p>Kholvad Campus Kamrej, Surat - 394190, Gujarat</p>
            <p>Phone: 02621-298060</p>
            <p>Email: office@iiitsurat.ac.in</p>
          </div>
          <div className='mt-8'>
            <p className='text-custom-red text-xl'>Surat, Gujarat</p>
            <p>1:15 am, Tuesday 18th June, 2024</p>
            <p><span className='text-[#6C6C6C]'>Temp:</span> 38.09°C</p>
            <p><span className='text-[#6C6C6C]'>Humidity:</span> 30% <span className=''>Wind:</span> 2.06 km/h</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between items-center p-5 sm:p-6 border-t border-custom-red max-lg:hidden'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <img src='./images/logo.png' alt='logo' />
          <div className='ml-4 text-custom-blue'>
            <p className='font-medium text-lg'>Indian Institute of Information Technology, Surat</p>
            <p className='text-base sm:text-sm'>An Institute of National Importance Under Act of Parliament</p>
          </div>
        </div>
        <div className='text-right text-custom-blue font-medium'>
          <p className='text-lg'>Indian Institute of Information Technology, Surat</p>
          <p className='text-xl'>भारतीय सूचना प्रौद्योगिकी संस्थान, सूरत</p>
        </div>
      </div>

      {/* Footer Last Line */}
      <div className='flex flex-col sm:flex-row justify-between items-center p-5 sm:p-6 text-[#003482]'>
        <div className='max-lg:text-center max-lg:border-t max-lg:w-full max-lg:mb-3 max-lg:border-custom-red'>
          <p className='text-sm sm:text-base max-lg:mt-3'>Terms of use . Privacy Policy . Visit us . Contact us</p>
          <p className='text-base max-lg:text-sm'>All copyright © reserved on 2024 by IIIT Surat.</p>
        </div>
        <div className='text-right max-lg:text-center max-lg:border-t max-lg:w-full max-lg:border-custom-red'>
          <p className='text-sm sm:text-base max-lg:mt-3'>Designed and developed by IIIT Surat students</p>
          <p className='text-base  max-lg:text-sm'>Website last updated on 1:15 am, Tuesday 18th June, 2024</p>
        </div>
      </div>
    </div>
  );
}
