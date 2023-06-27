import { partiafApi } from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/signin",
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await partiafApi.post("/login", user);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
 "auth/register",
 async (user: any, thunkAPI) => {
   try {
     const { data } = await partiafApi.post("/register", user);
     localStorage.setItem("user", JSON.stringify(data));
     return data;
   } catch (err: any) {
     const message = err;
     return thunkAPI.rejectWithValue(message.response.data.message);
   }
 }
);


export const logout = createAsyncThunk( "auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("account");
});