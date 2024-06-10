import axios from 'axios';

const API_KEY = '978232b5323e56f716438a748d4d74f5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getMoviesFromApi = async (endpoint, params = {}) => {
  const { data } = await axios.get(endpoint, {
    params: { ...params, api_key: API_KEY, language: 'en-US' },
  });

  return data;
};

export const fetchTrendingMovies = async () =>
  getMoviesFromApi(`/trending/movie/day`);
export const fetchMovieDetails = async movieId =>
  getMoviesFromApi(`/movie/${movieId}`);
export const searchMovies = async query =>
  getMoviesFromApi('/search/movie', { query });
export const fetchCast = async movieId =>
  getMoviesFromApi(`/movie/${movieId}/credits`);
export const fetchReviews = async movieId =>
  getMoviesFromApi(`/movie/${movieId}/reviews`, { page: 1 });
//
