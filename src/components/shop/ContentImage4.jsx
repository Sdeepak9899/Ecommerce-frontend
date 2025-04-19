/** @format */
'use client';

import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { LuArrowRightLeft } from 'react-icons/lu';
import { useState } from 'react';

const ContentImage4 = () => {
  const Cartsdetails = [
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    {
      imag1: '/shop/image1.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image2.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image3.jpg',
      imag2: '/shop/image03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/shop/image4.jpg',
      imag2: '/shop/image04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/shop/image5.jpg',
      imag2: '/shop/image05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1: '/shop/image6.jpg',
      imag2: '/shop/image06.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1: '/shop/image7.jpg',
      imag2: '/shop/image07.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image08.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image09.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
  ];
  const colors = [
    { name: 'Beiger', number: '(6)', cname: '#e6d4b4' },
    { name: 'Black', number: '(9)', cname: '#000000' },
    { name: 'Blue', number: '(4)', cname: '#5173a6' },
    { name: 'Brick', number: '(2)', cname: '#6b302c' },
    { name: 'Gray', number: '(3)', cname: '#8d9098' },
    { name: 'Green', number: '(4)', cname: '#20b2aa' },
  ];

  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = Cartsdetails.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const visibleItems = Cartsdetails.slice(0, currentPage * ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="py-8">
      <ul className="grid grid-cols-1 gap-8 p-2 sm:p-4 ">
        {visibleItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row w-full gap-8 justify-between"
          >
            {/* Image Section */}
            <div className="relative group  max-w-4xl aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={item.imag1}
                alt={item.name}
                className="absolute top-0   right-0 w-full  object-cover transition-all duration-700 ease-in-out group-hover:-translate-x-full"
              />
              <img
                src={item.imag2}
                alt={item.name}
                className="absolute top-0 right-[-100%] w-full  object-cover transition-all duration-700 ease-in-out group-hover:right-0"
              />

              {/* Icons */}
              <div className="absolute w-full flex justify-center gap-4 px-4 transition-all duration-500 ease-in-out bottom-0 group-hover:bottom-4 bg-white/0 group-hover:bg-white delay-200">
                <ul className="flex gap-4 items-center">
                  {colors.map((ite1, i) => (
                    <li key={i}>
                      <div
                        className="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 duration-500 delay-200 ease-in-out hover:bg-cyan-400 hover:text-white"
                        title={ite1.name}
                      >
                        {ite1.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-4 mt-4 w-full px-2 sm:px-4">
              <div className="flex flex-col gap-4">
                <span className="text-3xl font-semibold">{item.name}</span>
                <span className="text-lg font-semibold">{item.price}</span>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="w-32 sm:w-44 bg-black sm:text-lg text-white p-2 rounded-lg  hover:bg-cyan-400 cursor-pointer shrink-0">
                    Select option
                  </button>
                  <FaRegHeart
                    size={40}
                    className="p-2 border border-gray-300 text-gray-600 hover:bg-cyan-400 hover:text-white cursor-pointer rounded-md"
                  />
                  <LuArrowRightLeft
                    size={40}
                    className="p-2 border border-gray-300 text-gray-600 hover:bg-cyan-400 hover:text-white cursor-pointer rounded-md"
                  />
                </div>
              </div>
              <div className=" w-full">
                <p className=" ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Section */}
      <div className="flex flex-col justify-center items-center text-center gap-4 mt-12">
        <div>
          Showing 1–{visibleItems.length} of {totalItems} item(s)
        </div>
        {/* Progress bar */}
        <div className="w-full sm:w-96 h-1.5 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{
              width: `${(visibleItems.length / totalItems) * 100}%`,
            }}
          ></div>
        </div>

        {currentPage < totalPages && (
          <button
            className="text-white bg-black px-12 py-4 text-lg rounded-xl hover:bg-cyan-400"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentImage4;
