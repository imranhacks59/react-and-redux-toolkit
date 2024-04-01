import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            {/* page wraper start*/}
            <div className='flex h-screen overflow-hidden'>
                {/* Sidebar component start*/}
                <Sidebar />
                {/* sidebar cmpoennt end */}
                {/* content area start*/}
                <div className='relative flex flex-1 bg-slate-100 flex-col overflow-y-auto overflow-x-hidden'>
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

                    <main>
                        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                            <Outlet />
                        </div>
                    </main>
                </div>
                {/* content area end */}
            </div>

            {/* page wrapper end */}
        </div>
    )
}

export default Layout