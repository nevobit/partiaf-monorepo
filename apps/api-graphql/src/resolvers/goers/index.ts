import { createGoer, getGoersByTicket, getGoersByUser, getOneGoer, verifyUserToken } from "@partiaf/business-logic";


interface Context {
    token: string;
  }
  
  interface ArgsType {
    id: string;
  }

export default {
    Query: {
        getGoersByUserId: async (parent: any, {}, ctx: any) => {
            const { id } = (await verifyUserToken(ctx)) as { id: string };
            const tickets = await getGoersByUser(id);
            return tickets;
          },

          getGoersByTicketId: async (parent: any, {id}: ArgsType, ctx: any) => {
            await verifyUserToken(ctx);
            const tickets = await getGoersByTicket(id);
            return tickets;
          },
          getGoersById: async (parent: any, {id}:ArgsType, ctx: any) => {
            await verifyUserToken(ctx);
            const tickets = await getGoersByUser(id);
            return tickets;
          },
          getOneGoer: async (parent: any, {id}:ArgsType, ctx: any) => {
            await verifyUserToken(ctx);
            const goer = await getOneGoer(id);
            console.log("GOER", goer)
            return goer;
          },
    },
    Mutation: {
      async createGoer(_: any, { data }: any, context: any) {
        console.log(data)
        const goer = await createGoer(data);
        return goer;
      },
    },
}