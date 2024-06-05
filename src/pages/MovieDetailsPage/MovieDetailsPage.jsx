import { Link, Outlet, useParams } from 'react-router-dom';

import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div className={style.wrapper}>
      <h2>MovieDetailsPage</h2>
      <h3>{movieId}</h3>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
