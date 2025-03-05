import React from 'react'
import Image from 'next/image'
import { workData, assets } from '@/public/assets'

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
         <header className="mb-10 mt-5">
            <h3 className="text-center mb-2 text-lg font-semibold font-geistSans" >My Portfolio</h3>
            <h2 className="text-center text-5xl text-blue-700 font-geistSans" >My Lastest Projects</h2>
        </header>
        <article>
            <p className='max-w-2xl mx-auto font-geistSans mt-5 mb-12 text-center'>
            Welcome to my web development portfolio! Explore a collection of projects showcasing my skills in web development. I worked on several front-end, back-end,
             and WordPress Web Development, ReactJS projects. I am currently, looking for opportunities to work as a full-time web developer to learn and grow.
            </p>
            <section className="grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5">
              {workData.map((project, index) => (
          <div
                key={index}
                 className="group aspect-square border-[0.5px] border-blue-700 bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer"
             style={{ backgroundImage: `url(${project.bgImage})` }}
             >
             <section className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
            <h2 className="font-semibold">{project.title}</h2>
             <p className="text-sm text-gray-700">{project.description}</p>
             </div>
            <div className='border border-blue-700 p-2 rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-blue-100 transition'>
              <Image src={assets.send_icon} alt="send arrow" className="w-5" />
              </div>
              </section>
              </div>
             ))}
            </section>
        </article>


    </div>
  )
}

export default Projects