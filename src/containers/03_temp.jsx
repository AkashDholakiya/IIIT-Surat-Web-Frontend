import comms from "../assets/images/comms.png";

const ThreeComponent = () => {
    return (
        <div className="flex px-24 flex-col max-md:w-full">
            <div className="flex flex-col text-xl text-[#660000] max-md:max-w-full">
                <div className="flex items-center gap-5 max-md:flex-wrap font-semibold">
                    <div className="flex-shrink">About department</div>
                    <div className="flex-grow border-t border-[#660000] border-bold" />
                </div>
                <div className="mt-9 text-lg text-justify text-[#474747] max-md:max-w-full">
                    The Department of Computer Science and Engineering established in 2017 offers an outstanding classroom teaching and a great research environment. 
                    The Department offers both B.Tech. and Ph.D. programs.
                    <br />
                    The Department features an excellent mix of young and experienced faculty in cyber and information security, artificial intelligence, machine learning, 
                    and the Internet of Things, to name a few. 
                    Our faculty merges advanced research experience with teaching to deliver top-notch education. 
                    The Department's goal is to equip students with both theoretical and practical knowledge, preparing them for success in industry, research, and higher studies.
                    <br />
                    The Department offers a comprehensive curriculum covering all aspects of computer hardware and software, with a focus on practical learning. 
                    The course structure is up to date, including courses on emerging areas such as Data Science, Blockchain, and Artificial Intelligence 
                    to provide our students with the most recent breakthroughs in computer science and engineering. 
                    Throughout the year, various student clubs are active, including Google Developer for Student Clubs (GDSC), Learn-Code-Solve (LCS), Free Open-Source Software (FOSS).
                    <br />
                    The Department is actively engaged in critical research domains such as artificial intelligence, data science, computer vision, 
                    and information retrieval. Furthermore, our research initiatives extend to the creation of Internet protocols, real-time security solutions, 
                    advancements in blockchain technology, and the analysis of social networks.
                    <img className='absolute bottom-25 right-20 pr-20' src={comms} alt="comms" />
                </div>

                <div className="mt-8 font-semibold">Dr. Sachin D. Patil</div>
                <div className="text-base font-medium text-neutral-500">
                    HOD computer science
                </div>
            </div>
        </div>

    )
}

export default ThreeComponent;
