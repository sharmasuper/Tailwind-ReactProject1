import React from 'react';

function Services() {
  return (
    <>
      <div className='container mx-auto'>
      <h3 className='text-4xl text-center font-bold underline'>Services</h3>
      </div>
      <div className='grid grid-cols-2 gap-4 px-[40px] py-[40px] md:grid-cols-1 ms:px-[20px]'>
         <div  className='h-[200px] py-[20px] rounded-lg shadow-2xl border xl:h-auto md:py-[30px] '>
            <h1 className='text-2xl text-center py-[20px] font-bold sm:text-xl ms:text-lg'>Front-end Developer</h1>
            <p className='ps-[20px] decoration-wavy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis reprehenderit at officia, enim repudiandae cum fugiat et commodi quis quisquam architecto! Quibusdam expedita aliquam, ea obcaecati labore tempora fugit!</p>
         </div>
         <div  className='h-[200px] py-[20px] rounded-lg shadow-2xl border xl:h-auto md:py-[30px]'>
            <h1 className='text-2xl text-center py-[20px] font-bold sm:text-xl ms:text-lg'>Back-end Developer/MERN Stack Developer</h1>
         
            <p className='ps-[20px]  decoration-wavy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis reprehenderit at officia, enim repudiandae cum fugiat et commodi quis quisquam architecto! Quibusdam expedita aliquam, ea obcaecati labore tempora fugit!</p>
         </div>
      </div>
    </>
  );
}

export default Services;
