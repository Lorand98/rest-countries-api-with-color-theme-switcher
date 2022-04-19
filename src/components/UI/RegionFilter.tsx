import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme-context';
import classes from './RegionFilter.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CountryRegions } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { countryFilterActions } from '../../store/countryFilterSlice';

const RegionFilter: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const { filteredRegion } = useSelector(
    (state: RootState) => state.countryFilter
  );

  const dispatch = useDispatch<AppDispatch>();

  const showListHandler = () => setShowList((prevShowList) => !prevShowList);

  const filterRegionHandler = (region: CountryRegions) => {
    dispatch(countryFilterActions.enableFilter(region));
    showListHandler();
  };

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
            {Object.keys(CountryRegions)
              .filter((countryRegionString) => {
                return (
                  CountryRegions[
                    countryRegionString as keyof typeof CountryRegions
                  ] !== filteredRegion
                );
              })
              .map((countryRegionString) => {
                const countryRegion =
                  CountryRegions[
                    countryRegionString as keyof typeof CountryRegions
                  ];

                return (
                  <li
                    key={countryRegion}
                    className={classes['filter__list__element']}
                    onClick={filterRegionHandler.bind(this, countryRegion)}
                  >
                    {countryRegion}
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
