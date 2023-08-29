import { updateTicket } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { UpdateTicketDto } from "@partiaf/entities";
import { RouteOptions } from "fastify";

export const updateTicketRoute: RouteOptions = {
    method: RouteMethod.PUT,
    url: '/tickets',
    handler: async (request, reply) => {
     const { body } = request;
     const data = body as UpdateTicketDto;
     try {
      const obj = await updateTicket(data);
      reply.status(200).send(obj);
     } catch (err) {
      if (err instanceof Error) {
       reply.status(500).send(err);
      }
     }
    },
   };