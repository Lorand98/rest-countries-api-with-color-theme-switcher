import CountryList from "./components/CountryList/CountryList";
import classes from "./App.module.scss";
import Header from "./components/Layout/Header/Header";
import SearchBar from "./components/UI/SearchBar";
import { ThemeContext } from "./context/theme-context";
import { useContext } from "react";
import RegionFilter from "./components/UI/RegionFilter";

//TODO: Routing
function App() {
  const themeCtx = useContext(ThemeContext);

  const backgroundThemeClass = themeCtx.isLight
    ? [classes["background"], classes["background--light"]].join(" ")
    : [classes["background"], classes["background--dark"]].join(" ");
  const textThemeClass = `${classes["text"]} ${
    themeCtx.isLight ? classes["text--light"] : classes["text--dark"]
  }`;

  return (
    <div className={[backgroundThemeClass, textThemeClass].join(" ")}>
      <Header />
      <SearchBar />
      <RegionFilter />
      <CountryList />
    </div>
  );
}

export default App;
