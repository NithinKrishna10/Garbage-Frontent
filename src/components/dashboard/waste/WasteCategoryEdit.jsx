// import React, { useState, useEffect } from 'react';
// import axios from '../../../utils/axios';
// // import { baseUrl } from '../../../utils/Constant';
// import { useNavigate, useParams } from 'react-router-dom';

// const WasteCategoryEdit = () => {
//     const { id } = useParams();
//     console.log(id);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     recyclable: false,
//     hazardous: false,
//     image: null,
//   });
//   const navigate = useNavigate
//   useEffect(() => {
//     fetchCategory();
//   }, []);

//   const fetchCategory = async () => {
//     try {
//       const response = await axios.get(`/adminside/waste-edit/${id}/`);
//       const { name, description, recyclable, hazardous } = response.data;
//       setFormData({ name, description, recyclable, hazardous, image: null });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: checked,
//     }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formDataWithImage = new FormData();
//       formDataWithImage.append('name', formData.name);
//       formDataWithImage.append('description', formData.description);
//       formDataWithImage.append('recyclable', formData.recyclable);
//       formDataWithImage.append('hazardous', formData.hazardous);
//       formDataWithImage.append('image', formData.image);

//       const response = await axios.patch(`/adminside/waste-edit/${id}/`, formDataWithImage);
//       console.log(response.data);

//       setFormData({
//         name: '',
//         description: '',
//         recyclable: false,
//         hazardous: false,
//         image: null,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Waste Category</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="recyclable">Recyclable:</label>
//           <input
//             type="checkbox"
//             id="recyclable"
//             name="recyclable"
//             checked={formData.recyclable}
//             onChange={handleCheckboxChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="hazardous">Hazardous:</label>
//           <input
//             type="checkbox"
//             id="hazardous"
//             name="hazardous"
//             checked={formData.hazardous}
//             onChange={handleCheckboxChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image:</label>
//           <input type="file" id="image" name="image" value={formData.image} onChange={handleImageChange} />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default WasteCategoryEdit;



import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../../utils/Constant";

const WasteCategoryEdit = () => {
  const { id } = useParams();
  const [wasteCategory, setWasteCategory] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Use null instead of an empty string for image
  const navigate = useNavigate();

  useEffect(() => {
    fetchWasteCategory();
  }, []);

  const fetchWasteCategory = () => {
    axios
      .get(`/adminside/waste-edit/${id}`)
      .then((response) => {
        setWasteCategory(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.error("Error fetching waste category:", error);
      });
  };

  const updateWasteCategory = () => {
    const updatedWasteCategory = {
      ...wasteCategory,
      name: name,
      description: description,
      image : image
 
    };
    console.log(updatedWasteCategory);
    const formDataWithImage = new FormData();
    formDataWithImage.append('name', updatedWasteCategory.name);
    formDataWithImage.append('description' , updatedWasteCategory.description);
    formDataWithImage.append('image',updatedWasteCategory.image);


    axios
      .patch(`/adminside/waste-edit/${id}/`, formDataWithImage)
      .then((response) => {
        console.log("Waste category updated successfully:", response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Waste category updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setWasteCategory(response.data);
      })
      .catch((error) => {
        console.error("Error updating waste category:", error);
      });
  };

  const deleteWasteCategory = () => {
    axios
      .delete(`/adminside/waste-edit/${id}`)
      .then((response) => {
        console.log("Waste category deleted successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Waste category deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/waste-edit");
      })
      .catch((error) => {
        console.error("Error deleting waste category:", error);
      });
  };

  const handleImageUpload = (event) => {
    // const file = event.target.files[0];
    
    const file = event.target.files[0];
    setImage(file);
    console.log(file);
   
  };


  if (!wasteCategory) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4 m-auto w-[75vh]">
      <h1 className="text-2xl font-bold mb-4 text-center text-white bg-indigo-500 py-2 rounded-md">
        Edit Waste Category
      </h1>
      <p className="mb-4">
        Waste Category ID:{" "}
        <span className="text-gray-500 text-2xl font-bold">
          {wasteCategory.id}
        </span>
      </p>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full rounded-md px-4 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-gray-100"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          className="w-full rounded-md px-4 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-gray-100"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image Upload</label>
        <input

type="file"
id="image"
name="image"
          // type="file"
          // accept="image/*"
          className="w-full border-gray-300 focus:border-indigo-500 focus:outline-none"
          onChange={handleImageUpload}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-1/2"
          onClick={updateWasteCategory}
        >
          Update Waste Category
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-1/2"
          onClick={deleteWasteCategory}
        >
          Delete Waste Category
        </button>
     
      </div>
    </div>
  );
};

export default WasteCategoryEdit;
