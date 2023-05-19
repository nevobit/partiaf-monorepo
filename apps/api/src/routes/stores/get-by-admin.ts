import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { getStoresByAdmin } from "@partiaf/business-logic";

interface Params {
  admin: string;
}

export const getStoresByAdminRoute: RouteOptions = {
  method: "GET",
  url: "/stores/:admin",
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { params } = request;
      const { admin } = params as Params;
      const stores = await getStoresByAdmin(admin);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
