import React from 'react'
import Logo from '../../../images/logo/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <aside
     className={`bg-slate-50 border-r absolute left-0 top-0 p-10 z-9999 flex h-screen w-72.5 flex-col overflow-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0
       ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
     `}
     
    // className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-slate-50 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
    //     sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    //   }`}
     >
        <div className=''>
        <NavLink to='/'>
         <img 
          src={Logo}
          alt=''
         />
        </NavLink>
        </div>
    </aside>
  )
}

export default Sidebar