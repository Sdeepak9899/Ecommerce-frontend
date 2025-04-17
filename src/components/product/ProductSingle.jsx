/** @format */

'use client';

import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import Link from 'next/link';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';
import { LuArrowRightLeft } from 'react-icons/lu';
import { CiClock2 } from 'react-icons/ci';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

// Main component
const ProductSingle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(0);

  const arr = [
    { image: '/product/products-singlepage.jpg' },
    { image: '/product/products-singlepage2.jpg' },
    { image: '/product/products-singlepage3.jpg' },
    { image: '/product/products-singlepage4.jpg' },
  ];

  const colors = [
    { name: 'Beiger', cname: '#e6d4b4' },
    { name: 'gray', cname: '#8d9098' },
    { name: 'Green', cname: '#20b2aa' },
  ];

  const sizes = ['S', 'M', 'L'];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex max-lg:flex-wrap gap-8 lg:gap-10 xl:gap-16 w-full justify-between mt-36 px-4 sm:px-8">
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="flex max-lg:flex-col-reverse  max-sm:flex-wrap gap-4 max-md:gap-8 justify-between relative">
          <div className="block lg:w-1/2">
            <div className="flex flex-col  max-lg:flex-row gap-2 lg:w-28">
              {arr.map((item, index) => (
                <div key={index} className="">
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-md overflow-hidden "
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={item.image}
                      alt={`Image ${index}`}
                      className={`w-16 sm:w-36 h-16 sm:h-36 rounded-md object-contain ${
                        activeIndex === index
                          ? ' border-2 border-black  scale-95'
                          : 'border border-transparent'
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            {activeIndex !== null && (
              <div className="transform bg-slate-100 rounded-md shadow-lg">
                <img
                  src={arr[activeIndex].image}
                  alt="Selected Image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-3">
        <p className="text-2xl sm:text-4xl font-semibold">
          Terry Fleece Perfect Hoodie
        </p>
        <p className="text-xl">$62.00 – $78.00</p>
        <div className=" flex gap-4 sm:gap-3 items-center">
          <IoEyeOutline size={18} className="animate-pulse " />
          <p className="text-sm">33 people are viewing this right now</p>
        </div>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        {/* color */}
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Color:</h1>
          <div className="flex flex-wrap gap-5 sm:gap-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                <div
                  className="w-8 h-8 rounded-full  hover:scale-90 duration-200 shadow-md"
                  style={{ backgroundColor: color.cname }}
                />
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 text-white px-2 py-1 rounded shadow-lg">
                  {color.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Size Selection */}
        <div className="flex flex-col  gap-3">
          <p className="font-semibold text-lg">Select Size</p>
          <div className="flex  gap-5 sm:gap-4 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className="px-4 py-2 border border-gray-400 rounded-md transition-all hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className=" flex flex-col  sm:flex-row   items-start justify-between gap-4">
          <div className="flex items-center gap-6  p-2 rounded-xl ">
            <button
              onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
              className="text-3xl  focus:text-cyan-400"
            >
              −
            </button>
            <span className="text-2xl font-semibold w-6 text-center">
              {count}
            </span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="text-3xl  focus:text-cyan-400"
            >
              +
            </button>
          </div>
          <div className="border w-full text-center rounded-3xl py-2 cursor-pointer hover:text-white hover:bg-black duration-500">
            Add TO Cart
          </div>
          <div className="flex gap-4">
            <FaRegHeart
              size={40}
              className="border border-gray-300 p-2 hover:bg-cyan-400 hover:text-white hover:border-cyan-400"
            />
            <LuArrowRightLeft
              size={40}
              className="border border-gray-300 p-2 hover:bg-cyan-400 hover:text-white hover:border-cyan-400"
            />
          </div>
        </div>

        <div className="flex items-center justify-center border py-3 px-2 rounded-xl  cursor-not-allowed">
          <button>Buy Now</button>
        </div>
        <div className="border py-4 flex flex-col gap-4 rounded-xl text-center">
          <div className="flex justify-center ">
            <img src="/product/payment-product.png" alt="" />
          </div>
          <div>
            <p>Guaranteed Checkout</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <LiaShippingFastSolid size={25} />
            <p className="text-md">
              Free worldwide shipping on all orders over $100
            </p>
          </div>

          <div className="flex items-center gap-4">
            <CiClock2 size={25} />
            <p className="text-md">
              Delivers in: 3-7 Working Days
              <Link
                href="/"
                className="border-b focus:text-cyan-400 cursor-pointer"
              >
                {' '}
                Shipping & Return
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>SKU: D2407</p>
          <p>
            Category:{'  '}
            <span className="hover:text-cyan-300 cursor-pointer">Shirts</span>
          </p>
          <div className="flex items-center gap-4">
            Share:
            <div className="flex gap-2">
              <FaFacebookF className=" hover:text-cyan-400" />
              <FaXTwitter className=" hover:text-cyan-400" />
              <FaLinkedinIn className=" hover:text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
