import React from 'react';
import { Link } from 'react-router-dom';
import userloginicon from "../assets/user.png"

const Navber = () => {
  return (
    <div className='flex justify-between mt-5 '>
      <div></div>
      <div className='nav space-x-5'>
      <Link to="/">Home</Link>
      <Link to="/career">Career</Link>
      <Link to="/about">About</Link>
      </div>
      <div className='flex gap-3'>
      
          <img src={userloginicon} alt="" />
          <Link to="/auth/login" className='btn btn-neutral font-semibold ' >Login</Link>
       
      </div>
    </div>
  );
};

export default Navber;