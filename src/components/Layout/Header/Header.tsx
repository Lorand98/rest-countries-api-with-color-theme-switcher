import React, { useContext } from 'react';
import classes from './Header.module.scss';
import { IoMoonOutline } from 'react-icons/io5';
import { ThemeContext } from '../../../context/theme-context';

const Header: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const headerThemeClass = themeCtx.isLight
    ? classes['header--light']
    : classes['header--dark'];

  return (
    <div className={[classes['header'], headerThemeClass].join(' ')}>
      <h2>Where in the world?</h2>
      <button
        className={classes['header__theme-toggle-btn']}
        onClick={themeCtx.toggleTheme}
      >
        <IoMoonOutline className={classes['header__theme-toggle-btn__icon']} />
        <span>{themeCtx.isLight ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  );
};

export default Header;
