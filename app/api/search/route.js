export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id") || "";

  const query = searchParams.get("query") || "";
  const type = searchParams.get("type") || "";
  const year = searchParams.get("year") || "";

  const API_URL = process.env.OMDB_URL;
  const API_KEY = process.env.OMDB_API_KEY;

  const url = `${API_URL}?i=${id}&s=${query}&type=${type}&y=${year}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data);
}
