


import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);
  const navigate =useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("adminside/orders")
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const redirectToOrderDetail = (orderId) => {
    navigate(`/admin/orderupdate/${orderId}`);
  };

  return (
    <div className="m-auto">
      <div className="overflow-x-auto md:w-[120vh] max-w-[90vw] m-auto">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table header */}
          {/* ... */}

          <thead>
            <tr>
              {/* <th className="py-2"> */}
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Order ID
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Customer
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Waste Type
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Address
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Price
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Weight
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Pickup Date
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Status
              </th>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-blue-700 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                {/* Table rows */}
                <td className="py-2 border border-b-black">{order.id}</td>
              
                <td className="py-2 border border-b-black">{order.customer.name}</td>
                <td className="py-2 border border-b-black">{order.waste_type.name}</td>
                <td className="py-2 border border-b-black">
                  {order.address.address1} <br />
                  {order.address.city.name},{order.address.pincode},
                  {order.address.city.phone1}
                </td>
                <td className="py-2 border border-b-black">{order.price}</td>
                <td className="py-2 border border-b-black">{order.waste_weight}</td>
                <td className="py-2 border border-b-black">{order.pickup_date}</td>
                <td className="py-2 border border-b-black ">
                  
                  {order.status}</td>
                <td
                  className="py-2 border border-b-black"
                  onClick={() => redirectToOrderDetail(order.id)}
                >
                  Update
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <button
            className={`mr-2 px-3 py-1 font-semibold rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            className={`mr-2 px-3 py-1 font-semibold rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                className={`mr-2 px-3 py-1 font-semibold rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            className={`mr-2 px-3 py-1 font-semibold rounded ${
              currentPage === Math.ceil(orders.length / ordersPerPage)
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
          >
            Next
          </button>
          <button
            className={`px-3 py-1 font-semibold rounded ${
              currentPage === Math.ceil(orders.length / ordersPerPage)
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={() => paginate(Math.ceil(orders.length / ordersPerPage))}
            disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
