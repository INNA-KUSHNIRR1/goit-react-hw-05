import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';
// import { useParams } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import RequestNotFound from '../../components/RequestNotFound/RequestNotFound';
import Loader from '../../components/Loader/Loader';
// import { useLocation } from 'react-router-dom';
import Error from '../../components/Error/Error';
import ButtonUp from '../../components/ButtonUp/ButtonUp';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getSearchMovies() {
      setLoading(true);
      try {
        const { results } = await searchMovies(query);
        setMovies(results);
        results.length === 0 && setIsEmpty(true);
      } catch (error) {
        console.error('error in App', error);
        setError(error.message);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    query && getSearchMovies();
  }, [query]);

  const searchMovie = textInput => {
    setQuery(textInput);
    setIsEmpty(false);
    setMovies([]);
  };
  return (
    <>
      <div className={style.page}>
        <SearchForm submit={searchMovie} />
        {isError && <Error errorType={error} />}
        {loading && <Loader />}
        {isEmpty && !loading && <RequestNotFound />}
      </div>
      {movies.length > 0 && <MovieList movies={movies} />}
      {movies.length > 0 && (
        <div className={style.btnUpBox}>
          <ButtonUp />
        </div>
      )}
    </>
  );
};
export default MoviesPage;
