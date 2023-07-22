import { Goer, GoerSchemaMongo, Store, StoreSchemaMongo, Ticket, TicketSchemaMongo, User, UsersSchemaMongo } from "@partiaf/entities";
import { Collection, getModel } from "@partiaf/constant-definitions";

export const createGoer = async (data: any): Promise<any | Error> => {
    const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo);
    const modelStore = getModel<Store>(Collection.STORES, StoreSchemaMongo);
    const modelCover = getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo);
    const modelUser = getModel<User>(Collection.USERS, UsersSchemaMongo);
    
    const result = new model(data);
    
    const user = await modelUser.findById(data.user);
    const cover = await modelCover.findById(data.ticket);
    const store = await modelStore.findById(cover?.store);
    
    if(!cover) return new Error(`No ticket found`);
    cover.limit = cover.limit - data.amount;

    if(!user) return new Error(`No user found`);
    user.balance = user.balance - (data.cost * data.amount);
    user.events = user.events? user.events + 1 : 1;  
    
    if(!store) return new Error(`No store found`);
    store.balance = store.balance + data.cost;
    
    if (!result) throw new Error('601');

    await user.save();
    await cover.save();
    await store.save();
    await result.save();

    return result;
}