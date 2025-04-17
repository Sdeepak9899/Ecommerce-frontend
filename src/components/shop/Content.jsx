/** @format */
'use client';
import { useEffect, useRef, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import { LuTally2, LuTally3, LuTally4, LuTally5 } from 'react-icons/lu';
import { LuAlignJustify } from 'react-icons/lu';
// import { RxTextAlignJustify } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
// import SiderbarMenu from '../sidebar/siderbarMenu';

const Top = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showImage, setShowImage] = useState(1);
  const [arr, setArr] = useState([
    { name: 'Default Sorting' },
    { name: 'Sort By Popularity' },
    { name: 'Sort By Average Rating' },
    { name: 'Sort By Latest' },
    { name: 'Sort By Price:Low To High' },
    { name: 'Sort By Price:High To Low' },
  ]);

  const [selected, setSelected] = useState(arr[0]);
  const dropdownRef = useRef(null);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleShowSideMenu = () => setIsShowMenu(true);
  const handleHideSideMenu = () => setIsShowMenu(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    const newArr = [item, ...arr.filter((i) => i.name !== item.name)];
    setArr(newArr);
    setSelected(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(1);

  const icons = [
    {
      name: <LuTally2 size={30} />,
    },
    {
      name: <LuTally3 size={30} />,
    },
    {
      name: <LuTally4 size={30} />,
    },
    {
      name: <LuAlignJustify size={30} />,
    },
  ];

  return (
    <div className="flex justify-between mt-2 sm:mt-0 w-full py-8 px-4">
      <div className=" sm:h-14 outline-none w-64 text-sm">
        <div className="flex items-center justify-center m-1 sm:m-2 gap-1 sm:gap-5">
          <div
            className="border border-gray-400 p-1 rounded-md block lg:hidden hover:bg-cyan-400 hover:text-white cursor-pointer hover:border-white"
            onClick={handleShowSideMenu}
          >
            <LuTally5 size={30} />
          </div>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative  w-72">
            <div
              className={`flex justify-between items-center border p-2 cursor-pointer rounded 
              duration-700 shadow
              ${
                isOpen
                  ? 'bg-cyan-400 text-white'
                  : 'hover:bg-cyan-400 hover:text-white'
              }`}
              onClick={toggleDropdown}
            >
              <span>{selected.name}</span>
              <FaChevronUp
                className={`transform transition-transform duration-300 ${
                  isOpen ? '-rotate-180' : ''
                }`}
              />
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-white rounded shadow "
                >
                  {arr.slice(1).map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(item)}
                    >
                      {item.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Icons - only visible on large screens */}
      <div className="hidden lg:block">
        <div className="flex gap-3">
          {icons.map((icon, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)(handleShowImage)}
              className={`border border-gray-200 text-gray-600 cursor-pointer p-2 rounded transition duration-700 hover:bg-cyan-400 hover:text-white
              ${activeIndex === index ? 'bg-cyan-400 text-white' : ''}
            `}
            >
              {icon.name}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar menu if visible */}
      {isShowMenu && <SiderbarMenu handleHideSideMenu={handleHideSideMenu} />}
    </div>
  );
};

export default Top;
