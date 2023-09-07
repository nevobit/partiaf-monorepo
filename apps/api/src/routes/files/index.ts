import { RouteOptions } from "fastify";
import { uploadImageRoute } from "./image";
import { uploadVideoRoute } from "./video";

export const filesRoutes: RouteOptions[] = [
    uploadImageRoute,
    uploadVideoRoute
]