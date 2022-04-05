import { useEffect, useState } from 'react';
import { COUNTRIES_API, COUNTRIES_API_ALL_PARAMS, UNKNOWN } from '../constants';
import { useHttpRequest } from '../hooks/https_requests';
import { Country } from '../types';

const validateCountries = (countries: Country[]) => {
  const validCountries: Country[] = countries.map((country: Country) => {
    const validCountry: Country = {
      name: country.name || UNKNOWN,
      alpha2Code: country.alpha2Code,
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

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const loadCountries = (loadedCountries: Country[]) => {
    const validCountries = validateCountries(loadedCountries);
    setCountries(validCountries);
  };

  const { sendRequest, isLoading, error } = useHttpRequest<Country[]>();
  useEffect(() => {
    sendRequest(`${COUNTRIES_API}${COUNTRIES_API_ALL_PARAMS}`, loadCountries);
  }, [sendRequest]);

  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        countries.map((country: Country) => (
          <div key={country.alpha2Code}>
            <img alt={`${country.name} flag`} src={country.flags.svg} />
            <p>Name: {country.name}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CountryList;
