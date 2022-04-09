import { Country } from '../../types';

import classes from './CountryListElement.module.scss';

const CountryListElement: React.FC<{ country: Country }> = ({
  country,
}: {
  country: Country;
}) => {
  return (
    <li key={country.cca2} className={classes['country--dark']}>
      <img
        alt={`${country.name.common} flag`}
        src={country.flags.svg}
        className={classes['country__flag']}
      />
      <div className={classes['country__description']}>
        <div className={classes['country__description__name-wrapper']}>
          <h1 className={classes['country__description__name']}>
            {country.name.common}
          </h1>
        </div>
        <div className={classes['country__description__details']}>
          <p className={classes['country__description__details__property']}>
            <span
              className={
                classes['country__description__details__property__name']
              }
            >
              Population:
            </span>{' '}
            {country.population.toLocaleString('en-US')}
          </p>
          <p className={classes['country__description__details__property']}>
            <span
              className={
                classes['country__description__details__property__name']
              }
            >
              Region:
            </span>{' '}
            {country.region}
          </p>
          <p className={classes['country__description__details__property']}>
            <span
              className={
                classes['country__description__details__property__name']
              }
            >
              Capital:
            </span>{' '}
            {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountryListElement;
