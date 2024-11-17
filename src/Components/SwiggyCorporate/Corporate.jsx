import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Corporate = () => {
    const teamMembers = [
        {
            name: 'Sriharsha Majety',
            title: 'Managing Director and Group CEO',
            description: 'Sriharsha Majety is the Managing Director and Group Chief Executive Officer of our Company...',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-08.webp',
        },
        {
            name: 'Nandan Reddy',
            title: 'Whole-time Director and Head of Innovation',
            description: 'Lakshmi Nandan Reddy Obul is a Whole-time Director on our Board and Head of Innovation...',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-01.webp',
        },
        {
            name: 'Rohit Kapoor',
            title: 'CEO – Food Marketplace',
            description: 'Rohit Kapoor is the Chief Executive Officer – Food Marketplace of our Company...',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-02.webp',
        },
        {
            name: 'Phani Kishan',
            title: 'Chief Growth Officer',
            description: 'Focused on crafting brand stories that engage and inspire.',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-03.webp',
        },
        {
            name: 'Rahul Bothra',
            title: 'Chief Financial Officer',
            description: 'Rahul Bothra is the Chief Financial Officer of our Company...',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-04.webp',
        },
        {
            name: 'Girish Menon',
            title: 'Chief Human Resources Officer',
            description: 'Girish Menon is the Chief Human Resources Officer of our Company...',
            image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-06.webp',
        },
    ];

    const [slide, setSlide] = useState(0);
    const visibleCards = 3; // Number of visible team members on screen
    const totalSlides = teamMembers.length;

    function incrSlide() {
        if (slide < totalSlides - visibleCards) {
            setSlide(slide + 1);
        }
    }

    function decrSlide() {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    }

    return (
        <div className=' '>
            <div className='max-w-[1200px] mx-auto flex flex-col gap-5 items-center justify-center mt-20 pt-10'>

                <div className='flex items-center gap-5 '>
                    <p className='w-20 h-[2px] bg-[#ff5200] mt-3'></p>
                    <h1 className='text-[#444] text-5xl font-bold'>Get to know us</h1>
                    <p className='h-[2px] w-20 bg-[#ff5200] mt-3'></p>
                </div>


                <div className='flex items-center gap-16 mt-20 mb-20'>
                    <div className='w-[60%] text-xl text-gray-700'>
                        <p>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.</p>

                        <p className='mt-5'>Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture.</p>
                    </div>
                    <div className='w-[400px] h-[300px]'>
                        <img className='w-[400px] duration-500 hover:scale-105' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png" alt="" />
                    </div>
                </div>


                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base/7 text-gray-600">Transactions every 24 hours</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base/7 text-gray-600">Assets under holding</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base/7 text-gray-600">New users annually</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-16">
                <div className="max-w-[1200px] mx-auto">
                    <div className="container mx-auto text-center">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Our Team Members</h2>
                            <div className="flex items-center gap-2">
                                <button
                                    className={`flex items-center justify-center bg-[#02060c26] rounded-full p-2 ${slide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={decrSlide}
                                    disabled={slide === 0}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    className={`flex items-center justify-center bg-[#02060c26] rounded-full p-2 ${slide >= totalSlides - visibleCards ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={incrSlide}
                                    disabled={slide >= totalSlides - visibleCards}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-8 overflow-hidden py-5 mt-10">
                            <div
                                className="flex transition-transform duration-300 gap-8"
                                style={{ transform: `translateX(-${slide * 300}px)` }}
                            >
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="bg-white rounded-lg w-[300px] shadow-lg p-6 cursor-pointer shrink-0">
                                        <img
                                            className="w-32 h-32 rounded-full mx-auto mb-4"
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-gray-600">{member.title}</p>
                                        <button className='bg-[#ff5200] font-semibold text-[#fff] w-28 rounded mt-5 py-1 hover:bg-orange-500'>View</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Corporate
