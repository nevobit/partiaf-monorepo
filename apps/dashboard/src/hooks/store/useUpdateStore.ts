import { updateStoreApi } from "@/services/stores";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useUpdateStore = () => {
  const [store, setStore] = useState({
    name: "",
    admin: "",
    email: "",
    phone: 0,
    nit: "",
    employes: 0,
    employe_code: 0,
    limit: 0,
    tables: 0,
    max_per_table: 0,
    min_per_table: 0,
    chairs_per_table: 0,
    chairs: 0,
    password: "",
    type: "Discoteca",
    description: "",
    photos: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStore((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const getCardValue = (cardName: string) => {
    switch (cardName) {
      case "name":
        return store.name;
      case "email":
        return store.email;
      case "phone":
        return store.phone;
      case "nit":
        return store.nit;
      case "limit":
        return store.limit;
      case "tables":
        return store.tables;
      case "max_per_table":
        return store.max_per_table;
      case "min_per_table":
        return store.min_per_table;
      case "chairs_per_table":
        return store.chairs_per_table;
      case "chairs":
        return store.chairs;
      case "employes":
        return store.employes;
      default:
        return "";
    }
  };

  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    mutate: updateStore,
    isSuccess,
  } = useMutation({
    mutationFn: updateStoreApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stores"],
      });
    },
    onError: (err: Error) => {
      alert(JSON.stringify(err));
    },
  });

  

  return {
    isUpdating,
    updateStore,
    isSuccess,
    store,
    setStore,
    handleChange,
    getCardValue,
 
  };
};
