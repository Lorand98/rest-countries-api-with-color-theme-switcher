import { useState } from 'react';
import CountryList from '../components/CountryList/CountryList';
import Filter from '../components/UI/Filter';

const CountryListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div style={{ padding: '0 5%' }}>
        <Filter />
        <CountryList currentPage={currentPage} />
      </div>
    </>
  );
};

export default CountryListPage;
