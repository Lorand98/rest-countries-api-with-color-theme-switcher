import classes from '../../sass/components/PaginationButton.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const PaginationButton: React.FC<{ pageNr: number; next?: boolean }> = ({
  pageNr,
  next = true,
}) => {
  const themeCtx = useContext(ThemeContext);

  const paginationBtnThemeClass = themeCtx.isLight
    ? classes['pagination-btn--light']
    : classes['pagination-btn--dark'];

  const paginationBtnClasses = [
    paginationBtnThemeClass,
    classes['pagination-btn'],
  ].join(' ');

  return (
    <button className={paginationBtnClasses}>
      {next ? (
        <>
          Page {pageNr}
          <AiOutlineArrowRight className={classes['pagination-btn__icon']} />
        </>
      ) : (
        <>
          <AiOutlineArrowLeft className={classes['pagination-btn__icon']} />
          Page {pageNr}
        </>
      )}{' '}
    </button>
  );
};

export default PaginationButton;
