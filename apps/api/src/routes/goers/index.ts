import { RouteOptions } from 'fastify';
import { getGoersByTicketRoute } from './get-by-ticket';

export const goersRoutes: RouteOptions[] = [
    getGoersByTicketRoute
];
