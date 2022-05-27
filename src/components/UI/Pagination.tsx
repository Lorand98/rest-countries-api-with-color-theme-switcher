import classes from "../../sass/components/Pagination.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { COUNTRIES_NR_ON_A_PAGE } from "../../constants";
import PaginationButtonLink from "./PaginationButtonLink";

const Pagination: React.FC<{
  selectedPage: number;
}> = ({ selectedPage }) => {
  const { filteredCountries: countries } = useSelector(
    (state: RootState) => state.countries
  );
  const totalPages = Math.ceil(countries.length / COUNTRIES_NR_ON_A_PAGE);

  return (
    <div className={classes["pagination"]}>
      {" "}
      <PaginationButtonLink
        pageNr={selectedPage - 1}
        next={false}
        visible={selectedPage > 1}
      />{" "}
      <PaginationButtonLink
        pageNr={selectedPage + 1}
        visible={selectedPage < totalPages}
      />
    </div>
  );
};

export default Pagination;
