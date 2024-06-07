import { useEffect, useState } from 'react';
import { fetchReviews } from '../../api/api';
import { useParams } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import style from './MovieReviews.module.css';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
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
    <section className={style.sectionReviews}>
      <ul className={style.listReviews}>
        {reviews.map(review => {
          return (
            <li key={review.id} className={style.cardReview}>
              <div className={style.name}>
                <FaRegUserCircle color="white" size={16} />
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
      {reviews.length > 0 && (
        <button className={style.btnUp}>
          <MdOutlineKeyboardDoubleArrowUp
            color="rgba(48, 139, 199)"
            size={32}
          />
        </button>
      )}
    </section>
  );
};
export default MovieReviews;
