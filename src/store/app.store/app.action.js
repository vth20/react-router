import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { path } from "../../utils/constants";
export const getNotificationUser = createAsyncThunk(
  "app/getNotificationUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${path.API.NOTIFICATION}/${params.id}`);
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
export const getProfileUser = createAsyncThunk(
  "app/getProfileUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${path.API.USER}/${params.id}`);
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

export const getNewsFeed = createAsyncThunk(
  "app/getNewFeeds",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${path.API.PHOTOS}?_limit=${params.limit}`
      );
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
