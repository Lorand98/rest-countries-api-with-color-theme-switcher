export interface Country {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number | string;
  flags: {
    svg: string;
    png: string;
  };
  independent?: boolean;
}
