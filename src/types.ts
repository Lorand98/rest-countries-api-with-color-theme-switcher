export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  capital: string;
  region: string;
  population: number | string;
  flags: {
    svg: string;
    png: string;
  };
  independent?: boolean;
  subregion: string;
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

export type CountryBorder = {
  cca3: string;
  name: Country['name'];
};

export enum CountryRegions {
  AFRICA = 'Africa',
  AMERICA = 'America',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}

export enum AlertSeverity {
  SEVERE = 'SEVERE',
  LOW = 'LOW',
}
