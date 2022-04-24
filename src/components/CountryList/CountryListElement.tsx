import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-context';
import { Country } from '../../types';
import LoadingSkeleton from '../UI/LoadingSkeleton';

import classes from './CountryListElement.module.scss';

const CountryListElement: React.FC<{ country?: Country }> = ({ country }) => {
  const themeCtx = useContext(ThemeContext);
  const countryThemeClass = themeCtx.isLight
    ? classes['country--light']
    : classes['country--dark'];

  if (!country) {
    return (
      <li
        className={[
          classes['country'],
          classes['country--skeleton'],
          countryThemeClass,
        ].join(' ')}
      >
        <LoadingSkeleton
          isText={false}
          className={classes['country--skeleton__skeleton-flag']}
        />
        <div
          className={[
            classes['country__description'],
            classes['country__description--skeleton'],
          ].join(' ')}
        >
          <LoadingSkeleton
            isText={true}
            className={classes['country__description--skeleton__name']}
          />
          <div
            className={[
              classes['country__description__details'],
              classes['country__description__details--skeleton'],
            ].join(' ')}
          >
            <LoadingSkeleton isText={true} />
            <LoadingSkeleton isText={true} />
            <LoadingSkeleton isText={true} />
          </div>
        </div>
      </li>
    );
  } else {
  }

  return (
    <li className={[classes['country'], countryThemeClass].join(' ')}>
      <Link to={country.cca2}>
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
      </Link>
    </li>
  );
};

export default CountryListElement;
