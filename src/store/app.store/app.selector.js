import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNotificationUser, getProfileUser, getNewsFeed } from "./app.action";
import "./app.reducer";

export const useAppLogics = () => {
  const dispatch = useDispatch();
  const { loading, notification, user, newsfeed } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  // get notification
  const onGetNotificationUser = useCallback(
    async (payload) => {
      return await dispatch(getNotificationUser(payload));
    },
    [dispatch]
  );
  // get profile user
  const onGetProfileUser = useCallback(
    async (payload) => {
      return await dispatch(getProfileUser(payload));
    },
    [dispatch]
  );
  // get news feed
  const onGetNewsfeed = useCallback(
    async (payload) => {
      return await dispatch(getNewsFeed(payload));
    },
    [dispatch]
  );

  return {
    loading,
    notification,
    user,
    newsfeed,
    onGetNotificationUser,
    onGetProfileUser,
    onGetNewsfeed,
  };
};
