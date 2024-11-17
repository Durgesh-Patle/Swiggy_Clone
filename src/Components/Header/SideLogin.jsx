import React from "react";
import { CgMail } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SideLogin = ({
  loginTogle,
  setloginTogle,
  switchs,
  setSwitchs,
  referal,
  SetReferal,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50 transition-all duration-500 ${
        loginTogle ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setloginTogle(false)}
    >
      <div
        className={`absolute top-0 right-0 w-[350px] max-w-full h-full bg-white flex flex-col items-center transition-transform duration-500 ${
          loginTogle ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <RxCross2
          className="absolute right-4 top-4 text-3xl cursor-pointer text-gray-600"
          onClick={() => setloginTogle(false)}
        />

        {/* Login Section */}
        {switchs && (
          <div className="w-full px-6 mt-16">
            <h1 className="text-2xl font-semibold text-gray-600">Login</h1>
            <sub
              className="text-orange-500 font-medium text-sm cursor-pointer"
              onClick={() => setSwitchs(false)}
            >
              <span className="text-gray-600">or</span> Create an account
            </sub>
            <div className="mt-10 flex items-center border py-2 px-4 rounded w-full">
              <CgMail className="text-2xl text-gray-500" />
              <input
                className="ml-2 w-full outline-none"
                type="email"
                placeholder="Enter your email..."
              />
            </div>
            <button className="bg-orange-500 text-white font-semibold w-full rounded py-2 mt-6">
              Login
            </button>
          </div>
        )}

        {/* Sign-Up Section */}
        {!switchs && (
          <div className="w-full px-6 mt-16">
            <h1 className="text-2xl font-semibold text-gray-600">Sign Up</h1>
            <sub
              className="text-orange-500 font-medium text-sm cursor-pointer"
              onClick={() => {
                setSwitchs(true);
                SetReferal(true);
              }}
            >
              <span className="text-gray-600">or</span> Login to your account
            </sub>
            <div className="mt-8 flex items-center border py-2 px-4 rounded w-full">
              <CiUser className="text-2xl text-gray-500" />
              <input
                className="ml-2 w-full outline-none"
                type="text"
                placeholder="Enter your name..."
              />
            </div>
            <div className="mt-4 flex items-center border py-2 px-4 rounded w-full">
              <CgMail className="text-2xl text-gray-500" />
              <input
                className="ml-2 w-full outline-none"
                type="email"
                placeholder="Enter your email..."
              />
            </div>
            <div className="mt-4 flex items-center border py-2 px-4 rounded w-full">
              <MdAddIcCall className="text-2xl text-gray-500" />
              <input
                className="ml-2 w-full outline-none"
                type="number"
                placeholder="Enter your number..."
              />
            </div>
            <h1
              className="text-gray-800 font-medium mt-4 cursor-pointer"
              onClick={() => SetReferal(!referal)}
            >
              Have a referral code?
            </h1>
            {!referal && (
              <div className="mt-4 flex items-center border py-2 px-4 rounded w-full">
                <MdAddIcCall className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="text"
                  placeholder="e.g. Referral Code..."
                />
              </div>
            )}
            <button className="bg-orange-500 text-white font-semibold w-full rounded py-2 mt-6">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideLogin;
