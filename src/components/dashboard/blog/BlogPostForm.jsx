import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import Swal from 'sweetalert2';
function BlogPostForm() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: 1,
    category: '',
    tags: [],
    content: '',
    image: null,
    is_published: false
  });

  const [categories, setCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const fetchCategories = () => {
    axios.get('adminside/post-categories/')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  const fetchTags = () => {
    axios.get('adminside/post-tags')
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });
  };

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (name === 'tags') {
      const selectedTags = Array.from(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      
      setSelectedTags(selectedTags);
      setFormData({
        ...formData,
        [name]: selectedTags
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData();
    for (const key in formData) {
        console.log(key,formData[key]);
      postData.append(key, formData[key]);
    }
    console.log(postData,'this is post data');
    axios.post('adminside/posts/', postData)
      .then((response) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Blog Posted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        console.log('Post created successfully:', response.data);
        // Reset the form
        setFormData({
          title: '',
          slug: '',
          author: '',
          category: '',
          tags: [],
          content: '',
          image: null,
          is_published: false
        });
        setSelectedTags([]);
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    // <div className="container mx-auto py-4">
    //   <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
    //   <form onSubmit={handleSubmit} className="max-w-lg">
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Title:</label>
    //       <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Slug:</label>
    //       <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Category:</label>
    //       <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border rounded">
    //         <option value="">Select a category</option>
    //         {categories.map((category) => (
    //           <option key={category.id} value={category.id}>{category.name}</option>
    //         ))}
    //       </select>
    //     </div>
    //       <div className="mb-4">
    //       <label className="block font-bold mb-2">Tags:</label>
    //       <select name="tags" value={selectedTags} onChange={handleChange} multiple className="w-full px-4 py-2 border rounded">
    //         {tags.map((tag) => (
    //           <option key={tag.id} value={tag.id}>{tag.name}</option>
    //         ))}
    //       </select>
    //     </div>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Content:</label>
    //       <textarea name="content" value={formData.content} onChange={handleChange} required className="w-full px-4 py-2 border rounded"></textarea>
    //     </div>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Image:</label>
    //       <input type="file" name="image" onChange={handleChange} required className="w-full" />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Is Published:</label>
    //       <input type="checkbox" name="is_published" checked={formData.is_published} onChange={handleChange} />
    //     </div>
    //     <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Create Post</button>
    //   </form>
    // </div>
//     <div className="container mx-auto py-4 ">
//     <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
//     <form onSubmit={handleSubmit} className="max-w-lg bg-green-100 p-6 rounded-lg">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-xl font-bold mb-2">Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <div>
//           <label className="block text-xl font-bold mb-2">Slug:</label>
//           <input
//             type="text"
//             name="slug"
//             value={formData.slug}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <div>
//           <label className="block text-xl font-bold mb-2">Category:</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="">Select a category</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>{category.name}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-xl font-bold mb-2">Tags:</label>
//           <select
//             name="tags"
//             value={selectedTags}
//             onChange={handleChange}
//             multiple
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             {tags.map((tag) => (
//               <option key={tag.id} value={tag.id}>{tag.name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="col-span-2">
//           <label className="block text-xl font-bold mb-2">Content:</label>
//           <textarea
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-xl font-bold mb-2">Image:</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             required
//             className="w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <div>
//           <label className="block text-xl font-bold mb-2">Is Published:</label>
//           <input
//             type="checkbox"
//             name="is_published"
//             checked={formData.is_published}
//             onChange={handleChange}
//             className="mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//       </div>
//       <button type="submit" className="bg-green-500 text-white py-2 px-6 mt-4 rounded hover:bg-green-600 transition-colors duration-300">
//         Create Post
//       </button>
//     </form>
//   </div>

<div className="container mx-auto py-4 bg-gray-900 text-white">
<h2 className="text-3xl font-bold mb-4">Create New Post</h2>
<form onSubmit={handleSubmit} className="m-auto max-w-2xl">
  <div className="grid grid-cols-2 gap-6 ">
    <div>
      <label className="block text-lg font-bold mb-2">Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div>
      <label className="block text-lg font-bold mb-2">Slug:</label>
      <input
        type="text"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div>
      <label className="block text-lg font-bold mb-2">Category:</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
    </div>
    <div>
      <label className="block text-lg font-bold mb-2">Tags:</label>
      <select
        name="tags"
        value={selectedTags}
        onChange={handleChange}
        multiple
        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>{tag.name}</option>
        ))}
      </select>
    </div>
    <div className="col-span-2">
      <label className="block text-lg font-bold mb-2">Content:</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
        className="w-full h-40 px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
    </div>
    <div className="col-span-2">
      <label className="block text-lg font-bold mb-2">Image:</label>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        required
        className="w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div>
      <label className="block text-lg font-bold mb-2">Is Published:</label>
      <input
        type="checkbox"
        name="is_published"
        checked={formData.is_published}
        onChange={handleChange}
        className="w-6 h-6 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  </div>
  <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg mt-8 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
    Create Post
  </button>
</form>
</div>
  );
}

export default BlogPostForm;
