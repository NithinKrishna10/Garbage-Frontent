import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { baseUrl } from '../../../utils/Constant';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const WasteAdminList = () => {
  const [wastes, setScraps] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm,setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    category : '',
    description: '',
    weight : 0,
    price : 0,
    is_active: false,
    image: null,
  });
  const navigate =useNavigate();
  useEffect(() => {
    fetchCategories();
    fetchWaste();
  }, []);


  const fetchCategories = async () => {
    try {
      const response = await axios.get('/adminside/scrap-categories/');
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchWaste = async () => {
    try {
      const response = await axios.get('/adminside/waste-list/');
      setScraps(response.data);
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
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit the form?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        submitForm();
        setShowForm(false)
      }
    });
  };
  
  const submitForm = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('category', formData.category);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('weight', formData.weight);
      formDataWithImage.append('price', formData.price);
      formDataWithImage.append('is_active', formData.is_active);
      formDataWithImage.append('image', formData.image);
  
      const response = await axios.post('/adminside/scraps/', formDataWithImage);
      setFormData({
        name: '',
        category: 0,
        description: '',
        weight: 0,
        price: 0,
        is_active: false,
        image: null,
      });
      setScraps((prevCategories) => [...prevCategories, response.data]);
  
      Swal.fire('Submitted!', 'The form has been submitted successfully.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'An error occurred while submitting the form.', 'error');
    }
  };
  const changeShow = ()=>{
    setShowForm(!showForm)
  }
  const redirectToWasteDetail = (catId) => {
    navigate(`/admin/wasteEdit/${catId}`);
  };


  return (
    
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      {
  showForm && (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mt-4 mb-6">Add Waste Category</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
          required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name},{cat.id}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
          required
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight:
          </label>
          <input
          required
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
          required
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <input
          required
            type="checkbox"
            id="is_active"
            name="is_active"
            checked={formData.is_active}
            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
            className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="is_active" className="ml-2 block text-sm font-medium text-gray-700">
            Active
          </label>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image:
          </label>
          <input
          required
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

    <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500  border border-gray-300 focus:outline-none hover:bg-blue-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={changeShow}>
                {/* <span class="sr-only">Action button</span> */}
                ADD Scrap
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
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Weight
                </th>
              
                <th scope="col" class="px-6 py-3">
                   Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Edit
                </th>
            </tr>
        </thead>
        <tbody>
        {wastes.map((category) => (
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
                    {category.category}
                </td>
                <td class="px-6 py-4">
                    {category.description}
                </td>
                <td class="px-6 py-4">
                    {category.weight}
                </td>
                <td class="px-6 py-4">
                    {category.price}
                </td>
              
                <td class="px-6 py-4">
                  
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => redirectToWasteDetail(category.id)}>Edit Scrap</button>
                </td>
            </tr>
           
           ))}
            
        </tbody>
    </table>
</div>

);
};

export default WasteAdminList;
