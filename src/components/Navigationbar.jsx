/** @format */

'use client';
import Link from 'next/link';
import SignIn from './SignIn';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import ShoppingCarts from './cart';
import SearchButton from './Search';
import { LuUser } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import { AnimatePresence } from 'framer-motion'; // ✅ ADDED

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

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const handleshowsearch = () => setshowsearch(true);
  const handleHideSearch = () => setshowsearch(false);
  const handleshowMenu = () => setIsMenu(true);
  const handleHidemenu = () => setIsMenu(false);

  return (
    <>
      <div className="w-full flex ">
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

        {/* ✅ Search Button with Animation */}
        <AnimatePresence>
          {showsearch && <SearchButton handleHideSearch={handleHideSearch} />}
        </AnimatePresence>

        {/* Mobile Header */}
        <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-md h-24 px-4 lg:hidden">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
            <button onClick={handleshowMenu}>
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
      {isMenu && <NavbarMenu handleHidemenu={handleHidemenu} />}
    </>
  );
};

export default Navigation;
