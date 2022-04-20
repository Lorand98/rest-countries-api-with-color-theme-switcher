import { Country } from './types';

export const UNKNOWN: string = 'unknown';
export const COUNTRIES_API = 'https://restcountries.com/v3.1/';
export const COUNTRIES_API_ALL_PARAMS =
  'all?fields=name,population,region,capital,flags,cca2';
export const NO_COUNTRIES_ALERT_MSG =
  'No countries found! Please check the search term or change the filtered region!';
export const LOADING_COUNTRY_SKELETONS = new Array(20).fill({});
