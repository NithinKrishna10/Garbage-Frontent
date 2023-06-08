import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { clearUserDetails } from '../../../redux/usernameSlice';
import { useNavigate } from 'react-router-dom';
import { RiDashboardLine, RiUserLine, RiMapPinLine, RiClipboardLine, RiLogoutBoxLine } from 'react-icons/ri';

const ProfileSidebar = ({status}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
    return dispatch(clearUserDetails());
  };

  return (
    

<div
className={
  status
    ? "md:w-1/4 lg:w-1/5 bg-gray-50h-screen fixed left-0 ease-in-out duration-600"
    : "hidden md:block md:w-1/5 lg:w-[15%] bg-gray-50 h-[90vh] ease-in-out duration-500 z-10"
}
>
<div className="bg-green-800 w-[calc(100%-40px)] h-[80vh] rounded-xl transition duration-300 ease-in-out transform hover:scale-105 md:m-auto mt-[5vh] md:mt-[60px]">
  <ul className="text-white pt-4 pl-4">
    <li
      className="p-4 border-b border-gray-600 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={() => {
        navigate('');
      }}
    >
      <RiDashboardLine className="mr-2" />
      <span>Dashboard</span>
    </li>
    <li
      className="p-4 border-b border-gray-600 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={() => {
        navigate('/profile/pro');
      }}
    >
      <RiUserLine className="mr-2" />
      <span>Profile</span>
    </li>
    <li
      className="p-4 border-b border-gray-600 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={() => {
        navigate('/profile/address');
      }}
    >
      <RiMapPinLine className="mr-2" />
      <span>Address</span>
    </li>
    <li
      className="p-4 border-b border-gray-600 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={() => {
        navigate('/profile/orderlist');
      }}
    >
      <RiClipboardLine className="mr-2" />
      <span>Orders</span>
    </li>
    <li
      className="p-4 border-b border-gray-600 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={() => {
        navigate('/profile/pickuplist');
      }}
    >
      <RiClipboardLine className="mr-2" />
      <span>Pickups</span>
    </li>
    <li
      className="p-4 cursor-pointer hover:bg-green-700 transition-colors duration-200 flex items-center"
      onClick={handleLogout}
    >
      <RiLogoutBoxLine className="mr-2" />
      <span>Logout</span>
    </li>
  </ul>
</div>
</div>
      
  );
};

export default ProfileSidebar;
