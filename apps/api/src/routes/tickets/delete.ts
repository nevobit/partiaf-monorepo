import { deleteTicket } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const deleteTicketRoute: RouteOptions = {
  method: RouteMethod.DELETE,
  url: "/tickets/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteTicket(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
