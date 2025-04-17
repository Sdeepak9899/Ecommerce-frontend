/** @format */

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { RiShoppingCart2Fill } from 'react-icons/ri';

export default function ShoppingCarts({ handleHideCart }) {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    setvisible(true);
  }, []);
  const handleclose = () => {
    setvisible(false);
    setTimeout(handleHideCart, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50  transition-opacity duration-300 ">
      <div
        className={`bg-white w-96 h-full shadow-lg flex flex-col transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="bg-gray-100  w-full h-20 flex items-center justify-between px-4">
          <p className="text-xl font-semibold">Shopping Cart (0)</p>

          <button
            className="relative text-center  w-8 h-8 group cursor-pointer"
            onClick={handleclose}
          >
            <FaMinus
              size={30}
              className="rotate-45 absolute top-0 group-hover:rotate-0 duration-500"
            />
            <FaMinus
              size={30}
              className="-rotate-45 absolute top-0 group-hover:rotate-0 duration-500"
            />
          </button>
        </div>

        <div className="mt-4 text-gray-800 flex flex-col justify-center items-center h-full gap-4">
          <RiShoppingCart2Fill size={100} />
          <p className="text-xl">Your cart is currently empty.</p>
          <Link
            href="/home"
            className="px-2 py-2 bg-black text-white rounded-lg hover:bg-cyan-400 duration-1000"
            onClick={handleclose}
          >
            Shop all Product
          </Link>
        </div>
      </div>
    </div>
  );
}
