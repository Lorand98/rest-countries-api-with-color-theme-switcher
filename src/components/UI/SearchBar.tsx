import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThemeContext } from '../../context/theme-context';
import classes from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const searchBarThemeClass = themeCtx.isLight
    ? classes['search-bar--light']
    : classes['search-bar--dark'];

  const searchInputThemeClass = themeCtx.isLight
    ? classes['search-bar__input--light']
    : classes['search-bar__input--dark'];

  return (
    <div className={[classes['search-bar'], searchBarThemeClass].join(' ')}>
      <button
        className={[
          classes['search-bar__btn'],
          classes['search-bar__btn--dark'],
        ].join(' ')}
      >
        <AiOutlineSearch className={classes['search-bar__btn__icon']} />
      </button>
      <input
        className={[classes['search-bar__input'], searchInputThemeClass].join(
          ' '
        )}
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default SearchBar;
