import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCancelCircle } from "react-icons/im"


const Navbar = () => {

    const [isMobNav, setIsMobNav] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const showMenuOnToggle = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        const mobWidth = window.innerWidth;
        if (mobWidth < 750) {
            setIsMobNav(true)
        } else {
            setIsMobNav(false)
        }
        console.log(mobWidth)
    }, [])

    if (isToggle) {
        return (

            <div className='absolute top-0 left-0 h-full z-[1000] bg-black text-white flex flex-row w-[100%] justify-between '>
                <div className='flex flex-col gap-6 text-xl font-semibold p-8 w-[70%] '>
                    <div className='hover:text-green-500 cursor-pointer text-2xl font-bold'>Premium</div>
                    <div className='hover:text-green-500 cursor-pointer text-2xl font-bold'>Support</div>
                    <div className='hover:text-green-500 cursor-pointer text-2xl font-bold'>Download</div>
                    <div className='w-[30px] bg-white h-[2px]'></div>
                    <div className='hover:text-green-500 cursor-pointer text-gray-200'>Sign up</div>
                    <div className='hover:text-green-500 cursor-pointer text-gray-200'>Log in</div>
                </div>
                <div className='w-[30%] flex justify-end p-4 '><ImCancelCircle onClick={showMenuOnToggle} size={30} /></div>
            </div>

        )
    }


    return (
        <div className=' bg-black text-white p-4 font-poppins sticky '>
            <div className='flex flex-row justify-between items-center md:max-w-[80%] md:m-auto'>
                <div className='cursor-pointer'><Image src={logo} width={135} height={42} alt="logo" /></div>
                {isMobNav === true ? <div><GiHamburgerMenu size={30} onClick={showMenuOnToggle} /></div> :
                    <div className='flex flex-row gap-7 text-[15px] font-semibold '>
                        <div className='hover:text-green-500 cursor-pointer'>Premium</div>
                        <div className='hover:text-green-500 cursor-pointer'>Support</div>
                        <div className='hover:text-green-500 cursor-pointer'>Download</div>
                        <div className='w-[3px] bg-white'></div>
                        <div className='hover:text-green-500 cursor-pointer'>Sign up</div>
                        <div className='hover:text-green-500 cursor-pointer'>Log in</div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar