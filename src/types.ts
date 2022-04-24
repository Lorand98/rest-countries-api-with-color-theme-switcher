export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  capital: string;
  region: string;
  population: number | string;
  flags: {
    svg: string;
    png: string;
  };
  independent?: boolean;
}

export interface DetailedCountry extends Country {
  subregion: string;
  tld: string;
  currencies: {
    name: string;
    symbol: string;
  }[];
  languages: string[];
}

export enum CountryRegions {
  ALL = 'Filter by Region',
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
