import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getClientConfigurations, getUserDetails, getUserPermissions, logout } from '../../redux/reducer/AuthSlice';
import { useAppDispatch } from '../../utils/hooks';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Filters from '../../components/filters/Filters';
import Login from '../login/Login';
// import Sidebar from '../../components/route/Sidebar';

const Dashboard = () => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(getUserPermissions());
    dispatch(getClientConfigurations());
  }, [dispatch])
  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <div>
    <div className="relative min-h-screen md:flex">
    {/* <div className='flex overflow-scroll'> */}
    {/* sidemenu */}
    <Sidebar setExpand={setSideMenuIsExpand} />

    {/* content */}
    {/* <div className="basis-[88%] border overflow-scroll h-[100vh]">
    <Navbar />
      </div> */}

    <div
      className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
        sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
      }`}
    >
      <div className='sticky top-0'>
      <Navbar />
      </div>
      <div>
     
      </div>
    
 
    </div>
    <div>
     
    </div>
  </div>
  </div>

  )
}

export default Dashboard