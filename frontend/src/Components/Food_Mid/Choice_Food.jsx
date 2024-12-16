import React, { useContext, useState } from 'react';
import Context from '../../Context';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Choice_Food = () => {
    let [slide, setSlide] = useState(0);
    const { mindData } = useContext(Context);

    function incrSlide() {
        if (mindData.length - 5 == slide) return false;
        setSlide(slide + 5);
    }
    function decrSlide() {
        if (slide == 0) return false;
        setSlide(slide - 5)
    }

    return (
        <div className='max-w-[1160px] mx-auto mt-28 px-2'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>What's on your mind?</h2>
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
                            <img className='h-full w-full object-cover duration-500 hover:scale-105' src={val.img} alt={val.name} />
                        </div>
                    ))
                }
            </div>

            <hr className='bg-gray-300 p-[.5px] my-10 mb-10' />
        </div>
    );
};

export default Choice_Food;