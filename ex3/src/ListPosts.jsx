import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    setTimeout(() => {  // Simulate delay before fetching
      fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);  // Set loading to false once data is fetched
        })
        .catch((message) => {
          setError(message);
          setLoading(false);  // Set loading to false on error
        });
    }, 5000);  // 5 seconds delay
  }, []);  // Empty array to run effect only once on component mount

  return (
    <>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>  // Show loading message until data is fetched
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div><strong>{post.title}</strong></div>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
