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
         
          <div className={style.linkIcon}>
            <IoHomeOutline color="white" size={30} />
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </div>
          <div className={style.linkIcon}>
            <BiCameraMovie size={32} />
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
