import CountryList from './components/CountryList';
import classes from './App.module.scss';

//TODO: Routing
function App() {
  return (
    <div className={classes['background']}>
      <CountryList />
    </div>
  );
}

export default App;
