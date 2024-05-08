import React from 'react'
import { Link } from "react-router-dom";

function Set2() {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Content Shortcodes</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Content Shortcodes</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >POPULAR <span className="text-blue-950">PRODUCERS</span></h1>
            </div>

            <div className="flex flex-col x:flex xl:flex-row justify-center items-center mt-14 gap-10">
                <div className="  flex flex-col gap-5 justify-center items-center  mb-5">

                    <div className="  hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-300   flex flex-col  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/cont-img-1.jpg" alt="img1" class="h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer " />


                    </div>


                    <div className="  hover:rounded-[60px] rounded-[60px] hover:rounded-tr-lg hover:rounded-bl-lg rounded-tl-lg rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-100   flex flex-col">
                        <div className=" flex flex-col justify-center items-center gap-3 mt-10 ">
                            <h1 className="text-2xl font-semibold">Lorem ipsum dolor</h1>
                            <p class=" text-center text-xl text-orange-500">
                                Duration: 1-2 hrs
                            </p>
                            <p class=" text-center text-xl text-orange-500 mt-5">
                                $40.00
                            </p>
                            <p class=" text-center text-l text-gray-500 px-7 mt-5">
                                Nam vitae augue non nisi rhoncus cursus nunc lorem maecenas.
                            </p>

                        </div>

                    </div>

                </div>
                <div className="  flex flex-col gap-5 justify-center items-center  mb-5">

                    <div className="  hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-300   flex flex-col  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/cont-img-2.jpg " alt="img2" class="h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer " />


                    </div>


                    <div className="  hover:rounded-[60px] rounded-[60px] hover:rounded-tr-lg hover:rounded-bl-lg rounded-tl-lg rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-100   flex flex-col">
                        <div className=" flex flex-col justify-center items-center gap-3 mt-10 ">
                            <h1 className="text-2xl font-semibold">Lorem ipsum dolor</h1>
                            <p class=" text-center text-xl text-orange-500">
                                Duration: 1-2 hrs
                            </p>
                            <p class=" text-center text-xl text-orange-500 mt-5">
                                $40.00
                            </p>
                            <p class=" text-center text-l text-gray-500 px-7 mt-5">
                                Nam vitae augue non nisi rhoncus cursus nunc lorem maecenas.
                            </p>

                        </div>

                    </div>

                </div>
                <div className="  flex flex-col gap-5 justify-center items-center  mb-5">

                    <div className="  hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-300   flex flex-col  ">
                        <img src=" https://patrai.wpengine.com/wp-content/uploads/2019/04/cont-img-3.jpg" alt="img3" class="h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] hover:rounded-[60px] rounded-[60px] rounded-tr-lg rounded-bl-lg hover:rounded-tl-lg hover:rounded-br-lg cursor-pointer " />


                    </div>


                    <div className="  hover:rounded-[60px] rounded-[60px] hover:rounded-tr-lg hover:rounded-bl-lg rounded-tl-lg rounded-br-lg cursor-pointer h-80 w-96 md:max-lg:h-[400px] md:max-lg:w-[500px] bg-gray-100   flex flex-col">
                        <div className=" flex flex-col justify-center items-center gap-3 mt-10 ">
                            <h1 className="text-2xl font-semibold">Lorem ipsum dolor</h1>
                            <p class=" text-center text-xl text-orange-500">
                                Duration: 1-2 hrs
                            </p>
                            <p class=" text-center text-xl text-orange-500 mt-5">
                                $40.00
                            </p>
                            <p class=" text-center text-l text-gray-500 px-7 mt-5">
                                Nam vitae augue non nisi rhoncus cursus nunc lorem maecenas.
                            </p>

                        </div>

                    </div>

                </div>
            </div>


            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >MAP <span className="text-blue-950">SWITCHER</span></h1>
            </div>

            <div className="m-8 md:max-lg:w-[700px] bg-white md:p-24 p-5  h-auto gap-4 ">
                <h2 className=" text-xl font-semibold font-poppins text-black ">
                    Leave a Comment </h2>
                <p className="text-gray-700 font-roboto py-3">Your email address will not be published.</p>
                <p className="text-gray-700 font-roboto mb-4">Required fields are marked <span class="text-red-500">*</span></p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Comment<span class="text-red-500">*</span>
                        </label>
                        <textarea
                            id="comment"
                            name="comment"

                            className="w-full px-5 py-2 border outline-none "
                            rows="5"

                        ></textarea>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Name<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Email<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-blue-900 transition duration-1000 text-white font-normal py-4 px-11 focus:outline-none focus:shadow-outline"
                    >
                        Post Comment
                    </button>
                </form>
            </div>


        </>
    )
}

export default Set2