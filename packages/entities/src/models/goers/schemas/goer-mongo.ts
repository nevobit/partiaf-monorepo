import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import crypto from 'crypto';
import { Goer } from './goer';

export const GoerSchemaMongo = new Schema<Goer>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    user: {type: String, ref: 'users'},
    status: { type: String, default: StatusType.ACTIVE },
    cost: {type: Number},
    time: {type:String},
    ticket: {type: String, ref:'tickets'},
    amount: {type: Number},
    image: {type: String},
    name: {type: String},
    email: {type: String},
    users: [{
      name: { type: String },
      phone: { type: String },
    }],
    description: {type: String},
    date: {type: String},
    entry_status: {type: String}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

GoerSchemaMongo.methods.toJSON = function () {
  const { _id, ...goer } = this.toObject();
  goer.id = _id;
  return goer;
};
