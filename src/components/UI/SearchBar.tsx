import { AiOutlineSearch } from 'react-icons/ai';
import classes from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  return (
    <div
      className={[classes['search-bar'], classes['search-bar--dark']].join(' ')}
    >
      <button
        className={[
          classes['search-bar__btn'],
          classes['search-bar__btn--dark'],
        ].join(' ')}
      >
        <AiOutlineSearch className={classes['search-bar__btn__icon']} />
      </button>
      <input
        className={[
          classes['search-bar__input'],
          classes['search-bar__input--dark'],
        ].join(' ')}
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default SearchBar;
