import React, { useEffect, useState } from "react";
import AddLocation from "../addLocation/AddLocation";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const PickupRequestForm = () => {
  const { user } = useSelector((state) => state.user);
  const location = useSelector((state) => state.location);
  const [customer, setCustomer] = useState(user?.id);
  const [pickup_type, setPickupType] = useState("");
  const [pickup_date, setPickupDate] = useState("");

  const [pickup_address, setPickupAddress] = useState("");
  const [pickup_latitude, setPickupLatitude] = useState("");
  const [pickup_longitude, setPickupLongitude] = useState("");
  const [price, setPrice] = useState(100);
  const [weight, setWeight] = useState("");
  const [special_instructions, setSpecialInstructions] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const token = Cookies.get("jwt");
    if (!token) {

      navigate('/login')
    }
    setPickupLongitude(location.lng);
    setPickupLatitude(location.lat);
    fetchAddresses();
    setCustomer(user?.id);
    
  }, [user?.id]);
 
  const fetchAddresses = () => {
    const Id = user?.id;

    axios
      .get(`/api/addresses/${Id}`)
      .then((response) => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPickupLongitude(location.lng);
    setPickupLatitude(location.lat);
    setCustomer(user?.id);

    // console.log('custome ',customer);
    // console.log('submit lat',pickup_latitude);
    // Create an object with the form data
    const pickupRequestData = {
      customer,
      pickup_type,
      pickup_date,
      price,

      pickup_address,
      pickup_latitude,
      pickup_longitude,

      weight,
      special_instructions,
      contactPerson,
    };
    const requestPickup = () => {
      console.log("this is requestPickup", pickupRequestData);

      axios
        .post("/pickup/pickup-requests/", pickupRequestData, {
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

          // Reset the form fields
          setPickupType("");
          setPickupDate("");

          setPickupAddress("");
          setPickupLatitude("");
          setPickupLongitude("");

          setWeight("");
          setSpecialInstructions("");
          setContactPerson("");
          navigate("/profile/pickuplist");
        })
        .catch((error) => {
          console.error("Error placing the order:", error);
        });
    };
    if (weight > 1000) {
      Swal.fire({
        title: "Weight is Too much",
        text: "We only Pick weight less than 1000kg",
        icon: "question",
        // showCancelButton: true,
        // confirmButtonText: 'Yes,to place order',
        // cancelButtonText: 'Cancel',
      });
      return;
    }
    console.log(
      pickupRequestData,
      "======================================= before pickup request  ============================================="
    );
    if (pickup_type == "Waste") {
      if (weight < 20) {
        setPrice(100);
      } else if (weight < 50) {
        setPrice(200);
      } else {
        setPrice(300);
      }

      Swal.fire({
        title: "Base Charge For this Pickup" + price,
        text: "Confirm the pickup request",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes,to Request Pickup",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          requestPickup();
        } else {
          pass;
        }
      });
    }
    if (pickup_type == "Scrap") {
      console.log(
        "==================================================================================="
      );
      if (weight < 5) {
        Swal.fire({
          title: "Weight Requered?",
          text: "To Pickup Scrap Mininum Weight 5kg",
          icon: "question",
        });
        return;
      }
      if (weight > 500) {
        Swal.fire({
          title: "Weight Requered?",
          text: "Confirm the pickup request minimum" + weight,
          icon: "question",
        });
        return;
      }
      requestPickup();
    }

    
    // Send the pickup request data to the backend or perform further actions
  };

  return (
    <div className="sm:w-[100%] flex flex-col items-center  md:w-fit p-10 my-5 m-auto  border-[0.1px] border-[#878986] ">
      <form onSubmit={handleFormSubmit} className="max-w-[90vh]  ">
        <div className="md:grid md:grid-cols-2 md:gap-4 mb-4">
          <div>
            <label htmlFor="pickup_type" className="font-bold mb-1">
              Pickup Type:
            </label>

            <select
              id="pickup_type"
              value={pickup_type}
              onChange={(e) => setPickupType(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 md:w-full focus:outline-none focus:ring-2 md:h-[80px] bg-[#f5f0e9] text-[#878986] focus:ring-blue-500"
            >
              <option value="">Select Pickup Type</option>
              <option value="Waste">Waste</option>
              <option value="Scrap">Scrap</option>
            </select>
          </div>
          <div>
            <label htmlFor="pickup_date" className="font-bold mb-1">
              Pickup Date:
            </label>
            <input
              required
              type="date"
              id="pickup_date"
              value={pickup_date}
              onChange={(e) => setPickupDate(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 md:w-full focus:outline-none focus:ring-2 md:h-[80px] bg-[#f5f0e9] text-[#878986] focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="pickup_address" className="font-bold mb-1">
            Pickup Address:
          </label>
          {addresses ? (
            <select
              id="address"
              className="w-full h-[100px] rounded-lg border border-gray-300 bg-[#f5f0e9] text-[#878986] py-2 px-3"
              value={pickup_address}
              onChange={(event) => setPickupAddress(event.target.value)}
            >
              <option value="">Select Address</option>
              {addresses.map((address) => (
                <option
                  className="bg-slate-500"
                  key={address.id}
                  value={address.id}
                >
                  {address.name} - {address.address1}, {address.city} ,
                  {address.pincode}
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
        <div className="md:grid md:grid-cols-2 md:gap-4 mb-4">
          <div>
            <label htmlFor="weight" className="font-bold mb-1">
              Weight:
            </label>
            <input
              required
              type="number"
              id="weight"
              placeholder="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded-md py-2 sm:w-[100%] px-3 md:w-full focus:outline-none focus:ring-2 md:h-[80px] bg-[#f5f0e9] text-[#878986] focus:ring-blue-500 "
            />
          </div>
          <div>
            <label htmlFor="contactPerson" className="font-bold mb-1">
              Contact Person:
            </label>
            <input
              required
              type="text"
              id="contactPerson"
              placeholder="contactPerson"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 md:w-full focus:outline-none focus:ring-2 md:h-[80px] bg-[#f5f0e9] text-[#878986] focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="specialInstructions" className="font-bold mb-1">
            Special Instructions:
          </label>
          <textarea
            id="specialInstructions"
            placeholder="specialInstructions"
            value={special_instructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="border border-gray-300 bg-[#f5f0e9] text-[#878986] rounded-md py-2 px-3 md:w-full focus:outline-none focus:ring-2  focus:ring-blue-500"
          />
        </div>
        <div className="w-full min-h-[300px]">
          <AddLocation />
        </div>
        <button
          required
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Request Pickup
        </button>
      </form>
    </div>

    
  );
};

export default PickupRequestForm;
