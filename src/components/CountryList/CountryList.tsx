import { useEffect, useState } from 'react';
import {
  COUNTRIES_API,
  COUNTRIES_API_ALL_PARAMS,
  LOADING_COUNTRY_SKELETONS,
  NO_COUNTRIES_ALERT_MSG,
  UNKNOWN,
} from '../../constants';
import { useHttpRequest } from '../../hooks/https_requests';
import { Country, CountryRegions } from '../../types';
import CountryListElement from './CountryListElement';

import classes from './CountryList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { countryActions } from '../../store/countrySlice';
import Alert from '../UI/Alert';
import { AlertSeverity } from '../../types';

const validateCountries = (countries: Country[]) => {
  const validCountries: Country[] = countries.map((country: Country) => {
    const validCountry: Country = {
      name: {
        common: country.name.common || UNKNOWN,
        official: country.name.official || UNKNOWN,
        nativeName: country.name.nativeName,
      },
      cca2: country.cca2,
      capital: country.capital || UNKNOWN,
      region: country.region || UNKNOWN,
      population: country.population ?? UNKNOWN,
      flags: {
        svg: country.flags.svg,
        png: country.flags.png,
      },
    };

    return validCountry;
  });
  return validCountries;
};

let initialRun = true;

const CountryList: React.FC = () => {
  const { countries } = useSelector((state: RootState) => state.countries);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const { filteredRegion, searchedCountry } = useSelector(
    (state: RootState) => state.countryFilter
  );

  //TODO: Are these UseEffects alright? Is it ok to use 3 useffects in the same component for different tasks? Only the first performs sideeffect

  //TODO: create tests for checking if the filter/search function works - with dummy data

  //TODO: outsource filter/search logic to an external function, and call only that function from the useEffect

  //TODO: optimize searching performance - e.g.: paging

  //TODO: Loading animation

  const { sendRequest, isLoading, error } = useHttpRequest<Country[]>();

  useEffect(() => {
    const loadCountries = (loadedCountries: Country[]) => {
      const validCountries = validateCountries(loadedCountries);

      dispatch(countryActions.setCountries(validCountries));
    };

    sendRequest(`${COUNTRIES_API}${COUNTRIES_API_ALL_PARAMS}`, loadCountries);
  }, [sendRequest, dispatch]);

  useEffect(() => {
    if (initialRun) {
      initialRun = false;
      return;
    }

    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    const searchedCountryLowerCase = searchedCountry.toLowerCase();

    if (filteredRegion !== CountryRegions.ALL) {
      if (searchedCountryLowerCase.trim() !== '') {
        setFilteredCountries(
          countries.filter((country) => {
            return (
              country.region.includes(filteredRegion) &&
              country.name.common
                .toLowerCase()
                .includes(searchedCountryLowerCase)
              // ||
              // country.name.official
              //   .toLowerCase()
              //   .includes(searchedCountryLowerCase)
            );
          })
        );
      } else {
        setFilteredCountries(
          countries.filter((country) => {
            return country.region.includes(filteredRegion);
          })
        );
      }
    }

    if (filteredRegion === CountryRegions.ALL) {
      if (searchedCountry.trim() !== '') {
        setFilteredCountries(
          countries.filter(
            (country) =>
              country.name.common.toLowerCase().includes(searchedCountry)
            // ||
            // country.name.official.toLowerCase().includes(searchedCountry)
          )
        );
      } else {
        setFilteredCountries(countries);
      }
    }
  }, [filteredRegion, searchedCountry, countries]);

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

  return (
    alert ?? (
      <ul className={classes['country-list']}>
        {isLoading ? (
          <>
            {LOADING_COUNTRY_SKELETONS.map((skeleton, index) => (
              <CountryListElement key={index} />
            ))}
          </>
        ) : (
          filteredCountries.map((country: Country) => (
            <CountryListElement key={country.cca2} country={country} />
          ))
        )}
      </ul>
    )
  );
};

export default CountryList;
