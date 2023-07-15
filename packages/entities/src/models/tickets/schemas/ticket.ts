import { Base } from "../../../common";

export interface Location {
    lat: number;
    lng: number;
  }
  
  export interface Ticket extends Base {
    name: string;
    type: string;
    price: number;
    date: string;
    limit: number;
    initial_limit: number;
    hour: string;
    description: string;
    image: string;
    percentage: number;
    store: string;
    location: Location;
  }
  