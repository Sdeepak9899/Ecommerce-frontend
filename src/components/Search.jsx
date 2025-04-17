/** @format */

import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchButton({ handleHideSearch }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Trigger exit animation
  };

  return (
    <AnimatePresence onExitComplete={handleHideSearch}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex justify-center z-50"
        >
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white w-full h-80 shadow-lg flex flex-col justify-center items-center relative"
          >
            <div className="flex flex-col w-3/4 gap-8 text-left px-6">
              <p className="text-3xl font-semibold">
                What are you looking for?
              </p>
              <div className="flex border-b-2 justify-between items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="outline-none w-full text-lg"
                />
                <IoSearchSharp
                  size={30}
                  className="cursor-pointer text-gray-700"
                />
              </div>
            </div>

            <button
              className="absolute top-4 right-4 w-8 h-8 group cursor-pointer"
              onClick={handleClose}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// import { useState } from 'react';
// import { FaMinus } from 'react-icons/fa';
// import { IoSearchSharp } from 'react-icons/io5';
// import { motion } from 'framer-motion';

// export default function SearchButton({ handleHideSearch }) {
//   const [visible, setvisible] = useState(false);
//   const handleclose = () => {
//     setvisible(false);
//     setTimeout(handleHideSearch, 300);
//   };
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify- z-50 duration-300 ">
//       <motion.div
//         initial={{ y: '-100%', opacity: 0 }}
//         animate={{ y: '0%', opacity: 1 }}
//         exit={{ y: '-100%', opacity: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className="bg-white w-full h-80  shadow-lg flex  flex-col justify-center items-center relative"
//       >
//         <div className=" flex flex-col w-1/2 gap-12 justify-center  text-left px-10 ">
//           <p className="text-3xl font-semibold">What are you looking for?</p>
//           <div className="flex    border-b-2 justify-between">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="outline-none w-full"
//             />
//             <IoSearchSharp size={35} className="cursor-pointer" />
//           </div>
//         </div>
//         <button
//           className="absolute text-center top-4 right-4  w-8 h-8 group cursor-pointer"
//           onClick={handleclose}
//         >
//           <FaMinus
//             size={30}
//             className="rotate-45 absolute top-0 group-hover:rotate-0 duration-500"
//           />
//           <FaMinus
//             size={30}
//             className="-rotate-45 absolute top-0 group-hover:rotate-0 duration-500"
//           />
//         </button>
//       </motion.div>
//     </div>
//   );
// }
