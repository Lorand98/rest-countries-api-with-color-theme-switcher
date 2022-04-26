import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import classes from "../../sass/components/Card.module.scss";

const Card: React.FC<{ className?: string }> = ({
  children,
  className: classNameProps,
}) => {
  const themeCtx = useContext(ThemeContext);

  let className = classes["card"];
  className += ` ${
    themeCtx.isLight ? classes["card--light"] : classes["card--dark"]
  }`;

  classNameProps && (className += ` ${classNameProps}`);

  return <li className={className}>{children}</li>;
};

export default Card;
