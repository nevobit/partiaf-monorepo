import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { verifyCode } from '@partiaf/business-logic';
import { UpdateAdminDto } from '@partiaf/entities';

export const verifyCodeAdminsRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/admins/verify-code',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const { email, code } = body as UpdateAdminDto;
      const response = await verifyCode({ email }, code!);
      reply.status(200).send(response);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
