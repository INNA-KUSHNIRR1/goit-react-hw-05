import { FaRegUserCircle } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import style from './MessageReviews.module.css';
import { useEffect, useRef } from 'react';

const MessageReviews = () => {
  const feedbackRef = useRef(null);
  useEffect(() => {
    if (feedbackRef.current) {
      const { height } = feedbackRef.current.getBoundingClientRect();
      window.scrollBy({ top: height, behavior: 'smooth' });
    }
  }, []);
  return (
    <div ref={feedbackRef} className={style.wrapperFeedback}>
      <p className={style.message}>There are no reviews yet...</p>
      <div className={style.feedback}>
        <h4 className={style.titleFeedback}>Rating and review</h4>
        <p>Leave a review to help other users</p>
        <div className={style.icons}>
          <FaRegUserCircle size={30} />
          <div className={style.stars}>
            <CiStar color="orange" size={30} />
            <CiStar color="orange" size={30} />
            <CiStar color="orange" size={30} />
            <CiStar color="orange" size={30} />
            <CiStar color="orange" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageReviews;
