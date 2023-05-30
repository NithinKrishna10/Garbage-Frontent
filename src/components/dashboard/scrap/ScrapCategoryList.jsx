import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { baseUrl } from '../../../utils/Constant';
import { useNavigate } from 'react-router-dom';

const ScrapCategoryList = () => {
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
      const response = await axios.get('/adminside/scrap-categories/');
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

      const response = await axios.post('/adminside/scrap-categories/', formDataWithImage);
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
  const redirectToOrderDetail = (catId) => {
    navigate(`/admin/ScrapCatEdit/${catId}`);
  };


  return (
    

    <div className="container mx-auto p-4">

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
        <div className='flex'>

  <h1 className="text-2xl font-bold mb-4 m-auto">Waste Categories</h1>
  <button className='ml-auto' onClick={changeShow}>Add Category</button>
        </div>
  <table className="border-collapse border border-gray-300 w-full">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2 border border-gray-300">Image</th>
        <th className="p-2 border border-gray-300">Name</th>
        <th className="p-2 border border-gray-300">Description</th>
        <th className="p-2 border border-gray-300">Date</th>
        <th className="p-2 border border-gray-300">Edit</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr key={category.id}>
          <td className="p-2 border border-gray-300">
            {category.image && (
              <img
                src={baseUrl + category.image}
                alt={category.name}
                className="w-20 h-20 object-cover rounded"
              />
            )}
          </td>
          <td className="p-2 border border-gray-300">{category.name}</td>
          <td className="p-2 border border-gray-300">{category.description}</td>
          <td className="p-2 border border-gray-300">{category.created_at }</td>
          <td className="p-2 border border-gray-300">{category.hazardous ? 'Yes' : 'No'}</td>
          <td
                  className="py-2 border border-b-black"
                  onClick={() => redirectToOrderDetail(category.id)}
                >
                  Update
                </td>
        </tr>
      ))}
    </tbody>
  </table>
  
</div>

  );
};

export default ScrapCategoryList;
