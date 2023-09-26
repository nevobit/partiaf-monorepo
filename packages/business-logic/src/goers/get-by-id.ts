import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo, Ticket, TicketSchemaMongo } from "@partiaf/entities";
// import { Goer, GoerSchemaMongo } from "@partiaf/entities";

export const getGoersById = async (id:string): Promise<any> => {
    const model = await getModel<Goer>(Collection.GOERS, GoerSchemaMongo)
    await getModel<Ticket>(Collection.TICKETS , TicketSchemaMongo)

    const goers = await model.find({cover: id}).populate('user').populate('ticket');

    return goers;
}