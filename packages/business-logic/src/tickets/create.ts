import { Collection, getModel } from "@partiaf/constant-definitions";
import { CreateTicketDto, Ticket, TicketSchemaMongo } from "@partiaf/entities";

export const createTicket = async (data: Partial<CreateTicketDto>): Promise<any | Error> => {
    const model = getModel(Collection.TICKETS, TicketSchemaMongo);
    const ticket = new model(data);

    if (!ticket) throw new Error("601");
    
    await ticket.save();

    return ticket;
  };
