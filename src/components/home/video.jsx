/** @format */

'use client';

import { useState } from 'react';
import Link from 'next/link';

import { IoMdPlay } from 'react-icons/io';

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-center items-center sm:h-screen">
        <div
          className="w-11/12 h-96 sm:h-5/6 flex justify-center items-center bg-cover bg-center  rounded-xl"
          style={{
            backgroundImage: "url('/home/video.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 text-center">
            <div
              className="bg-white text-black hover:text-white hover:bg-cyan-400 p-4 sm:p-8 rounded-full flex justify-center items-center cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <IoMdPlay
                size={40}
                className="text-black group-hover:text-white"
              />
            </div>

            <h1 className="sm:text-5xl font-semibold">
              Step into Fashion Excellence
            </h1>
            <p className="sm:text-xl">
              Unveiling the Latest Trends and Must-Have Looks
            </p>
            <Link href="/home">
              <button className="border rounded-lg bg-gray-100 sm:text-lg px-2 py-1 sm:px-8 sm:py-2 text-center hover:bg-cyan-400 hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showVideo && (
        <div
          className="flex justify-center items-center w-full h-screen fixed top-0 left-0 bg-black/40 z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="w-11/12 h-3/4 flex justify-center items-center relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl  px-3 py-1 rounded-full cursor-pointer"
              onClick={() => setShowVideo(false)}
            ></button>
            <iframe
              width="90%"
              height="500"
              src="https://www.youtube.com/embed/I10XB1-IIbA?si=LI8UeV6a1paavPOZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
