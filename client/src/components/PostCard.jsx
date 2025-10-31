import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PostCard({ post, refresh }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
    refresh();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 15, marginBottom: 10 }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link>
      <button onClick={handleDelete} style={{ marginLeft: 10 }}>Delete</button>
    </div>
  );
}
