/// <reference types="node" />
import { FastifyRequest, FastifyReply } from 'fastify';
export declare const verify: (request: FastifyRequest, reply: FastifyReply, done: () => void) => FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown> | undefined;
