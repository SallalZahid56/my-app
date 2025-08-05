import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import signupImage from '../assets/login-signup.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Replace with your own Google client ID
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    useEffect(() => {
        /* global google */
        const handleGoogleResponse = (response) => {
            const userObject = jwtDecode(response.credential);
            console.log('Google user:', userObject);
            // TODO: Send this info to backend or set auth context
        };

        if (window.google && googleClientId) {
            google.accounts.id.initialize({
                client_id: googleClientId,
                callback: handleGoogleResponse,
            });
            google.accounts.id.renderButton(document.getElementById("googleSignUpBtn"), {
                theme: "outline",
                size: "large",
                width: "100%",
            });
        }
    }, [googleClientId]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex w-full max-w-5xl h-[85vh] shadow-lg rounded-lg overflow-hidden">
                {/* Left Image */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src={signupImage}
                        alt="Gift Card"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    {/* Logo & Header */}
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <span className="text-orange-500 text-3xl">g</span>
                            <span className="text-blue-500 text-3xl">i</span>
                            <span className="text-green-500 text-3xl">f</span>
                            <span className="text-pink-500 text-3xl">t</span>
                            <span className="text-gray-900 ml-2">GIFT <span className="font-bold">CARD</span></span>
                        </h1>
                        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-400 to-purple-700"></div>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">Create an Account</h2>
                    <p className="text-sm text-gray-500 mb-4">Please fill in the details to sign up</p>

                    <form className="space-y-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500 text-lg"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Signup
                        </button>

                        <div className="text-center text-sm text-gray-500">or</div>

                        {/* Google Sign Up Button */}
                        <div id="googleSignUpBtn" className="flex justify-center"></div>

                        <p className="text-center text-sm text-gray-500 mt-2">
                            Already have an account?{' '}
                            <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
