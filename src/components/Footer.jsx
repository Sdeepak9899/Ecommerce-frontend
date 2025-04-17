/** @format */
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { IoMdMusicalNote } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 flex justify-center items-center ">
      <div className="px-4 sm:px-6 md:px-12 py-10   flex-wrap   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* Logo & Contact Info */}
          <div className="flex-wrap">
            <div className="w-28">
              <img src="/logo.png" alt="logo" className="w-full mb-4" />
            </div>
            <Link href="/" className="hover:text-cyan-400 text-sm">
              Contact our customer happiness team
            </Link>
            <p className="text-sm">Monday-Friday 9am-5pm</p>
            <p className="text-sm">9625626268</p>

            {/* Social Media Icons */}
            <div className="mt-6">
              <p className="font-semibold">Our Social</p>
              <div className="flex space-x-3 mt-4 flex-wrap">
                <IoMdMusicalNote className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition" />
                <BsTwitterX className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition" />
                <GrInstagram className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition" />
                <FaFacebookF className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition" />
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="flex-wrap">
            <p className="mb-2 font-semibold text-lg">Shop</p>
            {[
              'Shop dog',
              'Shop cat',
              'Shop brands',
              'On sale',
              'Auto-Delivery',
              'Aussiel Hazard Cover',
            ].map((item, index) => (
              <Link
                key={index}
                href="/"
                className="block hover:text-cyan-400 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Customer Services */}
          <div className="flex-wrap">
            <p className="mb-2 font-semibold text-lg">Customer Services</p>
            {[
              'Track Order',
              'Returns',
              'Shipping Info',
              'Recalls & Advisories',
              'Pet Store Locator',
              'Help',
            ].map((item, index) => (
              <Link
                key={index}
                href="/"
                className="block hover:text-cyan-400 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="flex-wrap">
            <p className="mb-2 font-semibold text-lg">Stay in touch...</p>
            <p className="text-sm mb-4">
              Subscribe and be the first to know about exclusive offers,
              products, promotions & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                placeholder="Enter your email..."
                className="h-10 px-3 outline-none border border-gray-300 rounded-md w-full"
              />
              <button className="w-full sm:w-28 h-10 bg-cyan-400 text-white rounded-md hover:bg-black transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm mt-12 flex-wrap">
          © 2024 – bemins. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
