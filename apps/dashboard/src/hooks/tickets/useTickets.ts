import { getTickets } from "@/services/tickets";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useTickets = (id: string) => {
  const { isLoading, data: tickets } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(id),
  });

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const searchTickets = tickets?.items?.filter((item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { isLoading, tickets, searchTickets, searchTerm, handleSearch };
};
