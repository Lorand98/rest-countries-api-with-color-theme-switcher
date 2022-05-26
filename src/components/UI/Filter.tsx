import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import classes from "../../sass/components/Filter.module.scss";

const Filter: React.FC<{ onSelectPage: (pageNr: number) => void }> = ({
  onSelectPage,
}) => {
  const resetPagesHandler = () => {
    onSelectPage(1);
  };
  return (
    <div className={classes["filter"]}>
      <SearchBar resetPages={resetPagesHandler} />
      <RegionFilter resetPages={resetPagesHandler} />
    </div>
  );
};

export default Filter;
