import 'dotenv/config';
import fastifyCors from '@fastify/cors';
import fastify, { FastifyInstance } from 'fastify';
import { initDataSources } from '@partiaf/data-sources';
import { registerRoutes } from '../routes';
import { verify } from '@partiaf/business-logic';
import fastifyMultipart from '@fastify/multipart';
import swagger from '@fastify/swagger';

const { PORT, HOST, MONGODB_URL } = process.env;
const corsOptions = {
  origin: ['http://localhost:3008', 'https://app.helebba.com'],
};

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGODB_URL,
    },
  });

  const server: FastifyInstance = fastify({
    logger: true,
  });

  server.register(fastifyCors, corsOptions);

  //server.addHook('preValidation', verify);

  server.register(fastifyMultipart);

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: 'api/v3' }
  );

  await server.register(swagger, {
    swagger: {
      info: {
        title: 'Partiaf API',
        description: 'Endpoints documentation to manage the data in the Partiaf-APP',
        version: '3.0.0'
      },
      host: 'localhost',
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'api-key',
          in: 'header'
        }
      }
    },
  });
  await server.ready();
  server.swagger();

  server.listen({ port: Number(PORT), host: HOST }, (error, address) => {
    if (error) {
      server.log.error(error);
      process.exit(1);
    }

    server.log.info(`Backend App is running at https://${address}`);
    server.log.info(`Press CTRL-c to stop`);
  });

};

void main();