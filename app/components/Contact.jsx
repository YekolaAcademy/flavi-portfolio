import { assets } from '@/public/assets'
import Image from 'next/image'
import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState ("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "90f39549-0ae1-4ca6-95fd-7f53c4780c34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto]'>
         <header className="mb-10 mt-5">
            <h3 className="text-center mb-2 text-lg font-semibold font-geistSans" >Connect with me</h3>
            <h2 className="text-center text-5xl text-blue-700 font-geistSans" >Get in touch</h2>
        </header>
            <p className='max-w-2xl mx-auto font-geistSans mt-5 mb-12 text-center'>
            I look forward to the opportunity to discuss how my background, skills, and passion for web development can contribute to the success of your organisation. 
            Please feel free to contact me at your convenience to schedule an interview.
            </p>
           
         <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

         <div className='grid gap-6 mt-5 mb-4'>
         <label for="name">Name: </label>
         <input type="text" placeholder="Enter your name" name="name" required className='flex-1 p-2 outline-none border-[0.5px] border-blue-700 bg-white'/>
         <label for="email">Email: </label>
         <input type="email" placeholder="Enter your email" name="email" required className='flex-1 p-2 outline-none border-[0.5px] border-blue-700 bg-white'/>
         </div>

        <div className='grid gap-6 mt-5 mb-4'>
        <label for="email"> Message: </label>
        <textarea rows='6' placeholder='Enter your message' required className='flex-1 p-2 outline-none border-[0.5px] border-blue-700 bg-white'name='message'> </textarea>
        </div> 

        <button type="submit" className='py-3 px-4 w-max flex items-center  justify-between gap-2 bg-blue-950 text-white rounded-full mx-auto
         hover:bg-blue-700 duration-500 border-[0.5px] border-blue-600'> 
           Submit now  <Image src={assets.right_arrow_white} alt='right arrow' className='w-4' /></button>

           <p className='mt-4'>{result}</p>
       
        </form>


    </div>
  )
}

export default Contact