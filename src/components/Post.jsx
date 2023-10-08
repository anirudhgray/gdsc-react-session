import PropTypes from 'prop-types';

Post.propTypes = {
  userid: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default function Post({userid, title, body, id}) {
  return (
    <div key={id} className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{body}</p>
        <div className="text-sm text-gray-500 mt-4">User ID: {userid}</div>
    </div>
  )
}
