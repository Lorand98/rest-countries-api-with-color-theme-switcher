import { useParams } from 'react-router-dom';
import classes from '../../sass/components/CountryDetails.module.scss';
import { BiArrowBack } from 'react-icons/bi';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Link } from 'react-router-dom';
import { AlertSeverity, Country, CountryBorder } from '../../types';
import { useHttpRequest } from '../../hooks/https_requests';
import {
  COUNTRIES_API_ALL_PARAMS,
  COUNTRIES_API_COUNTRY,
} from '../../constants';
import { scrollToTop, validateCountry } from '../../helpers';
import LoadingSkeleton from '../UI/LoadingSkeleton';
import Alert from '../UI/Alert';

const Countrydescription__details: React.FC = (props) => {
  const { cca3 } = useParams();
  const themeCtx = useContext(ThemeContext);
  const {
    sendRequest: sendRequestCountry,
    isLoading: countryIsLoading,
    error: fetchCountryError,
  } = useHttpRequest<Country>();
  const { sendRequest: sendRequestBorders, isLoading: bordersIsLoading } =
    useHttpRequest<CountryBorder>();
  const [country, setCountry] = useState<Country>();
  const [borders, setBorders] = useState<CountryBorder[]>([]);

  const setValidCountry = (country: Country) => {
    const validCountry = validateCountry(country);

    setCountry(validCountry);
  };

  useEffect(() => {
    setCountry(undefined);
    setBorders([]);
    scrollToTop();
    sendRequestCountry(
      `${COUNTRIES_API_COUNTRY}${cca3}${COUNTRIES_API_ALL_PARAMS}`,
      setValidCountry
    );
  }, [sendRequestCountry, cca3]);

  useEffect(() => {
    const addBorder = (border: CountryBorder) => {
      setBorders((oldBorders) => oldBorders.concat(border));
    };
    if (country && country.borders.length > 0 && borders.length === 0) {
      country.borders.forEach((border) => {
        sendRequestBorders(
          `${COUNTRIES_API_COUNTRY}${border}?fields=name,cca3`,
          addBorder
        );
      });
    }
  }, [sendRequestBorders, country, borders]);

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

  const isLoading =
    countryIsLoading || bordersIsLoading || country === undefined;

  let alert = null;
  if (fetchCountryError) {
    alert = (
      <Alert
        className={classes['country__alert']}
        severity={AlertSeverity.SEVERE}
      >
        {fetchCountryError}
      </Alert>
    );
  }

  return (
    <div className={classes['country-wrapper']}>
      <Link
        className={[
          classes['country-wrapper__back-btn'],
          backBtnThemeClass,
        ].join(' ')}
        to='/'
      >
        <BiArrowBack className={classes['country-wrapper__back-btn__icon']} />{' '}
        Back
      </Link>
      {alert ?? (
        <div className={classes['country']}>
          <>
            {isLoading ? (
              <LoadingSkeleton
                className={[
                  classes['country__flag'],
                  classes['country__flag--skeleton'],
                ].join(' ')}
                isText={false}
              />
            ) : (
              <img
                alt={`${country.name.common} flag`}
                src={country.flags.svg}
                className={classes['country__flag']}
              />
            )}
          </>
          <div className={classes['country__description']}>
            {isLoading ? (
              <LoadingSkeleton
                className={[
                  classes['country__description__name'],
                  classes['country__description__name--skeleton'],
                ].join('')}
                isText={true}
              />
            ) : (
              <h1 className={classes['country__description__name']}>
                {country.name.common}
              </h1>
            )}
            <div className={classes['country__description__details']}>
              <div className={classes['country__description__details__1']}>
                {isLoading ? (
                  <>
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                  </>
                ) : (
                  <>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Native Name:{' '}
                      </span>
                      {Object.entries(country.name.nativeName)[0][1].common}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Population:{' '}
                      </span>
                      {country.population.toLocaleString('en-US')}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Region:{' '}
                      </span>
                      {country.region}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Sub Region:{' '}
                      </span>
                      {country.subregion}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Capital:{' '}
                      </span>
                      {country.capital}
                    </p>
                  </>
                )}
              </div>
              <div className={classes['country__description__details__2']}>
                {isLoading ? (
                  <>
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                    <LoadingSkeleton isText={true} />
                  </>
                ) : (
                  <>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Top Level Domain:{' '}
                      </span>
                      {country.tld}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Currencies:{' '}
                      </span>
                      {Object.entries(country.currencies)
                        .map(([, currency]) => currency.name)
                        .join(', ')}
                    </p>
                    <p
                      className={
                        classes['country__description__details__property']
                      }
                    >
                      <span
                        className={
                          classes[
                            'country__description__details__property__name'
                          ]
                        }
                      >
                        Languages:{' '}
                      </span>
                      {Object.entries(country.languages)
                        .map(([, language]) => language)
                        .join(', ')}
                    </p>
                  </>
                )}
              </div>
            </div>
            {borders.length > 0 && (
              <div className={classes['country__description__borders']}>
                <h2>Border Countries: </h2>
                <div
                  className={classes['country__description__borders__links']}
                >
                  {borders.map((border) => (
                    <Link
                      key={border.cca3}
                      className={[
                        borderCountryLinkThemeClass,
                        classes['country__description__borders__links__link'],
                      ].join(' ')}
                      to={`/${border.cca3}`}
                    >
                      {border.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countrydescription__details;
