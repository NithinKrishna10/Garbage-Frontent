import React, { useEffect, useState } from 'react';
import AddLocation from '../addLocation/AddLocation';
import axios from '../../../utils/axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PickupRequestForm = () => {
  const [pickupType, setPickupType] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [pickupLatitude, setPickupLatitude] = useState('');
  const [pickupLongitude, setPickupLongitude] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.user);
  const location = useSelector(state => state.location);
console.log(location.lng); // Accessing the lng value
console.log(location.lat); // Accessing the lat value
  console.log(user, "ksldfjlfjdskjfsjsdoifj");
  // const userId = user?.id;
  useEffect(() => {
    // user &&
    fetchAddresses();
    
}, [user]);
// console.log(user, "urerer");
const fetchAddresses = () => {
      const Id = user?.id
  
    axios
      .get(`/api/addresses/${Id}`)
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


  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const pickupRequestData = {
      pickupType,
      pickupDate,
      pickupTime,
      pickupAddress,
      pickupLatitude,
      pickupLongitude,
      quantity,
      weight,
      specialInstructions,
      contactPerson,
    };

    // Send the pickup request data to the backend or perform further actions
    console.log(pickupRequestData);

    // Reset the form fields
    setPickupType('');
    setPickupDate('');
    setPickupTime('');
    setPickupAddress('');
    setPickupLatitude('');
    setPickupLongitude('');
    setQuantity('');
    setWeight('');
    setSpecialInstructions('');
    setContactPerson('');
  };

  return (
   
//     <div className="flex flex-col items-center p-4">
//     <form onSubmit={handleFormSubmit} className="max-w-md w-full">
//       <div className="mb-4 grid grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="pickupType" className="font-bold mb-1">
//             Pickup Type:
//           </label>
//           <input
//             type="text"
//             id="pickupType"
//             value={pickupType}
//             onChange={(e) => setPickupType(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-3 w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="pickupDate" className="font-bold mb-1">
//             Pickup Date:
//           </label>
//           <input
//             type="date"
//             id="pickupDate"
//             value={pickupDate}
//             onChange={(e) => setPickupDate(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-3 w-full"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="pickupAddress" className="font-bold mb-1">
//           Pickup Address:
//         </label>
//         {addresses ? (
//                 <select
//                   id="address"
//                   className="w-full h-[100px] rounded-lg border border-gray-300  py-2 px-3"
//                   value={pickupAddress}
//                   onChange={(event) => setPickupAddress(event.target.value)}
//                 >
//                   <option value="">Select Address</option>
//                   {addresses.map((address) => (
//                     <option
//                       className="bg-slate-500"
//                       key={address.id}
//                       value={address.id}
//                     >
//                       {address.name} - {address.address1}, {address.city} ,{address.pincode}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <h1
//                   className="cursor-pointer text-blue-500 hover:underline"
//                   onClick={() => {
//                     navigate("profile/address");
//                   }}
//                 >
//                   Add Address
//                 </h1>
//               )}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="weight" className="font-bold mb-1">
//           Weight:
//         </label>
//         <input
//           type="number"
//           id="weight"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           className="border border-gray-300 rounded-md py-2 px-3 w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="specialInstructions" className="font-bold mb-1">
//           Special Instructions:
//         </label>
//         <textarea
//           id="specialInstructions"
//           value={specialInstructions}
//           onChange={(e) => setSpecialInstructions(e.target.value)}
//           className="border border-gray-300 rounded-md py-2 px-3 w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="contactPerson" className="font-bold mb-1">
//           Contact Person:
//         </label>
//         <input
//           type="text"
//           id="contactPerson"
//           value={contactPerson}
//           onChange={(e) => setContactPerson(e.target.value)}
//           className="border border-gray-300 rounded-md py-2 px-3 w-full"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Request Pickup
//       </button>
//     </form>
//     <AddLocation />
//   </div>
// {/* <div className="flex flex-col  items-center p-4">
// <form onSubmit={handleFormSubmit} className="max-w-md w-full">
//   <div className="grid grid-cols-2 gap-4 mb-4">
//     <div>
//       <label htmlFor="pickupType" className="font-bold mb-1">
//         Pickup Type:
//       </label>
//       <input
//         type="text"
//         id="pickupType"
//         value={pickupType}
//         onChange={(e) => setPickupType(e.target.value)}
//         className="border border-gray-300 rounded-md py-2 px-3 w-full"
//       />
//     </div>
//     <div>
//       <label htmlFor="pickupDate" className="font-bold mb-1">
//         Pickup Date:
//       </label>
//       <input
//         type="date"
//         id="pickupDate"
//         value={pickupDate}
//         onChange={(e) => setPickupDate(e.target.value)}
//         className="border border-gray-300 rounded-md py-2 px-3 w-full"
//       />
//     </div>
//   </div>
//   <div className="mb-4">
//     <label htmlFor="pickupAddress" className="font-bold mb-1">
//       Pickup Address:
//     </label>
//     {addresses ? (
//                 <select
//                   id="address"
//                   className="w-full h-[100px] rounded-lg border border-gray-300  py-2 px-3"
//                   value={pickupAddress}
//                   onChange={(event) => setPickupAddress(event.target.value)}
//                 >
//                   <option value="">Select Address</option>
//                   {addresses.map((address) => (
//                     <option
//                       className="bg-slate-500"
//                       key={address.id}
//                       value={address.id}
//                     >
//                       {address.name} - {address.address1}, {address.city} ,{address.pincode}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <h1
//                   className="cursor-pointer text-blue-500 hover:underline"
//                   onClick={() => {
//                     navigate("profile/address");
//                   }}
//                 >
//                   Add Address
//                 </h1>
//               )}
//   </div>
//   <div className="grid grid-cols-2 gap-4 mb-4">
//     <div>
//       <label htmlFor="weight" className="font-bold mb-1">
//         Weight:
//       </label>
//       <input
//         type="number"
//         id="weight"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//         className="border border-gray-300 rounded-md py-2 px-3 w-full"
//       />
//     </div>
//     <div>
//       <label htmlFor="contactPerson" className="font-bold mb-1">
//         Contact Person:
//       </label>
//       <input
//         type="text"
//         id="contactPerson"
//         value={contactPerson}
//         onChange={(e) => setContactPerson(e.target.value)}
//         className="border border-gray-300 rounded-md py-2 px-3 w-full"
//       />
//     </div>
//   </div>
//   <div className="mb-4">
//     <label htmlFor="specialInstructions" className="font-bold mb-1">
//       Special Instructions:
//     </label>
//     <textarea
//           id="specialInstructions"
//           value={specialInstructions}
//           onChange={(e) => setSpecialInstructions(e.target.value)}
//           className="border border-gray-300 rounded-md py-2 px-3 w-full"
//         />
//   </div>
//   <AddLocation />
//   <button
//     type="submit"
//     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//   >
//     Request Pickup
//   </button>
// </form>
// </div> */}

<div className="flex flex-col items-center p-4">
  <form onSubmit={handleFormSubmit} className="max-w-md w-full">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="pickupType" className="font-bold mb-1">
          Pickup Type:
        </label>
        <input
          type="text"
          id="pickupType"
          value={pickupType}
          onChange={(e) => setPickupType(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="pickupDate" className="font-bold mb-1">
          Pickup Date:
        </label>
        <input
          type="date"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="pickupAddress" className="font-bold mb-1">
        Pickup Address:
      </label>
      {addresses ? (
                <select
                  id="address"
                  className="w-full h-[100px] rounded-lg border border-gray-300  py-2 px-3"
                  value={pickupAddress}
                  onChange={(event) => setPickupAddress(event.target.value)}
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
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="weight" className="font-bold mb-1">
          Weight:
        </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="contactPerson" className="font-bold mb-1">
          Contact Person:
        </label>
        <input
          type="text"
          id="contactPerson"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="specialInstructions" className="font-bold mb-1">
        Special Instructions:
      </label>
      <textarea
        id="specialInstructions"
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
        className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <AddLocation />
    <button
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
