import { useState, useEffect } from 'react';

function DataFetchingComponent() {
  // State to store the fetched data
  const [posts, setPosts] = useState([]);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data from JSONPlaceholder API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        // Update the state with the fetched posts
        setPosts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch data function
    fetchData();

    // Cleanup function (optional): This will be called when the component unmounts
    return () => {
      console.log('Component is unmounted. Cleanup logic goes here.');
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // JSX to render the component
  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 10 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetchingComponent;
