import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminNavbar from "./Test";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Sidebar({sidebarOpen}) {
//   const [showSidebar, setShowSidebar] = useState("-left-64");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
console.log(sidebarOpen);
  return (

    

    <div
      className={
        sidebarOpen
          ? 
            "md:w-1/4 lg:w-1/5 bg-[#eceff1] h-screen fixed  left-0 ease-in-out duration-600 "
          : " lg:block md:w-1/4 lg:w-1/5 hidden h-screen ease-in-out duration-500  justify-items-center align-middle"
      }
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    >
        
      <div className="bg-slate-900 w-[calc(100%-40px)] h-[calc(100%-40px)] rounded-xl mt-5">
        <ul className="text-white pt-4 pl-4 pr-4">
          <li className="p-4 border-b border-gray-600 hover:bg-blue-300 rounded-xl">Dashboard</li>
          <li
            className="p-4 border-b border-gray-600  hover:bg-blue-300 rounded-xl" 
            onClick={() => {
              navigate("admin/usermange");
            }}
          >
            User Manage
          </li>
          <li
            className="p-4 border-b border-gray-600  hover:bg-blue-300 rounded-xl"
            onClick={() => {
              navigate("admin/ordermange");
            }}
          >
            Order Mange
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-blue-300 rounded-xl">Settings</li>
          <li className="p-4">Logout</li>
        </ul>
      </div>
    </div>
  );
}
