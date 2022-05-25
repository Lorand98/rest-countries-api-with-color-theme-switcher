import classes from '../../sass/components/Pagination.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { COUNTRIES_NR_ON_A_PAGE } from '../../constants';
import PaginationButton from './PaginationButton';

const Pagination: React.FC<{
  selectedPage: number;
  onSelectPage: (pageNr: number) => void;
}> = ({ selectedPage, onSelectPage }) => {
  const { countries } = useSelector((state: RootState) => state.countries);
  const totalPages = Math.ceil(countries.length / COUNTRIES_NR_ON_A_PAGE);

  return (
    <div className={classes['pagination']}>
      {' '}
      <PaginationButton
        pageNr={selectedPage - 1}
        next={false}
        visible={selectedPage > 1}
      />{' '}
      <PaginationButton
        pageNr={selectedPage + 1}
        visible={selectedPage < totalPages}
      />
    </div>
  );
};

export default Pagination;
