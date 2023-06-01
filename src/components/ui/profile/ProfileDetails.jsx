
// export default ProfileDetails

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'z
import React,{ useCallback, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { verifyToken } from '../../../utils/Constant';
import axios from '../../../utils/axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function ProfileDetails() {


    const handleChange = useCallback((event) => {
        setValues((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      }, []);
    
      const handleSubmit = useCallback((event) => {
        event.preventDefault();
      }, []);
    
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const navigate = useNavigate();
    
      useEffect(() => {
        const token = Cookies.get('jwt');
        if 
        (token) {
        //   navigate('/login');
        // } else {
          axios
            .get(verifyToken, {
              headers: {
                Authorization: `${token}`,
              },
            })
            .then((res) => {
              console.log(res);
              setName(res.data.user.name);
              setEmail(res.data.user.email);
              setPhone(res.data.user.phone);
            });
        }
      }, []);

      
    
  return (
    
// <>
//     <div class="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0 m-auto mt-40">
// <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border ">
// <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
// <div class="flex items-center">
// <p class="mb-0 dark:text-white/80">Edit Profile</p>
// <button type="button" class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Settings</button>
// </div>
// </div>
// <div class="flex-auto p-6">
// <p class="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">User Information</p>
// <div class="flex flex-wrap -mx-3">
// <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
// <div class="mb-4">
// <label for="username" class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Username</label>
// <input type="text" name="username" value={name} class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
// </div>
// </div>
// <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
// <div class="mb-4">
// <label for="email" class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Email address</label>
// <input type="email" name="email" value={email} class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
// </div>
// </div>
// <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
// <div class="mb-4">
// <label for="first name" class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">First name</label>
// <input type="text" name="first name" value={name} class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
// </div>
// </div>
// <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
// <div class="mb-4">
// <label for="last name" class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Phone Number</label>
// <input type="text" name="last name" value={phone} class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
// </div>
// </div>
// </div>
// <hr class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent "/>
// <p class="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">Contact Information</p>
// <div class="flex flex-wrap -mx-3">
// <div class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">

// </div>
// </div>
// </div>
// </div>
// </div>
// </>


<>
<div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0 m-auto mt-20 ">
  <div className="relative  flex flex-col min-w-0 break-words bg-gray-600 border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
    <div className="border-gray-500 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
      <div className="flex items-center">
        <p className="mb-0 dark:text-white/80">Edit Profile</p>
        <button type="button" className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Settings</button>
      </div>
    </div>
    <div className="flex-auto p-6">
      <div className="flex justify-center mb-6">
        <img src='https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg' alt="Profile Picture" className="w-40 h-40 rounded-full object-cover mx-auto" />
      </div>
      <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">User Information</p>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
          <div className="mb-4">
            <label htmlFor="username" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Username</label>
            <input type="text" name="username" value={name} className="focus:shadow-primary-outline dark:bg-slate-850  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
          </div>
        </div>
        <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
          <div className="mb-4">
            <label htmlFor="email" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Email address</label>
            <input type="email" name="email" value={email} className="focus:shadow-primary-outline dark:bg-slate-850  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
          </div>
        </div>
        <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
          <div className="mb-4">
            <label htmlFor="first name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">First name</label>
            <input type="text" name="first name" value={name} className="focus:shadow-primary-outline dark:bg-slate-850  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
          </div>
        </div>
        <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
          <div className="mb-4">
            <label htmlFor="last name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Phone Number</label>
            <input type="text" name="last name" value={phone} className="focus:shadow-primary-outline dark:bg-slate-850  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
          </div>
        </div>
      </div>
      <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
      <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">Contact Information</p>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
          {/* Add your contact information fields here */}
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
