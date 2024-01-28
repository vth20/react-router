import { createSlice } from "@reduxjs/toolkit";
import { getPostUser } from "./profile.action";

const initialState = {
  post: [],
  loading: false,
};

const profileLogicSlide = createSlice({
  name: "appLogic",
  initialState,
  reducers: {
    resetAppStore: () => initialState,
  },
  extraReducers: (builder) => {
    // get notification
    builder.addCase(getPostUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostUser.fulfilled, (state, action) => {
      state.loading = false;
      const postData = Array.isArray(action.payload.data)
        ? action.payload.data
        : [action.payload.data];
      console.log(postData);
      state.post = postData;
    });
    builder.addCase(getPostUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { profileLogicStore } = profileLogicSlide.actions;
export default profileLogicSlide.reducer;
