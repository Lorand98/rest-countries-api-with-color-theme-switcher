import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CountryList from "../components/CountryList/CountryList";
import Filter from "../components/UI/Filter";
import Pagination from "../components/UI/Pagination";
import { COUNTRIES_NR_ON_A_PAGE } from "../constants";
import { RootState } from "../store";

const CountryListPage: React.FC = () => {
  const { page } = useParams();
  let pageNr = page !== undefined ? Number.parseInt(page) : 1;
  isNaN(pageNr) && (pageNr = 1);

  const { filteredCountries: countries } = useSelector(
    (state: RootState) => state.countries
  );
  const totalPages = Math.ceil(countries.length / COUNTRIES_NR_ON_A_PAGE) || 1;

  return (
    <>
      <div style={{ padding: "0 5%" }}>
        <Filter />
        <CountryList currentPage={pageNr} totalPages={totalPages} />
        {pageNr < totalPages && (
          <Pagination selectedPage={pageNr} totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default CountryListPage;
