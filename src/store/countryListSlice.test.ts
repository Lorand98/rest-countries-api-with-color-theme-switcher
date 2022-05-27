import { TEST_COUNTRIES } from '../constants';
import reducer, { countryListActions } from './countryListSlice';

describe('Country List slice', () => {
  test('should handle the initialization of the countries', () => {
    expect(
      reducer(undefined, countryListActions.setCountries(TEST_COUNTRIES))
    ).toEqual({
      allCountries: TEST_COUNTRIES,
      filteredCountries: TEST_COUNTRIES,
    });
  });
});
