import RegionFilter from "./RegionFilter";
import SearchBar from "./SearchBar";
import classes from "../../sass/components/Filter.module.scss";
import { useNavigate } from "react-router-dom";

const Filter: React.FC = () => {
  const navigate = useNavigate();
  const resetPagesHandler = () => {
    navigate("/");
  };
  return (
    <div className={classes["filter"]}>
      <SearchBar resetPages={resetPagesHandler} />
      <RegionFilter resetPages={resetPagesHandler} />
    </div>
  );
};

export default Filter;
