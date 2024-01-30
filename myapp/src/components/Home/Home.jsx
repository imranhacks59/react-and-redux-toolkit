import React from 'react'
import { useDispatch } from 'react-redux'
// import { logout } from '../../redux/reducer/AuthSlice';

const Home = () => {

  const dispatch = useDispatch();
  // const logoutHandler = () =>{
  //   dispatch(logout());
  // }

  return (
    <div>Home

      <button 
      // onClick={logoutHandler}
      >Logout</button>
    </div>

  )
}

export default Home