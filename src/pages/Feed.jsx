import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

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
      <Link to={"/new"} className='px-3 py-2 bg-white border border-blue-500 hover:text-white hover:bg-blue-500 rounded-md'>Create Post</Link>
      <input placeholder='Search' className='mt-4 px-4 w-full py-2 mb-4 rounded-md bg-white shadow-md' value={search} onChange={e=>setSearch(e.currentTarget.value)} />
      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => (
          <Post id={post.id} key={post.id} userid={post.userId} title={post.title} body={post.body}  />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
