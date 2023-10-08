import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

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
    <div className="max-w-3xl mx-auto my-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post id={post.id} key={post.id} userid={post.userId} title={post.title} body={post.body}  />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
