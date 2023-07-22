import { Ticket } from "./schemas/ticket";

export type CreateTicketDto = Omit<Ticket, '_id'>;
export type UpdateTicketDto = Partial<Ticket>;
