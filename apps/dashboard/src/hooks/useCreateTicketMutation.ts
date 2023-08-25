// useCreateTicketMutation.ts
import { createTicketApi } from "@/services/tickets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTicketMutation() {
  const queryClient = useQueryClient();

  return useMutation(async (data: any) => {
    const { cover, url } = data;
    return createTicketApi({ ...cover, image: url });
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