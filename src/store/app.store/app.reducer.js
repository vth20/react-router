import { createSlice } from "@reduxjs/toolkit";
import { getNotificationUser, getProfileUser, getNewsFeed } from "./app.action";
const initialState = {
  notification: [],
  loading: false,
  user: {
    id: 1,
  },
  newsfeed: [],
};
const appLogicSlide = createSlice({
  name: "appLogic",
  initialState,
  reducers: {
    resetAppStore: () => initialState,
  },
  extraReducers: (builder) => {
    // get Profile User
    builder.addCase(getProfileUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(getProfileUser.rejected, (state) => {
      state.loading = false;
    });
    // get notification
    builder.addCase(getNotificationUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNotificationUser.fulfilled, (state, action) => {
      state.loading = false;
      state.notification = action.payload.data.notification;
    });
    builder.addCase(getNotificationUser.rejected, (state) => {
      state.loading = false;
    });
    // get news feed
    builder.addCase(getNewsFeed.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewsFeed.fulfilled, (state, action) => {
      state.loading = false;
      state.newsfeed = action.payload.data;
    });
    builder.addCase(getNewsFeed.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetCalculationLogicsStore } = appLogicSlide.actions;
export default appLogicSlide.reducer;
