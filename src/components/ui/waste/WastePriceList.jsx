import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/Constant';


export default function WastePriceList() {
    const [wastes, setWastes] = useState([]);

    const navigate =useNavigate();
    useEffect(() => {
   
      fetchWaste();
    }, []);
  

    const fetchWaste = async () => {
        try {
          const response = await axios.get('/waste/wastes/');
          setWastes(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <Fragment>

    {
      wastes.map((waste) =>(       

  <div className="flex flex-col md:flex-row  mt-10 md:mb-10 md:mx-auto max-w-[1000px] h-auto md:h-[260px] w-[60%] sm:m-auto border border-[#f5f0e9]">
  <div className="h-48 md:h-[100%] bg-[#f5f0e9] w-full md:w-[30%] p-auto ">
    <img src={baseUrl + waste.image} alt="" className="w-full h-full object-contain mx-auto" />
  </div>
  <div className="text-center md:text-left p-6 md:p-10 flex flex-col justify-center">
    <h1 className="text-2xl md:text-2xl font-bold mb-6">
      {waste.name}
    </h1>
    <div className="mb-6">
      <h2 className="text-lg md:text-lg text-green-400">
        Holdse: <span className="text-green-400">{waste.weight}</span>
      </h2>
    </div>
    <div className="mb-6">
      <h2 className="text-lg md:text-lg text-green-400">
        Thickness: <span className="text-green-400">{waste.thickness}</span>
      </h2>
    </div> 
    <div>
      <h2 className="text-lg md:text-lg text-green-400">
        <span className="text-green-400">Best Use:</span> {waste.category.name}
      </h2>
    </div>
  </div>
  <div className="mt-6 md:mt-0 md:mr-0 border-l border-black p-6 md:p-10 flex flex-col justify-center items-center md:ml-auto">
    <h1 className="text-3xl md:text-3xl font-bold">
      {waste.price}₨
    </h1>
    <button className="mt-8 px-8 py-4 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold transition-colors duration-300">
      Book Now
    </button>
  </div>
</div>


   ))
  }
{/* // </div> */}
  </Fragment>
  )
}
