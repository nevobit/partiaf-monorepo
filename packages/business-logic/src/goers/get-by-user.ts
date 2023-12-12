import { Collection, getModel } from "@partiaf/constant-definitions"
import { Goer, GoerSchemaMongo, Ticket, TicketSchemaMongo } from "@partiaf/entities"

export const getGoersByUser = async (id:string): Promise<any> => {
    const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo);
    await getModel<Ticket>(Collection.TICKETS , TicketSchemaMongo)
    const goers = await model.find({user: id, isPaid: true}).sort({createdAt: -1}).populate('ticket');
    return goers;
}