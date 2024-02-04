import React from 'react'
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[70px] bg-white shadow-lg px-[25px]'>
      <div className='flex items-center rounded-[5px]'>
        <input type='text' className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search...' />
        <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
      <FaSearch 
      color='black'
       />
       </div>
       </div>  
      </div>
    </div>
  )
}

export default Navbar