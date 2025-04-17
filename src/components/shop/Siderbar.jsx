/** @format */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Categories = [
  {
    name: 'Bag',
    number: '(3)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Furniture',
    number: '(9)',
    path: '/',
    Childrens: [
      { titl: 'Chair', no: '(3)', to: '/' },
      { titl: 'Decor', no: '(6)', to: '/' },
    ],
  },
  {
    name: 'Glasses',
    number: '(3)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Jewelry',
    number: '(8)',
    path: '/',
    Childrens: [
      { titl: 'Earrings', no: '(3)', to: '/' },
      { titl: 'Rings', no: '(2)', to: '/' },
    ],
  },
  {
    name: 'Sandals',
    number: '(3)',
    path: '/',
    Childrens: [
      { titl: 'Gladiator Sandals', no: '(0)', to: '/' },
      { titl: 'Slide Sandals', no: '(0)', to: '/' },
    ],
  },
  {
    name: 'Shirts',
    number: '(15)',
    path: '/',
    Childrens: [
      { titl: 'Dress Shirt', no: '(2)', to: '/' },
      { titl: 'Polo Shirt', no: '(0)', to: '/' },
    ],
  },
  {
    name: 'Shoes',
    number: '(5)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Top',
    number: '(4)',
    path: '/',
    Childrens: [],
  },
];

const colors = [
  { name: 'Beiger', number: '(6)', cname: '#e6d4b4' },
  { name: 'Black', number: '(9)', cname: '#000000' },
  { name: 'Blue', number: '(4)', cname: '#5173a6' },
  { name: 'Brick', number: '(2)', cname: '#6b302c' },
  { name: 'Gray', number: '(3)', cname: '#8d9098' },
  { name: 'Green', number: '(4)', cname: '#20b2aa' },
  { name: 'Lilac', number: '(1)', cname: '#a5afc5' },
  { name: 'Pink', number: '(3)', cname: '#ffc0cb' },
  { name: 'Red', number: '(1)', cname: '#ef5050' },
  { name: 'White', number: '(12)', cname: '#ffffff' },
  { name: 'Yellow', number: '(4)', cname: '#c69a02' },
];

const sizes = [
  { name: 'L', no: 11, path: '/' },
  { name: 'M', no: 11, path: '/' },
  { name: 'S', no: 11, path: '/' },
  { name: 'XL', no: 7, path: '/' },
  { name: '34', no: 1, path: '/' },
  { name: '35', no: 1, path: '/' },
  { name: '36', no: 1, path: '/' },
  { name: '37', no: 1, path: '/' },
  { name: '38', no: 1, path: '/' },
  { name: '39', no: 1, path: '/' },
];

const featureProducts = [
  {
    Photos: '/shop/sideFeature.jpg',
    name: 'Diamonds And Gold Letter A Necklace',
    price: '$50.00',
    path: '/',
  },
  {
    Photos: '/shop/sideFeature2.jpg',
    name: 'Green Aventurine Moon Ring',
    price: '$105.00',
    path: '/',
  },
  {
    Photos: '/shop/sideFeature3.jpg',
    name: 'Coral Hoops',
    price: '$120.00',
    path: '/',
  },
];

const SidebarNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-[350px] p-6 hidden lg:block">
      <div>
        <h1 className="text-xl font-bold">Categories</h1>
        <ul className="mt-4 text-black">
          {Categories.map((category, index) => (
            <li key={index} className="mb-2">
              <div
                onClick={() => toggleDropdown(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Link href={category.path}>
                    <span className="text-base">{category.name}</span>
                  </Link>
                  <span>{category.number}</span>
                </div>
                {category.Childrens.length > 0 && (
                  <FaChevronUp
                    className={`transform duration-300 ${
                      openDropdown === index ? '-rotate-180' : ''
                    }`}
                  />
                )}
              </div>

              <AnimatePresence initial={false}>
                {openDropdown === index && category.Childrens.length > 0 && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {category.Childrens.map((child, i) => (
                      <li key={i} className="text-sm ml-4 mt-1">
                        <Link href={child.to}>
                          <div className="flex gap-2">
                            <span>{child.titl}</span>
                            <span>{child.no}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Price</h2>
        <div className="mt-2">
          <input type="range" name="range" className="w-full my-2" />
          <p>
            Range: <span className="text-cyan-500">$15.00 - $229.00</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Colors</h2>
        <div className="flex flex-wrap gap-4">
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
                {color.name} {color.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex flex-wrap mt-2 gap-2">
          {sizes.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="border border-gray-300 px-3 py-1 hover:bg-cyan-300 hover:text-white duration-700"
            >
              {item.name} ({item.no})
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Brands</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {['Dior', 'Frade', 'Gucci', 'Mango', 'Vogue'].map((brand, index) => (
            <Link
              key={index}
              href="/"
              className="text-sm hover:text-cyan-500 border border-gray-400 duration-700 px-3 py-1"
            >
              {brand} ({index + 3})
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Featured Products</h2>
        {featureProducts.map((item, index) => (
          <div key={index} className="mt-4 flex gap-4  rounded">
            <Image
              src={item.Photos}
              alt={item.name}
              width={80}
              height={100}
              className="object-cover"
            />
            <div className="flex flex-col justify-center">
              <Link href={item.path} className="text-sm hover:text-cyan-500">
                {item.name}
              </Link>
              <p className="text-gray-700 text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
