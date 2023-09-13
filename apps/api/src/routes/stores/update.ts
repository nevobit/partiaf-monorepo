import { updateStore } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { UpdateStoreDto } from "@partiaf/entities";
import { RouteOptions } from "fastify";

export const updateStoreRoute: RouteOptions = {
  method: RouteMethod.PUT,
  url: "/stores",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as UpdateStoreDto;
    try {
      const store = await updateStore(data);
      reply.status(200).send(store);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
};
