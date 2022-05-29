import { useEffect } from 'react';
import {
  COUNTRIES_API_ALL,
  COUNTRIES_API_ALL_PARAMS,
  COUNTRIES_NR_ON_A_PAGE,
  LOADING_COUNTRY_SKELETONS,
  NO_COUNTRIES_ALERT_MSG,
  NO_PAGE_ALERT_MSG,
} from '../../constants';
import { useHttpRequest } from '../../hooks/https_requests';
import { Country } from '../../types';
import CountryListElement from './CountryListElement';

import classes from '../../sass/components/CountryList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { countryListActions } from '../../store/countryListSlice';
import Alert from '../UI/Alert';
import { AlertSeverity } from '../../types';
import { scrollToTop, validateCountry } from '../../helpers';

const validateCountries = (countries: Country[]) => {
  const validCountries: Country[] = countries.map((country: Country) =>
    validateCountry(country)
  );
  return validCountries;
};

let initialRun = true;

const CountryList: React.FC<{ currentPage: number; totalPages: number }> = ({
  currentPage,
  totalPages,
}) => {
  const { allCountries: countries, filteredCountries } = useSelector(
    (state: RootState) => state.countries
  );
  const dispatch = useDispatch<AppDispatch>();

  const { filteredRegion, searchedCountry } = useSelector(
    (state: RootState) => state.countryFilter
  );
  //TODO: create tests for checking if the filter/search function works - with dummy data

  const { sendRequest, isLoading, error } = useHttpRequest<Country[]>();

  useEffect(() => {
    if (countries.length === 0) {
      const loadCountries = (loadedCountries: Country[]) => {
        const validCountries = validateCountries(loadedCountries);

        dispatch(countryListActions.setCountries(validCountries));
      };

      sendRequest(
        `${COUNTRIES_API_ALL}${COUNTRIES_API_ALL_PARAMS}`,
        loadCountries
      );
    }
  }, [sendRequest, dispatch, countries]);

  useEffect(() => {
    dispatch(
      countryListActions.filterCountries({ filteredRegion, searchedCountry })
    );
  }, [filteredRegion, searchedCountry, dispatch]);

  let alert = null;
  if (error) {
    alert = <Alert severity={AlertSeverity.SEVERE}>{error}</Alert>;
  } else if (
    !isLoading &&
    filteredCountries.length === 0 &&
    searchedCountry.trim().length > 0
  ) {
    alert = (
      <Alert severity={AlertSeverity.LOW}>{NO_COUNTRIES_ALERT_MSG}</Alert>
    );
  }

  const loadingCountryListJSX = LOADING_COUNTRY_SKELETONS.map(
    (skeleton, index) => <CountryListElement key={index} />
  );

  let countryListJSX = filteredCountries.map((country: Country) => (
    <CountryListElement key={country.cca3} country={country} />
  ));

  if (currentPage <= totalPages) {
    countryListJSX = countryListJSX.slice(
      (currentPage - 1) * COUNTRIES_NR_ON_A_PAGE,
      currentPage * COUNTRIES_NR_ON_A_PAGE
    );
    scrollToTop();
  } else {
    alert = <Alert severity={AlertSeverity.LOW}>{NO_PAGE_ALERT_MSG}</Alert>;
  }

  return (
    alert ?? (
      <ul className={classes['country-list']}>
        {isLoading ? loadingCountryListJSX : countryListJSX}
      </ul>
    )
  );
};

export default CountryList;
