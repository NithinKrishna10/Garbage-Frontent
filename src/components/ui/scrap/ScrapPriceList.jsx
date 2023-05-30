// import React from 'react'

// export default function ScrapPriceList() {
//   return (
//     <div className='flex'>
//         <div>
//             <img src="http://layerdrops.com/wostin/main-html/assets/images/icon/bagster-1-1.png" alt="" />
//         </div>
//       <div>
//         <h1>House Use Bags</h1>
//         <h2>Holds : <span className='text-green-400'>100kg</span> </h2>
//         <h2>Thicknes : <span className='text-green-400'></span> </h2>
//         <h2>Category : <span className='text-green-400'>Home trash</span> </h2>

//       </div>
//       <div>
//         <h1>$100Rs</h1>
// <button className='bg-yellow-200'>BookNow</button>
//       </div>
//     </div>
//   )
// }
// import React from 'react';

// export default function ScrapPriceList() {
//   return (
//     <div className="flex flex-col items-center md:flex-row md:items-start justify-center py-4">
//       <div className="md:mr-8">
//         <img src="http://layerdrops.com/wostin/main-html/assets/images/icon/bagster-1-1.png" alt="" className="w-32 h-32 object-contain" />
//       </div>
//       <div className="text-center md:text-left">
//         <h1 className="text-2xl font-bold mb-2">House Use Bags</h1>
//         <div className="mb-2">
//           <h2>
//             Holds: <span className="text-green-400">100kg</span>
//           </h2>
//         </div>
//         <div className="mb-2">
//           <h2>
//             Thickness: <span className="text-green-400"></span>
//           </h2>
//         </div>
//         <div>
//           <h2>
//             Category: <span className="text-green-400">Home trash</span>
//           </h2>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h1 className="text-3xl font-bold">$100Rs</h1>
//         <button className="mt-4 px-6 py-2 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold transition-colors duration-300">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// export default function ScrapPriceList() {
//   return (
//     <div className="flex  md:flex-row md:items-start   md:w-[70%] h-[1] bg-gray-300 mt-10 mb-10 mx-auto">
//       <div className="">
//         <img src="http://layerdrops.com/wostin/main-html/assets/images/icon/bagster-1-1.png" alt="" className="w-[100%] "  />
//       </div>
//       <div className="text-center md:text-left p-10">
//         <div className="justify-center items-center  m-auto ">
//           <h1 className="text-2xl font-bold mb-6">House Use Bags</h1>
//           <div className="mb-6">
//             <h2 className="text-2xl text-green-400">
//               Holds: <span className="text-green-400">100kg</span>
//             </h2>
//           </div>
//           <div className="mb-6">
//             <h2 className="text-2xl text-green-400">
//               Thickness: <span className="text-green-400">2mm</span>
//             </h2>
//           </div>
//           <div>
//             <h2 className="text-2xl text-green-400">
//               <span className="text-green-400">Category:</span> Home trash
//             </h2>
//           </div>
//         </div>
//       </div>
//       {/* <div className="mt-6 left-0 bg-blue-50 h-[100%] ">
//         <h1 className="text-3xl font-bold">$100Rs</h1>
//         <button className="mt-8 px-10 py-4 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold transition-colors duration-300">
//           Book Now
//         </button>
//       </div> */}
//         <div className="mt-6 md:mt-0 bg-blue-50 p-6 md:p-10 flex flex-col justify-center items-center">
//         <h1 className="text-4xl md:text-5xl font-bold">$100Rs</h1>
//         <button className="mt-8 px-8 py-4 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold transition-colors duration-300">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function ScrapPriceList() {
  return (
    <div className="flex flex-col md:flex-row   bg-gray-300 mt-10 mb-10 mx-auto max-w-[1000px] h-[286px]">
      <div className="h-[100%] bg-[#f5f0e9] w-[30%] p-auto">
        <img src="http://layerdrops.com/wostin/main-html/assets/images/icon/bagster-1-1.png" alt="" className="w-56 h-[100%] object-contain mx-auto md:mx-0" />
      </div>
      <div className="text-center md:text-left p-6 md:p-10">
        <div className="justify-center items-center mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">House Use Bags</h1>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl text-green-400">
              Holds: <span className="text-green-400">100kg</span>
            </h2>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl text-green-400">
              Thickness: <span className="text-green-400">2mm</span>
            </h2>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-green-400">
              <span className="text-green-400">Category:</span> Home trash
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:mr-0 bg-blue-50 p-6 md:p-10 flex flex-col justify-center items-center ml-auto">
        <h1 className="text-4xl md:text-5xl font-bold">$100Rs</h1>
        <button className="mt-8 px-8 py-4 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}
