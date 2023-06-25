import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import Cookies from 'js-cookie';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [block, setBlock] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const token = Cookies.get("admin_jwt");
    axios
      .get('/adminside/userlist', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);
  const handleBlockUser = (id) => {
    axios
      .patch(`/adminside/block_user/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              is_active: false,
            };
          }
          return user;
        });
        setUsers(updatedUsers);
        setBlock(true);
      })
      .catch((error) => console.error(error));
  };

  const handleUnBlockUser = (id) => {
    axios
      .patch(`.adminside/unblock_user/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              is_active: true,
            };
          }
          return user;
        });
        setUsers(updatedUsers);
        setBlock(false);
      })
      .catch((error) => console.error(error));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-auto ">
      <div className="overflow-x-auto md:w-[100vh] max-w-[90vw] m-auto">
        <table className="max-w-[70px]  divide-y ">
          <thead className="">
            <tr>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                ID
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                Name
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                Email
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                Phone
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                Status
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> */}
              <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">

                Block
              </th>
              {/* <th> */}
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.is_active ?<span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Active</span>
: <span>Blocked</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.is_active ? (
                    <button
                      className="px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => handleBlockUser(user.id)}
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                      onClick={() => handleUnBlockUser(user.id)}
                    >
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className={`mr-2 px-3 py-1 font-semibold rounded ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-gray-500 hover:bg-gray-600'
          }`}
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          className={`mr-2 px-3 py-1 font-semibold rounded ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-gray-500 hover:bg-gray-600'
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <button
              key={index + 1}
              className={`mr-2 px-3 py-1 font-semibold rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          className={`mr-2 px-3 py-1 font-semibold rounded ${
            currentPage === Math.ceil(users.length / usersPerPage)
              ? 'bg-gray-300'
              : 'bg-gray-500 hover:bg-gray-600'
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
        <button
          className={`px-3 py-1 font-semibold rounded ${
            currentPage === Math.ceil(users.length / usersPerPage)
              ? 'bg-gray-300'
              : 'bg-gray-500 hover:bg-gray-600'
          }`}
          onClick={() => paginate(Math.ceil(users.length / usersPerPage))}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default UserTable;
