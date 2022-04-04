import { useEffect, useState } from 'react';
import { UNKNOWN } from '../constants';
import { Country } from '../types';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const getCountries = async () => {
      //TODO: extract fetching to a separate file
      const APICountries = await (
        await fetch(
          'https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha2Code'
        )
      ).json();

      //TODO: Ask on FrontendMentor better solutions for the validation - how to make it at least more optimized - not to loop through all countries
      const countries: Country[] = APICountries.map((APIcountry: any) => {
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

      setCountries(countries);
    };

    getCountries();
  }, []);

  return (
    <div>
      {countries.map((country: Country) => (
        <div key={country.code}>
          <img alt={`${country.name} flag`} src={country.flag} />
          <p>Name: {country.name}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
