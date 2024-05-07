import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../assets/WhatsApp Image 2024-05-03 at 6.28.33 PM.jpeg'
import BannerWalPaper from '../assets/banner_wallpaper.svg'
function Banner() {
     const [value,setvalue] = useState(0)
     const [text,setText] = useState("Full stack Developer")
     useEffect(()=>{
      const interval = setInterval(() => {
        
        setvalue(prevCount =>{
          if(prevCount ===0){
            setText("Front-End Developer")
            return prevCount+1
          }
          else if(prevCount ===1){
            setText("Back-end Developer")
            return prevCount+1
          }
          else if(prevCount === 2){
                setText("MERN stack Developer")
                return  0
          }
          else{
            prevCount
          }
          
        });
        return () => clearInterval(interval)
       
      }, 2000);
     },[])  
     
  return (
    <>
    <div className='w-full flex justify-evenly pt-[30px] md:flex-col-reverse' style={{height:"100%",overflow:"hidden",backgroundImage:`url(${BannerWalPaper})`,backgroundSize:"cover",backgroundPosition:"center"}} >
        <div   className='pe-10 lg:pb-5 w-full'>
          <h1 className='font-bold text-4xl ps-3 pt-2 lg:text-3xl lg:m-[0px] lg:pt-[0px] ms:p-none'> Hi, I am</h1>
          <h1 className='font-bold text-4xl ps-3 pt-5 lg:text-3xl lg:m-[0px] lg:pt-[0px] ms:p-none '>Mohit sharma</h1>
          <h1 className='font-bold text-4xl ps-3 pt-5 lg:text-3xl lg:m-[0px] lg:pt-[0px] ms:ps-none'>I am a {text}</h1>

         <p className='text-bold text-2xl text-wrap ps-3  pt-5 lg:text-xl lg:pt-2 ms:p-none'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum, nisi esse alias possimus delectus saepe facilis voluptas eos vero! adipisicing elit. Totam minima recusandae quo cupiditate eius iure quia assumenda labore nesciunt iste!</p>
        </div>
        <div
 className='w-[800px] rounded-full  h-[500px] lg:h-[500px] lg:w-[700px] md:w-full md:rounded-none md:flex md:items-center md:justify-center ms:w-[100%]'
         >
            <img className='rounded-full w-[500px] lg:w-[400px] lg:h-[400px]  ms:w-[300px] h-[500px] ms:h-[300px]' src={Img} alt="Mohit sharma"/>
        </div>
    </div>
    </>
  );
}

export default Banner;
