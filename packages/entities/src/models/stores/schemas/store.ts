import { Base } from '../../../common';

type Address = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

type Geo = {
  caract: string;
  latitud: string;
  longitud: string;
};

interface Location {
  address: Address;
  geo: Geo;
}

interface Specialties {
  music: string[];
  plan: string[];
  food: string[];
}

export interface Store extends Base {
  name: string;
  description: string;
  type: string;
  nit: string;
  email: string;
  password: string;
  phone: number;
  location?: Location;
  limit: number;
  photos: string[];
  verification_code: number;
  last_login: Date;
  balance: number;
  tables: number;
  max_per_table: number;
  min_per_table: number;
  chairs_per_table: number;
  chairs: number;
  website: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  employes: string;
  rating: number;
  employe_code: number;
  admin: string;
  organizer: string;
  specialties: Specialties;
  min_age: number;
  music_type: string[];
}
