import { Collection, getModel } from "@partiaf/constant-definitions"
import { Goer, GoerSchemaMongo, Ticket, TicketSchemaMongo, User, UsersSchemaMongo } from "@partiaf/entities"

export const getGoersByTicket = async (id:string): Promise<any> => {
    const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo)
    getModel<User>(Collection.USERS, UsersSchemaMongo)
    getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo)

    const goers = await model.find({ticket: id}).populate('user').populate('ticket');
    return goers;
}