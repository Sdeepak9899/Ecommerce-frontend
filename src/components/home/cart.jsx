/** @format */

import Link from 'next/link';

const Cart = () => {
  const photos = [
    {
      name: 'Spring Collection',
      photo: '/home/bannercart1.jpg',
    },
    {
      name: '30% off all order',
      photo: '/home/banner-1carts2.jpg',
    },
    {
      name: 'Must-Have Style',
      photo: '/home/banner-2cart3.jpg',
    },
  ];

  return (
    <div className="m-5 ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {photos.map((item, index) => (
          <li key={index} className="relative group">
            <div className="sm:m-4 w-full sm:max-w-[420px] sm:h-[500px] shadow-lg rounded-3xl overflow-hidden">
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-full rounded-3xl object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:translate(-50%, -50%)  sm:left[5%]
            sm:top-[45%] "
            >
              <p className="text-2xl text-white font-semibold">{item.name}</p>
              <Link href="/">
                <button className="mt-4 bg-white rounded-xl hover:bg-cyan-400 hover:text-white text-lg w-32 h-12 transition-all">
                  Shop Now
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
