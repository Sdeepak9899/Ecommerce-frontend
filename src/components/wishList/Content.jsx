/** @format */

import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ImShare2 } from 'react-icons/im';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function WishlistContent() {
  return (
    <div className="h-96 p-8  ">
      <p>There are no products on the Wishlist! </p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-3">
          <p>Share on : </p>
          <FaFacebookF
            size={30}
            className="bg-blue-700 rounded-full p-1 text-white"
          />
          <FaXTwitter
            size={30}
            className="bg-blue-400 rounded-full p-1 text-white"
          />
          <ImShare2
            size={30}
            className="bg-red-700 rounded-full p-1 text-white"
          />
          <MdOutlineMailOutline
            size={30}
            className="bg-red-300 rounded-full p-1 text-white"
          />
        </div>
        <div className="flex  m-4 items-center gap-2">
          <p className="">Wishlist link:</p>
          <div className="border-2 w-72 h-10  flex justify-between rounded-lg">
            <input
              type="text"
              value="https://bemins.wpbingosite.com/wishlist/LGMWKD"
              className="outline-none px-3 "
            />
            <button className="bg-black text-white px-4  rounded-md hover:bg-cyan-500">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
