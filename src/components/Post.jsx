import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Post.propTypes = {
  userid: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default function Post({userid, title, body, id}) {
  return (
    <Link to={`/posts/${id}`}>
    <div key={id} className="bg-white p-4 shadow-md rounded-md hover:bg-blue-500 hover:text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{body}</p>
        <div className="text-sm mt-4">User ID: {userid}</div>
    </div>
    </Link>
  )
}
