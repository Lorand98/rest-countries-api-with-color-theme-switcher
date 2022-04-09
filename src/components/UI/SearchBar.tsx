import { AiOutlineSearch } from 'react-icons/ai';
import classes from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  return (
    <div className={classes['search-bar']}>
      <button className={classes['search-bar__btn']}>
        <AiOutlineSearch className={classes['search-bar__btn__icon']} />
      </button>
      <input
        className={classes['search-bar__input']}
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default SearchBar;
