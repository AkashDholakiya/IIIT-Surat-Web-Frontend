import React from "react";

function Departments() {
    return (
        <div className="flex flex-col px-20 -mt-8 w-full max-w-[100%] max-md:px-5">
            <div className="relative overflow-hidden flex justify-center items-center mt-12 w-full min-h-[20px] max-md:mt-10 max-md:max-w-full top-10 ">
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {/* Sidebar */}
                    <div className="flex flex-col text-lg font-semibold text-blue-900 max-md:mt-10">
                        <div className="flex gap-4">
                            <div className="flex-auto my-auto">Computer Science</div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9410495aa730b358d6750cf57e74e02d09eea11515b2c7514215c4fd7bdba8e?apiKey=7c5b01f694034c0fb3ba724488afa998&"
                                className="shrink-0 border-blue-900 border-solid aspect-[0.16] border-[5px] stroke-[5px] stroke-blue-900 w-[5px]"
                                alt="Icon"
                            />
                            <div className="flex-auto my-auto">About Department</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-8">Head of Department</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Dr. Pradeep Kumar Roy
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-8">Faculty</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Working for a better future
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-8">Laboratory</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Well equipped 3 labs
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-8">Curriculum</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Syllabus
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-8">Workshops and Seminars</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Research Highlights
                            </div>
                        </div>
                    </div>
                    {/* Main Content starts */}
                    <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-2.5 text-xl font-semibold text-red-950 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-wrap">
                                <div className="grow">About department</div>
                            </div>
                            <div className="mt-9 text-lg text-justify text-zinc-700 max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                placeat fugiat necessitatibus. Et ab id minus tenetur consectetur
                                molestias expedita minima delectus hic facere dicta rem fugit
                                labore repudiandae ad deleniti tempore deserunt quisquam unde,
                                consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus
                                voluptatibus! Enim animi quidem perferendis amet blanditiis
                                commodi ex temporibus maxime dolore mollitia earum soluta non
                                inventore harum at, dicta beatae quasi eius maiores numquam dolor
                                sint odit consequuntur hic! Veniam sapiente accusantium tempora
                                voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor
                                quis provident omnis nemo placeat quo rerum iste sed sequi eaque
                                animi quidem commodi voluptas repellat obcaecati quos sint
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                placeat fugiat necessitatibus. Et ab id minus tenetur consectetur
                                molestias expedita minima delectus hic facere dicta rem fugit
                                labore repudiandae ad deleniti tempore deserunt quisquam unde,
                                consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus
                                voluptatibus! Enim animi quidem perferendis amet blanditiis
                                commodi ex temporibus maxime dolore mollitia earum soluta non
                                inventore harum at, dicta beatae quasi eius maiores numquam dolor
                                sint odit consequuntur hic! Veniam sapiente accusantium tempora
                                voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor
                                quis provident omnis nemo placeat quo rerum iste sed sequi eaque
                                animi quidem commodi voluptas repellat obcaecati quos sint
                            </div>
                            <div className="mt-8">Dr. Pradeep Kumar Roy</div>
                            <div className="mt-3.5 text-base font-medium text-neutral-500">
                                Head of Department
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Departments;
