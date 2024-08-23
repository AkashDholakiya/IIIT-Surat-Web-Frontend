import React, { useEffect, useState, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel() {
  const slides = ["/images/main.png", "/images/img-1.png","/images/img-2.jpg","/images/img-3.jpg","/images/img-4.jpg","/images/img-5.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  
  useEffect(() => {
    const interval = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(interval);
  }, [nextSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  const services = [
    { icon: "/images/stud_service/hostel.svg", text: "Hostel life" },
    { icon: "/images/stud_service/lib.svg", text: "Library" },
    { icon: "/images/stud_service/career.svg", text: "Career" },
    { icon: "/images/stud_service/stud.svg", text: "For Students" },
    { icon: "/images/stud_service/result.svg", text: "Result" },
    { icon: "/images/stud_service/attendence.svg", text: "Attendence" },
  ];

  return (
    <div className='h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className='w-full h-full bg-no-repeat bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center absolute bottom-[200px] sm:bottom-[180px] md:bottom-[150px] lg:bottom-20 left-0 right-0'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer mx-2 p-1.5 ${slideIndex === currentIndex ? 'bg-[#002050] rounded-3xl px-4' : 'bg-[#EAF2FE] rounded-full'}`}
          >
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center items-center absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 px-4">
        <div className="flex flex-col bg-[#002050] rounded-3xl p-3 items-center justify-center w-full max-w-5xl">
          <div className="head">
            <h1 className='text-white font-normal text-sm sm:text-base md:text-lg text-center'>Students services and Academics unit</h1>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 mt-2 sm:mt-4 text-white">
            {services.map((service, index) => (
              <div key={index} className='cursor-pointer flex flex-col items-center'>
                <img className='w-6 sm:w-8 md:w-10 lg:w-12' src={service.icon} alt="service" />
                <p className='mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-center'>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;