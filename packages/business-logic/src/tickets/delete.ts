import { Collection, getModel } from "@partiaf/constant-definitions";
import { Ticket, TicketSchemaMongo } from "@partiaf/entities";

export const deleteTicket = async (uuid: String): Promise<Boolean | Error> => {
  const model = getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo);
  const ticket = await model.findById(uuid);
  if (!ticket) {
    throw new Error("602");
  }
  await ticket.deleteOne();
  return true;
};
