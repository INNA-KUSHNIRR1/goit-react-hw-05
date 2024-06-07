import { useEffect, useState } from 'react';
import { fetchReviews } from '../../api/api';
import { useParams } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import style from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('rev', reviews);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <ul className={style.listReviews}>
      {reviews.map(review => {
        return (
          <li key={review.id} className={style.cardReview}>
            <div className={style.name}>
              <FaRegUserCircle color="white" />
              <h3>{review.author}</h3>
            </div>
            <p>{review.content}</p>
            <div className={style.date}>
              <p>Created: {review.created_at}</p>
              <p>Updated: {review.updated_at}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieReviews;
