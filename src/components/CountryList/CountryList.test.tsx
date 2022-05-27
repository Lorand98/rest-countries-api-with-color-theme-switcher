import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TEST_COUNTRIES } from '../../constants';
import store from '../../store';
import CountryList from './CountryList';

describe('CountryList component', () => {
  test('renders countries if request succeeds', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => TEST_COUNTRIES,
      })
    ) as jest.Mock;
    window.scrollTo = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<CountryList currentPage={1} totalPages={1} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const listItemElements = await screen.findAllByRole('listitem', {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
