import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { path } from "../../utils/constants";

export const getEnvelopes = createAsyncThunk(
  "envelope/getList",
  async (payload, { rejectWithValue }) => {
    try {
      debugger;
      const response = await api.post(`${path.API.ENVELOPES}`, payload);
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

export const getEnvelopesToShare = createAsyncThunk(
  "envelope/getListToShare",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${path.API.ENVELOPES}/${id}`);
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

export const createEnvelopes = createAsyncThunk(
  "envelope/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(`${path.API.ENVELOPES_CREATE}`, {
        envelopes: payload,
      });
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

export const receiveEnvelope = createAsyncThunk(
  "envelope/receive",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, ...body } = payload;
      const response = await api.post(
        `${path.API.ENVELOPES_RECEIVE}/${id}`,
        body
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
export const deleteEnvelope = createAsyncThunk(
  "envelope/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${path.API.ENVELOPES_RECEIVE}/${payload.id}`
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
