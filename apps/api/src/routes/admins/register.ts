import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { registerAdmin } from '@partiaf/business-logic';
import { CreateAdminDto } from '@partiaf/entities';

export const registerAdminsRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/admins',
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        lastname: { type: 'string' },
        age: { type: 'number' },
        birth_date: { type: 'string', format: 'date' },
        phone: { type: 'string', description: 'Must be unique' },
        identification: { type: 'string', description: 'Must be unique' },
        address: { type: 'string', description: 'Must be unique' },
        email: { type: 'string', description: 'Must be unique' },
        password: { type: 'string' }
      },
      required: ['name', 'lastname', 'age', 'birth_date', 'phone', 'identification', 'email', 'password']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          lastname: { type: 'string' },
          age: { type: 'number' },
          birth_date: { type: 'string', format: 'date' },
          phone: { type: 'string' },
          identification: { type: 'string' },
          address: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          login_attempts: { type: 'number' },
          two_factor_auth: { type: 'boolean' },
          locked: { type: 'boolean' },
          trial_start_date: { type: 'string', format: 'date' },
          trial_end_date: { type: 'string', format: 'date' },
          code: { type: 'number' },
          id: { type: 'string' }
        }
      },
      500: {
        type: 'object',
        properties: {
          statusCode: { type: 'number' },
          error: { type: 'string' },
          message: { type: 'string' },
        }
      }
    }
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as CreateAdminDto;
      const admin = await registerAdmin(data);
      reply.status(201).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
