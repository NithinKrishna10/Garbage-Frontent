import React, { useEffect, useState } from "react";

import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";
const AdminRecentPickups = () => {
  const [orders, setOrders] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [ordersPerPage] = useState(10);
  const navigate = useNavigate();


  useEffect(() => {
  

      fetchPickups();

  }, []);

  const fetchPickups = () => {
   
    axios
    axios.get('/adminside/pickup-requests/')
      .then((response) => {
        setOrders(response.data);

        // console.log(response.data,'pickup dataS');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  orders.sort((a,b)=>b.id-a.id)
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Pickups</h1>
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
              <p className="text-gray-800 font-bold">{order.weight}KG</p>

              <p 
                className= {
                  order.pickup_type=='Scrap'?"text-gray-400 text-sm" : "text-green-400 text-sm"
              } 
              >{order.pickup_type }</p>
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

export default AdminRecentPickups;
