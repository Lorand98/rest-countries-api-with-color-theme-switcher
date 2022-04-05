import { render, screen } from '@testing-library/react';
import CountryList from './CountryList';

describe('CountryList component', () => {
  test('renders countries if request succeeds', async () => {
    const response = {
      status,
      json: () =>
        Promise.resolve({
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
        }),
    };

    render(<CountryList />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
