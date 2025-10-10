import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navber />
      </header>

      <Outlet /> {/* Renders Login or Register based on URL */}
    </div>
  );
};

export default AuthLayout;
