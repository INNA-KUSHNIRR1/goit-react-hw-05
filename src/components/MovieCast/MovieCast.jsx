import { useEffect, useState } from 'react';
import { fetchCast } from '../../api/api';
import { useParams } from 'react-router-dom';

import style from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [casts, setCasts] = useState([]);
  console.log('cast', casts);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const { cast } = await fetchCast(movieId);
        setCasts(cast);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <ul className={style.listCast}>
      {casts.map(el => {
        return (
          <li key={el.id} className={style.cardCast}>
            <p>{el.original_name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={el.name}
            />
            <p>Character:{el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieCast;
