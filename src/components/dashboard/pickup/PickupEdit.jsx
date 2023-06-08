import React, { useState, useEffect, Fragment } from "react";
import axios from "../../../utils/axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditPickupRequest = () => {
  const { id } = useParams();
  const [pickupRequest, setPickupRequest] = useState(null);
  const [pickup_type, setPickupType] = useState("");
  const [pickup_date, setPickupDate] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [special_instructions, setSpecialInstructions] = useState("");
  const [pickup_status,setPickupstatus] = useState("")
  const [pickupItems,setPickupItems] = useState([])

//   name = models.CharField(max_length=100)
//   description = models.TextField()
//   weight = models.DecimalField(max_digits=10, decimal_places=2)
//   price = models.DecimalField(max_digits=10, decimal_places=2)
  const [name ,setName] =useState("")
  const [description,setDescription] =useState("")
  const [itemWeight ,setItemWeight] =useState(0)
  const [itemPrice, setItemPrice] = useState("");
const [showAddItem,setShowAddItem]= useState(false)

  useEffect(() => {
    fetchPickupRequest();
    fetchPickupItems();
  }, []);

  const fetchPickupRequest = () => {
    axios
      .get(`/adminside/pickup-request/${id}`)
      .then((response) => {
        setPickupRequest(response.data);
        setPickupType(response.data.pickup_type);
        setPickupDate(response.data.pickup_date);
        setWeight(response.data.weight);
        setPrice(response.data.price);
        setSpecialInstructions(response.data.special_instructions);
        setPickupstatus(response.data.pickup_status)
      })
      .catch((error) => {
        console.error(error);
      });
  };

const fetchPickupItems=()=>{
    axios
    .get(`adminside/pickupitem/${id}`)
    .then((response)=>{
        console.log(response);
        setPickupItems(response.data)

    })
}

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedPickupRequest = {
    
      pickup_type,
      is_active:true,
      pickup_status,
      weight,
      price,
      special_instructions,

    };
    console.log(updatedPickupRequest,'======================================== ===========================================');
    axios
      .patch(`/adminside/pickup-request/${id}/`, updatedPickupRequest)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Pickup Status updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log("Pickup request updated successfully:", response.data);
        // Perform any additional actions after successful update
      })
      .catch((error) => {
        console.error("Error updating pickup request:", error);
        // Handle error
      });
  };


const handeleItems=()=>{

const postItemData ={
    pickup_request:id,
    name,
    price : itemPrice,
    weight:itemWeight,
    description
}

axios.post('adminside/pickup-item' ,postItemData)
.then((response)=>{
    console.log('posted item' ,response.data);
}).catch((error)=>{
    console.error("Error updating pickup request:", error);
})
}



  if (!pickupRequest) {
    return <p>Loading...</p>;
  }

  return (



<Fragment>
  <div className="bg-gray-900 h-auto max-w-3xl mx-auto flex flex-col items-center justify-center mt-10">
    <div className="bg-gray-400 shadow-lg rounded-md p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Edit Scrap</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex m-auto">
          <div className="mx-auto w-[45%]">
            <div className="mb-6">
              <label htmlFor="name" className="text-white mb-2 block">
                Waste Type:
              </label>
              <input
                type="text"
                id="name"
                value={pickup_type}
                onChange={(e) => setPickupType(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            {/* <div className="mb-6">
              <label htmlFor="category" className="text-white mb-2 block">
                Status:
              </label>
              <input
                type="text"
                id="category"
                value={pickup_status}
                onChange={(e) => setPickupstatus(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
              
            </div> */}
            <div className="mb-6">
  <label htmlFor="category" className="text-white mb-2 block">
    Status:
  </label>
  <select
    id="category"
    value={pickup_status}
    onChange={(e) => setPickupstatus(e.target.value)}
    className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
  >
    <option value="option1">{pickupRequest.pickup_status}</option>
    <option value="option2">Accepted</option>
    <option value="option3">Completed</option>
  </select>
</div>

          </div>
          <div className="mx-auto w-[45%]">
            <div className="mb-6">
              <label htmlFor="weight" className="text-white mb-2 block">
                Weight:
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="price" className="text-white mb-2 block">
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="text-white mb-2 block">
            Special Instructions:
          </label>
          <input
            type="text"
            value={special_instructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="bg-gray-700 text-white rounded-md py-2 px-3 h-10 w-full"
          ></input>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Update Scrap
          </button>
          <button
            type="button"
            // onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Delete Scrap
          </button>
        </div>
      </form>
    </div>
  </div>
{ showAddItem&&
  <div className="bg-gray-900 h-auto max-w-3xl mx-auto flex flex-col items-center justify-center mt-10">
    <div className="bg-gray-400 shadow-lg rounded-md p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Add Address</h2>
      <form onSubmit={handeleItems}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-white mb-2 block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 text-white rounded-md py-2 px-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-white mb-2 block">
              Description:
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-700 text-white rounded-md py-2 px-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="text-white mb-2 block">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="bg-gray-700 text-white rounded-md py-2 px-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="weight" className="text-white mb-2 block">
              Weight:
            </label>
            <input
              type="number"
              id="weight"
              value={itemWeight}
              onChange={(e) => setItemWeight(e.target.value)}
              className="bg-gray-700 text-white rounded-md py-2 px-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
}
{/* 
  <div>
  <button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-4" onClick={()=>{
    setShowAddItem(!showAddItem)
  }}>Add Item</button>
  <div className="flex flex-wrap">
    {pickupItems.map((item, index) => (
      <div
        key={item.id}
        className={`bg-white rounded-lg shadow-md p-4 mb-4 max-w-xs mx-auto ${
          index >= 4 ? 'hidden md:block' : '' // Hide items after the fourth item on medium-sized screens and larger
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Items</h3>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-gray-700 font-bold">Item Name:</p>
          <p className="text-gray-600">{item.name}</p>
          <p className="text-gray-700 font-bold">Active:</p>
          <p className="text-gray-600">{item.is_active ? 'Yes' : 'No'}</p>
          <p className="text-gray-700 font-bold">Weight:</p>
          <p className="text-gray-600">{item.weight}</p>
          <p className="text-gray-700 font-bold">Price:</p>
          <p className="text-gray-600">{item.price}</p>
          <p className="text-gray-700 font-bold">Updated At:</p>
          <p className="text-gray-600">
            {new Date(item.updated_at).toLocaleDateString('en-us', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    ))}
  </div>
</div> */}


<div className="border border-gray-400 mt-10 bg-gray-100 ">
<button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-4" onClick={()=>{
    setShowAddItem(!showAddItem)
  }}>Add Item</button>
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Pickup Items</h2>
    <div className="flex flex-wrap">
      {pickupItems.map((item, index) => (
        <div
          key={item.id}
          className={`bg-green-200 rounded-lg shadow-md p-4 mb-4 max-w-xs mx-auto transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
            index >= 4 ? 'hidden md:block' : ''
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">{item.name}</h3>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700 font-bold">Item Name:</p>
            <p className="text-gray-600">{item.name}</p>
            <p className="text-gray-700 font-bold">Active:</p>
            <p className="text-gray-600">{item.is_active ? 'Yes' : 'No'}</p>
            <p className="text-gray-700 font-bold">Weight:</p>
            <p className="text-gray-600">{item.weight}</p>
            <p className="text-gray-700 font-bold">Price:</p>
            <p className="text-gray-600">{item.price}</p>
            <p className="text-gray-700 font-bold">Updated At:</p>
            <p className="text-gray-600">
              {new Date(item.updated_at).toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* ? */}
</Fragment>


  );
};

export default EditPickupRequest;
