import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={style.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <div className={style.boxLink}>
                  <div className={style.poster}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                          : defaultImg
                      }
                      width={400}
                      alt={movie.title}
                    />
                  </div>

                  <div className={style.title}>
                    <p>{movie.title}</p>
                  </div>
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
