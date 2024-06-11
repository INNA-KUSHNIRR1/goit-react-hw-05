import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import style from './ButtonUp.module.css';
import { useEffect, useState } from 'react';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <button
      className={`${style.btnUp} ${isVisible ? style.show : ''}`}
      onClick={handleClick}
    >
      <MdOutlineKeyboardDoubleArrowUp color="rgba(48, 139, 199)" size={32} />
    </button>
  );
};
export default ButtonUp;
