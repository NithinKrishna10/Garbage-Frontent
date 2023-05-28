import React, { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  RiDashboardLine,
  RiUserLine,
  RiShoppingCartLine,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ sidebarOpen }) => {
  console.log(sidebarOpen);
  const navigate = useNavigate();
  return (
    <div
      className={
        sidebarOpen
          ? "md:w-1/4 lg:w-1/5  h-screen fixed left-0 ease-in-out duration-600"
          : "hidden md:block md:w-1/5 lg:w-[13%] h-screen ease-in-out duration-500"
      }
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        <button className="text-white focus:outline-none hover:text-gray-300">
          <RiDashboardLine className="h-6 w-6" />
        </button>
      </div>
      <div className="bg-cyan-900 text-white h-[85vh] mt-[9%] ml-[2%] mr-[2%] rounded-lg font-bold">
        <h1 className="text-center m-auto text-xl">Admin</h1>
        <ul className="py-4 pl-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-gray-700 flex items-center"
           onClick={() => {
            navigate("/admin");
          }}>
            <RiDashboardLine className="mr-2" />
            <span>Dashboard</span>
          </li>
          <li
            className="p-4 border-b border-gray-600 cursor-pointer hover:bg-gray-700 flex items-center"
            onClick={() => {
              navigate("/admin/usermanage");
            }}
          >
            <RiUserLine className="mr-2" />
            <span>User Management</span>
          </li>
          <li
            className="p-4 border-b border-gray-600 cursor-pointer hover:bg-gray-700 flex items-center"
            onClick={() => {
              navigate("/admin/ordermanage");
            }}
          >
            <RiShoppingCartLine className="mr-2" />
            <span>Order Management</span>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-gray-700 flex items-center">
            <RiSettings3Line className="mr-2" />
            <span>Settings</span>
          </li>
          <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center">
            <RiLogoutBoxLine className="mr-2" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
