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

export enum COUNTRY_REGIONS {
  ALL = 'Filter by Region',
  AFRICA = 'Africa',
  AMERICA = 'America',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}
