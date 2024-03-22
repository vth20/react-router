import { Card } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { envelopeBefore } from "../../assets/images";
import { useEnvelopeLogics } from "../../store/envelope.store/envelope.selector";
import localStorageUtil from "../../utils/localStorage";
const EnvelopeInfoReceive = ({
  amount,
  greeting,
  id,
  setShowModal,
  setResult,
}) => {
  const { onReceiveEnvelope } = useEnvelopeLogics();
  const isReceived = localStorageUtil.getItem("receive");
  const handleReceive = useCallback(() => {
    if (isReceived) return;
    const payload = localStorageUtil.getItem("receiveData");
    localStorageUtil.setItem("receive", id);
    setShowModal(true);
    onReceiveEnvelope({ id, ...payload });
    setResult({ amount, greeting });
  }, []);
  return (
    <Card
      onClick={handleReceive}
      style={{ width: 250, padding: 0, border: "none" }}
    >
      <img
        alt="envelope"
        src={envelopeBefore}
        className="envelope-info-receive"
        style={isReceived ? { cursor: "not-allowed" } : { cursor: "pointer" }}
      />
    </Card>
  );
};

export default EnvelopeInfoReceive;
