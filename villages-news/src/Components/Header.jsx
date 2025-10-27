import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  // 🔄 Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col items-center justify-center text-center py-6 bg-white shadow-md">
      {/* Logo */}
      <div className="w-36 sm:w-48 md:w-56 lg:w-64 mb-2">
        <img src={logo} alt="Logo" className="w-full object-contain" />
      </div>

      {/* Tagline */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium mb-1">
        Journalism Without Fear or Favour
      </p>

      {/* Current Date & Time */}
      <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold">
        <span className="text-emerald-600">{currentTime.format("dddd")}</span>
        {currentTime.format(", MMMM Do YYYY, h:mm:ss a")}
      </p>
    </header>
  );
};

export default Header;
