import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import crypto from 'crypto';
import { Follow } from './follow';

export const FollowSchemaMongo = new Schema<Follow>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    user: {type: String, ref: 'users'},
    follow: {type: String, ref: 'users'},
    status: { type: String, default: StatusType.ACTIVE },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

FollowSchemaMongo.methods.toJSON = function () {
  const { _id, ...follow } = this.toObject();
  follow.id = _id;
  return follow;
};
