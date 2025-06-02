import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.27&longitude=72.94&current=temperature_2m,relative_humidity_2m,wind_speed_10m');
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Unable to load weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format current time
  const formatDateTime = () => {
    const options = { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    
    return currentTime.toLocaleDateString('en-US', options);
  };

  const linksArray = [
    { name: 'National Overseas Scholarship Scheme For The 2022-23', link: 'http://iiitsurat.ac.in/docs/NOS_Scheme_for_2022-23.pdf' },
    { name: 'Loksabha Research Fellowships', link: 'http://sri.nic.in/fellowship-scheme' },
    { name: 'National Scholarship Portal', link: 'https://nsp.gov.in/' },
    { name: 'SBI Collect', link: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm' },
    { name: 'Uttar Pradesh Government - Scholarship System', link: 'https://scholarship.up.nic.in/' },
    { name: 'Study in India (SII) Portal - Student Registration Link', link: 'https://www.studyinindia.gov.in/admission/registrations' }, 
    { name: 'Sitemap', link: 'https://iiitsurat.ac.in/' }, 
    { name: 'Terms Of Use', link: 'https://iiitsurat.ac.in/' }
  ];

  const Partners = [
    { name : 'GNFC', img : '/images/partners/GNFC.jpg', link : 'https://www.gnfc.in/' },
    { name : 'Gujarat Informatics Limited', img : '/images/partners/GIL.jpg', link : 'https://www.gil.gujarat.gov.in/' },
    { name : 'Gujarat Gas Limited', img : '/images/partners/gujarat-gas-logo.png', link : 'https://www.gujaratgas.com/' },
  ];

  return (
    <div className='sm:p-6 py-5 bg-nav-color'>
      {/* First section */}
      <div className='flex flex-col sm:flex-row lg:flex-row justify-between items-start p-5 sm:p-6 pt-0'>
        {/* Useful Links */}
        <div className='flex-1 mb-6 sm:mb-0'>
          <p className='text-custom-red font-semibold text-lg md:text-xl leading-7 md:leading-8'>USEFUL LINKS</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='text-footer-gray text-base md:text-base leading-7 md:leading-8'>
            {linksArray.map((data, index) => (
              <Link to={data.link} target='_blank' key={index}>
                <li key={index} className='cursor-pointer hover:text-[#660000]'>{data.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Our Partner */}
        <div className='flex-1 mb-6 sm:mb-0'>
          <p className='text-custom-red font-semibold text-lg md:text-xl leading-7 md:leading-8 mb-2'>Our partner</p>
          <div>
            {Partners.map((partner, index) => (
              <Link key={index} to={partner.link} target='_blank' className='flex items-center mb-3'>
                <img src={partner.img} alt='partner-image' className='w-14 sm:w-16 h-14 sm:h-16 rounded-lg' />
                <div className='ml-4'>
                  <p className='text-custom-blue font-semibold text-lg'>{partner.name}</p>
                </div>
              </Link>
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
            <p>{formatDateTime()}</p>
            {loading ? (
              <p className='text-[#6C6C6C]'>Loading weather data...</p>
            ) : error ? (
              <p className='text-[#6C6C6C]'>{error}</p>
            ) : (
              <>
                <p><span className='text-[#6C6C6C]'>Temp:</span> {weatherData?.current?.temperature_2m || 'N/A'}{weatherData?.current_units?.temperature_2m || '°C'}</p>
                <p>
                  <span className='text-[#6C6C6C]'>Humidity:</span> {weatherData?.current?.relative_humidity_2m || 'N/A'}{weatherData?.current_units?.relative_humidity_2m || '%'} 
                  <span className='ml-2 text-[#6C6C6C]'>Wind:</span> {weatherData?.current?.wind_speed_10m || 'N/A'} km/h
                </p>
              </>
            )}
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
          <p className='text-base max-lg:text-sm'>Website last updated on {currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}, {currentTime.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}