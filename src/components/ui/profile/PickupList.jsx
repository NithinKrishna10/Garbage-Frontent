
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";

const PickupList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Number of orders to display per page
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    fetchPickups();
  }, [user]);

  const fetchPickups = () => {
     const id = user?.id
    axios
      .get(`/api/customer-pickup-requests/${id}`)
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
if (!user) {
    return <p>Loading...</p>;
  }
  return (
  

//     customer
//  pickup_date 
// ickup_address
// ue)
//     weigh
// _instructions
// pickup_status
// {/* <div className="container mx-auto px-4 py-8">
//   <h1 className="text-2xl font-bold mb-4 text-indigo-700">Order List</h1>
//   {currentOrders.map((pickup) => (
//     <div key={pickup.id} className="bg-gradient-to-r bg-white rounded-lg shadow-md mb-8 p-6">
//       <div className="mb-4">
//         <p className="font-semibold text-lg text-blue-900">Order ID: {pickup.id}</p>
//         <p>
//           Customer: <span className="font-semibold">{pickup.customer.name}</span> ({pickup.customer.email})
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         <div className="mb-4">
//           <p className="text-green-700">Waste Type: {pickup.pickup_type}</p>
//           <p>Pickup Date: {pickup.pickup_date}</p>
//         </div>
//         <div className="mb-4">
//           <p>Weight: <span className="font-semibold text-red-700">{pickup.weight}Kg</span></p>
//           <p>Price: <span className="font-semibold text-purple-700">{pickup.price}Rs</span></p>
//         </div>
//         <div className="mb-4">
//           <p>Status: {pickup.pickup_status}</p>
//           <p>Notes: {pickup.special_instructions}</p>
//         </div>
//       </div>
//       <div className="mt-4">
//         <p>Address:</p>
//         <p>{pickup.pickup_address.address1}, {pickup.pickup_address.city.name}, {pickup.pickup_address.pincode}, {pickup.pickup_address.city.phone1}</p>
//       </div>
//       <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-6">
//         View Details
//       </button>
//     </div>
//   ))}

//   {/* Pagination */}
//   <div className="flex justify-center mt-4">
//     <button
//       className="mr-2 px-3 py-1 font-semibold rounded bg-gray-500 text-white"
//       onClick={() => handlePageChange(currentPage - 1)}
//       disabled={currentPage === 1}
//     >
//       Previous
//     </button>
//     {Array.from({ length: totalPages }).map((_, index) => (
//       <button
//         key={index + 1}
//         className={`mr-2 px-3 py-1 font-semibold rounded ${
//           currentPage === index + 1
//             ? "bg-blue-500 text-white"
//             : "bg-gray-500 text-gray-200 hover:bg-gray-600"
//         }`}
//         onClick={() => handlePageChange(index + 1)}
//       >
//         {index + 1}
//       </button>
//     ))}
//     <button
//       className="ml-2 px-3 py-1 font-semibold rounded bg-gray-500 text-white"
//       onClick={() => handlePageChange(currentPage + 1)}
//       disabled={currentPage === totalPages}
//     >
//       Next
//     </button>
//   </div>
// </div> */}


<div className="container mx-auto px-4 py-8">
  <h1 className="text-2xl font-bold mb-4 text-indigo-700">Order List</h1>
  {currentOrders.map((pickup) => (
    <div key={pickup.id} className="bg-white rounded-lg shadow-md mb-8 p-6">
      <div className="mb-4">
        <p className="font-semibold text-lg text-blue-900">Order ID: {pickup.id}</p>
        <p>
          Customer: <span className="font-semibold">{pickup.customer.name}</span> ({pickup.customer.email})
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-green-700">Waste Type: {pickup.pickup_type}</p>
          <p>Pickup Date: {pickup.pickup_date}</p>
          <p>Address: {pickup.pickup_address.address1}, {pickup.pickup_address.city.name}, {pickup.pickup_address.pincode}, {pickup.pickup_address.city.phone1}</p>
     
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Weight: <span className="font-semibold text-red-700">{pickup.weight}Kg</span></p>
          <p>Price: <span className="font-semibold text-purple-700">{pickup.price}Rs</span></p>
          <p>Status: {pickup.pickup_status}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Notes: {pickup.special_instructions}</p>
        </div>
      </div>
      {/* <div className="mt-4">
        <p>Address:</p>
        <p>{pickup.pickup_address.address1}, {pickup.pickup_address.city.name}, {pickup.pickup_address.pincode}, {pickup.pickup_address.city.phone1}</p>
      </div> */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-6">
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

export default PickupList;