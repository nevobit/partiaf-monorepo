import { getAllTickets, getAllTicketsByStore, verifyUserToken } from "@partiaf/business-logic";


interface Context {
    token: string;
  }
  
  interface ArgsType {
    id: string;
  }

export default {
    Query: {
        getTicketsByStoreId: async (parent: any, { id }: ArgsType, ctx: any) => {
            await verifyUserToken(ctx);
            console.log(id)
            const page = 1;
            const limit = 100000;
            const tickets = await getAllTicketsByStore(page,limit,id);
            if (tickets instanceof Error) {
              return new Error('Invalid credentials');
            }
      
            return tickets.items;
          },
          getAllTickets: async (parent: any, { id }: ArgsType, ctx: any) => {
            await verifyUserToken(ctx);
            console.log(id)
            const page = 1;
            const limit = 100000;
            const tickets = await getAllTickets(page,limit);
            if (tickets instanceof Error) {
              return new Error('Invalid credentials');
            }
      
            return tickets.items;
          },
    }
}