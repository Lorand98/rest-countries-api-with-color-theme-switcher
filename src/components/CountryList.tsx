import { useEffect, useState } from 'react';
import { COUNTRIES_API, COUNTRIES_API_ALL_PARAMS, UNKNOWN } from '../constants';
import { useHttpRequest } from '../hooks/https_requests';
import { Country } from '../types';

//TODO: Question: Is it ok to put any to the type of the apireslt? If yes, what to put since structure is uknown - is not determined by us since by an external API
const validateCountries = (APIResultCountries: any) => {
  const countries: Country[] = APIResultCountries.map((APIcountry: any) => {
    const {
      name,
      population,
      region,
      capital,
      flags,
      alpha2Code,
    }: {
      name: string;
      population: number;
      region: string;
      capital: string;
      flags: {
        svg: string;
        png: string;
      };
      alpha2Code: string;
    } = APIcountry;

    const country: Country = {
      name,
      population: population ?? UNKNOWN,
      region: region || UNKNOWN,
      capital: capital || UNKNOWN,
      //TODO: return template img src instead of UNKNOWN string for the flag
      flag: flags.svg || flags.png || UNKNOWN,
      code: alpha2Code,
    };

    return country;
  });
  return countries;
};

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const loadCountries = (countriesFromAPI: any) => {
    const validCountries = validateCountries(countriesFromAPI);
    setCountries(validCountries);
  };

  const { sendRequest, isLoading, error } =
    //TODO: change any to an actual country type
    useHttpRequest<any>();
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
          <div key={country.code}>
            <img alt={`${country.name} flag`} src={country.flag} />
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
