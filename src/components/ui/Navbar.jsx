import React, { useState } from "react";
import { AiOutlineAccountBook } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import {MdOutlineAccountCircle}
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const { user } = useSelector((state) => state.user);
  // console.log(user?.name, user, "navbar");
  const [isHovered, setIsHovered] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
  

    <div className="bg-[#538E4E] w-[100%] sticky top-0  z-50">
    <div className="flex justify-between items-center h-24 max-w-[1245px] mx-auto px-4 text-white">
      <h1 className="w-full text-5xl font-bold text-white cursor-pointer" onClick={() => { navigate('/') }}>GarbageGo</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer" onClick={() => { navigate('/') }}>Home</li>
        <li
          className="p-4 cursor-pointer relative whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
         Our Services
          { isHovered && 
            <ul className="absolute left-0 mt-2 bg-white shadow-lg" >
              <li className="cursor-pointer  py-4 px-2 text-black hover:bg-[#538E4E] text-lg hover:text-white w-[14rem]" style={{transition: 'all 0.5s'}} onClick={()=>{navigate('/services')}}>Waste Pickup</li>
              <li className="cursor-pointer  py-4 px-2 text-black hover:bg-[#538E4E] text-lg hover:text-white w-[14rem]" style={{transition: 'all 0.5s'}} onClick={()=>{navigate('/pricelist')}}>Price List</li>
              <li className="cursor-pointer  py-4 px-2 text-black hover:bg-[#538E4E] text-lg hover:text-white w-[14rem]" style={{transition: 'all 0.5s'}}>Service 1</li>

              
              {/* <li className="cursor-pointer text-black">Service 2</li>
              <li className="cursor-pointer text-black">Service 3</li>
              <li className="cursor-pointer text-black">Service 4</li> */}
            </ul>
          }
          
        </li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer" onClick={()=>{navigate('/bloglist')}}>Blog</li>
        <li className="p-4 cursor-pointer">Contact</li>
        {user ? <li className="p-4 text whitespace-nowrap cursor-pointer" onClick={() => { navigate('/profile/pro') }}>{user.name}</li> : <button className="bg-white text-teal-400 " onClick={() => { navigate('/login') }} >Login</button>}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#538E4E] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4 cursor-pointer" onClick={() => { navigate('/') }}>GarbageGo</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Services</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
        {user ? <li className="p-4 text whitespace-nowrap" onClick={() => { navigate('/profile/pro') }}>{user.name}</li> : <button className="bg-white text-teal-400 " onClick={() => { navigate('/login') }} >Login</button>}

      </ul>
    </div>
  </div>
  );
};

export default Navbar;
