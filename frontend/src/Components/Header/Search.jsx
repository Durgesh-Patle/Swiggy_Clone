import React, { useContext, useState } from "react";
import Context from "../../Context";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const Search = () => {
    let [slide, setSlide] = useState(0);
    const { mindData } = useContext(Context);

    function incrSlide() {
        if (mindData.length - 5 == slide) return false;
        setSlide(slide + 5);
    }
    function decrSlide() {
        if (slide == 0) return false;
        setSlide(slide - 5)
    };

    return (

        <div className='max-w-[1000px] mx-auto mt-28 px-2'>
            {/* Search Section */}
            <div className="w-full max-w-2xl px-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for restaurants and food"
                        className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring"
                    />
                    <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M16.8 10.5a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-between mt-10 ml-5'>
                <h2 className='text-2xl font-bold text-[#4F4A52]'>Popular Cuisines</h2>
                <div className='flex items-center gap-2 '>
                    <div className='flex items-center justify-between bg-[#02060c26] rounded-full p-[10px] cursor-pointer duration-500 active:scale-105' onClick={() => decrSlide()}><FaArrowLeft /></div>
                    <div className='flex items-center justify-between bg-[#02060c26] rounded-full p-[10px] cursor-pointer duration-500  active:scale-105' onClick={() => incrSlide()}><FaArrowRight /></div>
                </div>
            </div>

            <div className='flex gap-6 overflow-hidden mt-5'>
                {
                    mindData.map((val, ind) => (
                        <div key={ind} className='h-[140px] shrink-0 duration-500 cursor-pointer ' style={{ transform: `translateX(${slide * -135}px)` }}
                        >
                            <img className='h-full w-full object-cover duration-500 hover:scale-105' src={val.img} alt={val.name} width={20} height={20} />
                        </div>
                    ))
                }
            </div>

            {/* <hr className='bg-gray-300 p-[.5px] my-10 mb-10' />  */}
        </div>
    );
};

export default Search;
