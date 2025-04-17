/** @format */

import Link from 'next/link';

/** @format */
export default function WishlistHero() {
  return (
    <div className="mt-8  max-lg:mt-24">
      <div className="relative">
        <img src="/shop/hero.jpg"></img>
        <div
          className="  items-center absolute translate(-50%, -50%)  left-[40%]
            top-[40%]  max-sm:top-[20%] max-sm:left-[20%]"
        >
          <h3 className="text-5xl  font-semibold text-black max-sm:text-xl">
            Wishlist 
          </h3>
          <span className="">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            / Wishlist
          </span>
        </div>
      </div>
    </div>
  );
}
