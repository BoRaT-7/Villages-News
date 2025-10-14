import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";
import { AuthContext } from "../provider/AuthProvider";

const auth = getAuth(app); 
const LogIn = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("✅ Login successful:", result.user);
        setSuccess("Login successful!");
        setIsLoading(false);
        navigate("/"); // ✅ redirect to home page
      })
      .catch((error) => {
        console.error("❌ Login error:", error.message);
        setError("Invalid email or password.");
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 lg:-mt-40 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login your account</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center text-sm font-medium">
              {success}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
