import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photourl.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!accepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    setLoading(true);

    try {
      const result = await createNewUser(email, password);
      const user = result.user;
      console.log("✅ User created:", user);

      await updateUserProfile(name, photoURL);
      console.log("✅ Profile updated");

      toast.success("Registration successful!");
      form.reset();
      setAccepted(false);
      navigate("/");
    } catch (err) {
      console.error("❌ Error:", err.message);
      setError(err.message);
      toast.error("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <Toaster position="top-center" />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold text-center mb-4 border-b pb-2">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
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
              name="photourl"
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
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              required
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Terms */}
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

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading || !accepted}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
