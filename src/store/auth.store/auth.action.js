import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { path } from "../../utils/constants";
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(`${path.API.LOGIN}`, payload);
      return response;
    } catch (err) {
      let result = null;
      if (!(err instanceof Error)) {
        const res = err;
        result = res?.data;
      }
      return rejectWithValue(result);
    }
  }
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(`${path.API.SIGNUP}`, payload);
      return response;
    } catch (err) {
      let result = null;
      if (!(err instanceof Error)) {
        const res = err;
        result = res?.data;
      }
      return rejectWithValue(result);
    }
  }
);
