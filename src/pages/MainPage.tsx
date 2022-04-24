import CountryList from '../components/CountryList/CountryList';
import Header from '../components/Layout/Header/Header';
import SearchBar from '../components/UI/SearchBar';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <CountryList />
    </>
  );
};

export default MainPage;
