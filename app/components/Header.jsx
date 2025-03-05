import React from 'react'
import Image from 'next/image'
import {assets} from '@/public/assets'
import { motion } from "motion/react"

const Header = () => {

    const pdfUrl = "/JuniorDeveloper.pdf";

    

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.section
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.6,  type: 'spring', stiffness: 100}}
        >
            <Image src={assets.flavi_graduation} alt="flavi profile image" className='rounded-full border-blue-700 w-32' />
        </motion.section>

        <motion.h3 
              initial={{y: -30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.5}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-geistMono'>Hi! I'm Flavi Bumba 
            <Image src={assets.hand_icon} alt="hand icon" className='w-6' /> welcome to my web development portfolio!</motion.h3>
      
    <motion.h1 
     initial={{y: -20, opacity: 0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{duration: 0.8, delay: 0.3}}
    
    className='text-3xl sm:text-6xl  lg:text-[66px] font-geistMono'>
    Junior web, wordpress & javascript developer based in Sussex, England.
    </motion.h1>

    <motion.p 
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{duration: 0.6, delay: 0.7}}
    className='max-w-2xl mx-auto font-geistSans'> 
    I am a junior full-stack web developer with a passion for creating engaging and user-friendly websites. 
    I loves to keep up with the ever-evolving tools and technologies within the Wordpress & JavaScript landscape.
    </motion.p>
    <section className="flex flext-col sm:flex-row items-center gap-4 mt-4">
        <motion.a 
                     initial={{y:30, opacity: 0}}
                     whileInView={{y: 0, opacity: 1}}
                     transition={{duration: 0.6, delay: 1}}
        href="#contact"
        className="px-10 py-3 border border-blue-700 round-full bg-black text-white flex items-center gap-2"> Contact me 
        <Image src={assets.right_arrow_white} alt="right arrow" className=' w-4' />
        </motion.a>

        <motion.a 
                     initial={{y:30, opacity: 0}}
                     whileInView={{y: 0, opacity: 1}}
                     transition={{duration: 0.6, delay: 1}}
        href={pdfUrl} download="JuniorDeveloper.pdf"  className='px-10 py-3 border  border-blue-700 round-full flex items-center gap-2'> my resume 
        <Image src={assets.download_icon} alt="download icon" className=' w-4' />
        </motion.a>
    </section>

    </div>
  )
}

export default Header