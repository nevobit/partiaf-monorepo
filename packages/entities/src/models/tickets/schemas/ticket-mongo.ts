import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import crypto from 'crypto';
import { Ticket } from './ticket';

export const TicketSchemaMongo = new Schema<Ticket>(
  {
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String },
    description: { type: String },
    type: { type: String },
    price: { type: Number },
    location: { type: { lat: Number, lng: Number } },
    limit: { type: Number },
    initial_limit: {type: Number},
    hour: {type: String},
    image: {type: String},
    percentage: {type: Number},
    status: { type: String, default: StatusType.ACTIVE },
    store: { type: String, ref: 'stores' },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

TicketSchemaMongo.methods.toJSON = function () {
  const { _id, ...ticket } = this.toObject();
  ticket.id = _id;
  return ticket;
};
