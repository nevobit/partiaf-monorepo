import { RouteOptions } from "fastify";
import { getStoresByAdminRoute } from "./get-by-admin";
import { createStoreRoute } from "./create";


export const storeRoutes: RouteOptions[] = [
 getStoresByAdminRoute,
 createStoreRoute
]