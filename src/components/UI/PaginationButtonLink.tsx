import classes from "../../sass/components/PaginationButtonLink.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PaginationButtonLink: React.FC<{
  pageNr: number;
  next?: boolean;
  className?: string;
  visible: boolean;
}> = ({ pageNr, next = true, className: classNameProps, visible }) => {
  const themeCtx = useContext(ThemeContext);

  let paginationBtnClasses = classes["pagination-btn"];
  if (!visible) {
    paginationBtnClasses += ` ${classes["pagination-btn--invisible"]}`;
  } else {
    const paginationBtnThemeClass = themeCtx.isLight
      ? classes["pagination-btn--light"]
      : classes["pagination-btn--dark"];

    paginationBtnClasses += ` ${paginationBtnThemeClass} ${
      classNameProps || ""
    }`;
  }

  return (
    <Link className={paginationBtnClasses} to={`/${pageNr}`}>
      {next ? (
        <>
          Page {pageNr}
          <AiOutlineArrowRight className={classes["pagination-btn__icon"]} />
        </>
      ) : (
        <>
          <AiOutlineArrowLeft className={classes["pagination-btn__icon"]} />
          Page {pageNr}
        </>
      )}{" "}
    </Link>
  );
};

export default PaginationButtonLink;
