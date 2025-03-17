import posts from '../posts/route';

export async function PUT(req) {
  const { id, title, content } = await req.json();
  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts[postIndex] = { id: parseInt(id), title, content };
    return Response.json(posts[postIndex]);
  }

  return Response.json({ error: 'Post not found' }, { status: 404 });
}
