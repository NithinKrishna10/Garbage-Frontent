
import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ScrapEditForm = () => {
      const { id } = useParams();
  const [scrap, setScrap] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [is_active, setIsActive] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    fetchScrap();
  }, []);

  const fetchScrap = () => {
    axios
      .get(`/adminside/scrapss/${id}`)
      .then((response) => {
        const { name, category, description, weight, price, image, is_active } = response.data;
        setScrap(response.data);
        setName(name);
        setCategory(category);
        setDescription(description);
        setWeight(weight);
        setPrice(price);
        setImage(image);
        setIsActive(is_active);
      })
      .catch((error) => {
        console.error('Error fetching scrap:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const updatedScrap = {
    //   name,
    //   category,
    //   description,
    //   weight,
    //   price,
    //   image,
    //   is_active,
    // };
    const updatedScrap = new FormData();
    updatedScrap.append('name', name);
    updatedScrap.append('category', category);
    updatedScrap.append('description', description);
    updatedScrap.append('weight', weight);
    updatedScrap.append('price', price);
    updatedScrap.append('image', image);
    updatedScrap.append('is_active', is_active);

    axios
      .patch(`/adminside/scrapss/${id}/`, updatedScrap)
      .then((response) => {
        console.log('Scrap updated successfully:', response.data);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Waste category updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
      })
      .catch((error) => {
        console.error('Error updating scrap:', error);
        // Handle error, e.g., show an error message
      });
  };

  
  const handleDelete = () => {
 
    Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
            axios
            .delete(`/adminside/scrapss/${id}`)
            .then((response) => {
              console.log('Scrap deleted successfully:', response.data);
              navigate('/admin/scrap')
              // Handle success, e.g., redirect to scrap list page
            })
            .catch((error) => {
              console.error('Error deleting scrap:', error);
              // Handle error, e.g., show an error message
            });
        }
      });
  };


  if (!scrap) {
    return <p>Loading...</p>;
  }

  return (
   

    <div className="bg-gray-900 h-auto max-w-4xl mx-auto flex flex-col items-center justify-center mt-10">
    <div className="bg-gray-400 shadow-lg rounded-md p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Edit Scrap</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex m-auto ">
          <div className='mx-auto w-[45%]'>
            <div className="mb-6">
              <label htmlFor="name" className="text-white mb-2 block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="category" className="text-white mb-2 block">
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="text-white mb-2 block">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              ></textarea>
            </div>
          </div>
          <div className='mx-auto w-[45%]'>
            <div className="mb-6">
              <label htmlFor="weight" className="text-white mb-2 block">
                Weight:
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="price" className="text-white mb-2 block">
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="text-white mb-2 block">
                Image:
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="bg-gray-700 text-white rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="is_active" className="text-white mb-2 block">
                Active:
              </label>
              <input
                type="checkbox"
                id="is_active"
                checked={is_active}
                onChange={(e) => setIsActive(e.target.checked)}
                className="bg-gray-700 rounded-md py-2 px-3"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Update Scrap
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Delete Scrap
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ScrapEditForm;
