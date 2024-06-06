import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { BiCameraMovie } from 'react-icons/bi';
import { IoHomeOutline } from 'react-icons/io5';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
const Navigation = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <NavLink to="/" className={buildLinkClass}>
            <div className={style.linkIcon}>
              <IoHomeOutline color="rgba(152, 177, 243)" size={30} />
              <span> Home</span>
            </div>
          </NavLink>

          <NavLink to="/movies" className={buildLinkClass}>
            <div className={style.linkIcon}>
              <BiCameraMovie color="rgba(152, 177, 243)" size={32} />
              <span>Movies</span>
            </div>
          </NavLink>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
