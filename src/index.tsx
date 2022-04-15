import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ThemeContextProvider from './context/theme-context';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>,
  document.getElementById('root')
);
