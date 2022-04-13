import classes from "./RegionFilter.module.scss";

const RegionFilter: React.FC = () => {
  return (
    <div className={classes["filter"]}>
      <div className={classes["filter__header"]}>Filter by Region</div>
      <ul className={classes["filter__list"]}>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  );
};

export default RegionFilter;
