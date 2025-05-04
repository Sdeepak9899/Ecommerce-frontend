/** @format */

// /** @format */
// 'use client';

// import Image from 'next/image';
// import React from 'react';
// import Slider from 'react-slick';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// const Testimonials = () => {
//   // Custom Prev Arrow
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="group  ">
//         <div
//           className="absolute left-[600px] top-96 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
//                         "
//           onClick={onClick}
//         >
//           <BsChevronLeft
//             size={24}
//             className="text-black group-hover:text-white"
//           />
//         </div>
//       </div>
//     );
//   };

//   // Custom Next Arrow
//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="group">
//         <div
//           className="absolute right-[650px] top-96 -translate-y-1/2 z-10 cursor-pointer bg-white/80 group-hover:bg-cyan-400 p-2 rounded-full
//                         "
//           onClick={onClick}
//         >
//           <BsChevronRight
//             size={24}
//             className="text-black group-hover:text-white"
//           />
//         </div>
//       </div>
//     );
//   };

//   const arr = [
//     {
//       name: 'Linda Maria',
//       img: '/home/Testimonials1.jpg',
//       text: 'Your commitment to quality and customer satisfaction has been evident in every interaction. I value our partnership and look forward to continuing our successful...',
//       profession: 'Designer',
//     },
//     {
//       name: 'Ann Smith',
//       img: '/home/Testimonials2.jpg',
//       text: 'A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.',
//       profession: 'CEO & Founder',
//     },
//     {
//       name: 'Anana',
//       img: '/home/Testimonials3.jpg',
//       text: '5-star rating 100%. So amazing and helpful. Stress-free and fun. Eileen was amazing. So wonderful.',
//       profession: 'Photographer',
//     },
//     {
//       name: 'Linda',
//       img: '/home/Testimonials4.jpg',
//       text: 'I look forward to future transactions with your company and will gladly recommend your services to others.',
//       profession: 'Designer',
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     dots: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   return (
//     <div className="px-20 py-20">
//       <Slider {...settings} className="">
//         {arr.map((item, index) => (
//           <div key={index} className="p-4 flex">
//             {/* Image */}
//             <div className="flex gap-20 ">
//               <div className=" m-4 rounded-4xl overflow-hidden bg-red-600 w-[50%] h-[50%]">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className=" object-cover w-full h-full "
//                 />
//               </div>
//               {/* Text */}
//               <div className="flex flex-col">
//                 <p className="text-gray-700 italic mb-2">{item.text}</p>
//                 <h3 className="font-bold text-lg">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.profession}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;
