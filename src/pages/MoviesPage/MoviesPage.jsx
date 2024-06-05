import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={style.page}>
      <SearchForm />
    </div>
  );
};
export default MoviesPage;
