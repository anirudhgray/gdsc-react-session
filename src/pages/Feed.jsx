import { useState, useEffect } from 'react';
import axios from 'axios';

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
            <div className="text-sm text-gray-500 mt-4">User ID: {post.userId}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
