import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets'
import { Fragment, useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    // Function to update the year 
    useEffect(() => {
      // Update the year when the component mounts
      setYear(new Date().getFullYear());
    }, []);
  
  return (
    <div className='mt-20'>
        <section className='text-center'>
             <Image src={assets.logo} alt="logo" className='w-28 mx-auto mb-2' />

             <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt ='email icon' className='w-6'/>
                flavibumba06@gmail.com
             </div>

        </section>
            <Fragment>
            <section className='text-center sm:flex items-center justify-between border-t border-blue-700 mx-[10%] mt-12 py-6'>
            <p>{`© ${year}. All Rights Reserved.`}</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href= "https://github.com/YekolaAcademy" >GitHub</a></li>
                <li><a target='_blank'href="https://www.linkedin.com/in/flavi-bumba-web-developer" >LinkedIn</a></li>
                <li><a target='_blank'href="https://app.netlify.com/teams/yekolaacademy/sites" >Netlify</a></li>
            </ul>
            </section>
            </Fragment>
    </div>
  )
}

export default Footer