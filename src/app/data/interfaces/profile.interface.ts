export interface Profile {
  results: Result[];
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  picture: Picture;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  coordinates: Coordinates;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
