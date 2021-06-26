const API_KEY = '9fc3c617e6344b84dcbc8d0c281e8d2c';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrends() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('404 Not found'));
}

export async function getMovieDetail(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('404 Not found'));
}

export async function fetchMoviesByKeyword(searchQuery) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('404 Not found'));
}
