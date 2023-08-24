import { createTicketApi } from "@/services/tickets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTicket = () => {
    const queryClient = useQueryClient();
    const { isLoading: isCreating, mutate: createTicket } = useMutation({
      mutationFn: createTicketApi,
      onSuccess: () => {
        alert("Creado correctamente");
        queryClient.invalidateQueries({
          queryKey: ["tickets"],
        });
      },
      onError: (err: Error) => {
        alert(JSON.stringify(err));
      },
    });

    return { isCreating, createTicket }
}