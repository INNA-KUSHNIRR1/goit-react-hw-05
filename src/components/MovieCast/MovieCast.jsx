import { useEffect, useState } from 'react';
import { fetchCast } from '../../api/api';
import { useParams } from 'react-router-dom';

import style from './MovieCast.module.css';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : defaultImg
              }
              width={300}
              alt={el.name}
            />

            <p>{el.original_name}</p>
            {/* <p>Character:{el.character}</p> */}
          </li>
        );
      })}
    </ul>
  );
};
export default MovieCast;
