import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';
import style from './MovieDetailsPage.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../api/api';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log('MovieDetailsPage', movie);
  // console.log('movieId', movieId);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={style.wrapper}>
      <Link to="/">
        <div className={style.back}>
          <BiArrowBack color="rgb(196, 205, 219)" />
          <span className={style.span}>Go back</span>
        </div>
      </Link>

      {!loading && movie && (
        <div className={style.movieDetails}>
          <div className={style.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={style.description}>
            <h1 className={style.title}>{movie.title}</h1>
            <p className={style.overview}>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      )}
      <nav className={style.nav}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
