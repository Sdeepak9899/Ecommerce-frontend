/** @format */

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="mt-8  max-lg:mt-24">
      <div className="relative">
        <img src="/shop/hero.jpg"></img>
        <div
          className="  items-center absolute translate(-50%, -50%)  left-[40%]
            top-[40%]  max-md:top-[20%] max-md:left-[20%] "
        >
          <h3 className="sm:text-8xl  font-semibold text-black text-xl cursor-pointer">
            Contact
          </h3>
          <span className="cursor-pointer sm:text-2xl">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            /Contact
          </span>
        </div>
      </div>
    </div>
  );
}
