import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Post</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      /><br /><br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      /><br /><br />
      <button type="submit">Update</button>
    </form>
  );
}
