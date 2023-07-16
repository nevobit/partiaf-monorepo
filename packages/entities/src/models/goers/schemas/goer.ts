import { Base } from "../../../common";
  
  export interface Goer extends Base {
    user: string;
    cost: number;
    time: string;
    date: string
    ticket: string;
    amount: number;
    image: string;
    name: string;
    description: string;
  }
  