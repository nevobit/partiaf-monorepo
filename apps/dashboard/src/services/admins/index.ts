import { partiafApi } from "@/api"

export const getAdmin = async (token: string) => {
    const { data } = await partiafApi.get(`/admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(data)
    return data;
}