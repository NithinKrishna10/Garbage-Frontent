import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import { useParams } from 'react-router-dom'

const PickupItems = () => {
    // const {id} = useParams()
    const { id } = useParams();
    const [pickupItems,setPickupItems] = useState([])

    useEffect(()=>{

        fetchPickupItems()
    },[])

    const fetchPickupItems=()=>{
        axios
        .get(`adminside/pickupitem/${id}`)
        .then((response)=>{
            console.log(response);
            setPickupItems(response.data)
    
        })
    }
  return (

<div className="border border-gray-400 mt-10 bg-gray-100 ">
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


  )
}

export default PickupItems
