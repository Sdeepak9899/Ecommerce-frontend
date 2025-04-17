/** @format */

import Link from 'next/link';

export default function AboutUsHero() {
  return (
    <div className="mt-8  max-lg:mt-24 w-full">
      <div className="relative  w-full">
        <img src="/shop/hero.jpg" className="w-full"></img>
        <div
          className="  items-center absolute translate(-50%, -50%)  left-[40%]
            top-[40%]  max-sm:top-[20%] max-sm:left-[20%]"
        >
          <h3 className="text-5xl  font-semibold text-black max-sm:text-xl">
            About Us
          </h3>
          <span className="">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            / About Us
          </span>
        </div>
      </div>
    </div>
  );
}
