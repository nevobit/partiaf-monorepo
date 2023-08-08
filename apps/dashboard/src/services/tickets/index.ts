import { partiafApi } from "@/api"

export const getTickets = async(store: string) => {
    const { data } = await partiafApi.get(`/tickets/${store}`);
    return data;
}

export const createTicket = async (ticket: any) => {
    const { data } = await partiafApi.post(`/tickets`, ticket);
    return data;
}

export const deleteTicket = async (ticket: any) => {
    const { data } = await partiafApi.delete(`/tickets`, ticket);
    return data;
}