import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/theme-context';
import { AppDispatch, RootState } from '../../store';
import { countryFilterActions } from '../../store/countryFilterSlice';
import classes from '../../sass/components/SearchBar.module.scss';

const SearchBar: React.FC<{ resetPages: () => void }> = ({ resetPages }) => {
  const themeCtx = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const { searchedCountry } = useSelector(
    (state: RootState) => state.countryFilter
  );

  const searchBarThemeClass = themeCtx.isLight
    ? classes['search-bar--light']
    : classes['search-bar--dark'];

  const searchInputThemeClass = themeCtx.isLight
    ? classes['search-bar__input--light']
    : classes['search-bar__input--dark'];

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(countryFilterActions.setSearchedCountry(e.target.value));
    resetPages();
  };

  const removeSearchHandler = () => {
    dispatch(countryFilterActions.setSearchedCountry(''));
  };

  return (
    <div className={[classes['search-bar'], searchBarThemeClass].join(' ')}>
      <AiOutlineSearch className={classes['search-bar__icon']} />

      <input
        className={[classes['search-bar__input'], searchInputThemeClass].join(
          ' '
        )}
        placeholder='Search for a country...'
        value={searchedCountry}
        onChange={searchHandler}
        name='searchBarInput'
        id='searchBarInput'
      />
      {
        <TiDeleteOutline
          className={[
            classes['search-bar__icon'],
            classes['search-bar__icon--x'],
          ].join(' ')}
          onClick={removeSearchHandler}
          data-testid='deleteIcon'
        />
      }
    </div>
  );
};

export default SearchBar;
