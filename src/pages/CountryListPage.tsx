import { useParams } from "react-router-dom";
import CountryList from "../components/CountryList/CountryList";
import Filter from "../components/UI/Filter";
import Pagination from "../components/UI/Pagination";

const CountryListPage: React.FC = () => {
  const { page } = useParams();
  let pageNr = page !== undefined ? Number.parseInt(page) : 1;
  isNaN(pageNr) && (pageNr = 1);

  return (
    <>
      <div style={{ padding: "0 5%" }}>
        <Filter />
        <CountryList currentPage={pageNr} />
        <Pagination selectedPage={pageNr} />
      </div>
    </>
  );
};

export default CountryListPage;
