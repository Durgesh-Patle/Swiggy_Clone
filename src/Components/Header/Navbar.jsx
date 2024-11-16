import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { TbShoppingBag } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='w-full shadow-lg fixed z-10 bg-white top-0'>
            <div className=' max-w-[1250px] mx-auto   flex items-center justify-between '>
                <div className='flex items-center'>
                    <Link to='/'>
                        {/* <img className='w-[80px] mr-11' src="logo.avif" width={10} alt="logo" /> */}
                        <img className='w-[80px]' src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png" alt="logo" />
                    </Link>
                    <div className='flex items-center gap-2 cursor-pointer duration-500 hover:text-[#ff5200]'>
                        <p className=' border-b-2 border-black  hover:border-[#ff5200] font-semibold'>Other</p>
                        <FaChevronDown className='text-[#ff5200] inline  '
                        />
                    </div>
                </div>
                <nav className='flex gap-8 items-center '>

                    <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                        <TbShoppingBag className='text-xl' />
                        <Link to='/corporate'>
                            <p>Swiggy Corporate</p>
                        </Link>
                    </div>

                    <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
                    
                    >
                        <CgSearch className='text-xl' />
                        <Link to='/search'> Search</Link>
                    </div>

                    <Link to='/offer' className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                        <BiSolidOffer className='text-xl' />
                        <p>Offers</p>
                        <sup className='text-[#ff5200]'>New</sup>
                    </Link>

                    <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                        <Link to='help'>
                            <p>Help</p>
                        </Link>
                    </div>

                    <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
                                    >
                        <CiUser className='text-xl' />
                        <p >Sign In</p>
                    </div>

                    <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
            

                    >
                        <BsCart2 className='text-xl' />
                        <p>Cart</p>
                        <sup className='text-[#ff5200]'>0</sup>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Navbar
