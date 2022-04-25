import { useLocation, useParams } from 'react-router-dom';
import classes from './Country.module.scss';
import { BiArrowBack } from 'react-icons/bi';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Link } from 'react-router-dom';

const Country: React.FC = (props) => {
  const { cca2 } = useParams();
  const { state: country } = useLocation();
  const themeCtx = useContext(ThemeContext);

  const backBtnThemeClass = themeCtx.isLight
    ? [classes['country__back-btn--light'], classes['a--light']].join(' ')
    : [classes['country__back-btn--dark'], classes['a--dark']].join(' ');

  return (
    <div className={classes['country']}>
      <Link
        className={[classes['country__back-btn'], backBtnThemeClass].join(' ')}
        to='/'
      >
        <BiArrowBack className={classes['country__back-btn__icon']} /> Back
      </Link>
      {/* <img
          alt={`${country.name.common} flag`}
          src={country.flags.svg}
          className={classes['country__flag']}
        /> */}
      <div></div>
    </div>
  );
};

export default Country;
