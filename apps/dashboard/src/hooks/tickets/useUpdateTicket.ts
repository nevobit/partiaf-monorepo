import { updateTicketApi } from "@/services/tickets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTicket = () => {
    const queryClient = useQueryClient();
    const { isLoading: isUpdating, mutate: updateTicket, isSuccess } = useMutation({
        mutationFn: updateTicketApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tickets"],
            });
        },
        onError: (err: Error) => {
            alert(JSON.stringify(err));
        },
    });

    return { isUpdating, updateTicket, isSuccess };
};







