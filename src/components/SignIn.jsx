/** @format */

'use client';

import { useState } from 'react';
import Register from './Register';
import { IoMdClose } from 'react-icons/io';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';

export default function SignIn({ handleHide }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const router = useRouter();

  // const handleClick = () => {
  //     router.push("/Register");
  // };

  const handleRegister = () => {
    setShowRegister(true);
  };

  return (
    <>
      {!showRegister && (
        <div className="bg-black/30 h-screen w-full flex flex-col items-center justify-center fixed inset-0 z-50">
          <div className="max-w-sm rounded-lg shadow-lg bg-white">
            {/* Image Section */}
            <div className="relative">
              <img
                src="/sing-in.jpg"
                alt="Sign In"
                className="w-full rounded-md"
              />
              <button
                onClick={handleHide}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              >
                <IoMdClose className="w-5 h-5" />
              </button>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Sign In
              </p>
            </div>

            {/* Input Fields */}
            <div className="mt-8 px-5 space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full h-12 p-4 border rounded-md outline-none"
              />

              <div className="flex items-center border rounded-md p-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password*"
                  className="w-full h-9 px-4 outline-none"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2"
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} className=" text-gray-500" />
                  ) : (
                    <FaRegEye size={20} className=" text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-1 px-8 ">
              <p className="text-sm text-gray-500 hover:text-cyan-400 cursor-pointer">
                Lost your password?
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-2 space-y-3 p-5">
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-cyan-400 transition">
                Sign In
              </button>
              <button
                onClick={handleRegister}
                className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-cyan-400 transition"
              >
                Create An Account
              </button>
            </div>
          </div>
        </div>
      )}
      {showRegister && <Register handleHide={handleHide} />}
    </>
  );
}
