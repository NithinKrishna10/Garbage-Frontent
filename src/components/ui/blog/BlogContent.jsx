import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { baseUrl } from '../../../utils/Constant';

const BlogDetailsPage = () => {
  const { Id } = useParams();
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [imageSize, setImageSize] = useState('md');
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('post id is here' ,Id);
    fetchBlog();
  }, []);

  const fetchBlog = () => {

    axios
      .get(`/blog/postsa/1/`)
      .then((response) => {
        setBlog(response.data);
        console.log(response.data, 'hai i am in the post section');
        console.log(post);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleImageSizeClick = () => {
    setImageSize(imageSize === 'md' ? 'lg' : 'md');
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">{''}</h1>
          <p className="text-gray-600">Published at {new Date(blog.created_at).toLocaleDateString('en-us', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`col-span-2 ${imageSize === 'lg' ? 'md:col-span-1' : ''}`}>
          <div className="max-w-3xl mx-auto">
            <img
              src={baseUrl+blog.image}
              alt="Blog Image"
              className={`rounded-lg mb-6 ${imageSize === 'lg' ? 'w-full' : ''}`}
            />
            <p className="text-gray-800 text-lg mb-4">
              {blog.content}
            </p>
            <p className="text-gray-800 text-lg mb-4">
              Morbi auctor lectus sed risus efficitur, a facilisis sapien
              finibus. Integer rutrum mi ac nunc tristique semper. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; In eu sagittis velit. In maximus massa sit amet
              tellus tristique tristique. Phasellus cursus sagittis nisi nec
              pulvinar.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-6">
              <p className="italic text-gray-800 text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus congue ultrices urna, nec gravida purus tristique
                non."
              </p>
              <cite className="block mt-2 text-gray-600">- Author Name</cite>
            </blockquote>
            <p className="text-gray-800 text-lg mb-4">
              Integer finibus nisl vel sem pulvinar, vel rutrum enim commodo.
              Morbi sed nibh vitae sem ultricies laoreet. Cras scelerisque elit
              a orci interdum, et interdum lectus fermentum. Nullam ac odio a
              augue accumsan tincidunt vel in quam. Duis tempus nulla sed erat
              ullamcorper, nec fringilla ante laoreet. Proin bibendum felis vel
              imperdiet rhoncus. Suspendisse id congue nunc.
            </p>

            {/* Comment Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Comments
              </h2>
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 mb-4"
                >
                  <p className="text-gray-800 text-lg mb-2">{comment}</p>
                  <p className="text-gray-600">By John Doe</p>
                </div>
              ))}

              <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Latest Blogs
            </h2>
            {/* Latest Blog List */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Blog 1 Title
              </h3>
              <p className="text-gray-600">Published on May 30, 2023</p>
              <div className="flex flex-wrap mt-2">
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 1
                </span>
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 2
                </span>
              </div>
              <p className="text-gray-600 mt-2">Category: Category 1</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Blog 2 Title
              </h3>
              <p className="text-gray-600">Published on May 29, 2023</p>
              <div className="flex flex-wrap mt-2">
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 3
                </span>
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 4
                </span>
              </div>
              <p className="text-gray-600 mt-2">Category: Category 2</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Blog 3 Title
              </h3>
              <p className="text-gray-600">Published on May 28, 2023</p>
              <div className="flex flex-wrap mt-2">
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 5
                </span>
                <span className="text-sm bg-gray-200 text-gray-800 rounded-full py-1 px-2 mr-1 mb-1">
                  Tag 6
                </span>
              </div>
              <p className="text-gray-600 mt-2">Category: Category 3</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            &copy; 2023 Blog Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailsPage;
