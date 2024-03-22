import { createSlice } from "@reduxjs/toolkit";
import {
  getEnvelopes,
  createEnvelopes,
  getEnvelopesToShare,
  receiveEnvelope,
  deleteEnvelope
} from "./envelope.action";
import randomSort from "../../utils/random";
const initialState = {
  loading: false,
  envelopes: [],
};
const envelopeLogicSlide = createSlice({
  name: "envelopeLogic",
  initialState,
  reducers: {
    resetEnvelopeStore: () => initialState,
  },
  extraReducers: (builder) => {
    // get Profile User
    builder.addCase(getEnvelopes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEnvelopes.fulfilled, (state, action) => {
      state.loading = false;
      state.envelopes = action.payload.data;
    });
    builder.addCase(getEnvelopes.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(createEnvelopes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createEnvelopes.fulfilled, (state, action) => {
      state.loading = false;
      state.envelopes = [ ...action.payload.data, ...state.envelopes];;
    });
    builder.addCase(createEnvelopes.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getEnvelopesToShare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEnvelopesToShare.fulfilled, (state, action) => {
      state.loading = false;
      state.envelopes = randomSort(action.payload.data);
    });
    builder.addCase(getEnvelopesToShare.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(receiveEnvelope.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(receiveEnvelope.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(receiveEnvelope.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteEnvelope.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteEnvelope.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteEnvelope.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetCalculationLogicsStore } = envelopeLogicSlide.actions;
export default envelopeLogicSlide.reducer;
