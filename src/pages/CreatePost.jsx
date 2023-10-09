import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      title,
      body,
      userId: Number(userId), // Convert userId to a number
    };

    try {
      // Send a POST request to your API to create the post
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

      // Redirect to the post details page for the newly created post
      navigate(`/posts/${response.data.id}`);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <Link to={"/"} className='px-3 py-2 bg-white border border-blue-500 hover:text-white hover:bg-blue-500 rounded-md'>Back</Link>
        <form className='mt-4' onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold">Title</label>
            <input
                type="text"
                id="title"
                className="border p-2 rounded-md w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-semibold">Body</label>
            <textarea
                id="body"
                rows="4"
                className="border p-2 rounded-md w-full"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            ></textarea>
            </div>
            <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-semibold">User ID</label>
            <input
                type="number"
                id="userId"
                className="border p-2 rounded-md w-full"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
            />
            </div>
            <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
            Create Post
            </button>
        </form>
    </div>
  );
};

export default CreatePost;
