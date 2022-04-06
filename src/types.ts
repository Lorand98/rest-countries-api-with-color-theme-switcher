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
