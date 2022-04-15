import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme-context';
import classes from './RegionFilter.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { COUNTRY_REGIONS } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const RegionFilter: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const { filteredRegion } = useSelector(
    (state: RootState) => state.countryFilter
  );

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
          {filteredRegion}
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
            {Object.keys(COUNTRY_REGIONS)
              .filter((countryRegion) => {
                return (
                  COUNTRY_REGIONS[
                    countryRegion as keyof typeof COUNTRY_REGIONS
                  ] !== filteredRegion
                );
              })
              .map((countryRegion) => {
                const filterListElementClasses = [
                  classes['filter__list__element'],
                ];

                return (
                  <li
                    key={countryRegion}
                    className={filterListElementClasses.join(' ')}
                  >
                    {
                      COUNTRY_REGIONS[
                        countryRegion as keyof typeof COUNTRY_REGIONS
                      ]
                    }
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;
