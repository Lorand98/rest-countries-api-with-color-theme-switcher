import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { Country } from "../../types";
import LoadingSkeleton from "../UI/LoadingSkeleton";

import classes from "../../sass/components/CountryListElement.module.scss";
import Card from "../UI/Card";

const CountryListElement: React.FC<{ country?: Country }> = ({ country }) => {
  const themeCtx = useContext(ThemeContext);

  const linkThemeClass = themeCtx.isLight
    ? classes["a--light"]
    : classes["a--dark"];

  if (!country) {
    return (
      <Card
        className={[classes["country"], classes["country--skeleton"]].join(" ")}
      >
        <LoadingSkeleton
          isText={false}
          className={classes["country--skeleton__skeleton-flag"]}
        />
        <div
          className={[
            classes["country__description"],
            classes["country__description--skeleton"],
          ].join(" ")}
        >
          <LoadingSkeleton
            isText={true}
            className={classes["country__description--skeleton__name"]}
          />
          <div
            className={[
              classes["country__description__details"],
              classes["country__description__details--skeleton"],
            ].join(" ")}
          >
            <LoadingSkeleton isText={true} />
            <LoadingSkeleton isText={true} />
            <LoadingSkeleton isText={true} />
          </div>
        </div>
      </Card>
    );
  } else {
  }

  return (
    <Card className={classes["country"]}>
      <Link to={country.cca3} className={linkThemeClass}>
        <img
          alt={`${country.name.common} flag`}
          src={country.flags.svg}
          className={classes["country__flag"]}
        />
        <div className={classes["country__description"]}>
          <div className={classes["country__description__name-wrapper"]}>
            <h1 className={classes["country__description__name"]}>
              {country.name.common}
            </h1>
          </div>
          <div className={classes["country__description__details"]}>
            <p className={classes["country__description__details__property"]}>
              <span
                className={
                  classes["country__description__details__property__name"]
                }
              >
                Population:
              </span>{" "}
              {country.population.toLocaleString("en-US")}
            </p>
            <p className={classes["country__description__details__property"]}>
              <span
                className={
                  classes["country__description__details__property__name"]
                }
              >
                Region:
              </span>{" "}
              {country.region}
            </p>
            <p className={classes["country__description__details__property"]}>
              <span
                className={
                  classes["country__description__details__property__name"]
                }
              >
                Capital:
              </span>{" "}
              {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CountryListElement;
