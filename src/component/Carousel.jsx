import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel() {
  const slides = ["/images/main.png", "/images/img-1.png","/images/img-2.jpg","/images/img-3.jpg","/images/img-4.jpg","/images/img-5.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[650px] w-full m-auto relative group'>
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
      <div className='flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`relative bottom-5 cursor-pointer mx-2 p-1.5 ${slideIndex === currentIndex ? 'bg-[#002050] rounded-3xl px-4' : 'bg-[#EAF2FE] rounded-full'}`}
          >
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center items-center absolute bottom-10">
          <div className="flex flex-col bg-[#002050] rounded-3xl p-3 items-center justify-center">
            <div className="head">
              <h1 className='text-white font-normal text-lg'>Students services and Academics unit</h1>
            </div>
            <div className="flex mt-4 text-white">
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/hostel.svg" alt="service" /><p className='mt-3'>Hostel life</p></div>
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/lib.svg" alt="service" /><p className='mt-3'>Library</p></div>
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/career.svg" alt="service" /><p className='mt-3'>Career</p></div>
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/stud.svg" alt="service" /><p className='mt-3'>For Students</p></div>
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/result.svg" alt="service" /><p className='mt-3'>Result</p></div>
                <div className='cursor-pointer flex flex-col items-center mx-10'><img className='w-12' src="/images/stud_service/attendence.svg" alt="service" /><p className='mt-3'>Attendence</p></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Carousel;