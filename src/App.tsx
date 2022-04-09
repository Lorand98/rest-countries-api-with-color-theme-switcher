import CountryList from './components/CountryList/CountryList';
import classes from './App.module.scss';
import Header from './components/Layout/Header/Header';
import SearchBar from './components/UI/SearchBar';

//TODO: Routing
function App() {
  return (
    <div
      className={[classes['background--dark'], classes['text--dark']].join(' ')}
    >
      <Header />
      <SearchBar />
      <CountryList />
    </div>
  );
}

export default App;
