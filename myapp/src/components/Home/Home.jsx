import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducer/AuthSlice';
import Dashboard from '../Layout/Layout';

const Home = () => {

  const dispatch = useDispatch();
  const logoutHandler = () =>{
    dispatch(logout());
  }

  return (
    <div>
      <div>
        <Dashboard />
      </div>


      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>

  )
}

export default Home