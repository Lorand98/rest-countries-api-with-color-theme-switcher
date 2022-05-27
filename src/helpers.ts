import { Country } from './types';
import { UNKNOWN } from './constants';

export const validateCountry = (country: Country) => {
  const validCountry: Country = {
    name: {
      common: country.name.common || UNKNOWN,
      official: country.name.official || UNKNOWN,
      nativeName: country.name.nativeName,
    },
    cca3: country.cca3,
    capital: country.capital || UNKNOWN,
    region: country.region || UNKNOWN,
    subregion: country.subregion || UNKNOWN,
    population: country.population ?? UNKNOWN,
    flags: {
      svg: country.flags.svg,
      png: country.flags.png,
    },
    tld: country.tld || UNKNOWN,
    currencies: {
      ...country.currencies,
    },
    languages: {
      ...country.languages,
    },
    borders: [...country.borders],
  };

  return validCountry;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
