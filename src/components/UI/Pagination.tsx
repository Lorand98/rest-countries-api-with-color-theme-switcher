import classes from "../../sass/components/Pagination.module.scss";

import PaginationButtonLink from "./PaginationButtonLink";

const Pagination: React.FC<{
  selectedPage: number;
  totalPages: number;
}> = ({ selectedPage, totalPages }) => {
  return (
    <div className={classes["pagination"]}>
      {" "}
      <PaginationButtonLink
        pageNr={selectedPage - 1}
        next={false}
        visible={selectedPage > 1}
      />{" "}
      <PaginationButtonLink
        pageNr={selectedPage + 1}
        visible={selectedPage < totalPages}
      />
    </div>
  );
};

export default Pagination;
