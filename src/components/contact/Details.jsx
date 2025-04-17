/** @format */

import Link from 'next/link';
// import { Music2 } from 'lucide-react';
// import { X } from 'lucide-react';
// import { Instagram } from 'lucide-react';
// import { Facebook } from 'lucide-react';
// import { Star } from 'lucide-react';
import { IoMdMusicalNote } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

export default function ContactBody() {
  return (
    <div className="flex justify-center m-12 max-lg:flex-col max-lg:m-10 max-md:m-8 max-sm:m-6 ">
      <div className="w-1/2 flex flex-col gap-2 ">
        <h2 className="font-medium text-xl">Get In Touch</h2>
        <Link href="/" className="hover:text-cyan-400 inline">
          Appu Ghar, Pragati Maidan, New Delhi, Delhi 110001
        </Link>
        <Link href="/" className="hover:text-cyan-400">
          (+91)9625626268
        </Link>
        <Link href="/" className="hover:text-cyan-400">
          bemins@gmail.com
        </Link>
        <div className="gap-2">
          <h2 className="font-semibold text-lg">Open hours</h2>
          <p>Contact our customer happiness team </p>
          <p>Monday-Friday 9am-5pm</p>
        </div>
        <div className="flex gap-4">
          <p className="mt-4">FOLLOW US:</p>
          <Link href="/">
            <div className="flex mt-4 gap-1">
              <IoMdMusicalNote className="w-8 h-8 p-2 rounded-full   hover:text-cyan-400" />
              <FaXTwitter className="w-8 h-8 p-2 rounded-full  hover:text-cyan-400 " />
              <FaInstagram className="w-8 h-8 p-2 rounded-full hover:text-cyan-400" />
              <FaFacebookF className="w-8 h-8 p-2 rounded-full hover:text-cyan-400" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full">
        <div className="flex justify-between gap-12 max-md:flex-col ">
          <div className="w-1/2 max-lg:w-full">
            <p className="text-lg font-semibold">Name</p>
            <div className="flex border h-10 w-full justify-between p-2  focus:border-blue-400 ">
              <input placeholder="Name" className="outline-none" />
              <FaStar size={12} className=" text-orange-700 mt-1" />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <p className="text-lg font-semibold">Email</p>
            <div className="flex border justify-between  h-10 p-2 w-full ">
              <input placeholder="Email" className="outline-none" />
              <FaStar size={12} className=" text-orange-700 mt-1" />
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <p className="text-lg font-semibold">Your Message</p>
          <textarea
            placeholder="Comment or Message * "
            rows={8}
            className="w-full border p-2 outline-none"
          ></textarea>
        </div>
        <button className="text-white mt-6 bg-cyan-400  w-40 h-12 text-lg rounded-lg hover:bg-black ">
          Submit
        </button>
      </div>
    </div>
  );
}
