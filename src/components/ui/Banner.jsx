import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="text-white bg-[#538E4E] border-t-4 border-grey-500">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
      style={{ backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('http://layerdrops.com/wostin/main-html/assets/images/resources/main-slider-three-building.png')",  backgroundPosition: 'centre'}}
      >
        <p className="text-white font-bold p-2">
          HOME & BUSSINESS WASTE PICKUP SOLUTION
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GarbageGO
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Reliable & Affordable Waste Services
          </p>
          {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Experience in waste disposal management services .
        </p>
        <button className="bg-[#eadb06] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-white hover:text-[#538E4E]" onClick={()=>{
          navigate('/pickup')
        }}>
          Request Pickup
        </button>
      </div>
    </div>
  );
};

export default Banner;
