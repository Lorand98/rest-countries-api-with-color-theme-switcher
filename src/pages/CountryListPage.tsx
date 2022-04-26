import CountryList from "../components/CountryList/CountryList";
import RegionFilter from "../components/UI/RegionFilter";
import SearchBar from "../components/UI/SearchBar";

const CountryListPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: "0 5%" }}>
        <SearchBar />
        <RegionFilter />
        <CountryList />
      </div>
    </>
  );
};

export default CountryListPage;
