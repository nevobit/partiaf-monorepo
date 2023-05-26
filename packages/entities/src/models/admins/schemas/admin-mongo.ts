import { Schema } from 'mongoose';
import { Admin } from './admin';
import { StatusType } from '../../../common';
import crypto from 'crypto';

export const AdminSchemaMongo = new Schema<Admin>({
  _id: { type: String, unique: true, default: () => crypto.randomUUID() },
  name: { type: String },
  lastname: { type: String },
  age: { type: Number },
  photo: { type: String },
  status: { type: String, default: StatusType.ACTIVE },
  identification: { type: String, unique: true },
  address: { type: String, unique: true },
  trial_start_date: { type: Date },
  trial_end_date: { type: Date },
});

AdminSchemaMongo.methods.toJSON = function () {
  const { _id, ...admin } = this.toObject();
  admin.id = _id;
  return admin;
};
