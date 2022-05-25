import classes from '../../sass/components/PaginationButton.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const PaginationButton: React.FC<{
  pageNr: number;
  next?: boolean;
  className?: string;
  visible: boolean;
  onClick: (pageNr: number) => void;
}> = ({ pageNr, next = true, className: classNameProps, visible, onClick }) => {
  const themeCtx = useContext(ThemeContext);

  let paginationBtnClasses = classes['pagination-btn'];
  if (!visible) {
    paginationBtnClasses += ` ${classes['pagination-btn--invisible']}`;
  } else {
    const paginationBtnThemeClass = themeCtx.isLight
      ? classes['pagination-btn--light']
      : classes['pagination-btn--dark'];

    paginationBtnClasses += ` ${paginationBtnThemeClass} ${
      classNameProps || ''
    }`;
  }

  return (
    <button
      className={paginationBtnClasses}
      onClick={onClick.bind(null, pageNr)}
    >
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
