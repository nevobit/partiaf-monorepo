import { createSlice } from "@reduxjs/toolkit"
import { login, logout, register } from "./thunks";

const initialState = {
 user: localStorage.getItem('user')?  JSON.parse(localStorage.getItem('user') as string) : {},
 error: '',
 success: false,
 loading: false,
 userInfo: {}
}

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  resetAuth: (state) => {
   state.loading = false;
   state.success = false;
   state.error = '';
   state.user = {};
  }
 },
 extraReducers: (builder) => {
  builder.addCase(login.pending, (state) => {
   state.loading = true;
   state.success = false;
  })
  .addCase(login.fulfilled, (state, action) => {
   state.loading = false
   state.success = true
   state.user = action.payload
 })
 .addCase(login.rejected, (state, action) => {
   state.loading = false
   state.error = String(action.payload)
   state.user = null
 })
 .addCase(register.pending, (state) => {
  state.loading = true;
  state.success = false;
 })
 .addCase(register.fulfilled, (state, action) => {
  state.loading = false
  state.success = true
  state.user = action.payload
})
.addCase(register.rejected, (state, action) => {
  state.loading = false
  state.error = String(action.payload)
  state.user = null
})
.addCase(logout.pending, (state) => {
  state.loading = true;
  state.success = false;
 })
 .addCase(logout.fulfilled, (state, action) => {
  state.loading = false
  state.user = null;
})
.addCase(logout.rejected, (state, action) => {
  state.loading = false
  state.error = String(action.payload)
  state.user = null
})
 }
});

export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;