import CountryList from './components/CountryList/CountryList';
import './App.module.scss';
import Header from './components/Layout/Header/Header';
import SearchBar from './components/UI/SearchBar';

//TODO: Routing
function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <CountryList />
    </>
  );
}

export default App;
