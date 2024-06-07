import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';
// import { useParams } from 'react-router-dom';
import { searchMovies } from '../../api/api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  console.log('moviesPage', query);
  console.log('moviesPageResults', movies);

  useEffect(() => {
    async function getSearchMovies() {
      try {
        const { results } = await searchMovies(query);
        console.log('search', results);
        setMovies(results);
      } catch (error) {
        console.error('error in App', error);
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [query]);
  const searchMovie = textInput => {
    console.log(textInput);
    setQuery(textInput);
  };
  return (
    <div>
      <div className={style.page}>
        <SearchForm submit={searchMovie} />
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
export default MoviesPage;
