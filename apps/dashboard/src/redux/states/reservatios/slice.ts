import { State } from "@/types/models/State";
import { Store } from "@partiaf/entities";
import { createSlice } from "@reduxjs/toolkit";


const ReservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        result: {},
        loading: false,
        error: undefined,
        success: false
    } as State<Store>,
    reducers: {
        resetStores: (state) => {
            state.loading = false;
            state.error = undefined;
            state.success = false;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getStoresByAdmin.pending, (state) => {
    //         state.loading = true;
    //         state.error = undefined;
    //     }) 
    //     .addCase(getStoresByAdmin.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.result = action.payload;
    //     })
    //     .addCase(getStoresByAdmin.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     })
    //     .addCase(createStore.pending, (state) => {
    //         state.loading = true;
    //         state.error = undefined;
    //     }) 
    //     .addCase(createStore.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.success = true;
    //     })
    //     .addCase(createStore.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     })
    // }
});

export const { resetStores } = ReservationsSlice.actions;
export default ReservationsSlice.reducer;