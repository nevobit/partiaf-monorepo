import { partiafApi } from "@/api";
import { CreateStoreDto, Result, Store } from "@partiaf/entities";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Props {
    limit?: number;
    page?: number;
    search?: string;
    admin?: string;
}

export const createStore = createAsyncThunk<Store, CreateStoreDto>(
    'stores/create',
    async (store) => {
        const { data } = await partiafApi.post<Store>('/stores', store);
        return data;
    }
);

export const getStoresByAdmin = createAsyncThunk<Result<Store>, Props>(
    'stores/get-by-admin',
    async (props) => {
        const { data } = await partiafApi.get<Result<Store>>(`/stores/${props.admin}?page=${props.page}`);
        return data;
    }
);