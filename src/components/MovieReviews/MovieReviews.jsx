import { useEffect, useRef, useState } from 'react';
import { fetchReviews } from '../../api/api';
import { useParams } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import style from './MovieReviews.module.css';
import MessageReviews from '../MessageReviews/MessageReviews';
import Loader from '../Loader/Loader';
import { SlDislike } from 'react-icons/sl';
import { SlLike } from 'react-icons/sl';
import ButtonUp from '../ButtonUp/ButtonUp';
import Error from '../Error/Error';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const firstReviewRef = useRef(null);
  useEffect(() => {
    if (reviews.length > 0 && firstReviewRef.current) {
      const { height } = firstReviewRef.current.getBoundingClientRect();
      window.scrollBy({ top: height, behavior: 'smooth' });
    }
  }, [reviews]);

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
        results.length === 0 && setIsEmpty(true);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <section className={style.sectionReviews}>
      {isError && <Error errorType={error} />}
      {loading && <Loader />}
      {isEmpty && <MessageReviews />}
      {reviews.length > 0 && (
        <ul className={style.listReviews}>
          {reviews.map((review, index) => {
            return (
              <li
                key={review.id}
                className={style.cardReview}
                ref={index === 0 ? firstReviewRef : null}
              >
                <div className={style.name}>
                  <FaRegUserCircle color="white" size={16} />
                  <h3>{review.author}</h3>
                </div>
                <p>{review.content}</p>
                <div className={style.box}>
                  <div className={style.likes}>
                    <SlDislike size={20} />
                    <SlLike size={20} />
                  </div>
                  <div className={style.date}>
                    <p>Created: {review.created_at}</p>
                    <p>Updated: {review.updated_at}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length > 0 && (
        <div className={style.btnUpBox}>
          <ButtonUp />
        </div>
      )}
    </section>
  );
};
export default MovieReviews;
