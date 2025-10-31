import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map(post => (
        <PostCard key={post._id} post={post} refresh={fetchPosts} />
      ))}
    </div>
  );
}
