import "dotenv/config";
import fastifyCors from "@fastify/cors";
import fastify, { FastifyInstance } from "fastify";
import { initDataSources } from "@partiaf/data-sources";
import { registerRoutes } from "../routes";
import { verify } from "@partiaf/business-logic";
import fastifyMultipart from '@fastify/multipart'

const { PORT, HOST, MONGODB_URL } = process.env;
const corsOptions = {
  origin: ['http://localhost:3008', 'https://app.helebba.com']
}
 
const main = async () => {
 
 await initDataSources ({
  mongoose: {
    mongoUrl: MONGODB_URL
  }
 });
 
  const server: FastifyInstance = fastify({
    logger: true,
  });

  server.register(fastifyCors, corsOptions);
  
  server.addHook('preValidation', verify);
  
  server.register(fastifyMultipart);
  
  server.register((instance, options, next) => {
    registerRoutes(instance);
    next();
  },{prefix: 'api/v3'});
  

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
