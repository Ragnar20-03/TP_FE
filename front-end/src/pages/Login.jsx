import React from 'react'
import { Outlet } from 'react-router-dom';

function Login() {
  console.log("Hii");
  return (
    <div className='text-black'>Login
    
    <Outlet />
    </div>

  )
}

export default Login