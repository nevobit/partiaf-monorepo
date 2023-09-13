import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import crypto from 'crypto';
import { FriendRequest } from './friend-request';

export const FriendRequestSchemaMongo = new Schema<FriendRequest>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    senderId: {type: String, ref: 'users'},
    receiverId: {type: String, ref: 'users'},
    status_request: { type: String, default: 'pending'},
    status: { type: String, default: StatusType.ACTIVE },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

FriendRequestSchemaMongo.methods.toJSON = function () {
  const { _id, ...friend_request } = this.toObject();
  friend_request.id = _id;
  return friend_request;
};
