import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getAllTicketsByStore, getGoersByTicket, verifyToken } from '@partiaf/business-logic';
import { Goer, StatusType } from '@partiaf/entities/build';
import { sendEmailCreatedWork } from '@partiaf/business-logic/src/mailing/send';

interface Params {
  ticket: string;
}
interface Query {
  page: number;
  limit: number;
  store: string;
  status: StatusType;
}

export const sendRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/send/goers',
  //preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { params } = request;
      const { ticket } = params as Params;

      const goers = await getGoersByTicket("adf6f9f8-22c0-4673-a513-40cadd254f23") as Goer[];

      const env = goers.filter((goer) => goer.email == "alessdebonis@gmail.com")
      
      for (let i = 0; i < env.length; i++) {
        const element: any = env[i];
        console.log(element)
      await sendEmailCreatedWork(element, "created")
        
      }
      reply.status(200).send(env);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
