import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../context/theme-context';
import classes from '../../sass/components/RegionFilter.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CountryRegions } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { countryFilterActions } from '../../store/countryFilterSlice';
import { REGION_FILTER_PLACEHOLDER } from '../../constants';
import { TiDeleteOutline } from 'react-icons/ti';
import { useOutsideClickHandler } from '../../hooks/outside_click_handler';

const RegionFilter: React.FC<{ resetPages: () => void }> = ({ resetPages }) => {
  const [showList, setShowList] = useState(false);
  const filterListWrapperRef = useRef<HTMLDivElement>(null);

  const showListHandler = () => setShowList((prevShowList) => !prevShowList);

  useOutsideClickHandler<HTMLDivElement>(filterListWrapperRef, showListHandler);

  const { filteredRegion } = useSelector(
    (state: RootState) => state.countryFilter
  );

  const dispatch = useDispatch<AppDispatch>();

  const filterRegionHandler = (region: CountryRegions) => {
    dispatch(countryFilterActions.enableFilter(region));
    showListHandler();
    resetPages();
  };

  const removeFilterRegionHandler = () => {
    dispatch(countryFilterActions.disableFilter());
    showListHandler();
  };

  const themeCtx = useContext(ThemeContext);

  const regionFilterHeaderThemeClasses = themeCtx.isLight
    ? classes['filter__header--light']
    : classes['filter__header--dark'];

  const regionFilterListThemeClasses = themeCtx.isLight
    ? classes['filter__list--light']
    : classes['filter__list--dark'];

  const listElementThemeClasses = themeCtx.isLight
    ? classes['filter__list__element--light']
    : classes['filter__list__element--dark'];

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
          {filteredRegion || REGION_FILTER_PLACEHOLDER}
        </span>
        {filteredRegion ? (
          <TiDeleteOutline
            className={classes['filter__header__icon']}
            onClick={removeFilterRegionHandler}
          />
        ) : (
          <MdKeyboardArrowDown className={classes['filter__header__icon']} />
        )}
      </div>
      {showList && (
        <div
          className={classes['filter__list-wrapper']}
          ref={filterListWrapperRef}
        >
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
              .map((countryRegionString, index) => {
                const countryRegion =
                  CountryRegions[
                    countryRegionString as keyof typeof CountryRegions
                  ];

                return (
                  <li
                    key={countryRegion}
                    className={`${classes['filter__list__element']} ${
                      classes[`filter__list__element--${index}`]
                    } ${listElementThemeClasses}`}
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
