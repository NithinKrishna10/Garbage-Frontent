import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../../../utils/axios'
import { useSelector } from 'react-redux';


const UserTopCards = () => {
    const { user } = useSelector((state) => state.user);
    // /console.log(user,'====================================top card=========================================');
    const [dash,setDash]=useState()
    const [total_weight,setTotalWeight] = useState(0)
    const [user_total_weight,setUserTotalWeight] = useState(0)
    const [scrap,setScrap] = useState(0)
    const [scrap_price,setScrapPrice] = useState(0)
    const [waste,setWaste] = useState(0);
    const [waste_price,setWastePrice] = useState(0);

    const [achievements,setAchivements] = useState()
    const [pickup_tracker,setPickupTracker] = useState()

    const [pickup_count,setPickupCount] = useState()
    // console.log(user,'============================================================s');

    useEffect(()=>{
        if (user) {
            fetchData();
          }
},[user])


const fetchData=()=>{
   
    const id = user?.id
    axios.get(`/api/dash/${id}`).then((response)=>{
        console.log(response.data);
        // console.log(response.data.achievement);
        // setPickupTracker(response.data.pickup_tracker)
        setTotalWeight(response.data.total_weight)
        setUserTotalWeight(response.data.user_total_weight)
        setScrap(response.data.scrap_weight)
        setScrapPrice(response.data.scrap_price)
        setWaste(response.data.waste_weight)
        setWastePrice(response.data.waste_price)
        setPickupCount(response.data.pickup_count)
        if (response.data.achievement!='None'){

            setAchivements(response.data.achievement)
        }
        setDash(response.data)
    }).catch((error)=>{
        console.error(error);
    })
}

// console.log(pickup_tracker,'==================================================================================================================');
// console.log(achievements);
// console.log('==================================================================================================================');

  return (
    <Fragment>

    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{total_weight}KG</p>
                <p className='text-gray-600'>Total Waste Collected</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{user_total_weight} KG</p>
                <p className='text-gray-600'>Waste Collected From YOU</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{scrap}KG</p>
                <p className='text-gray-600'>Recycled</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p>
        </div>
    </div>
{ achievements &&
<div>
<h1 className='text-2xl font-bold text-center'>Achievments</h1>
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        
            { achievements.map((achievement)=>(
                
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>

            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{achievement.name}</p>
                <p className='text-gray-600'>{achievement.description}</p>
                <p>{achievement.criteria}</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
            ))
        }
       
        </div>
       
    </div>
}
    

    <div class="mt-3 mb-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
  <div class="!z-5 relative flex  bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-7 w-7"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Earnings this month</p>
      <h4 class="text-xl font-bold text-navy-700 ">₹{scrap_price}</h4>
    </div>
  </div>
  <div class="!z-5 relative flex  bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
            <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
            <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Spend this month</p>
      <h4 class="text-xl font-bold text-navy-700 ">₹{waste_price}</h4>
    </div>
  </div>
  <div class="!z-5 relative flex   bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-7 w-7"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Profit</p>
      <h4 class="text-xl font-bold text-navy-700 ">{scrap_price-waste_price}</h4>
    </div>
  </div>
 
  <div class="!z-5 relative flex  bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
          </svg>
        </span>
      </div>
    </div>
    
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Pickup on this month</p>
      <h4 class="text-xl font-bold text-navy-700 ">{pickup_count}</h4>
    </div>
  </div>
  <div class="!z-5 relative flex  bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-7 w-7"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Scrap Waste Weight</p>
      <h4 class="text-xl font-bold text-navy-700 ">{scrap}KG</h4>
    </div>
  </div>
  <div class="!z-5 relative flex  bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <span class="flex items-center text-brand-500 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Waste Weight</p>
      <h4 class="text-xl font-bold text-navy-700 ">{waste}KG</h4>
    </div>
  </div>
</div>
    </Fragment>
  )
}

export default UserTopCards
