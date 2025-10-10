import React, { useState } from "react";

const Register = () => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    // handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold text-center mb-4 border-b pb-2">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="checkbox mr-2"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms & Conditions
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
