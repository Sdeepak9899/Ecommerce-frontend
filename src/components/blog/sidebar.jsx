/** @format */

import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram, IoMdMusicalNote } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';

const Blog_sidebar = () => {
  const Categories = [
    { name: 'Accessories' },
    { name: 'Beauty' },
    { name: 'Collection' },
    { name: 'Fashion Tips' },
    { name: 'Life Style' },
    { name: 'Uncategorized' },
  ];

  const Latest = [
    {
      imag: '/blog/blog-1.jpg',
      name: 'The Latest Trends in Fashion',
      date: 'January 12, 2024',
      path: '/',
    },
    {
      imag: '/blog/blog-2.jpg',
      name: 'Unleash Your Inner Style Icon',
      date: 'January 11, 2024',
      path: '/',
    },
    {
      imag: '/blog/blog-3-sidebar.jpg',
      name: 'Her Style Choice',
      date: 'January 10, 2024',
      path: '/',
    },
  ];

  const socialmedia = [
    { icon: <IoMdMusicalNote size={25} /> },
    { icon: <FaXTwitter size={25} /> },
    { icon: <IoLogoInstagram size={25} /> },
    { icon: <FaFacebookF size={25} /> },
  ];

  const Tag = [
    { name: 'Baber' },
    { name: 'Baby Needs' },
    { name: 'Beauty' },
    { name: 'Cosmetic' },
    { name: 'Ear Care' },
    { name: 'Electric' },
    { name: 'Fashion' },
    { name: 'Jwerly' },
    { name: 'Medical' },
    { name: 'Mimimal' },
    { name: 'Organic' },
    { name: 'Simple' },
    { name: 'Sport' },
  ];

  return (
    <div className="m-8 w-[450px] max-lg:m-2 max-lg:w-full">
      {/* Search Bar */}
      <div className="p-4 h-20 max-lg:p-2 flex">
        <input
          placeholder="search.... "
          className="outline-none h-full border-b-2 border-black w-full px-4"
        />
        <button className="hover:bg-cyan-400 rounded-md text-lg bg-black text-white py-1 px-6">
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-gray-200">
          <h2 className="text-xl font-semibold pb-8">Categories</h2>
        </div>
        <ul>
          {Categories.map((item, index) => (
            <li key={index}>
              <div className="hover:text-cyan-400 inline cursor-pointer">
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Posts */}
      <div className="mt-4">
        <div className="border-b-2 border-gray-200">
          <h2 className="text-xl font-semibold pb-8">Latest Post</h2>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:w-[450px]">
          {Latest.map((item, index) => (
            <div key={index} className="mt-2 flex gap-4 cursor-pointer">
              <div className="h-full">
                <img
                  src={item.imag}
                  alt={item.name}
                  className="max-w-24 object-cover rounded-lg"
                  width={400}
                  height={500}
                />
              </div>
              <Link href={item.path} className="mt-4">
                <p>{item.date}</p>
                <p className="mt-2 hover:text-cyan-400">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div>
        <div className="border-b-2 border-gray-200 mt-4">
          <h2 className="text-xl font-semibold pb-8">Social</h2>
        </div>
        <ul className="flex gap-6 mt-4 flex-wrap">
          {socialmedia.map((item, index) => (
            <li
              key={index}
              className="relative group w-14 h-10 flex items-center justify-center rounded-lg shadow-lg overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute bottom-0 left-0 h-0 w-full bg-cyan-500 z-0 group-hover:h-full transition-all duration-500"></div>
              {/* Icon on top */}
              <div className="relative z-10 p-2 group-hover:text-white">
                {item.icon}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tag Section */}
      <div className="mt-4 flex flex-wrap flex-col">
        <div className="border-b-2 border-gray-200 mb-6 pt-4">
          <h2 className="text-xl font-semibold pb-8">Tag</h2>
        </div>
        <ul className="w-full flex items-center flex-wrap">
          {Tag.map((item, index) => (
            <li
              key={index}
              className="relative group overflow-hidden  m-1 rounded-lg max-sm:w-28"
            >
              {/* Expanding background */}
              <div className="absolute top-0 left-0 h-full w-0 bg-cyan-500 z-0 group-hover:w-full transition-all duration-500" />
              {/* Text content */}
              <Link
                href="/"
                className="relative z-10 px-5 py-2 block text-sm group-hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog_sidebar;
