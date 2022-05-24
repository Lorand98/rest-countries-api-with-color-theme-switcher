import classes from '../../sass/components/Pagination.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { COUNTRIES_NR_ON_A_PAGE } from '../../constants';

const Pagination: React.FC<{
  selectedPage: number;
  onSelectPage: (pageNr: number) => void;
}> = ({ selectedPage, onSelectPage }) => {
  const { countries } = useSelector((state: RootState) => state.countries);
  const totalPages = Math.ceil(countries.length / COUNTRIES_NR_ON_A_PAGE);

  let pageNavigationJSX =
    selectedPage === 0 ? (
      <button>Previous page</button>
    ) : selectedPage === totalPages - 1 ? (
      <button>Next page</button>
    ) : (
      <>
        {' '}
        <button>Previous page</button>
        <button>Next page</button>
      </>
    );

  return <div className={classes['pagination']}>{pageNavigationJSX}</div>;
};

export default Pagination;
