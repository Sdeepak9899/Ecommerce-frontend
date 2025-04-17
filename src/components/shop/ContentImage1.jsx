/** @format */

'use client';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { LuArrowRightLeft } from 'react-icons/lu';

const COntentImage1 = () => {
  const Cartsdetails = [
    {
      imag1: '/shop/image9.jpg',
      imag2: '/shop/image01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/shop/image8.jpg',
      imag2: '/shop/image02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/shop/image6.jpg',
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

  const icons = [
    { name: <FaArrowRightLong size={20} /> },
    { name: <IoSearch size={20} /> },
    { name: <FaRegHeart size={20} /> },
    { name: <LuArrowRightLeft size={20} /> },
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
    <div className="py-6">
      <div className="py-6 w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visibleItems.map((item, index) => (
            <li key={index} className="group ">
              <div className="rounded-3xl relative overflow-hidden ">
                <img
                  src={item.imag1}
                  alt={item.name}
                  className="w-full object-cover h-full absolute top-0 group-hover:opacity-0 rounded-2xl"
                />
                <img
                  src={item.imag2}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:opacity-100"
                />
                <div className="absolute bottom-4 w-full justify-center gap-8 px-4">
                  <ul className="w-full flex gap-4 items-center justify-center">
                    {icons.map((ite1, i) => (
                      <li key={i} className="flex">
                        <div className="p-2 bg-white rounded-full flex items-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 duration-500 delay-200 ease-in-out hover:bg-cyan-400 hover:text-white">
                          {ite1.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mt-4">
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-4 mt-12">
        <div>
          Showing 1–{visibleItems.length} of {totalItems} item(s)
        </div>
        {/* progress bar */}
        <div className="w-full sm:w-96  h-1.5 bg-gray-200 rounded overflow-hidden">
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

export default COntentImage1;
