import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme-context';
import classes from './RegionFilter.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

const RegionFilter: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const showListHandler = () => setShowList((prevShowList) => !prevShowList);

  const themeCtx = useContext(ThemeContext);

  const regionFilterHeaderThemeClasses = themeCtx.isLight
    ? classes['filter__header--light']
    : classes['filter__header--dark'];

  const regionFilterListThemeClasses = themeCtx.isLight
    ? classes['filter__list--light']
    : classes['filter__list--dark'];

  return (
    <div className={classes['filter']}>
      <div
        className={[
          classes['filter__header'],
          regionFilterHeaderThemeClasses,
        ].join(' ')}
        onClick={showListHandler}
      >
        <span className={classes['filter__header__text']}>
          Filter by Region
        </span>
        <MdKeyboardArrowDown
          className={classes['filter__header__arrow-down']}
        />
      </div>
      {showList && (
        <div className={classes['filter__list-wrapper']}>
          <ul
            className={[
              classes['filter__list'],
              regionFilterListThemeClasses,
            ].join(' ')}
          >
            <li className={classes['filter__list__element']}>Africa</li>
            <li className={classes['filter__list__element']}>America</li>
            <li className={classes['filter__list__element']}>Asia</li>
            <li className={classes['filter__list__element']}>Europe</li>
            <li className={classes['filter__list__element']}>Oceania</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;
