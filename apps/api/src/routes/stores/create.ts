import { createStore } from "@partiaf/business-logic";
import { CreateStoreDto } from "@partiaf/entities";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";

interface FastifyRequestUser extends FastifyRequest {
    user?: user;
}

export const createStoreRoute: RouteOptions = {
    method: 'POST',
    url: '/stores',
    // preHandler: verifyToken,
    handler: async (request: FastifyRequestUser, reply: FastifyReply) => {
        try {
            const { body } = request;
            const data = body as CreateStoreDto;
            const store = await createStore(data);
            reply.status(201).send(store);
        } catch (err) {
            reply.status(500).send(err);
        }
    }
}