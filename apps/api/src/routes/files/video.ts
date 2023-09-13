import { UploadVideo } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import multer from 'fastify-multer';

const upload = multer({ dest: 'uploads' });
export const uploadVideoRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/upload/video',
    preHandler: upload.single('video'),
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const { file } = request as any;
            const image = await UploadVideo(file.path);
            reply.status(201).send(image);
        }catch(err){
            reply.status(500).send(err);
        }
    }
}