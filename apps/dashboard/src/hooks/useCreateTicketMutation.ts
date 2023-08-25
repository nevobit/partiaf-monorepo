// useCreateTicketMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "@/services/tickets";

export function useCreateTicketMutation() {
  const queryClient = useQueryClient();

  return useMutation(async (data: any) => {
    const { cover, url } = data;
    return createTicket({ ...cover, image: url });
  }, {
    onSuccess: () => {
      alert("Creado correctamente");
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
    onError: (err) => {
      alert(JSON.stringify(err));
    },
  });
}