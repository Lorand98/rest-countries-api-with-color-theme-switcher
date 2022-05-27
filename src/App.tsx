import classes from "./sass/App.module.scss";
import { ThemeContext } from "./context/theme-context";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import CountryListPage from "./pages/CountryListPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

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
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/:page" element={<CountryListPage />} />
        <Route path="/country/:cca3" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
