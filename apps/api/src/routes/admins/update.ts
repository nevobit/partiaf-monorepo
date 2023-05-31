import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { updateAdmin } from '@partiaf/business-logic';
import { UpdateAdminDto } from '@partiaf/entities';

export const updateAdminsRoute: RouteOptions = {
  method: RouteMethod.PUT,
  url: '/admins/update',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as UpdateAdminDto;
      const admin = await updateAdmin(data);
      reply.status(200).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
