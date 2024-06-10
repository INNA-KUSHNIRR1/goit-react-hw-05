import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import style from './ButtonUp.module.css';

const ButtonUp = ({ props }) => {
  const handleClick = () => {
    props([]);
  };
  return (
    <button className={style.btnUp} onClick={handleClick}>
      <MdOutlineKeyboardDoubleArrowUp color="rgba(48, 139, 199)" size={32} />
    </button>
  );
};
export default ButtonUp;
