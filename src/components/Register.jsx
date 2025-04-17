/** @format */

'use client';
import { useState } from 'react';
import SignIn from './SignIn';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function Register({ handleHide }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showhandleConfirm, setShowhandleConfirm] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleChange = () => {
    setShowSignIn(true);
  };

  return (
    <>
      {!showSignIn && (
        <div className="bg-black/30 h-screen w-full flex flex-col items-center justify-center fixed inset-0 z-50">
          <div className="max-w-sm  rounded-lg shadow-lg bg-white">
            {/* Image Section */}
            <div className="relative">
              <img
                src="/sing-in.jpg"
                alt="Register"
                className="w-full rounded-md"
              />
              <button
                onClick={handleHide}
                className="absolute top-2  right-2 bg-white rounded-full p-2 shadow-md"
              >
                <MdClose className="w-5 h-5" />
              </button>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Register
              </p>
            </div>

            {/* Input Fields */}
            <div className="mt-1 space-y-4 p-5">
              <input
                type="text"
                placeholder="Email*"
                className="w-full h-12 p-4 border rounded-md outline-none"
              />

              <div className="flex items-center border rounded-md ">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password*"
                  className="w-full h-12 px-4 outline-none"
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
              <div className="flex items-center border rounded-md ">
                <input
                  type={showhandleConfirm ? 'text' : 'password'}
                  placeholder="Confirm Password*"
                  className="w-full h-12 px-4 outline-none"
                />
                <button
                  onClick={() => setShowhandleConfirm(!showhandleConfirm)}
                  className="p-2"
                >
                  {showhandleConfirm ? (
                    <FaRegEyeSlash size={20} className=" text-gray-500" />
                  ) : (
                    <FaRegEye size={20} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-1 space-y-3 p-5">
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-cyan-400 transition">
                Register
              </button>
              <button
                onClick={handleChange}
                className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-cyan-400 transition"
              >
                Already Have An Account
              </button>
            </div>
          </div>
        </div>
      )}
      {showSignIn && <SignIn handleHide={handleHide} />}
    </>
  );
}
