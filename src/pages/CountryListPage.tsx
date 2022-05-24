import { useState } from 'react';
import CountryList from '../components/CountryList/CountryList';
import Filter from '../components/UI/Filter';
import Pagination from '../components/UI/Pagination';

const CountryListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const selectPageHandler = (pageNr: number) => {
    setCurrentPage(pageNr);
  };

  return (
    <>
      <div style={{ padding: '0 5%' }}>
        <Filter />
        <CountryList currentPage={currentPage} />
        <Pagination
          selectedPage={currentPage}
          onSelectPage={selectPageHandler}
        />
      </div>
    </>
  );
};

export default CountryListPage;
