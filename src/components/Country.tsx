import { useParams } from 'react-router-dom';
import classes from './Country.module.scss';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const Country: React.FC = (props) => {
  const { cca2 } = useParams();
  const themeCtx = useContext(ThemeContext);

  const backBtnThemeClass = themeCtx.isLight
    ? classes['country__back-btn--light']
    : classes['country__back-btn--dark'];

  return (
    <div className={classes['country']}>
      <button
        className={[classes['country__back-btn'], backBtnThemeClass].join(' ')}
      >
        <IoIosArrowRoundBack className={classes['country__back-btn__icon']} />{' '}
        Back
      </button>
    </div>
  );
};

export default Country;
