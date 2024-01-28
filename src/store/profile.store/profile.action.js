import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { path } from "../../utils/constants";

export const getPostUser = createAsyncThunk(
  "profile/getPostUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${path.API.POST}/${params.id}`);
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
