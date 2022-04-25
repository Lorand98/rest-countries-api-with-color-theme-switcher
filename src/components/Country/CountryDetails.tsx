import { useLocation, useParams } from 'react-router-dom';
import classes from './CountryDetails.module.scss';
import { BiArrowBack } from 'react-icons/bi';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Link } from 'react-router-dom';
import { Country } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Countrydescription__details: React.FC = (props) => {
  const { cca2 } = useParams();
  const { countries } = useSelector((state: RootState) => state.countries);
  const state = useLocation().state as Country;
  const themeCtx = useContext(ThemeContext);

  const backBtnThemeClass = themeCtx.isLight
    ? [classes['country__back-btn--light'], classes['a--light']].join(' ')
    : [classes['country__back-btn--dark'], classes['a--dark']].join(' ');

  const borderCountryLinkThemeClass = themeCtx.isLight
    ? [
        classes['country__description__borders__links__link--light'],
        classes['a--light'],
      ].join(' ')
    : [
        classes['country__description__borders__links__link--dark'],
        classes['a--dark'],
      ].join(' ');

  const borderCountries = countries.filter((country: Country) =>
    state.borders.some((border) => {
      return border === country.cca3;
    })
  );

  return (
    <div className={classes['country']}>
      <Link
        className={[classes['country__back-btn'], backBtnThemeClass].join(' ')}
        to='/'
      >
        <BiArrowBack className={classes['country__back-btn__icon']} /> Back
      </Link>
      <img
        alt={`${state.name.common} flag`}
        src={state.flags.svg}
        className={classes['country__flag']}
      />
      <div className={classes['country__description']}>
        <h1 className={classes['country__description__name']}>
          {state.name.common}
        </h1>
        <div className={classes['country__description__details']}>
          <div className={classes['country__description__details__1']}>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Native Name:{' '}
              </span>
              {state.name.nativeName.official}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Population:{' '}
              </span>
              {state.population.toLocaleString('en-US')}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Region:{' '}
              </span>
              {state.region}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Sub Region:{' '}
              </span>
              {state.subregion}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Capital:{' '}
              </span>
              {state.capital}
            </p>
          </div>
          <div className={classes['country__description__details__2']}>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Top Level Domain:{' '}
              </span>
              {state.tld}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Currencies:{' '}
              </span>
              {Object.entries(state.currencies)
                .map(([, currency]) => currency.name)
                .join(', ')}
            </p>
            <p className={classes['country__description__details__property']}>
              <span
                className={
                  classes['country__description__details__property__name']
                }
              >
                Languages:{' '}
              </span>
              {Object.entries(state.languages)
                .map(([, language]) => language)
                .join(', ')}
            </p>
          </div>
        </div>
        <div className={classes['country__description__borders']}>
          <h2>Border Countries: </h2>
          <div className={classes['country__description__borders__links']}>
            {borderCountries.map((borderCountry) => (
              <Link
                key={borderCountry.cca3}
                className={[
                  borderCountryLinkThemeClass,
                  classes['country__description__borders__links__link'],
                ].join(' ')}
                to={`/${borderCountry.cca3}`}
                state={borderCountry}
              >
                {borderCountry.name.common}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrydescription__details;
