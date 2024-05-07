import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


function Header() {

  const [brandName,setBrandName] = useState("Mohit sharma Full Stack Developer")
  const [drop, setDrop] = useState("hidden");
 
  const [menuLinks,setMenuLinks] = useState([
    {
      title:"Home",
      link:"/",
      id:1
    },
    {
      title:"About",
      link:"/About",
      id:2
    },
    {
      title:"Contact",
      link:"/Contact",
      id:3
    },
    {
      title:"Portfolio",
      link:"/Portfolio",
      id:4
    },
    {
      title:"Skills",
      link:"/Skills",
      id:5
    }

  ])

  const [ActionButton,setActionButton] = useState({
    title :"Hire Me",
    link:"/hire_me"
  })

  return (
  <>
  <div className='w-full h-[60px] bg-[Silver]  flex items-center justify-between flex-row '>
   <p className='font-bold text-2xl '>Mohit Sharma</p>
   <ul className='flex space-x-12 lg:space-x-8 md:space-x-5 md:hidden'>
    {menuLinks.map((item)=>{
      const {title,link,id} = item
      return <NavLink key={id} to={link}>{title}</NavLink>
    })}
    
   </ul>
   <button className='border rounded-full bg-orange-500 p-[10px] font-700 text-md md:hidden'>Download Detail</button>
    <button className='border rounded-full hidden bg-orange-500 p-[10px] font-700 text-md md:block'
     onClick={()=>drop==="hidden"?setDrop("block"):setDrop("hidden")}>Dropdown</button>

   <div className={`w-[300px] hidden absolute bg-[#808080]  top-[60px] end-[0px] md:${drop}`} style={{height:"500px"}}>
   <ul className={`flex flex-column text-center   space-y-12 lg:space-x-8 md:space-x-5`}
      >
    {menuLinks.map((item)=>{
      const {title,link,id} = item
      return <NavLink key={id} to={link}>{title}</NavLink>
    })}
    
  <li> <button className={` rounded-full bg-orange-500 p-[10px] ms-[50px] font-700 text-md`}>Download Detail</button></li>
   </ul>
   </div>
  </div>
  </>
  );
}

export default Header;
