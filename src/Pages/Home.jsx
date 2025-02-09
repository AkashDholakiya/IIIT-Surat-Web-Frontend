import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className='p-10 max-lg:p-5 max-lg:py-10'>
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-sm'>Important Announcements and notification</p>
          <p className='max-lg:text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p>
        </div>
        {/* Horizontaol scroll with height h-12 and in 2 rows */}
        <div className='flex overflow-x-auto mt-10'>
          <div className='flex flex-col'>
            <div className='flex p-2 w-96 h-24 mr-5 rounded-lg border border-[#660000]'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
            <div className='flex p-2 w-96 h-24 mr-5 rounded-lg border border-[#660000] mt-8'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex p-2 max-w-96 w-96 h-24 mr-5 rounded-lg border border-[#660000]'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
            <div className='flex p-2 max-w-96 w-96 h-24  mr-5 rounded-lg border border-[#660000] mt-8'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex p-2 max-w-96 w-96 h-24 mr-5 rounded-lg border border-[#660000]'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
            <div className='flex p-2 max-w-96 w-96 h-24  mr-5 rounded-lg border border-[#660000] mt-8'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex p-2 max-w-96 w-96 h-24 mr-5 rounded-lg border border-[#660000]'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
            <div className='flex p-2 max-w-96 w-96 h-24  mr-5 rounded-lg border border-[#660000] mt-8'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex p-2 max-w-96 w-96 h-24 mr-5 rounded-lg border border-[#660000]'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
            <div className='flex p-2 max-w-96 w-96 h-24  mr-5 rounded-lg border border-[#660000] mt-8'>
              <img className='w-20' src="/images/sample.svg" alt="sample" />
              <div className="ml-2">
                <h1 className='text-sm font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                <div className='flex w-full justify-between mt-4 text-xs'>
                  <p className='text-[#474747]'>Lorem ipsum, dolor.</p>
                  <p className='text-[#2F80F9]'>Thursday-17June 24’</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 max-lg:px-5 py-5">
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-sm'>Latest updates and achievements</p>
          <p className='max-lg:text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p>
        </div>
        {/* Creating Horizontal slide bar */}
        <div className='flex overflow-x-auto mt-10'>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
          <div className='flex flex-col p-1 w-96 mr-5'>
            <div className="relative w-96">
              <img src="/images/sample-2.svg" alt="sample" />
              <div className='text-[#003481] bg-[#FFFFFF] py-1 px-4 rounded-full absolute top-1.5 text-xs left-2'>17June 24’</div>
            </div>
            <div className="px-5 w-full mt-5">
              <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
              <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti.  <span className='font-semibold underline cursor-pointer'>Read More</span></p>
            </div>
          </div>
        </div>
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
        <div className="w-1/2 px-10">
          <h1 className='text-2xl font-semibold mt-6 text-[#660000]'>Statics in Research</h1>
          <p className='mt-4 text-lg text-[#474747]'>Immerse yourself in a globally acclaimed research ecosystem, offering unparalleled opportunities to contribute to Government and Industry-funded projects on an international scale, and beyond.</p>
          <div className='flex flex-col mt-10 h-56'>
            <div className="flex w-full h-28">
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>02</h1>
                <p className='text-lg text-[#474747]'>Projects & <br /> Consultancy</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>02</h1>
                <p className='text-lg text-[#474747]'>Awards & <br /> Recoginazation</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>06</h1>
                <p className='text-lg text-[#474747]'>Workshop/Seminar<br />
                  Organized</p>
              </div>
            </div>
            <div className="flex w-full h-28">
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>04</h1>
                <p className='text-lg text-[#474747]'>Book Chapter <br />
                  Published</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>04</h1>
                <p className='text-lg text-[#474747]'>Patents</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-[#660000]'>50+</h1>
                <p className='text-lg text-[#474747]'>Paper Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-5 h-72 max-lg:flex hidden">
          <div className="w-full relative flex justify-center items-center">
            <img className='-z-10 absolute w-full h-full' src="/images/main.png" alt="iiit" />
            <div className="bg-[#660000CC] w-full h-full z-40" />
            <div className="absolute z-50 px-5 text-white">
              <h1 className='text-lg font-semibold'>Research & Innovation</h1>
              <p className='mt-4 text-sm'>IIIT Surat emphasises research activities at undergraduate and doctoral programmes. It has conducted several research projects funded by various funding agencies and several industries. It is determined to emerge as a knowledge enterprise that is closely engaged in research and innovation.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-5 max-lg:flex max-lg:flex-col hidden">
          <h1 className='text-xl font-semibold mt-6 text-[#660000]'>Statics in Research</h1>
          <p className='mt-2 text-sm font-light text-[#474747]'>Immerse yourself in a globally acclaimed research ecosystem, offering unparalleled opportunities to contribute to Government and Industry-funded projects on an international scale, and beyond.</p>
          <div className='flex flex-col mt-10 h-56'>
            <div className="flex w-full h-28">
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>02</h1>
                <p className='text-sm font-medium text-[#474747]'>Projects & <br /> Consultancy</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>02</h1>
                <p className='text-sm font-medium text-[#474747]'>Awards & <br /> Recoginazation</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>06</h1>
                <p className='text-sm font-medium text-[#474747]'>Workshop/<br />Seminar<br />
                  Organized</p>
              </div>
            </div>
            <div className="flex w-full h-28">
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>04</h1>
                <p className='text-sm font-medium text-[#474747]'>Book Chapter <br />
                  Published</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>04</h1>
                <p className='text-sm font-medium text-[#474747]'>Patents</p>
              </div>
              <div className='flex flex-col w-1/3 text-center'>
                <h1 className='text-2xl font-bold text-[#660000]'>50+</h1>
                <p className='text-sm font-medium text-[#474747]'>Paper Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-56 h-[40rem] relative max-lg:hidden">
        <img className='-z-30 absolute w-full h-full' src="/images/main.png" alt="iiit" />
        <div className="bg-[#002050E5] w-full h-full -z-20" />
        <div className="-top-[50rem] h-1/2 w-full relative flex justify-center">
          <div className='flex justify-center w-3/4 relative'>
            <div className="w-full h-full bg-cover" style={{ backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url('/images/image-sample.jpg')" }} />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className='text-lg'>Batch 2021 Computer Science Engineering</h1>
              <p className='font-light text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit. </p>
            </div>
          </div>
        </div>
        <div className='flex top-[15rem] w-full absolute z-40 text-white'>
          <div className='w-1/2 pb-10 pl-36'>
            <h1 className='text-3xl'>Statics in Placement</h1>
            <p className='mt-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint odit consequuntur hic! Veniam sapiente accusantium tempora voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor quis provident omnis nemo placeat quo rerum iste sed sequi eaque animi quidem commodi voluptas repellat obcaecati quos sint</p>
          </div>
          <div className='w-1/2 flex flex-col px-16 pb-10'>
            <div className='flex h-1/2 justify-evenly'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl font-bold'>13.745 LPA</h1>
                <p className='font-medium text-xl'>Average Package</p>
                <p className='font-light'>Computer Science <br /> Engineering</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl font-bold'>12.030 LPA</h1>
                <p className='font-medium text-xl'>Average Package</p>
                <p className='font-light'>Electronics and <br /> communication</p>
              </div>
            </div>
            <div className='flex h-1/2 justify-around'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl font-bold'>64.030 LPA</h1>
                <p className='font-medium text-xl'>Highest package</p>
                <p className='font-light'>Naitik Patil in <br /> Uber</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl font-bold'>2400+</h1>
                <p className='font-medium text-xl'>Patents</p>
                <p className='font-light'>filed successfully<br /> till date</p>
              </div>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl font-bold'>150</h1>
                <p className='font-medium text-xl'>Startups</p>
                <p className='font-light'>Entrepreneurship<br />projects registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex-col items-center mt-10 relative hidden max-lg:flex max-lg:px-3">
        <div className='h-36' style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9))" }}>
          <img className='h-full' src="/images/image-sample.jpg" alt="" />
          <div className="absolute z-50 bottom-2 left-2 text-white">
            <h1 className='text-sm'>Batch 2021 Computer Science Engineering</h1>
            <p className='font-light text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit. </p>
          </div>
        </div>
      </div>

      <div className="h-[30rem] relative mt-5 max-lg:flex hidden">
        <img className='-z-30 absolute w-full h-full' src="/images/main.png" alt="iiit" />
        <div className="bg-[#002050E5] w-full h-full -z-20" />
        <div className='flex top-5 flex-col w-full px-5 absolute z-40 text-white'>
          <h1 className='text-xl font-semibold'>Statics in Placement</h1>
          <p className='mt-2 text-sm font-light text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint odit consequuntur hic! Veniam sapiente accusantium tempora voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor quis provident omnis nemo placeat quo rerum iste sed sequi eaque animi quidem commodi voluptas repellat obcaecati quos sint</p>
        </div>
      </div>

      <div className="mt-10 max-lg:flex hidden max-lg:px-1">
        <div className='w-full flex flex-col'>
          <div className='flex h-1/2 justify-evenly'>
            <div className='flex flex-col items-center justify-center text-center'>
              <h1 className='text-xl font-bold text-[#660000]'>13.745 LPA</h1>
              <p className='font-medium text-sm'>Average Package</p>
              <p className='font-light text-xs'>Computer Science <br /> Engineering</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <h1 className='text-xl font-bold text-[#660000]'>12.030 LPA</h1>
              <p className='font-medium text-sm'>Average Package</p>
              <p className='font-light text-xs'>Electronics and <br /> communication</p>
            </div>
          </div>
          <div className='flex h-1/2 justify-around mt-5'>
            <div className='flex flex-col items-center justify-center text-center'>
              <h1 className='text-xl font-bold text-[#660000]'>64.030 LPA</h1>
              <p className='font-medium text-sm'>Highest package</p>
              <p className='font-light text-xs'>Naitik Patil in <br /> Uber</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <h1 className='text-xl font-bold text-[#660000]'>2400+</h1>
              <p className='font-medium text-sm'>Patents</p>
              <p className='font-light text-xs'>filed successfully<br /> till date</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <h1 className='text-xl font-bold text-[#660000]'>150</h1>
              <p className='font-medium text-sm'>Startups</p>
              <p className='font-light text-xs'>Entrepreneurship<br />projects registered</p>
            </div>
          </div>
        </div>
      </div>



      <div className="my-16 px-4 sm:px-6 md:px-10">
        <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
          <p className='font-semibold text-2xl max-lg:text-sm'>Latest updates and achievements</p>
          <p className='max-lg:text-xs'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p>
        </div>
        <div className="mt-5 overflow-x-auto">
          <div className="flex space-x-3 w-max">
            {Array(8).fill().map((_, index) => (
              <div key={index} className='relative bg-contain bg-center bg-no-repeat h-52 w-80 rounded-2xl text-white' style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url('/images/sample_last_second.svg') no-repeat center center/cover" }}>
                <div className="absolute bottom-3 left-4">
                  <p className='font-semibold'>Lorem ipsum dolor consect.</p>
                  <p className='text-xs font-light'>Lorem ipsum, dolor sit amet consecte.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="my-10 w-full max-lg:my-10">
        <h1 className="text-center text-[#660000] font-bold text-xl sm:text-2xl">MoE Initiatives</h1>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:w-full justify-center">
          <Link to={'https://dsel.education.gov.in/ebsb'} target='_blank' className="flex justify-center flex-col items-center mb-6 sm:flex-row sm:mb-0 sm:mr-10 lg:mr-12 cursor-pointer select-none">
            <img src="/images/moe/img-1.svg" alt="1" className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]" />
            <p className="text-[#003481] text-lg ml-3 font-semibold max-sm:mt-2 max-sm:text-center">Ek bharat <br /> Shresth bharat</p>
          </Link>
          <Link to={"https://dsel.education.gov.in/fit-india"} target='_blank' className="flex justify-center flex-col items-center mb-6 sm:flex-row sm:mb-0 sm:mr-10 lg:mr-12 cursor-pointer select-none">
            <img src="/images/moe/img-2.svg" alt="1" className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]" />
            <div className="flex flex-col ml-3 max-sm:text-center max-sm:mt-2">
              <p className="text-[#003481] text-lg font-semibold">Fit India</p>
            </div>
          </Link>
          <Link to={'https://swayam.gov.in/'} target='_blank' className="flex justify-center items-center flex-col mb-6 sm:flex-row sm:mb-0 sm:mr-10 lg:mr-12 cursor-pointer select-none">
            <img src="/images/moe/img-4.jpg" alt="1" className="w-[60px] h-[60px] sm:w-[120px] sm:h-[70px]" />
            <div className="flex flex-col ml-3 max-sm:text-center max-sm:mt-2">
              <p className="text-[#003481] text-lg font-semibold">Swayam</p>
            </div>
          </Link>
          <Link to={'https://aishe.gov.in/'} target='_blank' className="flex justify-center items-center flex-col sm:flex-row cursor-pointer select-none">
            <img src="/images/moe/img-3.svg" alt="1" className="w-[60px] flex h-[60px] sm:w-[70px] sm:h-[70px]" />
            <div className="flex flex-col ml-3 max-sm:text-center max-sm:mt-2">
              <p className="text-[#003481] text-lg font-semibold">AISHE</p>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home
