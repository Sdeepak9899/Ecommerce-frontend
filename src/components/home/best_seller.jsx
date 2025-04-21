/** @format */
'use client';

import React from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { LuArrowRightLeft } from 'react-icons/lu';

function SimpleSlider() {
  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="group  ">
        <div
          className="absolute left-0 top-60 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
                      "
          onClick={onClick}
        >
          <BsChevronLeft
            size={24}
            className="text-black group-hover:text-white"
          />
        </div>
      </div>
    );
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="group">
        <div
          className="absolute right-0 top-60 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
                      "
          onClick={onClick}
        >
          <BsChevronRight
            size={24}
            className="text-black group-hover:text-white"
          />
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arr = [
    {
      imag1: '/home/Bestseller1.jpg',
      imag2: '/home/Bestseller01.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1: '/home/Bestseller2.jpg',
      imag2: '/home/Bestseller02.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1: '/home/Bestseller3.jpg',
      imag2: '/home/Bestseller03.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1: '/home/Bestseller4.jpg',
      imag2: '/home/Bestseller04.jpg',
      name: 'Band Straw Hat',
      price: '$15.99-$20.00',
    },
    {
      imag1: '/home/Bestseller5.jpg',
      imag2: '/home/Bestseller05.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
  ];

  const icons = [
    { name: <FaArrowRightLong size={20} /> },
    { name: <IoSearch size={20} /> },
    { name: <FaRegHeart size={20} /> },
    { name: <LuArrowRightLeft size={20} /> },
  ];
  return (
    <div className="w-full px-8 flex flex-col gap-12">
      <h1 className="text-center text-4xl font-semibold">Best seller</h1>
      <Slider {...settings}>
        {arr.map((item, index) => (
          <div key={index} className="group px-2">
            <div className="rounded-3xl relative overflow-hidden aspect-[3/4]">
              {/* Image 1 */}
              <img
                src={item.imag1}
                alt={item.name}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-2xl"
              />
              {/* Image 2 */}
              <img
                src={item.imag2}
                alt={item.name}
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-100"
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

            {/* Product Info */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="font-semibold">{item.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
