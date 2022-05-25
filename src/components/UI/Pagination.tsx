import classes from '../../sass/components/Pagination.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { COUNTRIES_NR_ON_A_PAGE } from '../../constants';
import { ThemeContext } from '../../context/theme-context';
import { useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import PaginationButton from './PaginationButton';

const Pagination: React.FC<{
  selectedPage: number;
  onSelectPage: (pageNr: number) => void;
}> = ({ selectedPage, onSelectPage }) => {
  //TODO: show page number instead of prev. and next
  const { countries } = useSelector((state: RootState) => state.countries);
  const totalPages = Math.ceil(countries.length / COUNTRIES_NR_ON_A_PAGE);
  const themeCtx = useContext(ThemeContext);

  const paginationBtnThemeClass = themeCtx.isLight
    ? classes['pagination__btn--light']
    : classes['pagination__btn--dark'];

  const paginationBtnClasses = [
    paginationBtnThemeClass,
    classes['pagination__btn'],
  ].join(' ');

  let pageNavigationJSX =
    selectedPage === 1 ? (
      <PaginationButton pageNr={selectedPage + 1} />
    ) : selectedPage === totalPages ? (
      <PaginationButton pageNr={selectedPage - 1} next={false} />
    ) : (
      <>
        <PaginationButton pageNr={selectedPage - 1} next={false} />
        <PaginationButton pageNr={selectedPage + 1} />
      </>
    );

  return <div className={classes['pagination']}> {pageNavigationJSX}</div>;
};

export default Pagination;
