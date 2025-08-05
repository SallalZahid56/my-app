import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login-signup.jpg';
import { jwtDecode } from 'jwt-decode';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    const handleGoogleLogin = (response) => {
      const userObject = jwtDecode(response.credential);
      console.log('Google login user:', userObject);
      // TODO: Handle login with userObject
    };

    if (window.google && googleClientId) {
      google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleGoogleLogin,
      });
      google.accounts.id.renderButton(document.getElementById("googleLoginBtn"), {
        theme: "outline",
        size: "large",
        width: "100%",
      });
    }
  }, [googleClientId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[90vh] shadow-lg rounded-lg overflow-hidden">
        {/* Left Image (hidden on small screens) */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={loginImage}
            alt="Gift Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          {/* Logo & Header */}
          <div className="mb-4 text-center md:text-left">
            <h1 className="text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
              <span className="text-orange-500 text-3xl">g</span>
              <span className="text-blue-500 text-3xl">i</span>
              <span className="text-green-500 text-3xl">f</span>
              <span className="text-pink-500 text-3xl">t</span>
              <span className="text-gray-900 ml-2">
                GIFT <span className="font-bold">CARD</span>
              </span>
            </h1>
            <div className="mt-2 h-1 w-24 mx-auto md:mx-0 bg-gradient-to-r from-purple-400 to-purple-700"></div>
          </div>

          <h2 className="text-xl font-semibold mb-1 text-center md:text-left">Login to your Account</h2>
          <p className="text-sm text-gray-500 mb-4 text-center md:text-left">Welcome back! Please enter your details.</p>

          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 text-lg"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="/forgot-password" className="text-purple-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Login
            </button>

            <div className="text-center text-sm text-gray-500">or</div>

            {/* Google Login Button */}
            <div id="googleLoginBtn" className="flex justify-center mt-2"></div>

            <p className="text-center text-sm text-gray-500 mt-2">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
