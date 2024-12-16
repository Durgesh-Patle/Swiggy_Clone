import React from 'react';
import { CgSearch } from 'react-icons/cg';
import { FaMapLocationDot } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const Other_SidePage = ({ togle, setTogle }) => {
  return (
    <div
      className="black-overlay h-full w-full fixed z-20 top-0 bg-black bg-opacity-50 transition-all duration-500"
      style={{
        opacity: togle ? 1 : 0,
        visibility: togle ? 'visible' : 'hidden',
      }}
      onClick={() => setTogle(false)}
    >
      <div
        className="w-[300px] max-w-full h-full bg-white absolute flex flex-col items-center transition-transform duration-500"
        style={{
          left: togle ? '0%' : '-100%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <RxCross2
          className="absolute right-4 top-4 text-3xl cursor-pointer text-gray-600"
          onClick={() => setTogle(false)}
        />

        {/* Search Bar */}
        <div className="mt-20 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[250px]">
          <CgSearch className="text-2xl text-gray-500" />
          <input
            className="outline-none w-full"
            type="search"
            placeholder="Search for area, street name..."
          />
        </div>

        {/* Location Button */}
        <div className="locationSet mt-10 flex gap-4 items-center border py-3 rounded px-2 pr-8 w-[250px] cursor-pointer">
          <FaMapLocationDot className="text-2xl text-gray-600" />
          <div>
            <h2>Get current location</h2>
            <p className="text-[12px] text-gray-500">Using GPS</p>
          </div>
        </div>

        {/* Explore Button */}
        <button className="bg-[#ff5200] text-white font-semibold w-24 rounded py-[6px] mt-8 self-end mr-6">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Other_SidePage;
