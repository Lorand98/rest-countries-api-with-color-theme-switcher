import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './context/theme-context';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
