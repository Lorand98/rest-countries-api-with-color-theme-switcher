import React from 'react';
import classes from './Header.module.scss';
import { IoMoonOutline } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <div className={[classes['header'], classes['header--dark']].join(' ')}>
      <h2>Where in the world?</h2>
      <button className={classes['header__theme-toggle-btn']}>
        <IoMoonOutline className={classes['header__theme-toggle-btn__icon']} />
        <span>Dark mode</span>
      </button>
    </div>
  );
};

export default Header;
