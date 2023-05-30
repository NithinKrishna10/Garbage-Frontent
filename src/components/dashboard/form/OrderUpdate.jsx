

import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const OrderUpdate = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [wasteWeight, setWasteWeight] = useState(0);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = () => {
    axios
      .get(`/adminside/orders/${id}`)
      .then((response) => {
        setOrder(response.data);
        setPrice(response.data.price);
        setStatus(response.data.status);
        setWasteWeight(response.data.waste_weight);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  };

  const updateOrder = () => {
    const updatedOrder = {
      ...order,
      price: price,
      status: status,
      waste_weight: wasteWeight,
    };

    axios
      .patch(`/adminside/orders/${id}/`, updatedOrder)
      .then((response) => {
        console.log("Order updated successfully:", response.data);
        // Update the order state with the updated data
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setOrder(response.data);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  const deleteOrder = () => {
    axios
      .delete(`/adminside/orders/${id}`)
      .then((response) => {
        console.log("Order deleted successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/ordermanage");
        // Perform any necessary cleanup or navigation
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  if (!order) {
    return <p>Loading...</p>;
  }

  return (
    

    <div class="mt-4 m-auto w-[75vh]">
      <h1 class="text-2xl font-bold mb-4 text-center text-white bg-indigo-500 py-2 rounded-md">
        Order Detail
      </h1>
      <p class="mb-4">
        Order ID:{" "}
        <span class="text-gray-500 text-2xl font-bold">{order.id}</span>
      </p>
      <div class="mb-4">
        <label class="block mb-2">Price</label>
        <input
          type="number"
          class="w-full rounded-md px-4 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-gray-100"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Status</label>
        <input
          type="text"
          class="w-full rounded-md px-4 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-gray-100"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Waste Weight</label>
        <input
          type="number"
          class="w-full rounded-md px-4 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-gray-100"
          value={wasteWeight}
          onChange={(event) => setWasteWeight(event.target.value)}
        />
      </div>

      <div class="flex justify-between">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-1/2" onClick={updateOrder}>
          Update Order
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-1/2" onClick={deleteOrder}>
          Delete Order
        </button>
      </div>
    </div>
  );
};

export default OrderUpdate;
