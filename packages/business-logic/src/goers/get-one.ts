import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo, TicketSchemaMongo, User, UsersSchemaMongo } from "@partiaf/entities";

export const getOneGoer = async (id:string): Promise<any> => {
    const model = await getModel<Goer>(Collection.GOERS, GoerSchemaMongo);
    await getModel<User>(Collection.USERS, UsersSchemaMongo);
    await getModel<Goer>(Collection.TICKETS, TicketSchemaMongo);

    const goers = await model.findById(id).populate('user').populate('ticket');
    console.log({goers})
    return goers;
}