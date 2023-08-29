import { partiafApi } from "@/api";
import { CreateStoreDto, Result, Store } from "@partiaf/entities";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Props {
    limit?: number;
    page?: number;
    search?: string;
    admin?: string;
}

export const createStore = createAsyncThunk<Store, Partial<CreateStoreDto>>(
    'stores/create',
    async (store) => {
        const { data } = await partiafApi.post<Store>('/stores', store);
        return data;
    }
);

export const getStoresByAdmin = createAsyncThunk<Result<Store>, Props>(
    'stores/get-by-admin',
    async (props) => {
        console.log(props)
        const { data } = await partiafApi.get<Result<Store>>(`/stores?page=${props.page}`, {
            headers: {
              "Authorization": `Bearer ${props}`
        }});
        return data;
    }
);