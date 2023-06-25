import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { baseUrl } from '../../../utils/Constant';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const WasteCategoryList = () => {
  const token = Cookies.get("admin_jwt");
  const [categories, setCategories] = useState([]);
  const [showForm,setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    recyclable: false,
    hazardous: false,
    image: null,
  });
  const navigate =useNavigate();
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/adminside/waste-categories/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('recyclable', formData.recyclable);
      formDataWithImage.append('hazardous', formData.hazardous);
      formDataWithImage.append('image', formData.image);

      const response = await axios.post('/adminside/waste-categories/', formDataWithImage, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFormData({
        name: '',
        description: '',
        recyclable: false,
        hazardous: false,
        image: null,
      });
      setCategories((prevCategories) => [...prevCategories, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const changeShow = ()=>{
    setShowForm(!showForm)
  }
  const redirectToWasteCategoryDetail = (catId) => {
    navigate(`/admin/wasteCatEdit/${catId}`);
  };


  return (
    


<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">


{
            showForm &&
            <div>
                
  <h2 className="text-xl font-bold mt-4 mb-2">Add Waste Category</h2>
  <form onSubmit={handleSubmit} className="w-full max-w-sm">
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Description:
      </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="recyclable" className="block text-sm font-medium text-gray-700">
        Recyclable:
      </label>
      <input
        type="checkbox"
        id="recyclable"
        name="recyclable"
        checked={formData.recyclable}
        onChange={handleCheckboxChange}
        className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="hazardous" className="block text-sm font-medium text-gray-700">
        Hazardous:
      </label>
      <input
        type="checkbox"
        id="hazardous"
        name="hazardous"
        checked={formData.hazardous}
        onChange={handleCheckboxChange}
        className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
        Image:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleImageChange}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <button
      type="submit"
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add
    </button>
  </form>
            </div>


        }

<div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
  <div>
      <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500  border border-gray-300 focus:outline-none hover:bg-blue-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={changeShow}>
          {/* <span class="sr-only">Action button</span> */}
          ADD Category
          {/* <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
      </button>
     

  </div>
  <label for="table-search" class="sr-only">Search</label>
  <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input onChange={(e) => setSearchQuery(e.target.value)} type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
  </div>
</div>
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      
  
      <tr>
          <th scope="col" class="p-4">
              <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
          </th>
          <th scope="col" class="px-6 py-3">
             Image
          </th>
          <th scope="col" class="px-6 py-3">
              Name
          </th>
          <th scope="col" class="px-6 py-3">
              Description
          </th>
          
          <th scope="col" class="px-6 py-3">
          Recyclable
          </th>
          <th scope="col" class="px-6 py-3">
          Hazardous
          </th>
          <th scope="col" class="px-6 py-3">
            Edit
          </th>
      </tr>
  </thead>
  <tbody>
  {categories.map((category) => (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
              <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
          </td>
          <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          {category.image && (
   
            <img class="w-10 h-10 rounded-full" src={baseUrl + category.image} alt="Jese image"/>
      )}
              {/* <div class="pl-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
              </div>   */}
          </th>
          <td class="px-6 py-4">
              {category.name}
          </td>
         
          <td class="px-6 py-4">
              {category.description}
          </td>
          <td class="px-6 py-4">
              {category.recyclable
              ? 
              "yes" : "no"  }
          </td>
          <td class="px-6 py-4">
              {category.hazardous ? 
            "yes" : "no"  
            }
          </td>
        
          <td class="px-6 py-4">
            
            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => redirectToWasteCategoryDetail(category.id)}>Edit Waste</button>
          </td>
      </tr>
     
     ))}
      
  </tbody>
</table>
</div>

  );
};

export default WasteCategoryList;









