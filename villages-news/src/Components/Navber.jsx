import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userloginicon from "../assets/user.png";
import { AuthContext } from '../provider/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

  return (
    <div className='flex justify-between items-center mt-5 px-8 bg-gray-100 py-3 rounded-lg shadow'>
      {/* ✅ Left: Show user's name */}
      <div className='font-semibold text-lg'>
        {user ? `Welcome, ${user.displayName || user.email}` : "Welcome, Guest"}
      </div>

      {/* ✅ Middle: Navigation Links */}
      <div className='space-x-6 text-blue-600 font-medium'>
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      {/* ✅ Right: Icon + Buttons */}
      <div className='flex gap-3 items-center'>
        <img
          src={user?.photoURL || userloginicon}
          alt="user icon"
          className="w-9 h-9 rounded-full border border-gray-400"
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className='btn btn-neutral font-semibold px-4 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-600 transition'
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className='btn btn-neutral font-semibold px-4 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-600 transition'
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
