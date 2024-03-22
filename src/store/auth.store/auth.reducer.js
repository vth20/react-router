import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./auth.action";
import localStorageUtil from "../../utils/localStorage";
const initialState = {
  loading: false,
  token: undefined,
  user: undefined,
};
const authLogicSlide = createSlice({
  name: "authLogic",
  initialState,
  reducers: {
    resetAuthStore: () => initialState,
  },
  extraReducers: (builder) => {
    // login process
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const tokens = action.payload.data.tokens;
      const user = action.payload.data.user;
      state.loading = false;
      state.user = user;
      state.token = tokens;
      localStorageUtil.setItem("access_token", tokens.access.token);
      localStorageUtil.setItem("user_id", user.id);
      window.open("/home", "_self");
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    // signup process
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.loading = false;
      window.open("/login", "_self");
    });
    builder.addCase(signup.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetCalculationLogicsStore } = authLogicSlide.actions;
export default authLogicSlide.reducer;
