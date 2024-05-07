import React from 'react';
import ImgW from '../assets/banner_wallpaper.svg'

function MyExpertise() {
  return (
    <>
      <div className='container mx-auto'>
      <h3 className='text-4xl text-center font-bold underline'>My Expertise</h3> 
      </div> 
      <div className='grid grid-cols-2 md:grid-cols-1 my-[20px] '>
      <div style={{backgroundImage:`url(${ImgW})`}} className='bg-center bg-cover w-full'  >
        {/* <img src={ImgW} alt='wallper'  /> */}
      <span className='py-[100px] text-center inline-block'>
      <h1 className='py-[20px] text-3xl font-600 ms:text-2xl'>I Love these technology</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos minima facilis quia corporis provident quas voluptates, optio nesciunt magni?</p>
      </span>
      </div>
      <div  className='py-[100px] lg:py-[50px]'>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full
         font-400 text-xl hover:bg-orange-300'>Javascript</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px]  rounded-full font-400 text-xl hover:bg-orange-300'>Bootstrap-5</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>Tailwind</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>Metrial-Ui</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>Node Js</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>MonogoDB</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>Html</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>Css</button>
        <button className='border bg-slate-300 px-[10px] py-[10px] my-[10px] mx-[10px] rounded-full font-400 text-xl hover:bg-orange-300'>React js</button>
      </div>
      </div>
    </>
  );
}

export default MyExpertise;
