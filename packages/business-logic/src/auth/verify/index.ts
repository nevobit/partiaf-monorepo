// import jwt from 'jsonwebtoken';
import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { Admin } from '@partiaf/entities';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

const { NODE_ENV, API_KEY, JWT_SECRET } = process.env;

export const verify = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) => {
  const apiKey = request.headers['api-key'];
  const isHttps = request.protocol === 'https' || NODE_ENV! == 'development';

  if (!isHttps)
    return reply
      .code(400)
      .send('Bad Request: The request must be made over HTTPS');

  if (!apiKey) return reply.code(401).send('Unauthorized: API key is missing');

  const validApiKey = apiKey == API_KEY!;
  if (!validApiKey)
    return reply.code(401).send('Unauthorized: Invalid API key');

  done();
};

export const verifyToken = async (
  request: FastifyRequestAdmin,
  reply: FastifyReply,
  done: () => void
) => {
  const authHeader = request.headers.authorization;
  if (!authHeader)
    return reply
      .code(401)
      .send('Unauthorized: Authorization header is missing');

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = await jwt.verify(token!, JWT_SECRET!);
    request.admin = decodedToken as Admin;
    return decodedToken;
  } catch (err) {
    return reply.status(401).send('Invalid token');
  }
};

export const verifyUserToken = async (context: any) => {
  const authHeader = context.req.headers.authorization;
  if (!authHeader)
    throw new Error('Unauthorized: Authorization header is missing');

  const token = authHeader.split(' ')[1];

  if (!token) throw new Error('Invalid token');

  const decodedToken = await jwt.verify(token!, JWT_SECRET!);
  return decodedToken;
};
