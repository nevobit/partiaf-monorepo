import { partiafApi } from "@/api"
import { Goer } from "@partiaf/entities";

export const getGoers = async (ticket: string) => {
    const { data } = await partiafApi.get(`/goers/${ticket}`);
    console.log(data)
    return data;
}