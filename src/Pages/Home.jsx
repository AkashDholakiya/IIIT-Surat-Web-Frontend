import React, { useState, useEffect, useCallback } from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import { backend_local } from '../utils/helper'

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [insthigh, setInsthigh] = useState([]);
  const [convocations, setConvocations] = useState([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [loadingInstHigh, setloadingInstHigh] = useState(false);
  const [announcementError, setAnnouncementError] = useState(null);
  const [eventError, setEventError] = useState(null);
  const [instHighError, setinstHighError] = useState(null);

  const fetchAnnouncements = useCallback(async () => {
    setLoadingAnnouncements(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${backend_local}/announcements/`);
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      const data = await response.json();
      setAnnouncements(data);
      setAnnouncementError(null);
    } catch (err) {
      console.error("Error fetching announcements:", err);
      setAnnouncementError(err.message);
      // Use mock data if the API call fails
      setAnnouncements(Array(10).fill().map((_, index) => ({
        id: index,
        title: `Announcement ${index + 1}: Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores. This is a longer title to demonstrate truncation for lengthy content that spans multiple lines.`,
        date: '2025-05-16T11:20:12.796406Z',
        link: '/announcements/' + index,
      })));
    } finally {
      setLoadingAnnouncements(false);
    }
  }, []);

  const fetchEvents = useCallback(async () => {
    setLoadingEvents(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${backend_local}/events/`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setEventError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setEventError(err.message);
      // Use mock data if the API call fails
      setEvents(Array(6).fill().map((_, index) => ({
        id: index,
        title: `Event ${index + 1}: Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.`,
        date: '2025-05-16T11:20:12.796406Z',
        image: '/images/sample-2.svg',
        description: 'Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti.',
        link: '/events/' + index,
      })));
    } finally {
      setLoadingEvents(false);
    }
  }, []);

  const fetchInstHigh = useCallback(async () => {
    setloadingInstHigh(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${backend_local}/institute-highlights/`);
      if (!response.ok) {
        throw new Error('Failed to fetch insthigh');
      }
      const data = await response.json();
      console.log(data);
      setInsthigh(data);
      setinstHighError(null);
    } catch (err) {
      console.error("Error fetching insthigh:", err);
      setinstHighError(err.message);
    } finally {
      setloadingInstHigh(false);
    }
  }, []);

  const fetchConvocations = useCallback(async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${backend_local}/convocation/`);
      if (!response.ok) {
        throw new Error('Failed to fetch convocations');
      }
      const data = await response.json();
      setConvocations(data);
    } catch (err) {
      console.error("Error fetching convocations:", err);
    } }, []);

  useEffect(() => {
    fetchAnnouncements();
    fetchEvents();
    fetchConvocations();
    fetchInstHigh();
  }, [fetchAnnouncements, fetchEvents, fetchConvocations, fetchInstHigh]);

  return (
    <div>
      <Carousel />
      <div className='p-10 max-lg:p-5 max-lg:py-10'>
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-sm'>Important Announcements and notification</p>
          {/* <p className='max-lg:text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p> */}
        </div>
        {/* Horizontal scroll with announcements fetched from backend */}          
        {loadingAnnouncements ? (
          <div className="flex justify-center items-center mt-10 h-40">
            <div className="animate-pulse flex flex-col space-y-4 w-full max-w-4xl">
              <div className="flex space-x-5">
                <div className="h-24 bg-gray-200 rounded-lg w-80"></div>
                <div className="h-24 bg-gray-200 rounded-lg w-80"></div>
              </div>
              <div className="flex space-x-5">
                <div className="h-24 bg-gray-200 rounded-lg w-80"></div>
                <div className="h-24 bg-gray-200 rounded-lg w-80"></div>
              </div>
            </div>
          </div>
        ) : announcementError ? (
          <div className="flex justify-center items-center mt-10 h-24">
            <p className="text-[#660000]">Error loading announcements: {announcementError}</p>
          </div>
        ) : (
          <div className='flex overflow-x-auto mt-10'>
            {(() => {
              const columnCount = Math.ceil(announcements.length / 2);
              
              return [...Array(columnCount)].map((_, columnIndex) => (
                <div key={columnIndex} className='flex flex-col'>
                  {[0, 1].map((rowIndex) => {
                    const dataIndex = columnIndex * 2 + rowIndex;
                    if (dataIndex >= announcements.length) return null;
                    
                    const announcement = announcements[dataIndex];
                      return (
                      <Link
                        key={`announcement-${announcement.id}`}
                        to={`${announcement.link ? backend_local + announcement.link : '#'}`}
                        target='_blank'
                        className={`flex flex-col p-4 w-[270px] xs:w-[300px] sm:w-[320px] md:w-[350px] h-auto min-h-28 mr-5 rounded-lg border border-[#660000] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${rowIndex === 1 ? 'mt-8' : ''}`}
                      >
                        <div className="flex flex-col justify-between h-full">
                          <h1 className='text-xs sm:text-sm md:text-base font-semibold text-[#660000] line-clamp-2 overflow-hidden text-ellipsis'>
                            {announcement.title}
                          </h1>
                          <div className='flex w-full justify-start text-xs mt-auto pt-3'>
                            <p className='text-[#2F80F9]'>
                              {announcement.date && announcement.date.includes('T') 
                                ? new Date(announcement.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  })
                                : announcement.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  }).filter(Boolean)}
                </div>
              ));
            })()}
          </div>
        )}
      </div>
      <div className="px-10 max-lg:px-5 py-5">
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-sm'>Latest updates and Events</p>
          {/* <p className='max-lg:text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p> */}
        </div>
        {/* Creating Horizontal slide bar */}        {loadingEvents ? (
          <div className="flex justify-center items-center mt-10 h-60">
            <div className="animate-pulse flex space-x-5 w-full overflow-x-auto px-5">
              <div className="rounded-lg bg-gray-200 h-60 w-[330px] flex-shrink-0"></div>
              <div className="rounded-lg bg-gray-200 h-60 w-[330px] flex-shrink-0"></div>
              <div className="rounded-lg bg-gray-200 h-60 w-[330px] flex-shrink-0"></div>
            </div>
          </div>
        ) : eventError ? (
          <div className="flex justify-center items-center mt-10 h-24">
            <p className="text-[#660000]">Error loading events: {eventError}</p>
          </div>
        ) : (
          <div className='flex overflow-x-auto mt-10'>            {events.map((event, index) => (
              <div key={index} className='flex flex-col p-3 w-[92vw] xs:w-[330px] sm:w-[350px] md:w-[380px] mr-5 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-1'>
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image || "/images/sample-2.svg"} 
                    alt="event" 
                    className="w-full h-full object-cover"
                  />
                  <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-3 text-xs left-3 shadow-md'>
                    {event.date && event.date.includes('T') 
                      ? new Date(event.date).toLocaleDateString('en-US', {
                          year: "numeric",
                          month: 'short',
                          day: 'numeric'
                        })
                      : event.date || '17June 24\''}
                  </div>
                </div>
                <div className="px-4 w-full mt-4 pb-4">
                  <h1 className='text-base font-semibold text-[#660000] line-clamp-2 mb-3'>{event.title}</h1>
                  <p className="text-[#474747] text-sm">
                    {event.description.length > 140 ? event.description.slice(0, 100) + '...' : event.description}
                    <br />
                    <Link to={event.link ? `${backend_local}${event.link}` : '#'} target="_blank" className='font-semibold underline cursor-pointer mt-3 inline-block hover:text-[#660000]'> Read More</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full pt-16 max-lg:hidden">
        <div className="w-1/2 relative flex justify-center items-center">
          <img className='-z-10 absolute w-full h-full' src="/images/main.png" alt="iiit" />
          <div className="bg-[#660000CC] w-full h-full z-40" />
          <div className="absolute z-50 text-white p-24">
            <h1 className='text-2xl font-semibold'>Research & Innovation</h1>
            <p className='mt-4 text-justify text-base'>IIIT Surat emphasises research activities at undergraduate and doctoral programmes. It has conducted several research projects funded by various funding agencies and several industries. It is determined to emerge as a knowledge enterprise that is closely engaged in research and innovation.</p>
          </div>
        </div>
        <div className="w-1/2 px-10">          <h1 className='text-2xl font-semibold mt-6 text-[#660000]'>Statistics in Research</h1>
          <p className='mt-4 text-lg text-[#474747]'>Immerse yourself in a globally acclaimed research ecosystem, offering unparalleled opportunities to contribute to Government and Industry-funded projects on an international scale, and beyond.</p>
          <div className='flex flex-col mt-10'>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>02</h1>
                <p className='text-lg text-[#474747]'>Projects & <br /> Consultancy</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>02</h1>
                <p className='text-lg text-[#474747]'>Awards & <br /> Recognition</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>06</h1>
                <p className='text-lg text-[#474747]'>Workshop/Seminar<br />Organized</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>04</h1>
                <p className='text-lg text-[#474747]'>Book Chapter <br />Published</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>04</h1>
                <p className='text-lg text-[#474747]'>Patents</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
                <h1 className='text-3xl font-bold text-[#660000]'>50+</h1>
                <p className='text-lg text-[#474747]'>Paper Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">      
        <div className="mt-5 h-80 max-lg:flex hidden">
          <div className="w-full relative flex justify-center items-center">
            <img className='-z-10 absolute w-full h-full object-cover' src="/images/main.png" alt="iiit" />
            <div className="bg-[#660000CC] w-full h-full z-40" />
            <div className="absolute z-50 px-6 py-8 text-white">
              <h1 className='text-xl font-semibold'>Research & Innovation</h1>
              <p className='mt-4 text-sm'>IIIT Surat emphasises research activities at undergraduate and doctoral programmes. It has conducted several research projects funded by various funding agencies and several industries. It is determined to emerge as a knowledge enterprise that is closely engaged in research and innovation.</p>
            </div>
          </div>
        </div>        
        <div className="w-full px-5 mt-10 max-lg:flex max-lg:flex-col hidden">
          <div className="flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4 mb-5">
            <p className="font-semibold text-xl">Statistics in Research</p>
          </div>
          <p className='mt-2 text-sm font-light text-[#474747]'>Immerse yourself in a globally acclaimed research ecosystem, offering unparalleled opportunities to contribute to Government and Industry-funded projects on an international scale, and beyond.</p>
          <div className='flex flex-col mt-8'>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>02</h1>
                <p className='text-sm font-medium text-[#474747]'>Projects & <br /> Consultancy</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>02</h1>
                <p className='text-sm font-medium text-[#474747]'>Awards & <br /> Recognition</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>06</h1>
                <p className='text-sm font-medium text-[#474747]'>Workshop/<br />Seminar</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>04</h1>
                <p className='text-sm font-medium text-[#474747]'>Book Chapter <br />Published</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>04</h1>
                <p className='text-sm font-medium text-[#474747]'>Patents</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl font-bold text-[#660000]'>50+</h1>
                <p className='text-sm font-medium text-[#474747]'>Paper Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placement section for desktop view */}
      <div className="mt-56 h-[40rem] relative max-lg:hidden">
        <div className="absolute inset-0">
          <img className='w-full h-full object-cover' src={"/images/main.png"} alt="iiit" />
        </div>
        <div className="absolute inset-0 bg-[#002050] opacity-90"></div>
          <div className="-top-44 h-1/2 w-full relative flex justify-center">          
          <div className='flex justify-center w-3/4 relative h-full'>            
            {convocations.length > 0 && (
              <div 
                className="absolute rounded-xl inset-0 shadow-lg overflow-hidden" 
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8)), url(${backend_local + convocations[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '110%'
                }} 
              />
            )}
            <div className="absolute bottom-6 left-10 text-white z-10">
              <h1 className='text-2xl font-semibold'>{convocations.length > 0 && convocations[0].title}</h1>
              <p className='font-light text-sm mt-2'>{convocations.length > 0 && convocations[0].subtitle}</p>
            </div>
          </div>
        </div>
        <div className='flex top-[15rem] w-full absolute z-10 text-white'>
          <div className='w-1/2 pb-10 pl-36'>            
          <h1 className='text-4xl font-bold mb-4'>Statistics in Placement</h1>
            <p className='mt-2 text-justify'>IIIT Surat has maintained an exceptional placement record with leading tech companies consistently recruiting our graduates. Our Computer Science and Electronics & Communication Engineering students secure attractive packages thanks to our rigorous curriculum and industry-focused training. With a 95% placement rate, our institute ranks among the top technical institutes in the region. Our placement cell provides comprehensive support through career counseling, mock interviews, and industry workshops. Recent years have seen increased recruitment from multinational companies and startups alike, with many students receiving multiple job offers. The institute's strong industry connections and alumni network have been instrumental in creating meaningful career opportunities for our students across sectors like software development, data science, AI/ML, hardware design, and telecommunications.</p>
          </div>          
          
          <div className='w-1/2 flex flex-col px-16 pb-10'>
            <div className='flex h-1/2 justify-evenly mb-8'>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
                <h1 className='text-3xl font-bold'>13.745 LPA</h1>
                <p className='font-medium text-xl'>Average Package</p>
                <p className='font-light'>Computer Science <br /> Engineering</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
                <h1 className='text-3xl font-bold'>12.030 LPA</h1>
                <p className='font-medium text-xl'>Average Package</p>
                <p className='font-light'>Electronics and <br /> communication</p>
              </div>
            </div>
            <div className='flex h-1/2 justify-around'>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
                <h1 className='text-3xl font-bold'>64.030 LPA</h1>
                <p className='font-medium text-xl'>Highest package</p>
                <p className='font-light'>Naitik Patil in <br /> Uber</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
                <h1 className='text-3xl font-bold'>04</h1>
                <p className='font-medium text-xl'>Patents</p>
                <p className='font-light'>filed successfully<br /> till date</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
                <h1 className='text-3xl font-bold'>02</h1>
                <p className='font-medium text-xl'>Startups</p>
                <p className='font-light'>Entrepreneurship<br />projects registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>       

      {/* Convocation Section for mobile view */}       
      <div className="justify-center flex-col items-center mt-10 relative hidden max-lg:flex max-lg:px-3">
        <div className='h-56 relative w-full rounded-lg overflow-hidden shadow-md'>
          {convocations.length > 0 && (
            <div className="absolute inset-0" 
              style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7)), url(${backend_local + convocations[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
              }} 
            />
          )}
          <div className="absolute z-10 bottom-6 left-5 text-white max-w-[90%]">
            <h1 className='text-base sm:text-lg font-semibold'>{convocations.length > 0 && convocations[0].title}</h1>
            <p className='font-light text-xs sm:text-sm mt-2'>{convocations.length > 0 && convocations[0].subtitle}</p>
          </div>
        </div>
      </div>      
      
      {/* Placement section for mobile view */}          
      <div className="h-auto min-h-[25rem] relative mt-8 max-lg:block hidden overflow-hidden">
            <div className="absolute inset-0">
              <img className='w-full h-full object-cover' src="/images/main.png" alt="iiit" />
            </div>
            <div className="absolute inset-0 bg-[#002050] opacity-90"></div>
            <div className='relative z-10 flex flex-col w-full px-5 py-8 text-white'>
              <h1 className='text-xl font-semibold text-center mb-4'>Statistics in Placement</h1>
              <p className='mt-2 text-xs font-light text-justify'>IIIT Surat has maintained an exceptional placement record with leading tech companies consistently recruiting our graduates. Our Computer Science and Electronics & Communication Engineering students secure attractive packages thanks to our rigorous curriculum and industry-focused training. The institute's Training & Placement Cell works tirelessly to connect students with top recruiters like Google, Microsoft, Amazon, Uber, and many more. With 95% placement rates across programs and rising average packages each year, our students enjoy excellent career prospects. Our focus on practical skills, internships, and industry collaboration has established IIIT Surat as a preferred talent hub for tech recruiters nationwide.</p>
            </div>
          </div><div className="mt-10 max-lg:block hidden max-lg:px-4">
        <div className='w-full flex flex-col'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
              <h1 className='text-2xl font-bold text-[#660000]'>13.745 LPA</h1>
              <p className='font-medium text-sm'>Average Package</p>
              <p className='font-light text-xs'>Computer Science <br /> Engineering</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
              <h1 className='text-2xl font-bold text-[#660000]'>12.030 LPA</h1>
              <p className='font-medium text-sm'>Average Package</p>
              <p className='font-light text-xs'>Electronics and <br /> communication</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
              <h1 className='text-2xl font-bold text-[#660000]'>64.030 LPA</h1>
              <p className='font-medium text-sm'>Highest package</p>
              <p className='font-light text-xs'>Naitik Patil in <br /> Uber</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
              <h1 className='text-2xl font-bold text-[#660000]'>04</h1>
              <p className='font-medium text-sm'>Patents</p>
              <p className='font-light text-xs'>filed successfully<br /> till date</p>
            </div>
          </div>
          <div className='mt-4 px-16'>
            <div className='flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
              <h1 className='text-2xl font-bold text-[#660000]'>02</h1>
              <p className='font-medium text-sm'>Startups</p>
              <p className='font-light text-xs'>Entrepreneurship<br />projects registered</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Institute Highlights section */}
      <div className="my-16 px-4 sm:px-6 md:px-10">
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-xl'>Institute Highlights</p>
        </div>
        <div className="mt-8 overflow-x-auto scrollbar-hide pb-4">
          <div className="flex space-x-6 w-max px-2 pb-5">            
            {insthigh.length > 0 && insthigh.map((data, index) => (
              <div key={index} className='relative h-72 sm:h-80 w-[85vw] sm:w-96 md:w-[420px] rounded-xl text-white overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.03] hover:shadow-xl'>
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7)), url(${backend_local + data.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                }}></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <p className='text-lg sm:text-xl font-semibold max-w-[85%] leading-snug'>{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>      
      
      <div className="my-16 w-full px-4 sm:px-8">
        <div className='flex flex-col text-[#660000] pl-4 mb-10 max-w-md mx-auto'>
          <p className='font-semibold text-2xl max-lg:text-xl text-center'>MoE Initiatives</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <Link to={'https://dsel.education.gov.in/ebsb'} target='_blank' className="flex flex-col sm:flex-row items-center group cursor-pointer">
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-all duration-300 p-4 shadow-md group-hover:shadow-lg">
              <img src="/images/moe/img-1.svg" alt="Ek Bharat Shresth Bharat" className="w-[60px] h-[60px] object-contain" />
            </div>
            <div className="flex flex-col ml-0 sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
              <p className="text-[#003481] text-lg font-semibold group-hover:text-[#005bbb] transition-colors duration-300">Ek bharat <br className="hidden sm:block" /> Shresth bharat</p>
            </div>
          </Link>
          
          <Link to={"https://dsel.education.gov.in/fit-india"} target='_blank' className="flex flex-col sm:flex-row items-center group cursor-pointer">
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-all duration-300 p-4 shadow-md group-hover:shadow-lg">
              <img src="/images/moe/img-2.svg" alt="Fit India" className="w-[60px] h-[60px] object-contain" />
            </div>
            <div className="flex flex-col ml-0 sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
              <p className="text-[#003481] text-lg font-semibold group-hover:text-[#005bbb] transition-colors duration-300">Fit India</p>
            </div>
          </Link>
          
          <Link to={'https://swayam.gov.in/'} target='_blank' className="flex flex-col sm:flex-row items-center group cursor-pointer">
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-all duration-300 p-4 shadow-md group-hover:shadow-lg">
              <img src="/images/moe/img-4.jpg" alt="Swayam" className="w-[60px] h-[60px] object-contain rounded-full" />
            </div>
            <div className="flex flex-col ml-0 sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
              <p className="text-[#003481] text-lg font-semibold group-hover:text-[#005bbb] transition-colors duration-300">Swayam</p>
            </div>
          </Link>
          <Link to={'https://aishe.gov.in/'} target='_blank' className="flex justify-center items-center flex-col sm:flex-row cursor-pointer select-none hover:scale-105 transition-transform duration-300">
            <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors duration-300 p-3 shadow-md">
              <img src="/images/moe/img-3.svg" alt="AISHE" className="w-[55px] h-[55px] object-contain" />
            </div>
            <div className="flex flex-col ml-3 max-sm:text-center max-sm:mt-3">
              <p className="text-[#003481] text-lg font-semibold">AISHE</p>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
