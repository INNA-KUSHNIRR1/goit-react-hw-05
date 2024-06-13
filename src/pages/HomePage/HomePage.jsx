import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import style from './HomePage.module.css';
import { fetchTrendingMovies } from '../../api/api';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      setLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error('error in App', error);
        setError(error.message);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <main className={style.main}>
      <h2 className={style.titleList}>Trending movies</h2>
      {loading && <Loader />}
      {isError && <Error errorType={error} />}
      {!loading && <MovieList movies={movies} />}
      {movies.length > 0 && (
        <div className={style.btnUpBox}>
          <ButtonUp />
        </div>
      )}
    </main>
  );
};
export default HomePage;
