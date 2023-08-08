import { partiafApi } from '@/api';
import { useState } from 'react';

export const useUploadImage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState<string[]>([]);

    const uploadImage = async (image: any) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const { data } = await partiafApi.post('/upload/image', formData);
            const newUrls: string[] = [...urls, data.url];
            setUrls(newUrls);
            setUrl(data.url);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        url,
        uploadImage,
        urls,
    };
};