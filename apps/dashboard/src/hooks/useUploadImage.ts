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
            const { data } = await partiafApi.post('/upload/image', formData, {
                headers: {
                    'api-key': 'a0341d0de71a21b122a134576803f9fea2e9841a307b4e26f9240ac2f7d363ff3018a17f2d7f3ecb5a9fe62327e4eaf306864ec741e6432aa50faaf9d92aa6bd'
                }
            });
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