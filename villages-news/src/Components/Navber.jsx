import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userloginicon from "../assets/user.png";
import { AuthContext } from '../provider/AuthProvider';

const Navber = () => {
  const { user } = useContext(AuthContext); // ✅ correct hook

  return (
    <div className='flex justify-between mt-5'>
      <div>{user?.name}</div>

      <div className='nav space-x-5'>
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      <div className='flex gap-3 items-center'>
        <img src={userloginicon} alt="user icon" className="w-8 h-8 rounded-full" />
        <Link to="/auth/login" className='btn btn-neutral font-semibold'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navber;
