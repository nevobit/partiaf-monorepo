import { RouteOptions } from 'fastify';
import { getGoersByTicketRoute } from './get-by-ticket';
import { sendRoute } from './send-goers';

export const goersRoutes: RouteOptions[] = [
    getGoersByTicketRoute,
    // sendRoute
];
