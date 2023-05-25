import { Schema } from 'mongoose';
import { Store } from './store';
import { StatusType } from '../../../common';
import crypto from 'crypto';

export const StoreSchemaMongo = new Schema<Store>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String },
    description: { type: String },
    type: { type: String },
    nit: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, min: 5 },
    phone: { type: Number, unique: true },
    location: { type: { lat: Number, lng: Number } },
    limit: { type: Number },
    photos: { type: [String] },
    employes: { type: String },
    status: { type: String, default: StatusType.ACTIVE },
    last_login: { type: Date, default: Date.now() },
    balance: { type: Number, default: 0 },
    chairs: { type: Number, default: 0 },
    tables: { type: Number, default: 0 },
    max_per_table: { type: Number, default: 8 },
    min_per_table: { type: Number, default: 2 },
    chairs_per_table: { type: Number, default: 4 },
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
    youtube: { type: String },
    rating: { type: Number },
    employe_code: { type: Number },
    admin: { type: String },
    organizer: {
      type: String,
      ref: 'user',
    },
    min_age: { type: Number },
    music_type: { type: [String] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

StoreSchemaMongo.methods.toJSON = function () {
  const { _id, ...store } = this.toObject();
  store.id = _id;
  return store;
};
