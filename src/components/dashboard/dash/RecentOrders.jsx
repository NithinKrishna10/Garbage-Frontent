import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);
  const navigate = useNavigate();

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
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.price}</p>
              <p className="text-gray-800 font-bold">{order.waste_weight}KG</p>

              <p className="text-gray-400 text-sm">{order.customer.name}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.pickup_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
