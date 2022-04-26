import CountryList from "../components/CountryList/CountryList";
import Filter from "../components/UI/Filter";

const CountryListPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: "0 5%" }}>
        <Filter />
        <CountryList />
      </div>
    </>
  );
};

export default CountryListPage;
