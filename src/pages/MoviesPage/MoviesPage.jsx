import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);
  return (
    <div>
      <div className={style.page}>
        <SearchForm />
      </div>
      <div>{/* <MovieList /> */}</div>
    </div>
  );
};
export default MoviesPage;
