import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { login, signup } from "./auth.action";
import "./auth.reducer";

export const useAuthLogics = () => {
  const dispatch = useDispatch();
  const { loading, token, user } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  // login
  const onLogin = useCallback(
    async (payload) => {
      return await dispatch(login(payload));
    },
    [dispatch]
  );
  // signup
  const onSignUp = useCallback(
    async (payload) => {
      return await dispatch(signup(payload));
    },
    [dispatch]
  );

  return {
    loading,
    token,
    user,
    onLogin,
    onSignUp
  };
};
