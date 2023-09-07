import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import crypto from 'crypto';
import { Moment } from './moment';

export const MomentSchemaMongo = new Schema<Moment>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    user: {type: String, ref: 'users'},
    status: { type: String, default: StatusType.ACTIVE },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

MomentSchemaMongo.methods.toJSON = function () {
  const { _id, ...follow } = this.toObject();
  follow.id = _id;
  return follow;
};
