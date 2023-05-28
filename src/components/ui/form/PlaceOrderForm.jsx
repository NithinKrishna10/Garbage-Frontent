import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const PlaceOrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const [pickupDate, setPickupDate] = useState("");

  const [additionalNotes, setAdditionalNotes] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [wasteCat, setWasteCat] = useState([]);
  const [selectedWaste, setSelectedWaste] = useState("");

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.user);
  console.log(user, "ksldfjlfjdskjfsjsdoifj");
  // const userId = user?.id;
  useEffect(() => {
    // user &&
    fetchAddresses();
    fetchWasteCategories();
  }, [user]);
  // console.log(user, "urerer");
  const fetchAddresses = () => {
    axios
      .get(`/api/addresses/${user?.id}`)
      .then((response) => {
        console.log(response);
        const fetchedAddresses = response.data.map((address) => ({
          id: address.id,
          name: address.name,
          address1: address.address1,
          district: address.district.name,
          city: address.city.name,
          phone1: address.phone1,
          country: address.country,
          pincode: address.pincode,
        }));
        setAddresses(fetchedAddresses);
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  };

  const fetchWasteCategories = () => {
    axios
      .get("waste/waste-categories")
      .then((response) => {
        console.log(response, "wasteeeeeeeeeeeeeeeeeeeeeeeee");
        const fetchedWaste = response.data.map((waste) => ({
          id: waste.id,
          name: waste.name,
        }));
        setWasteCat(fetchedWaste);
      })
      .catch((error) => {
        console.error("Error fetching waste categories:", error);
      });
  };
  console.log(wasteCat, "waste");
  const handleFormSubmit = (event) => {
    event.preventDefault();
      if(!selectedWaste){
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Select Waste Type:",
          showConfirmButton: false,
          timer: 1500,
        });
        
      }
     if (!selectedAddress){
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Select Address:",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (!pickupDate){
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Select Date:",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    // Create the order object with the form data
    const orderData = {
      customer: user.id,
      waste_type: selectedWaste,
      address: selectedAddress,
      pickup_date: pickupDate,
      additional_notes: additionalNotes,
    };
    console.log(orderData);

    // Make an API request to place the order
    axios
      .post("place", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order placed successfully:",
          showConfirmButton: false,
          timer: 1500,
        });

        setWasteType("");
        setPickupDate("");
        setAdditionalNotes("");
        navigate('/profile/orderlist')
      })
      .catch((error) => {
        console.error("Error placing the order:", error);
      });
  };
  return (

    <div className="max-w-[100%] mx-auto"

    >
      <div style={{backgroundColor: "rgba(20,20,20,0.8)"}}>
      <div className="max-w-[90vh] m-auto p-10">
        <div className="m-auto w-[95%] text-xl">
          <h1 className="text-4xl font-serif text-white">
            ARE YOU INTERESTED IN A PICKUP?
          </h1>
        </div>
        <div className="max-w-[80vh] mx-auto mt-5 mb-5">
          <p className="text-lg text-white">
            Get tips and info on how to manage waste effectively and reduce
            environmental impact.
          </p>
        </div>
        <div>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-white" htmlFor="wasteType">
                  Waste Type:
                </label>
                <select
                  id="wasteType"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3  md:h-[80px]"
                  value={selectedWaste}
                  onChange={(event) => setSelectedWaste(event.target.value)}
                >
                  <option value="">Select Waste Type</option>
                  {wasteCat.map((waste) => (
                    <option key={waste.id} value={waste.id}>
                      {waste.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-white" htmlFor="pickupDate">
                  Pickup Date:
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 md:h-[80px]"
                  value={pickupDate}
                  onChange={(event) => setPickupDate(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-white font-bold" htmlFor="address">
                Address:
              </label>
              {addresses ? (
                <select
                  id="address"
                  className="w-full h-[100px] rounded-lg border border-gray-300  py-2 px-3"
                  value={selectedAddress}
                  onChange={(event) => setSelectedAddress(event.target.value)}
                >
                  <option value="">Select Address</option>
                  {addresses.map((address) => (
                    <option
                      className="bg-slate-500"
                      key={address.id}
                      value={address.id}
                    >
                      {address.name} - {address.address1}, {address.city} ,{address.pincode}
                    </option>
                  ))}
                </select>
              ) : (
                <h1
                  className="cursor-pointer text-blue-500 hover:underline"
                  onClick={() => {
                    navigate("profile/address");
                  }}
                >
                  Add Address
                </h1>
              )}
            </div>

            <div>
              <label className="block mb-2 text-white font-bold" htmlFor="additionalNotes">
                Additional Notes:
              </label>
              <textarea
                id="additionalNotes"
                className="w-full border rounded-lg border-gray-300  py-2 px-3 h-40"
                value={additionalNotes}
                onChange={(event) => setAdditionalNotes(event.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlaceOrderForm;
