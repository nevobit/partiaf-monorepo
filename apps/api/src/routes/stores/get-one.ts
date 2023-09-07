import { getStoreById } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { RouteOptions } from "fastify";

export const getStoreByIdRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: "/stores/:id",
  handler: async (request, reply) => {
    const { params } = request;
    const { id } = params as { id: string };
    try {
      const store = await getStoreById(id);
      if (store) {
        reply.status(200).send(store);
      } else {
        reply.status(404).send({ message: "Tienda no encontrada" });
      }
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
};
