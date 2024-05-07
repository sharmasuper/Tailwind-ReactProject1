import React from 'react';
import img1 from '../assets/WhatsApp Image 2024-05-03 at 6.28.33 PM.jpeg'
function AboutHt() {
  return (
      <>
      <div className='w-full container mx-auto text-center text-4xl underline font-bold '>
        <h1>About Me</h1>
      </div> 
      <div className='grid grid-cols-2 gap-5 mt-5 h-[500px] md:grid-cols-1 md:gap-3'>
        <div className='w-full flex justify-center items-center' > 
          {/* Image */}
          <img src={img1} className='rounded-full w-[400px]' alt='Mohit sharma' />
        </div >
        <div className='w-full md:text-center pb-3'>
         <h1 className='text-3xl lg:text-3xl font-bold pt-5'>MERN Stack Developer</h1>
         <h1 className='text-3xl lg:text-xl tracking-widest font-400 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quam! Consectetur, earum.</h1>
         <h1 className='text-xl lg:text-sm tracking-widest font-400 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, alias eius! Incidunt voluptatibus unde quibusdam minima voluptates fuga, praesentium quos!</h1>
        </div>
      </div>
      </>
  )
}

export default AboutHt; 
