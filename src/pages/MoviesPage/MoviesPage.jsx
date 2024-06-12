import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';
import { searchMovies } from '../../api/api';
import RequestNotFound from '../../components/RequestNotFound/RequestNotFound';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { useSearchParams } from 'react-router-dom';
import MessageText from '../../components/MessageText/MessageText';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isNoText, setIsNoText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('text');

  useEffect(() => {
    if (text === '') {
      setIsNoText(true);
      return;
    }

    async function getSearchMovies() {
      setLoading(true);
      try {
        const { results } = await searchMovies(text);
        setMovies(results);
        setIsNoText(false);
        results.length === 0 && setIsEmpty(true);
      } catch (error) {
        console.error('error in App', error);
        setError(error.message);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    text && getSearchMovies();
  }, [text]);

  const searchMovie = textInput => {
    setSearchParams({ text: textInput });
    setIsEmpty(false);
    setMovies([]);
  };
  return (
    <>
      <div className={style.page}>
        <SearchForm submit={searchMovie} />
        {isNoText && <MessageText />}
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
