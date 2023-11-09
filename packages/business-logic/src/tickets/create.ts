import { Collection, getModel } from "@partiaf/constant-definitions";
import { CreateTicketDto, Ticket, TicketSchemaMongo, User, UsersSchemaMongo } from "@partiaf/entities";
import { sendMessage } from "../notifications";

export const createTicket = async (data: Partial<CreateTicketDto>): Promise<any | Error> => {
    const model = getModel(Collection.TICKETS, TicketSchemaMongo);
    const modelUser = getModel<User>(Collection.USERS, UsersSchemaMongo);

    const ticket = new model(data);

    let query = {};

    query = { isDev: false };

    if (!ticket) throw new Error("601");
    
    await ticket.save();

    const users = await modelUser.find(query).select('-password');

      if(!users) throw new Error("No users found");

      users.map(async (user) => {
        if(user.token){
          await sendMessage({token: user.token, title: '🎉 Un nuevo evento en Partiaf', body: 'Te invitamos a formar parte te este increible evento🥳'})
        }
      })

    return ticket;
  };
