import { Schema } from 'mongoose';
import { User, UserAccountType } from './user';
import crypto from 'crypto';

export const UsersSchemaMongo = new Schema<User>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    email: { type: String },
    type: { type: String },
    password: { type: String },
    phone: { type: String, unique: true },
    gender: { type: String },
    photo: [{ type: String }],
    biography: { type: String },
    wishlist: [{ type: String }],
    interests: {
      music: [{ type: String }],
      plan: [{ type: String }],
      food: [{ type: String }],
    },
    consumptions: [{ type: String }],
    artistType: { type: String },
    workerType: { type: String },
    followers: [{ type: String, ref: 'users' }],
    following: [{ type: String, ref: 'users' }],
    matchs: [{ type: String, ref: 'users' }],
    friends: [{ type: String, ref: 'users' }],
    loginMethod: { type: String },
    events: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
    lastLogin: { type: Date },
    stores: [{
      type: String, ref: 'stores'
    }],
    location: {
      address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: String },
      },
      geo: {
        caract: { type: String },
        latitud: { type: String },
        longitud: { type: String },
      },
    },
    dateOfBirth: { type: Date },
    pin: { type: Number },
    isPrivate: { type: Boolean, default: false },
    isVerified: { type: Boolean },
    accountType: { type: String, default: 'personal' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UsersSchemaMongo.methods.toJSON = function () {
  const { _id, ...user } = this.toObject();
  user.id = _id;
  return user;
};
