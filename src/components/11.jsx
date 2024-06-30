import React from 'react'
import Footer from './footer'

export default function Eleven() {
  return (
    <div>
        <div className='grid grid-cols-5 bg-background-blue m-[125px] mt-[50px] rounded-md gap-x-[200px] mb-0 '>
            <div className='col-span-3 pl-[50px] pb-[25px] pt-[25px] pr-[60px]'>
                <p className='text-custom-blue font-semibold text-[25px] leading-[35px]'>Vision & Mission Statements</p>
                <p className='text-custom-gray font-normal text-[18px]  leading-[27px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat.</p>
                <button className='bg-custom-blue text-white h-[31px] w-[126px] rounded-[50px] font-medium text-[18px] leading-[27px] mt-[30px]'>About us</button>
                <button className='bg-custom-blue text-white h-[31px] w-[258px] rounded-[50px] font-medium text-[18px] leading-[27px] ml-[15px]'>Message from director desk</button>
            </div>
            <div className='col-span-2 pr-[50px] pt-[9px]'>
                <img src="./images/mission.png" alt="mission-image" className='h-[196px] w-[323px] ' />
            </div>
        </div>

        <div className='grid grid-cols-2 m-[75px] gap-x-[58px] mb-0 mt-[30px]'>
          <div className='pl-[50px] '>
          <p className='text-custom-red font-semibold text-[20px] leading-[30px] mb-[15px]'>Vision</p>
          <p className='text-custom-gray font-normal text-[18px] leading-[27px] text-justify custom-border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint.</p>
          </div>

          <div className='pr-[50px]'>
          <p className='text-custom-red font-semibold text-[20px] leading-[30px] mb-[15px]'>Mission</p>
          <p className='text-custom-gray font-normal text-[18px] leading-[27px] text-justify custom-border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint.</p>
          </div>
        </div>

        <div className='m-[75px] mt-[40px]' >
        <div className='pl-[50px] pr-[50px] '>
          <p className='text-custom-red font-semibold text-[20px] leading-[30px] mb-[15px]'>About Department</p>
          <p className='text-custom-gray font-normal text-[18px] leading-[27px] text-justify custom-border'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint odit consequuntur hic! Veniam sapiente accusantium tempora voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor quis provident omnis nemo placeat quo rerum iste sed sequi eaque animi quidem commodi voluptas repellat obcaecati quos sint
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delect.t </p>         
          </div>
        </div>

        <Footer />

    </div>
  )
}

