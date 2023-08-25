import { getTickets } from "@/services/tickets";
import { useQuery } from "@tanstack/react-query";

export const useTickets = (id: string) => {
  const { isLoading, data: tickets } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(id),
  });

  console.log("QUE LLEGA", tickets);

  return { isLoading, tickets };
};