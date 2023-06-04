// import React, { Fragment, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../../utils/axios";
// import { baseUrl } from "../../../utils/Constant";
// export default function BlogList() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     axios
//       .get("blog/posts/")
//       .then((response) => {
//         setPosts(response.data);
//         console.log(response.data, "hai i am in the post section");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const redirectToBlogDetail = (catId) => {
//     navigate(`/bloglist/${blogId}`);
//   };

//   return (
//     <div>
//       {posts.map((post) => {
//         <div className="m-5 border  border-blue-50">
//           <div className="w-[360px] h-[450px] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//             <div className="h-[60%] bg-gray-600 rounded-t-lg">
//               <img src={baseUrl + post.image} />
//             </div>
//             <div className="h-[40%] p-6 flex flex-col justify-between">
//               <div>
//                 <h1 className="text-2xl font-semibold leading-7 text-white">
//                   {/* {" "} */}
//                   {post.title}
//                 </h1>
//               </div>
//               <div className="mt-4">
//                 <p className="text-sm font-serif leading-6 text-gray-300">
//                   {/* {" "} */}
//                   {post.content}
//                 </p>
//               </div>
//               <div className="mt-6">
//                 <button
//                   className="px-4 py-2 text-sm font-bold leading-normal text-white bg-blue-500 border-0 rounded-lg shadow-md hover:bg-blue-600"
//                   onClick={redirectToBlogDetail(post.id)}
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>;
//       })}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import { baseUrl } from "../../../utils/Constant";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("blog/posts/")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data, "hai i am in the post section");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const redirectToBlogDetail = (postId) => {
    console.log(postId);
    navigate(`/blogdetails/${postId}`);
  };

  return (
    <div className='md:flex flex-wrap ml-10 mr-10'>
      {posts.map((post) => (
    
    <div className="w-full sm:w-1/2 md:w-1/3">
        <div className="m-5 border border-blue-50" key={post.id}>
          <div className="w-[360px] h-[450px] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-[60%] bg-gray-600 rounded-t-lg">
              <img src={baseUrl + post.image} alt={post.title} />
            </div>
            <div className="h-[40%] p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-semibold leading-7 text-white">
                  {post.title}
                </h1>
              </div>
              <div className="mt-4">
                <p className="text-sm font-serif leading-6 text-gray-300">
                  {post.content}
                </p>
              </div>
              <div className="mt-6">
                <button
                  className="px-4 py-2 text-sm font-bold leading-normal text-white bg-blue-500 border-0 rounded-lg shadow-md hover:bg-blue-600"
                  onClick={() => redirectToBlogDetail(post.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
  </div>
      ))}
    </div>
  );
}

