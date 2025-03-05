"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';


const Navbar = () => {

    
    const [isScroll, setIsScroll] = React.useState(false);
     // Function to open & close the side menu
    const sideMenuRef = useRef();

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 50) {
                setIsScroll(true)
        } else {
            setIsScroll(false)
        }
        })
    }, [])

  return (
    <>
    <div className='fixed -z-10 top-0 right-0 w-11/12 translate-y-[-80%]'>
        <Image src="/header-bg-color.png" alt="menu icon" width={3276} height={2496} className='w-full' />
    </div>
    <nav className={`w-full fixed lg:px-8 xl:px-[8%] z-50 flex items-center justify-between py-4 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
            <Image src="/logo.png" alt="logo" width={492} height={190} className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className= {`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        text-blue-500 font-semibold ${isScroll ? " " : "bg-gray-50 shadow-sm big-opacity-50"} `}>
            <li>
                <a className="font-geistMono" href="#top">Home</a>
            </li>
            <li>
                <a className="font-geistMono" href="#about">About me</a>
            </li>
            <li>
                <a className="font-geistMono" href="#services">Services</a>
            </li>
            <li>
                <a className="font-geistMono" href="#projects">My Projects</a>
            </li>
            <li>
                <a className="font-geistMono" href="#contact">Contact me</a>
            </li>
        </ul>   
        <div className='flex items-center gap-4'>

        <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-3 border border-blue-500 rounded-full ml-5 font-geistMono '>Contact <Image src="/arrow-icon.png" alt="arrow icon"  width={39} height={39} className='w-3 ' /> </a>

        <button className='block md:hidden ml-3 px-3' onClick={openMenu}>
                <Image src="/menu-black.png" alt="menu icon" width={72} height={59} className='w-6 cursor-pointer' /> 
            </button>
      </div>

      {/* mobile menu */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col items-center gap-4 top-0 bottom-0 w-64 z-50 px-10 fixed -right-64 h-screen bg-blue-600  py-10 text-white font-semibold transition duration-500 transition: transform 0.3s ease-in-out'>
      
       <div className='absolute top-6 right-6 cursor-pointer' onClick={closeMenu}>
        <Image src="/close-white.png" alt="menu icon" width={29} height={29} className='w-5' />
       </div>
       
        <li>
                <a className="font-geistMono" onClick={closeMenu} href="#top">Home</a>
            </li>
            <li>
                <a className="font-geistMono" onClick={closeMenu} href="#about">About me</a>
            </li>
            <li>
                <a className="font-geistMono" onClick={closeMenu} href="#services">Services</a>
            </li>
            <li>
                <a className="font-geistMono" onClick={closeMenu} href="#projects">My Projects</a>
            </li>
            <li>
                <a className="font-geistMono" onClick={closeMenu} href="#contact">Contact me</a>
            </li>
      </ul>
     </nav>
    </>
  )
}

export default Navbar