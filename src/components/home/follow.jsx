/** @format */
'use client';

import React from 'react';
import Slider from 'react-slick';
import { BsInstagram, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="group  ">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
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

function Follow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const image = [
    { photos: '/home/Follow.jpg' },
    { photos: '/home/Follow1.jpg' },
    { photos: '/home/Follow2.jpg' },
    { photos: '/home/Follow3.jpg' },
    { photos: '/home/Follow4.jpg' },
    { photos: '/home/Follow5.jpg' },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-4xl font-semibold">Follow us on instagram</p>
        <p className="mt-2">@beminds</p>
      </div>

      {/* group for showing arrows on slider hover */}
      <div className="relative  slider-container w-full mb-9 px-4">
        <Slider {...settings}>
          {image.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              {/* inner group for each image hover effect */}
              <div className="relative sm:w-72 sm:h-72 overflow-hidden rounded-lg group">
                <img
                  src={item.photos}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <BsInstagram size={40} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Follow;
