import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: 15, color: 'white' }}>Home</Link>
      <Link to="/create" style={{ color: 'white' }}>Create Post</Link>
    </nav>
  );
}
