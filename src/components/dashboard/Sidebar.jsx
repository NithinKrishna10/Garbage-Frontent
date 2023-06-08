import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
    <div className="bg-stone-600 z-50">
      <div className="flex justify-between items-center h-16 max-w-[1240px] max-h-full mx-auto px-4 text-white">
        <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
        <div onClick={handleSidebarToggle} className="md:hidden">
          {sidebarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
    </div>

    <div className="md:flex">
      <div
        className={
          sidebarOpen
            ? "md:w-1/4 lg:w-1/5 bg-[#538E4E] h-screen fixed top-0 left-0 ease-in-out duration-500"
            : "hidden md:block md:w-1/4 lg:w-1/5 bg-[#538E4E] h-screen ease-in-out duration-500"
        }
      >
        <ul className="text-white pt-4 pl-4">
          <li className="p-4 border-b border-gray-600">Dashboard</li>
          <li className="p-4 border-b border-gray-600" onClick={()=>{navigate('admin/usermange')}}>User Manage</li>
          <li className="p-4 border-b border-gray-600" onClick={()=>{navigate('admin/ordermange')}} >Order Mange</li>
          <li className="p-4 border-b border-gray-600">Settings</li>
          <li className="p-4">Logout</li>
        </ul>
      </div>

      <div className="md:w-3/4 lg:w-4/5 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the User Dashboard!</h1>
        {/* Add your content here */}
      </div>
    </div>
    </div>
  );
};

export default ProfileSidebar;
