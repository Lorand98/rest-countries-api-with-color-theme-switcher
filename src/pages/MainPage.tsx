import CountryList from '../components/CountryList/CountryList';
import Header from '../components/Layout/Header/Header';
import RegionFilter from '../components/UI/RegionFilter';
import SearchBar from '../components/UI/SearchBar';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <RegionFilter />
      <CountryList />
    </>
  );
};

export default MainPage;
