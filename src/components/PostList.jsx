import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/jsonPlaceholder';
import Card from './ui/Card';
import Button from './ui/Button';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPosts(page).then(data => {
      setPosts(prev => [...prev, ...data]);
      setLoading(false);
    }).catch(() => {
      setError('Failed to load posts');
      setLoading(false);
    });
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl mb-4">Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        className="border rounded p-2 mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredPosts.length === 0 && <p>No posts found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id}>
            <h3 className="font-bold mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && (
        <div className="mt-4 flex justify-center">
          <Button onClick={() => setPage(page + 1)}>Load More</Button>
        </div>
      )}
    </div>
  );
}
