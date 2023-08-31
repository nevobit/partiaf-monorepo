import { UploadImage } from "@partiaf/business-logic";
import { RouteMethod } from "@partiaf/constant-definitions";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import multer from 'fastify-multer';

const upload = multer({ dest: 'uploads' });
export const uploadImageRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/upload/image',
    preHandler: upload.single('image'),
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            console.log("file", {...request.file})
            const { file } = request as any;
            const image = await UploadImage(file.path);
            reply.status(201).send(image);
        }catch(err){
            reply.status(500).send(err);
        }
    }
}