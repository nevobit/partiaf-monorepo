import { Base } from '../../../common';

export interface Admin extends Base {
  name: string;
  lastname: string;
  age: number;
  birth_date: Date;
  photo: string;
  phone: string;
  identification: string;
  address: string;
  email: string;
  password: string;
  code: number;
  login_attempts: number;
  two_factor_auth: boolean;
  locked: boolean;
  trial_start_date: Date;
  trial_end_date: Date;
}
