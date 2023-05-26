import { Base } from '../../../common';

export interface Admin extends Base {
  name: string;
  lastname: string;
  age: number;
  photo: string;
  identification: string;
  address: string;
  trial_start_date: Date;
  trial_end_date: Date;
}
