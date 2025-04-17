/** @format */
'use client';
import { useState } from 'react';

const Information = [{}];
export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <>
      <div className="hidden lg:block py-16">
        <div className="flex flex-col px-8">
          <div className="lg:flex  lg:gap-4 items-center  justify-center space-y-4 lg:space-y-0">
            <p
              onClick={() => setActiveTab('Description')}
              className={`p-2 rounded-2xl cursor-pointer transition-colors duration-200 text-lg font-semibold
            ${
              activeTab === 'Description'
                ? 'bg-cyan-400 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            >
              Description
            </p>

            <p
              onClick={() => setActiveTab('Additional Information')}
              className={`p-2 rounded-2xl cursor-pointer transition-colors duration-200 text-lg font-semibold
            ${
              activeTab === 'Additional Information'
                ? 'bg-cyan-400 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            >
              Additional Information
            </p>

            <p
              onClick={() => setActiveTab('Review(0)')}
              className={`p-2 rounded-2xl cursor-pointer transition-colors duration-200 text-lg font-semibold
            ${
              activeTab === 'Review(0)'
                ? 'bg-cyan-400 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            >
              Review(0)
            </p>
          </div>

          {/* Tab Content */}
          <div className="mt-6 ">
            {activeTab === 'Description' && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            )}
            {activeTab === 'Additional Information' && (
              <div className="flex w-full">
                <div className="flex flex-col w-[35%] border border-gray-500">
                  <p className="p-2 border-b border-gray-500">Color</p>
                  <p className="p-2">Size</p>
                </div>
                <div className="flex flex-col  w-[60%] border border-gray-500 ">
                  <p className="p-2 border-b border-gray-500">
                    Beige, Gray, Green
                  </p>
                  <p className="p-2">L, M, S</p>
                </div>
              </div>
            )}
            {activeTab === 'Review(0)' && (
              <div className="flex flex-col items-start gap-4">
                <p className="text-3xl font-semibold">Reviews(0)</p>
                <p>No reviews yet.</p>
                <button className="px-5 py-3 cursor-pointer text-md bg-black hover:bg-cyan-400 text-white rounded-2xl">
                  Wite a Review
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="block lg:hidden py-8 px-8">
        <ul>
          <li className="mb-2">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <span>ldjfmclxvc</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
