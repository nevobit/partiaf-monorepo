import { getStoreByIdApi } from "@/services/stores";
import { useQuery } from "@tanstack/react-query";

export const useGetStoreById = (id: string) => {
  const { isLoading, data: storeData } = useQuery({
    queryKey: ["store"],
    queryFn: () => getStoreByIdApi(id),
  });

  return { isLoading, storeData };
};
