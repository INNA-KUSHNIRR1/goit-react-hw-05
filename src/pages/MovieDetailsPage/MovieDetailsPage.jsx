import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';
import style from './MovieDetailsPage.module.css';
import { BiArrowBack } from 'react-icons/bi';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div className={style.wrapper}>
      <Link to="/">
        <div className={style.back}>
          <BiArrowBack color="rgb(196, 205, 219)" />
          <span className={style.span}>Go back</span>
        </div>
      </Link>
      <h2 className={style.title}>Movie Details</h2>
      <h3>{movieId}</h3>
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
