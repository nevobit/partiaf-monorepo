import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { registerAdmin } from '@partiaf/business-logic';
import { CreateAdminDto } from '@partiaf/entities';

export const registerAdminsRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/admins',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as Partial<CreateAdminDto>;
      const admin = await registerAdmin(data);
      reply.status(201).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
