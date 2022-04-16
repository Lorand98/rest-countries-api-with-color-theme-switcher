import { useEffect, useState } from 'react';
import {
  COUNTRIES_API,
  COUNTRIES_API_ALL_PARAMS,
  UNKNOWN,
} from '../../constants';
import { useHttpRequest } from '../../hooks/https_requests';
import { Country, COUNTRY_REGIONS } from '../../types';
import CountryListElement from './CountryListElement';

import classes from './CountryList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { countryActions } from '../../store/countrySlice';

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

  useEffect(() => {
    if (initialRun) {
      initialRun = false;
      return;
    }

    setFilteredCountries(countries);
  }, [countries]);

  //TODO: Fix filter logic, optimize

  useEffect(() => {
    if (filteredRegion !== COUNTRY_REGIONS.ALL) {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region.includes(filteredRegion);
        })
      );
    }

    if (filteredRegion === COUNTRY_REGIONS.ALL) {
      setFilteredCountries(countries);
    }
  }, [filteredRegion]);

  useEffect(() => {
    if (searchedCountry.trim() !== '') {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.name.common.includes(searchedCountry) ||
            country.name.official.includes(searchedCountry)
        )
      );
    }
  }, [searchedCountry]);

  const { sendRequest, isLoading, error } = useHttpRequest<Country[]>();
  useEffect(() => {
    const loadCountries = (loadedCountries: Country[]) => {
      const validCountries = validateCountries(loadedCountries);

      dispatch(countryActions.setCountries(validCountries));
    };

    sendRequest(`${COUNTRIES_API}${COUNTRIES_API_ALL_PARAMS}`, loadCountries);
  }, [sendRequest, dispatch]);

  return (
    <ul className={classes['country-list']}>
      {filteredCountries.map((country: Country) => (
        <CountryListElement key={country.cca2} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
