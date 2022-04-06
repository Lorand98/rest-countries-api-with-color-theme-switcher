import { Country } from "../types";

const CountryListElement: React.FC<{ country: Country }> = ({
  country,
}: {
  country: Country;
}) => {
  return (
    <li key={country.cca2}>
      <img alt={`${country.name.common} flag`} src={country.flags.svg} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </li>
  );
};

export default CountryListElement;
