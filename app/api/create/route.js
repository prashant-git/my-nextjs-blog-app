import posts from '../data/postsData';

export async function POST(req) {
  const { title, content } = await req.json();
  const newPost = { id: posts.length + 1, title, content };
  
  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}
