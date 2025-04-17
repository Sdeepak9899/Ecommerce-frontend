/** @format */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa';
const Blogbody_img = () => {
  const bodyimg = [
    {
      imgs: '/blog/blog-1.jpg',
      name: 'Unleash Your Inner Style Icon',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Beauty',
      style: 'Collection',
    },
    {
      imgs: '/blog/blog-2.jpg',
      name: 'Her Style Choice',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a....',
      collec: 'Accessories',
      style: 'Collection',
    },
    {
      imgs: '/blog/blog-3.jpg',
      name: 'Luxury Made Affordable',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Fashion Tips',
      style: '',
    },
    {
      imgs: '/blog/blog-4.jpg',
      name: 'Post format video blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Beauty',
      style: '',
    },
    {
      imgs: '/blog/blog-5.jpg',
      name: 'Post format audio blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Life Style',
      style: 'Uncategorized',
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bodyimg.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedImages = bodyimg.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul className="flex flex-wrap justify-center flex-col">
        {selectedImages.map((item, index) => (
          <li key={index} className="w-full pt-8 sm:p-2 ">
            <div className="relative">
              <img
                src={item.imgs}
                alt={item.name}
                className="w-full h-auto object-cover lg:h-[600px] max-h-[600px] rounded-md"
              />
              <div className="flex gap-4 items-center absolute left-3 sm:left-5 bottom-5 lg:left-4 lg:bottom-4">
                <button className="bg-white text-black sm:w-28 p-2 rounded-lg hover:bg-cyan-400 hover:text-white transition">
                  {item.collec}
                </button>
                {item.style && (
                  <button className="bg-white text-black sm:w-28 p-2 rounded-lg hover:bg-cyan-400 hover:text-white transition">
                    {item.style}
                  </button>
                )}
              </div>
            </div>
            <div className="m-4 flex flex-col gap-2">
              <Link
                href="/"
                className="text-cyan-500 hover:text-cyan-400 text-sm"
              >
                {item.date}
              </Link>
              <Link
                href="/"
                className="text-2xl font-semibold hover:text-cyan-400"
              >
                {item.name}
              </Link>
              <p className="text-gray-600">{item.about}</p>
            </div>
            <div>
              <button className="text-white bg-cyan-400 w-40 h-12 text-lg rounded-lg hover:bg-black transition cursor-pointer">
                Read More
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex  items-center  gap-2 mt-4">
        {currentPage > 1 && (
          <button
            className="p-2 rounded-full transition bg-gray-200 text-black cursor-pointer"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${
              currentPage === i + 1
                ? 'bg-cyan-400 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="p-2 rounded-full transition bg-gray-200 text-black cursor-pointer"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogbody_img;
