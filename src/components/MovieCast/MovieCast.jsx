import { useEffect, useState } from 'react';
import { fetchCast } from '../../api/api';
import { useParams } from 'react-router-dom';

import style from './MovieCast.module.css';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import Loader from '../Loader/Loader';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const MovieCast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
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
    <section>
      {casts.length > 0 && (
        <ul className={style.listCast}>
          {casts.map(el => {
            return (
              <li key={el.id} className={style.cardCast}>
                <div className={style.imgCast}>
                  <img
                    src={
                      el.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                        : defaultImg
                    }
                    width={300}
                    alt={el.name}
                  />
                </div>
                <div className={style.titleCast}>
                  <p>{el.original_name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {casts.length > 0 && (
        <div className={style.btnUpBox}>
          <button className={style.btnUp} onClick={() => setCasts([])}>
            <MdOutlineKeyboardDoubleArrowUp
              color="rgba(48, 139, 199)"
              size={32}
            />
          </button>
        </div>
      )}
      {loading && <Loader />}
    </section>
  );
};
export default MovieCast;
