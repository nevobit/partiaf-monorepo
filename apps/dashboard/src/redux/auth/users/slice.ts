import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        loading: false,
        error: undefined,
        success: false
    } as any,
    reducers: {
        resetAuth: (state) => {
            state.loading = false;
            state.error = undefined;
            state.success = false;
        }
    }
});

export const { resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;