import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import style from './HomePage.module.css';
import { fetchTrendingMovies } from '../../api/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(movies);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error('error in App', error);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <main className={style.main}>
      <h2 className={style.titleList}>Trending movies</h2>
      {!loading && <MovieList movies={movies} />}
    </main>
  );
};
export default HomePage;
