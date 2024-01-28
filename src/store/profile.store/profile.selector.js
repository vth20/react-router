import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPostUser } from "./profile.action";
import "./profile.reducer";

export const useProfileLogics = () => {
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => {
    return state.profile;
  }, shallowEqual);
  // get notification
  const onGetPostUser = useCallback(
    async (payload) => {
      return await dispatch(getPostUser(payload));
    },
    [dispatch]
  );
  return {
    loading,
    post,
    onGetPostUser,
  };
};
