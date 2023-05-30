



import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../../utils/Constant";

const ScrapCategoryEdit = () => {
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
      .get(`/adminside/scrap-categories/${id}`)
      .then((response) => {
        setWasteCategory(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.error("Error fetching scrap-categories/ory:", error);
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
      .patch(`/adminside/scrap-categories/${id}/`, formDataWithImage)
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
        console.error("Error updating scrap-categoriesy:", error);
      });
  };

  const deleteWasteCategory = () => {
    axios
      .delete(`/adminside/scrap-categories/${id}`)
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
        Edit Scrap Category
      </h1>
      <p className="mb-4">
        Scrap Category ID:{" "}
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
          Update Scrap Category
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-1/2"
          onClick={deleteWasteCategory}
        >
          Delete Scrap Category
        </button>
     
      </div>
    </div>
  );
};

export default ScrapCategoryEdit;
