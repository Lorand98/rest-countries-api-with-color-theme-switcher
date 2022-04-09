import { render, screen } from '@testing-library/react';
import CountryList from './CountryList';

describe('CountryList component', () => {
  test('renders countries if request succeeds', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => [
          {
            name: 'Romania',
            alpha2Code: 'RO',
            capital: 'Bucharest',
            region: 'Europe',
            population: 19286123,
            flags: {
              svg: 'https://flagcdn.com/ro.svg',
              png: 'https://flagcdn.com/w320/ro.png',
            },
            independent: false,
          },
        ],
      })
    ) as jest.Mock;

    render(<CountryList />);

    const listItemElements = await screen.findAllByRole('listitem', {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
