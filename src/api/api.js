import axios from 'axios';

const API_KEY = '978232b5323e56f716438a748d4d74f5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getMoviesFromApi = async (endpoint, params = {}) => {
  const { data } = await axios.get(endpoint, {
    params: { ...params, api_key: API_KEY, language: 'en-US' },
  });

  return data;
};

export const fetchTrendingMovies = () =>
  getMoviesFromApi(`/trending/movie/day`);
export const fetchMovieDetails = movieId =>
  getMoviesFromApi(`/movies/${movieId}`);
export const searchMovies = query =>
  getMoviesFromApi('/search/movie', { query });
