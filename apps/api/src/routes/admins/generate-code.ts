import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { generateCode } from '@partiaf/business-logic';
import { UpdateAdminDto } from '@partiaf/entities';

export const generateCodeAdminsRoute: RouteOptions = {
  method: RouteMethod.PUT,
  url: '/admins/generate-code',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as UpdateAdminDto;
      const admin = await generateCode(data);
      reply.status(200).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
