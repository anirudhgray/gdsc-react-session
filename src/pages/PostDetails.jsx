import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Post from '../components/Post';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    // fetch post
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
      });

    // fetch post comments
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
        <Link to={"/"} className='px-3 py-2 bg-white border border-blue-500 hover:text-white hover:bg-blue-500 rounded-md'>Back</Link>
        {
            post ? (
                <div className='mt-4'>
                    <Post id={post.id} key={post.id} userid={post.userId} title={post.title} body={post.body}  />

                    <h3 className="mt-6 text-xl font-semibold">Comments</h3>
                    <ul className="mt-4 space-y-2">
                        {comments.map((comment) => (
                        <li key={comment.id} className="bg-gray-100 p-2 rounded-md">
                            <strong>{comment.name}</strong>
                            <p className="text-gray-600">{comment.body}</p>
                            <p className='text-gray-600 text-sm mt-2'>By: {comment.email}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className='mt-4'>Loading...</p>
            )
        }
    </div>
  );
};

export default PostDetails;
