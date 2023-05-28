import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/dashboard/AdminSidebar";
import { useSelector } from "react-redux";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // useEffect()

  console.log(sidebarOpen);
  return (
    <Fragment>
      <div className="flex h-screen bg-gray-100">
        <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-4 bg-blue-500">
          <h1 className="text-2xl font-bold text-white mx-auto">
            Admin Dashboard
          </h1>
          <div className="lg:hidden">
            <div onClick={handleSidebarToggle}>
              {sidebarOpen ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
          </div>
        </div>
        <AdminSidebar sidebarOpen={sidebarOpen} />
        {/* <div className="flex-1 overflow-y-scroll bg-gray-100"> */}
          <div className="flex-1 m-auto justify-center overflow-y-scroll w-[100vh] items-center h-full">
            <div className="p-6 rounded-lg shadow-md mt-10">
              <Outlet />
            </div>
          </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default Admin;
