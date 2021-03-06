export const APP_TITLE = 'Where in the world?';
export const UNKNOWN = 'unknown';
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
export const REGION_FILTER_PLACEHOLDER = 'Filter By Region';
