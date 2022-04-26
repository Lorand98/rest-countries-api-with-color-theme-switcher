import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import classes from "../../sass/components/LoadingSkeleton.module.scss";

const LoadingSkeleton: React.FC<{ className?: string; isText: boolean }> = ({
  isText,
  className: classNameProps,
}) => {
  const themeCtx = useContext(ThemeContext);

  const loadingSkeletonThemeClasses = themeCtx.isLight
    ? classes["loading-skeleton--light"]
    : classes["loading-skeleton--dark"];

  let className = [
    classes["loading-skeleton"],
    loadingSkeletonThemeClasses,
  ].join(" ");

  isText && (className += ` ${classes["loading-skeleton--text"]}`);
  classNameProps && (className += ` ${classNameProps}`);

  return <div className={className}></div>;
};

export default LoadingSkeleton;
