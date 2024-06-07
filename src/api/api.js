import axios from 'axios';

const API_KEY = '978232b5323e56f716438a748d4d74f5';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzgyMzJiNTMyM2U1NmY3MTY0MzhhNzQ4ZDRkNzRmNSIsInN1YiI6IjY2NjE1MWM0M2ExN2ZjMjQ3YmNiYjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96V7vL77iut86gJs-SeMrA1OFnmKJVXUnbPTqrQ1A_g';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const getMoviesFromApi = async endpoint => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en - US',
    time_window: 'day',
  });
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: 'application/json',
    },
  };
  const { data } = await axios.get(
    `${TMDB_BASE_URL}${endpoint}${params}`,
    options,
  );

  return data;
};

export const fetchTrendingMovies = () => getMoviesFromApi(`/trending/movie`);
export const fetchMovieDetails = movieId =>
  getMoviesFromApi(`/movies/${movieId}`);
export const searchMovies = query =>
  getMoviesFromApi('/search/movie', { query });

