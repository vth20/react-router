import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getEnvelopes,
  createEnvelopes,
  getEnvelopesToShare,
  receiveEnvelope,
  deleteEnvelope,
} from "./envelope.action";
import "./envelope.reducer";

export const useEnvelopeLogics = () => {
  const dispatch = useDispatch();
  const { loading, envelopes } = useSelector(
    (state) => state.envelope,
    shallowEqual
  );

  // get notification
  const onCreateEnvelopes = useCallback(
    async (payload) => {
      return await dispatch(createEnvelopes(payload));
    },
    [dispatch]
  );
  const onGetEnvelopesToShare = useCallback(
    async (payload) => {
      return await dispatch(getEnvelopesToShare(payload));
    },
    [dispatch]
  );
  const onReceiveEnvelope = useCallback(
    async (payload) => {
      return await dispatch(receiveEnvelope(payload));
    },
    [dispatch]
  );
  const onGetEnvelopes = useCallback(
    async (payload) => {
      return await dispatch(getEnvelopes(payload));
    },
    [dispatch]
  );
  const onDeleteEnvelope = useCallback(
    async (payload) => {
      return await dispatch(deleteEnvelope(payload));
    },
    [dispatch]
  );

  return {
    loading,
    envelopes,
    onGetEnvelopes,
    onCreateEnvelopes,
    onGetEnvelopesToShare,
    onReceiveEnvelope,
    onDeleteEnvelope,
  };
};
