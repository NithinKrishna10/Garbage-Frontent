
import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Number of orders to display per page
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const fetchOrders = () => {
    axios
      .get(`/api/orders/${user.id}`)
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

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-2xl font-bold mb-4">Order List</h1>
    //   {currentOrders.map((order) => (
    //     <div
    //       key={order.id}
    //       className="bg-white rounded-lg shadow-md mb-4 p-6"
    //     >
    //       <p className="font-semibold mb-2">Order ID: {order.id}</p>
    //       <p className="mb-2">
    //         Customer: {order.customer.name} ({order.customer.email})
    //       </p>
    //       <p className="mb-2">Waste Type: {order.waste_type.name}</p>
    //       <p className="mb-2">
    //         Address: {order.address.address1}, {order.address.city.name},{" "}
    //         {order.address.pincode}, {order.address.city.phone1}
    //       </p>
    //       <p className="mb-2">Price: {order.price}</p>
    //       <p className="mb-2">Weight: {order.waste_weight}</p>
    //       <p className="mb-2">Pickup Date: {order.pickup_date}</p>
    //       <p className="mb-2">Status: {order.status}</p>
    //       <p className="mb-2">Notes: {order.additional_notes}</p>
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
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
    // </div>










//     <div className="container mx-auto px-4 py-8">
//   <h1 className="text-2xl font-bold mb-4 text-indigo-700">Order List</h1>
//   {currentOrders.map((order) => (
//     <div
//       key={order.id}
//       className="bg-gradient-to-r bg-white rounded-lg shadow-md mb-4 p-6"
//     >
//       <p className="font-semibold text-lg text-blue-900 mb-2">Order ID: {order.id}</p>
//       <p className="mb-2">
//         Customer: <span className="font-semibold">{order.customer.name}</span> ({order.customer.email})
//       </p>
//       <p className="mb-2 text-green-700">Waste Type: {order.waste_type.name}</p>
//       <p className="mb-2">
//         Address: {order.address.address1}, {order.address.city.name},{" "}
//         {order.address.pincode}, {order.address.city.phone1}
//       </p>
//       <p className="mb-2">Price: <span className="font-semibold text-purple-700">{order.price}Rs</span></p>
//       <p className="mb-2">Weight: <span className="font-semibold text-red-700">{order.waste_weight}Kg</span></p>
//       <p className="mb-2">Pickup Date: {order.pickup_date}</p>
//       <p className="mb-2">Status: {order.status}</p>
//       <p className="mb-2">Notes: {order.additional_notes}</p>
//       <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">
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
// </div>


<div className="container mx-auto px-4 py-8">
  <h1 className="text-2xl font-bold mb-4 text-indigo-700">Order List</h1>
  {currentOrders.map((order) => (
    <div key={order.id} className="bg-gradient-to-r bg-white rounded-lg shadow-md mb-8 p-6">
      <div className="mb-4">
        <p className="font-semibold text-lg text-blue-900">Order ID: {order.id}</p>
        <p>
          Customer: <span className="font-semibold">{order.customer.name}</span> ({order.customer.email})
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="mb-4">
          <p className="text-green-700">Waste Type: {order.waste_type.name}</p>
          <p>Pickup Date: {order.pickup_date}</p>
        </div>
        <div className="mb-4">
          <p>Weight: <span className="font-semibold text-red-700">{order.waste_weight}Kg</span></p>
          <p>Price: <span className="font-semibold text-purple-700">{order.price}Rs</span></p>
        </div>
        <div className="mb-4">
          <p>Status: {order.status}</p>
          <p>Notes: {order.additional_notes}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Address:</p>
        <p>{order.address.address1}, {order.address.city.name}, {order.address.pincode}, {order.address.city.phone1}</p>
      </div>
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

export default OrderList;
