import { Schema } from 'mongoose';
import { Admin } from './admin';
import { StatusType } from '../../../common';
import crypto from 'crypto';

export const AdminSchemaMongo = new Schema<Admin>({
  _id: { type: String, unique: true, default: () => crypto.randomUUID() },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  birth_date: { type: Date },
  age: { type: Number },
  photo: { type: String },
  phone: { type: String, required: true, unique: true },
  status: { type: String, default: StatusType.ACTIVE },
  identification: { type: String },
  address: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  code: { type: Number, required: false },
  login_attempts: { type: Number, default: 0 },
  two_factor_auth: { type: Boolean, default: false },
  locked: { type: Boolean, default: false },
  trial_start_date: { type: Date },
  trial_end_date: { type: Date },
});

AdminSchemaMongo.methods.toJSON = function () {
  const { _id, ...admin } = this.toObject();
  admin.id = _id;
  return admin;
};
