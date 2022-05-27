import { Country } from './types';

export const UNKNOWN: string = 'unknown';
export const COUNTRIES_API_ALL = 'https://restcountries.com/v3.1/all';
export const COUNTRIES_API_ALL_PARAMS =
  '?fields=name,population,region,subregion,capital,flags,cca3,tld,currencies,languages,borders';
export const COUNTRIES_API_COUNTRY = 'https://restcountries.com/v3.1/alpha/';

export const NO_COUNTRIES_ALERT_MSG =
  'No countries found! Please check the search term or change the filtered region!';
export const NO_PAGE_ALERT_MSG =
  'No countries found on this page! Please go back to page one!';
export const LOADING_COUNTRY_SKELETONS = new Array(20).fill({});
export const COUNTRIES_NR_ON_A_PAGE = 12;
export const TEST_COUNTRIES: Country[] = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/do.png',
      svg: 'https://flagcdn.com/do.svg',
    },
    name: {
      common: 'Dominican Republic',
      official: 'Dominican Republic',
      nativeName: {
        spa: {
          official: 'República Dominicana',
          common: 'República Dominicana',
        },
      },
    },
    tld: ['.do'],
    cca3: 'DOM',
    currencies: {
      DOP: {
        name: 'Dominican peso',
        symbol: '$',
      },
    },
    capital: ['Santo Domingo'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      spa: 'Spanish',
    },
    borders: ['HTI'],
    population: 10847904,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/hm.png',
      svg: 'https://flagcdn.com/hm.svg',
    },
    name: {
      common: 'Heard Island and McDonald Islands',
      official: 'Heard Island and McDonald Islands',
      nativeName: {
        eng: {
          official: 'Heard Island and McDonald Islands',
          common: 'Heard Island and McDonald Islands',
        },
      },
    },
    tld: ['.hm', '.aq'],
    cca3: 'HMD',
    currencies: {},
    capital: [],
    region: 'Antarctic',
    subregion: '',
    languages: {
      eng: 'English',
    },
    borders: [],
    population: 0,
  },
];
