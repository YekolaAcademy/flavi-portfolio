import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, infoList, toolsData } from '@/public/assets'
const About = () => {
  return (
     <div id="about" className="w-full px-[12%] py-10 scroll-mt-20" >

        <section className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
            <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
             initial={{scale: 0}}
             whileInView={{scale: 1}}
             transition={{duration: 0.9,  type: 'spring', stiffness: 100}}
             >
            <header className="mb-30 mt-5">
            <h3 className="text-center mb-2 text-lg font-semibold font-geistSans" >Introduction</h3>
            <h2 className="text-center text-5xl text-blue-700 font-geistSans" >About Me </h2>
            </header>
                <Image src={assets.flavi_diversity} alt="flavi profile image" className='rounded-3xl -mt-10 border-blue-700 w-900 sm:w-80' />
            </motion.div>

            <motion.div className="flex-1"
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.9, delay: 0.9}}
            >
             <motion.p className='max-w-2xl mx-auto font-geistSans -ml-2 mb-10'
               initial={{y: -20,opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 0.6, delay: 0.7}}
             > 
                  A Business Computer Systems graduate with a keen interest in web development and how to apply emerging technology in a business environment.Through academic studies, gained knowledge on how technology is leveraged to enhance the efficiency and effectiveness of business operations, as well as skills in programming, web development, database systems, project management, and User experience (UX) design. Driven by a deep desire for web development, worked on several front-end, back-end, and WordPress Web Development projects as a freelancer after graduation. Currently open for any IT full-time opportunities to work as a junior web or wordpress or javascript or full stack developer.
             </motion.p>

             <motion.ul
                  initial={{y: -20,opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 0.5, delay: 0.6}}
             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl" > {infoList.map(({icon, iconDark, title, description}, index) => (
           <li className="border-[0.5px] border-blue-700 rounded-xl p-6 cursor-pointer hover:bg-blue-100 hover:-translate-y-2 duration-500" key={index}>
                <Image src={icon} alt="icon" className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-blue-950 font-geistSans'>{title}</h3>
                <p className='text-blue-950 text-sm font-geistSans'>{description}</p>

            </li> 
             ))}
            </motion.ul>

            <motion.h4 
              initial={{y: -20,opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.7}}
            className ="my-6 text-blue-700 font-geistSans font-semibold"> Tools I use </motion.h4>
            <motion.ul className="flex items-center gap-3 sm:gap-5"
              initial={{y: 20,opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.8}}
            >
                {toolsData.map((tool, index) => (
                    <li className=' flex items-center justify-center w-12 sm:w-14 aspect-square border border-blue-700 rounded-lg cursor-pointer
                     hover:bg-blue-100 hover:-translate-y-2 duration-500'
                     key={index}>
                        <Image src={tool} alt="tool" className='w-5 sm:w-7' />

                    </li>
                    
                ))}

            </motion.ul>
            
            </motion.div>
        </section>
     </div>


  )
}

export default About