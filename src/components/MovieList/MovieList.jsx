import { Link } from 'react-router-dom';
import style from './MovieList.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const MovieList = ({ movies }) => {
  console.log('list', movies);
  return (
    <>
      <h2 className={style.titleList}>Trending movies</h2>
      <ul className={style.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to="/movies/:movieId">
                <div className={style.boxLink}>
                  <BiSolidCameraMovie  />
                  <h3 className={style.title}>{movie.title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MovieList;
