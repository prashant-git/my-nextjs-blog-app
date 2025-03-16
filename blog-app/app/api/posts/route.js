import posts from '../data/postsData';

export async function GET() {
  return Response.json(posts);
}
