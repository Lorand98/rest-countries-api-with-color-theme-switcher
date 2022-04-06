import { useEffect, useState } from "react";
import { COUNTRIES_API, COUNTRIES_API_ALL_PARAMS, UNKNOWN } from "../constants";
import { useHttpRequest } from "../hooks/https_requests";
import { Country } from "../types";

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
    <ul>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        countries.map((country: Country) => (
          <li key={country.cca2}>
            <img alt={`${country.name.common} flag`} src={country.flags.svg} />
            <p>Name: {country.name.common}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default CountryList;
