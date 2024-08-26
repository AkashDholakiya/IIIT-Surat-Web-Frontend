import Hostelimage from '../../assets/images/hostel_background.png'
export default function HostelImage(){
    return(
        <div>
            <div className='bg-gradient-to-r h-[24rem] from-[#091a34] to-[#07377b] via-[#07295e] w-full relative'>
                <img src={Hostelimage}className='w-full h-full object-cover absolute mix-blend-overlay opacity-40' alt="" />
                <div className='pt-16 pl-32 w-1/2'>
                    <h1 className='text-white text-4xl'>Hostel Life</h1>
                    <p className='text-white text-[1.1rem] mt-1 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis nulla</p>
                </div>
                <div className='w-1/2 pt-6 pl-32'>
                    <p className='text-white text-[1.1rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum aliquam sed quidem labore ipsum consequuntur earum laboriosam fuga saepe beatae corrupti provident pariatur, voluptatibus ducimus aperiam quis quaerat a? Delectus accusamus culpa optio ex nihil doloremque natus velit eligendi, dolorem beatae deserunt, dignissimos eos, ad praesentium. Eos, perferendis aliquam.</p>
                </div>
            </div>
        </div> 
    )
}