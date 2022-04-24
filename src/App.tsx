import classes from './App.module.scss';
import { ThemeContext } from './context/theme-context';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  const themeCtx = useContext(ThemeContext);

  const backgroundThemeClass = themeCtx.isLight
    ? [classes['background'], classes['background--light']].join(' ')
    : [classes['background'], classes['background--dark']].join(' ');
  const textThemeClass = `${classes['text']} ${
    themeCtx.isLight ? classes['text--light'] : classes['text--dark']
  }`;

  //TODO: 404 page
  return (
    <div className={[backgroundThemeClass, textThemeClass].join(' ')}>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
