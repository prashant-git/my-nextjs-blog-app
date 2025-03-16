async function fetchPosts() {
    const response = await fetch('http://localhost:3000/api/posts');
    return response.json();
  }
  
  export default async function Posts() {
    const posts = await fetchPosts();
  
    return (
      <div>
        <h1>📚 Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  