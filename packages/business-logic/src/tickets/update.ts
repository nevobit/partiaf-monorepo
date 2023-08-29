import { Collection, getModel } from "@partiaf/constant-definitions";
import { UpdateTicketDto, Ticket, TicketSchemaMongo } from "@partiaf/entities";

export const updateTicket = async (data: UpdateTicketDto) => {
  const model = getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo);
  const ticket = await model.findById(data.id);
  if (!ticket) throw new Error(`ticket don't exist`);
  const updatedTicket = await model.findByIdAndUpdate(data.id, data, {
    new: true,
  });
  if (!updatedTicket) throw new Error(`Ticket not found`);
  return updatedTicket;
};
