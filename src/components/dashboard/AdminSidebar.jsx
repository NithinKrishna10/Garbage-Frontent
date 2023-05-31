import React, { useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <div
      className={
        sidebarOpen
          ? "md:w-1/4 lg:w-1/5  h-screen fixed left-0 ease-in-out duration-600"
          : "hidden md:block md:w-1/5 lg:w-[13%] h-screen ease-in-out duration-500 "
      }
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        <button className="text-white focus:outline-none hover:text-gray-300">
          <RiDashboardLine className="h-6 w-6" />
        </button>
      </div>
      <div className="bg-cyan-900 text-white h-[85vh] mt-[9%] ml-[2%] mr-[2%] rounded-lg font-bold overflow-y-auto">
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
         
         
      
          <li>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
        aria-controls="dropdown-example"
        onClick={toggleDropdown}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>
         Waste
        </span>
        <svg
          sidebar-toggle-item
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul id="dropdown-example" className="py-2 space-y-2">
          <li onClick={() => {
              navigate("/admin/wastecat");
            }}>
            <span
             
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Waste Category
            </span>
          </li>
          <li  onClick={() => {
              navigate("/admin/waste");
            }}>
            <a
              href="#"
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
             Waste Types
            </a>
          </li>



          
       
        </ul>
      )}
    </li>




    <li>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
        aria-controls="dropdown-example"
        onClick={()=>{setIsOpenn(!isOpenn)}}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>
        Scrap
        </span>
        <svg
          sidebar-toggle-item
          className={`w-6 h-6 ${isOpenn ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpenn && (
        <ul id="dropdown-example" className="py-2 space-y-2">
          <li onClick={() => {
              navigate("/admin/scrapcat");
            }}>
            <span
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Scrap Category
            </span>
          </li>
          <li  onClick={() => {
              navigate("/admin/scrap");
            }}>
            <span
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
             Scrap Types
            </span>
          </li>
       
        </ul>
      )}
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
