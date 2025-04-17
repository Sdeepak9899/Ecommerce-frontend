/** @format */
'use client';
import React from 'react';
import Slider from 'react-slick';

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arr = [
    {
      photos: '/home/category_circle.jpg',
      name: 'Tops',
      to: '#',
    },
    {
      photos: '/home/category-1_circle6.jpg',
      name: 'Shoes',
      to: '#',
    },
    {
      photos: '/home/category-2_circle3.jpg',
      name: 'Glasses',
      to: '#',
    },
    {
      photos: '/home/category-3_circle5.jpg',
      name: 'Bags',
      to: '#',
    },
    {
      photos: '/home/category-4_circle2.jpg',
      name: 'Shirts',
      to: '#',
    },
    {
      photos: '/home/category-5_circle4.jpg',
      name: 'Sandals',
      to: '#',
    },
  ];
  return (
    <div className="slider-container w-full">
      <h1 className="text-center text-3xl font-semibold">Shop by categories</h1>
      <Slider {...settings}>
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center p-10 items-center justify-centerx "
          >
            <div className=" rounded-full overflow-hidden shadow-lg hover:scale-90 duration-200 flex items-center justify-center ">
              <img
                src={item.photos}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold ">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
