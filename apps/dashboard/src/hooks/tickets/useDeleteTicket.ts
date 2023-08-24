import { deleteTicketApi } from "@/services/tickets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTicket = () => {
    const queryClient = useQueryClient();
  
    const {isLoading: isDeleting, mutate: deleteTicket} = useMutation({
      mutationFn: deleteTicketApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['tickets']
        })
      }
    });

    return { isDeleting, deleteTicket }
}