import { partiafApi } from "@/api"

export const getTickets = async(store: string) => {
    const { data } = await partiafApi.get(`/tickets/${store}`);
    return data;
}

export const createTicketApi = async (ticket: any) => {
    const { data } = await partiafApi.post(`/tickets`, ticket);
    return data;
}

export const deleteTicketApi = async (id: string) => {
    const { data } = await partiafApi.delete(`/tickets/${id}`);
    return data;
}