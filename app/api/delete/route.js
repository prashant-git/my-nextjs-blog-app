import posts from '../posts/route';

export async function DELETE(req) {
  const { id } = await req.json();
  const filteredPosts = posts.filter(post => post.id !== parseInt(id));

  if (filteredPosts.length !== posts.length) {
    posts.length = 0;
    posts.push(...filteredPosts);
    return Response.json({ message: 'Post deleted successfully' });
  }

  return Response.json({ error: 'Post not found' }, { status: 404 });
}
