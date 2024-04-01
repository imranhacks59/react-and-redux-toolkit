import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import {Outlet} from 'react-router-dom';
import Sidebars from '../Sidebar/Sidebars';
import Header from '../Header/Header';

const Layout = () => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
 
    <div 
    // className="dark:bg-boxdark-2 dark:text-bodydark"
    >
    {/* <!-- ===== Page Wrapper Start ===== --> */}
    <div className="flex h-screen overflow-hidden">
      {/* <!-- ===== Sidebar Start ===== --> */}
      <Sidebars sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Sidebar End ===== --> */}

      {/* <!-- ===== Content Area Start ===== --> */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* <!-- ===== Header Start ===== --> */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* header */}
        {/* <!-- ===== Header End ===== --> */}

        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {/* {children} */}
            <Outlet />
          </div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </div>
    {/* <!-- ===== Page Wrapper End ===== --> */}
  </div>

  )
}

export default Layout


{/* <div className='flex'>
      <div className='relative min-h-screen md:flex'>
      <Sidebar />
      </div>
      <div className={`flex-1 
      min-h-screen 
      mx-o bg-slate-100 transition-all duration-300 ease-in-out
      ${sideMenuIsExpand ? 'md:ml-72' : 'md:ml-20'}
      `}>
        <Navbar />
      </div>
      </div>
      <div 
      // className={`flex-1 
      // min-h-screen 
      // mx-o bg-slate-100 transition-all duration-300 ease-in-out
      // ${sideMenuIsExpand ? 'md:ml-72' : 'md:ml-20'}
      // `}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, ducimus incidunt quos consequuntur voluptatum distinctio est harum fuga voluptas nemo et in, quia odio non veritatis quas provident? Error, tenetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis ipsam ratione illum qui rerum voluptatem minus eos vel, voluptatum, quisquam ab atque sit est possimus sint quas similique quidem?</p>
      </div> */}

  //     <div className='bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row'>
  //   <Sidebar />
  //   {/* sidebar */}
  //   <div className='flex flex-col flex-1'>
  //     {/* <Navbar /> */}
  //     Navbar
  //     <div flex-1 p-4 min-h-0 overflow-auto>
  //       <Outlet />
  //     </div>
  //   </div>
  //  </div>

  // 3rd--\\
  // <div className='flex'>
  //   <div className='relative min-h-screen md:flex'>
  //   <Sidebar />
  //   </div>
  //   <div className={`flex-1 
  //   min-h-screen 
  //   mx-o bg-slate-100 transition-all duration-300 ease-in-out
  //   ${sideMenuIsExpand ? 'md:ml-72' : 'md:ml-20'}
  //   `}>
  //     <Navbar />
  //     <div>
  //       <Outlet />
  //     </div>
  //   </div>
  //   </div>