import React from "react";

function Departments() {
    return (
        <div className="relative overflow-hidden flex-col mt-10 font-semibold min-h-[300px] max-w-full">
            <div className="self-center w-full max-w-[1350px] mt-[50px] ml-9">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="w-[25%] max-w-full">
                        <div className="flex flex-col text-2xl font-semibold text-blue-500 max-md:mt-10">
                            <div className="flex gap-4 items-center">
                                <div className="flex-auto">Computer Science</div>
                            </div>
                            <div className="flex flex-col mt-6">
                                <div>About department</div>
                                <div className="mt-4">Head of department</div>
                                <div className="mt-2 text-xl font-medium">
                                    Pradeep Kumar Roy
                                </div>
                                <div className="mt-4">Faculty</div>
                                <div className="mt-2 text-xl font-medium">
                                    Working for a better future
                                </div>
                                <div className="mt-4">Laboratory</div>
                                <div className="mt-2 text-xl font-medium">
                                    Well-equipped 3 labs
                                </div>
                                <div className="mt-4">Curriculum</div>
                                <div className="mt-2 text-xl font-medium">Syllabus</div>
                                <div className="mt-4">Seminars workshops</div>
                                <div className="mt-2 text-xl font-medium">
                                    Research Highlights
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-5 w-[75%] max-w-full">
                        <div className="flex flex-col grow mt-1.5 text-4xl font-semibold leading-9 text-emerald-500 max-md:mt-10 max-md:max-w-full">
                            <div>About department</div>
                            <div className="mt-9 text-2xl text-justify text-blue-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus obcaecati magni voluptates nihil iure quaerat optio
                                minima, totam ipsum sed fugit voluptatem, recusandae illo
                                quisquam assumenda asperiores voluptatum tempore ipsa delectus.
                                Aliquam tenetur provident quia ab corrupti aut assumenda dicta
                                dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae
                                in doloremque.Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Doloribus obcaecati magni voluptates nihil
                                iure quaerat optio minima, totam ipsum sed fugit voluptatem,
                                recusandae illo quisquam assumenda asperiores voluptatum tempore
                                ipsa delectus. Aliquam tenetur provident quia ab corrupti aut
                                assumenda dicta dignissimos, vitae debitis ad alias nisi.
                                <div className="mt-4">Dr. Pradeep Kumar Roy</div>
                                <div className="mt-2 text-xl font-medium">
                                    HOD Computer science
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Departments;
