import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="hidden md:block">
          <button
            className="text-white text-2xl rounded-lg focus:outline-none"
            onClick={() => setShowSidebar('left-0')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-white text-sm tracking-wider mt-1">
            {location === '/' ? 'DASHBOARD' : location.toUpperCase().replace('/', '')}
          </h4>

          <div className="flex">
            <input
              className="p-2 rounded-md bg-white text-gray-800 focus:outline-none"
              type="text"
              placeholder="Search"
            />

            <div className="-mr-4 ml-6">
              <div className="relative">
                <button className="rounded-full focus:outline-none">
                  <img
                  src='https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg'
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                </button>
                <div className="absolute right-0 top-10 hidden bg-white p-2 rounded shadow-md">
                  <button className="block w-full text-left p-2 hover:bg-blue-100">
                    Action
                  </button>
                  <button className="block w-full text-left p-2 hover:bg-blue-100">
                    Another Action
                  </button>
                  <button className="block w-full text-left p-2 hover:bg-blue-100">
                    Something Else
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
