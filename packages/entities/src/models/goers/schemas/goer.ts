import { Base } from "../../../common";
  
  export interface Goer extends Base {
    user: string;
    cost: number;
    time: string;
    date: string
    ticket: string;
    amount: number;
    image: string;
    entry_status: string;
    email: string;
    isPaid: boolean;
    name: string;
    description: string;
    users: any[];
    promoter: string;
  }
  