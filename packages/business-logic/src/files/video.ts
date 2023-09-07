import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';

interface uploadVideoResponse {
    url: string;
    public_id: string;
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const UploadVideo = async(file: any): Promise<uploadVideoResponse> => {
    const result: UploadApiResponse = await cloudinary.uploader.upload(file, {
        resource_type: 'video'
    });
    return { url: result.secure_url, public_id: result.public_id };
}