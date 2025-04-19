/** @format */

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { FaRegHeart, FaMinus } from 'react-icons/fa6';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import { AnimatePresence } from 'framer-motion';

import SignIn from './SignIn';
import ShoppingCarts from './cart';
import SearchButton from './Search';

const homeline = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/Shop' },
  { name: 'Products', path: '/Product' },
  { name: 'Blog', path: '/Blog' },
  { name: 'About Us', path: '/About' },
  { name: 'Contact', path: '/Contact' },
];

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const handleshowsearch = () => setshowsearch(true);
  const handleHideSearch = () => setshowsearch(false);
  const handleshowMenu = () => setIsMenu(true);
  const handleHidemenu = () => setIsMenu(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(handleHidemenu, 10);
  };

  return (
    <>
      <div className="w-full flex">
        {/* Desktop Header */}
        <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-md h-24 px-4">
          <div className="px-4 sm:px-6 md:px-12 mx-auto flex justify-between items-center h-full max-lg:hidden">
            {/* Logo */}
            <Link href="/" className="w-36">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>

            {/* Navigation */}
            <nav>
              <ul className="flex gap-6 text-lg">
                {homeline.map((item) => (
                  <li key={item.name} className="hover:underline duration-300">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex gap-4 text-gray-600">
              <button onClick={handleshowsearch}>
                <IoSearch
                  size={25}
                  className="hover:text-cyan-400 cursor-pointer"
                />
              </button>
              <button onClick={handleShow}>
                <LuUser
                  size={25}
                  className="hover:text-cyan-400 cursor-pointer"
                />
              </button>
              <Link href="/Wishlist">
                <FaRegHeart
                  size={25}
                  className="hover:text-cyan-400 cursor-pointer"
                />
              </Link>
              <button onClick={handleShowCart}>
                <MdOutlineShoppingBag
                  size={25}
                  className="hover:text-cyan-400 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Components */}
        {showCart && <ShoppingCarts handleHideCart={handleHideCart} />}
        {show && <SignIn handleHide={handleHide} />}
        <AnimatePresence>
          {showsearch && <SearchButton handleHideSearch={handleHideSearch} />}
        </AnimatePresence>

        {/* Mobile Header */}
        <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-md h-24 px-4 lg:hidden">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
            <button onClick={handleshowMenu} className="cursor-pointer">
              <IoMdMenu size={25} />
            </button>
            <div className="w-36">
              <img src="/logo.png" alt="logo" className="w-full" />
            </div>
            <button onClick={handleShowCart}>
              <MdOutlineShoppingBag
                size={25}
                className="hover:text-cyan-400 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenu && (
        <div
          className={`fixed inset-0 bg-black/50 flex z-50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`bg-white w-96 shadow-lg flex flex-col transform transition-transform duration-300 ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-end px-4">
              <button
                className="relative w-8 h-8 group cursor-pointer"
                onClick={handleClose}
              >
                <FaMinus
                  size={30}
                  className="rotate-45 absolute top-0 group-hover:rotate-0 transition-transform duration-500"
                />
                <FaMinus
                  size={30}
                  className="-rotate-45 absolute top-0 group-hover:rotate-0 transition-transform duration-500"
                />
              </button>
            </div>

            <div className="mt-4 flex flex-col px-4 h-full gap-4">
              {homeline.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={handleClose}
                  className="text-lg font-medium hover:text-cyan-500 duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
