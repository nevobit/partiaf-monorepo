import { createGoer, getGoersByUser, verifyUserToken } from "@partiaf/business-logic";


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
            console.log(tickets)
            return tickets;
          },
    },
    Mutation: {
      async createGoer(_: any, { data }: any, context: any) {
        const goer = await createGoer(data);
        console.log(goer)
        return goer;
      },
    },
}