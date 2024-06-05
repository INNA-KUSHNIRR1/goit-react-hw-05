import MovieList from '../../components/MovieList/MovieList';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={style.main}>
      <MovieList />
    </main>
  );
};
export default HomePage;
