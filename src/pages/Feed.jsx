import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // search filtering
  useEffect(() => {
    setFilteredPosts(posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, posts])

  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
      <input placeholder='Search' className='px-4 w-full py-2 mb-4 rounded-md bg-white shadow-md' value={search} onChange={e=>setSearch(e.currentTarget.value)} />
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Post id={post.id} key={post.id} userid={post.userId} title={post.title} body={post.body}  />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
