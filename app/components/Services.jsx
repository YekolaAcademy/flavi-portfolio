import { serviceData,assets } from '@/public/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
          <header className="mb-30 mt-5">
            <h3 className="text-center mb-2 text-lg font-semibold font-geistSans" >What I Offer</h3>
            <h2 className="text-center text-5xl text-blue-700 font-geistSans" >My Services</h2>
        </header>
        <article>
            <p className='max-w-2xl mx-auto font-geistSans mt-5 mb-12 text-center'>
            I am driven by a deep desire for web development, I worked on several front-end, back-end, 
            and WordPress Web Development, ReactJS projects as a freelancer after graduation. I am currently, eager to embark on a career as a full-time web developer.
            </p>
            <section className='grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => ( 
                    <div className="border-[0.5px] border-blue-700 rounded-lg p-8 cursor-pointer hover:bg-blue-100 hover: shadow-black hover:-translate-y-2 duration-500" key={index}>
                        <Image src={icon} alt="icon" className='w-10 mt-3' />
                        <h3 className='my-4 font-semibold text-blue-950 font-geistSans'>{title}</h3>                        
                        <p className='text-blue-950 text-sm font-geistSans leading-5'>{description}</p>
                        <a href={link} classsName='flex items-center gap-2 text-sm mt-4'>Read More <Image src={assets.right_arrow} alt="right arrow" className='w-4' /> </a>
                    </div>
                    
                ))}

            </section>
        </article>

    </div>
  )
}

export default Services