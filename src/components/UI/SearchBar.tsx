import { useContext, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../context/theme-context";
import { AppDispatch } from "../../store";
import { countryFilterActions } from "../../store/countryFilterSlice";
import classes from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchBarThemeClass = themeCtx.isLight
    ? classes["search-bar--light"]
    : classes["search-bar--dark"];

  const searchInputThemeClass = themeCtx.isLight
    ? classes["search-bar__input--light"]
    : classes["search-bar__input--dark"];

  const searchHandler = () => {
    if (inputRef?.current)
      dispatch(countryFilterActions.setSearchedCountry(inputRef.current.value));
  };

  return (
    <div className={[classes["search-bar"], searchBarThemeClass].join(" ")}>
      <AiOutlineSearch className={classes["search-bar__icon"]} />

      <input
        className={[classes["search-bar__input"], searchInputThemeClass].join(
          " "
        )}
        placeholder="Search for a country..."
        ref={inputRef}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
