import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const PickupRequestTable = () => {
  const token = Cookies.get("admin_jwt");
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Number of orders to display per page
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the pickup requests data from the API
    axios.get('/adminside/pickup-requests/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching pickup requests:', error);
      });
  }, []);

    // Pagination logic
    orders.sort((a,b)=>b.id -a.id)
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
    const totalPages = Math.ceil(orders.length / ordersPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const redirectToPickupDetails = (pId) => {
      navigate(`/admin/pickupedit/${pId}`);
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-indigo-700">Pickup List</h1>
        {currentOrders.map((pickup) => (
          <div key={pickup.id} className="bg-gray-800 rounded-lg shadow-md mb-8 p-6 text-white">
            <div className="mb-4">
              <p className="font-semibold text-lg">Order ID: {pickup.id}</p>
              <p>
                Customer: <span className="font-semibold">{pickup.customer.name}</span> ({pickup.customer.email})
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-green-300">
                  <span className="font-extrabold">Pickup Type:</span> {pickup.pickup_type}
                </p>
                <p>
                  <span className="font-extrabold">Pickup Date:</span> {pickup.pickup_date}
                </p>
                <p>
                  <span className="font-extrabold">Address: </span>
                  {pickup.pickup_address.address1}, {pickup.pickup_address.city.name},{" "}
                  {pickup.pickup_address.pincode}, {pickup.pickup_address.city.phone1}
                </p>
                <p>
                  <span className="font-extrabold">Pickup Latitude:</span> {pickup.pickup_latitude}
                </p>
                <p>
                  <span className="font-extrabold">Pickup Logitude:</span> {pickup.pickup_longitude}
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p>
                  <span className="font-extrabold">Weight: </span>
                  <span className="font-semibold text-red-300">{pickup.weight}Kg</span>
                </p>
                <p>
                  <span className="font-extrabold">Price: </span>{" "}
                  <span className="font-semibold text-purple-300">{pickup.price}Rs</span>
                </p>
                <p>
                  <span className="font-extrabold">Status: </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mt-2">
                    {pickup.pickup_status}
                  </button>
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p>
                  <span className="font-extrabold">Notes:</span> {pickup.special_instructions}
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-6"
            onClick={() => redirectToPickupDetails(pickup.id)}
            >
              View Details
            </button>
          </div>
        ))}
  
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className="mr-2 px-3 py-1 font-semibold rounded bg-gray-500 text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              className={`mr-2 px-3 py-1 font-semibold rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-500 text-gray-200 hover:bg-gray-600"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="ml-2 px-3 py-1 font-semibold rounded bg-gray-500 text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
  );
};

export default PickupRequestTable;
