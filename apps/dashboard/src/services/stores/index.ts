import { partiafApi } from "@/api"

export const getStores = async(token: string) => {
    const { data } = await partiafApi.get(`/stores`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}