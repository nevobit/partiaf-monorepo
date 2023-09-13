import { partiafApi } from "@/api";
import { UpdateStoreDto } from "@partiaf/entities";

export const getStores = async (token: string) => {
  const { data } = await partiafApi.get(`/stores`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateStoreApi = async (store: UpdateStoreDto) => {
  const { data } = await partiafApi.put(`/stores`, store);
  return data;
};

export const getStoreByIdApi = async (id: string) => {
  const { data } = await partiafApi.get(`/stores/${id}`);
  return data;
};
