/** @format */
'use client';
import React, { useEffect, useState } from 'react';
import { FaMinus } from 'react-icons/fa6';

const ModernPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 md:mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="hidden md:block relative">
              <img
                src="https://bemins.wpbingosite.com/wp-content/uploads/2024/02/newsletter-image.jpg"
                alt="abc"
                className="absolute inset-0 w-full h-full object-cover "
              />
            </div>

            <div className="bg-white p-8 md:p-12 flex flex-col justify-center relative">
              <button
                className="relative text-center  w-8 h-8 group cursor-pointer shadow rounded-full shadow-gray-400"
                onClick={handleClose}
                style={{ position: 'absolute', top: 8, right: 16 }}
              >
                <FaMinus
                  size={30}
                  className="rotate-45 absolute top-0 right- group-hover:rotate-0 duration-500"
                />
                <FaMinus
                  size={30}
                  className="-rotate-45 absolute top-0 right- group-hover:rotate-0 duration-500"
                />
              </button>

              <div className="text- mb-8">
                {/* <div className="flex justify-center mb-4">
                  <FaLock
                    className="text-red-500"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div> */}
                <h1 className="text-5xl font-bold text-gray-900 mb-2">
                  Get Fit with
                  <span className="text-red-500"> 50% </span> off
                </h1>
                <p className="text-sm text-gray-600">
                  Subscribe to our website’s mailing list and get a special
                  gift, just for you!{' '}
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email ID"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 transition duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone No"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 transition duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-40 bg-black text-white py-4 rounded-lg hover:bg-cyan-500 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Get Course Access
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernPopup;
