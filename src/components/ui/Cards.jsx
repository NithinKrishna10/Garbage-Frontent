import React from 'react';
import Single from '../../assets/wastebag.jpg'
import Double from '../../assets/wastebag.jpg'
import Triple from '../../assets/wastebag.jpg'
const Cards = () => {
  return (
    // <div className='w-full py-[10rem] px-4 bg-white'>
    //   <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    //       <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    //           <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-t-lg' src={Single} alt="/" />
    //           <h2 className='text-2xl font-bold text-center py-8'></h2>
    //           <p className='text-center text-4xl font-bold'>$149</p>
    //           <div className='text-center font-medium'>
    //               <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
    //               <p className='py-2 border-b mx-8'>1 Granted User</p>
    //               <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
    //           </div>
    //           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    //       </div>
    //       <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
    //           <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
    //           <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
    //           <p className='text-center text-4xl font-bold'>$149</p>
    //           <div className='text-center font-medium'>
    //               <p className='py-2 border-b mx-8 mt-8'>500 kg Storage</p>
    //               <p className='py-2 border-b mx-8'>1 Granted User</p>
    //               <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
    //           </div>
    //           <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    //       </div>
    //       <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    //           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
    //           <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
    //           <p className='text-center text-4xl font-bold'>$149</p>
    //           <div className='text-center font-medium'>
    //               <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
    //               <p className='py-2 border-b mx-8'>1 Granted User</p>
    //               <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
    //           </div>
    //           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    //       </div>
    //   </div>
    // </div>
    <div className='w-full py-[10rem] px-4 bg-white'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-t-lg' src={Single} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Basic Waste Management</h2>
      <p className='text-center text-4xl font-bold'>₨49</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>500 kg Waste Collection</p>
        <p className='py-2 border-b mx-8'>1 Pickup Request</p>
        <p className='py-2 border-b mx-8'>Limited Recycling Options</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Advanced Waste Management</h2>
      <p className='text-center text-4xl font-bold'>₨99</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>1,000 kg Waste Collection</p>
        <p className='py-2 border-b mx-8'>2 Pickup Requests</p>
        <p className='py-2 border-b mx-8'>Expanded Recycling Options</p>
      </div>
      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Premium Waste Management</h2>
      <p className='text-center text-4xl font-bold'>₨149</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>Unlimited Waste Collection</p>
        <p className='py-2 border-b mx-8'>3 Pickup Requests</p>
        <p className='py-2 border-b mx-8'>Customized Recycling Solutions</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
  </div>
</div>

  );
};


export default Cards;