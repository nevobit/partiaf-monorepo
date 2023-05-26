import { Base } from '../../../common';

export interface Admin extends Base {
  name: string;
  lastname: string;
  age: number;
  photo: string;
  identification: string;
  address: string;
  username: string;
  password: string;
  code: number;
  login_attempts: number;
  two_factor_auth: boolean;
  locked: boolean;
  trial_start_date: Date;
  trial_end_date: Date;
}
