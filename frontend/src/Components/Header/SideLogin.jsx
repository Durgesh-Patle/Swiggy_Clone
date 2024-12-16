import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';

let SignData = {
  name: '',
  email: '',
  password: '',
  referral: ''
}

let loginData = {
  email: '',
  password: ''
}

const SideLogin = ({
  loginTogle,
  setloginTogle,
  switchs,
  setSwitchs,
  referal,
  SetReferal,
}) => {

  let [db, setDb] = useState(SignData);
  let [input, setInput] = useState(loginData);

  // Sign Up Input field..
  function inputHandeller(e) {
    const { name, value } = e.target;
    setDb(prevDb => ({
      ...prevDb,
      [name]: value
    }));
  }

  // Login Input Field..
  function loginHandeller(e) {
    const { name, value } = e.target;
    setInput(prevDb => ({
      ...prevDb,
      [name]: value
    }));
  }

  // SignUp backend Code.....
  const submitHandller = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/sign', db);
      console.log(res);

    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  // Login Backend Code...
  const LoginSubmitHandller = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login', input);
      console.log(res);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50 transition-all duration-500 ${loginTogle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      onClick={() => setloginTogle(false)}
    >
      <div
        className={`absolute top-0 right-0 w-[350px] max-w-full h-full bg-white flex flex-col items-center transition-transform duration-500 ${loginTogle ? "translate-x-0" : "translate-x-full"
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
            <form onSubmit={LoginSubmitHandller}>
              <div className="mt-10 flex items-center border py-2 px-4 rounded w-full">
                <CgMail className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={input.email}
                  onChange={loginHandeller}
                />
              </div>
              <div className="mt-10 flex items-center border py-2 px-4 rounded w-full">
                <RiLockPasswordFill className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter your Password..."
                  value={input.password}
                  onChange={loginHandeller}
                />
              </div>
              <button className="bg-orange-500 text-white font-semibold w-full rounded py-2 mt-6">
                Login
              </button>
            </form>
          </div>
        )}

        {/* Sign Up Section */}
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

            {/* Sign Up form...... */}
            <form onSubmit={submitHandller}>
              <div className="mt-8 flex items-center border py-2 px-4 rounded w-full">
                <CiUser className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  value={db.name}
                  onChange={inputHandeller}  // Corrected event handler
                />
              </div>
              <div className="mt-4 flex items-center border py-2 px-4 rounded w-full">
                <CgMail className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  value={db.email}
                  onChange={inputHandeller}  // Corrected event handler
                />
              </div>
              <div className="mt-4 flex items-center border py-2 px-4 rounded w-full">
                <RiLockPasswordFill className="text-2xl text-gray-500" />
                <input
                  className="ml-2 w-full outline-none"
                  type="password"
                  placeholder="Enter Password..."
                  name="password"
                  value={db.password}
                  onChange={inputHandeller}  // Corrected event handler
                />
              </div>
              {/* Referral Code Section */}
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
                    name="referral"
                    value={db.referral}
                    onChange={inputHandeller}  // Corrected event handler
                  />
                </div>
              )}
              <button className="bg-orange-500 text-white font-semibold w-full rounded py-2 mt-6">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div >
  );
};

export default SideLogin;
