import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import classes from "../../sass/components/Filter.module.scss";

const Filter: React.FC = () => {
  return (
    <div className={classes["filter"]}>
      <SearchBar />
      <RegionFilter />
    </div>
  );
};

export default Filter;
