export interface IAxiosDataGetAllChars {
  info: Info;
  results: ICharsResult[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface ICharsResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  resultById?: string | null;
}
export interface Origin {
  name: string;
  url: string;
}
export interface Location {
  name: string;
  url: string;
}
