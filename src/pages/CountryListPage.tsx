import CountryList from "../components/CountryList/CountryList";
import Header from "../components/Layout/Header";
import RegionFilter from "../components/UI/RegionFilter";
import SearchBar from "../components/UI/SearchBar";

const CountryListPage: React.FC = () => {
  return (
    <>
      <SearchBar />
      <RegionFilter />
      <CountryList />
    </>
  );
};

export default CountryListPage;
