import React, { useCallback } from "react";
import { Card } from "antd";
import { formatCurrency } from "../../utils/formatCurrency";

const EnvelopeInfo = ({ amount, greeting, bank, bank_acc, name }) => {
  const handleReceive = useCallback(() => {}, []);
  return (
    <Card
      onClick={handleReceive}
      title="Envelope Info"
      // style={{ width: 300, margin: "16px" }}
    >
      <p>
        <strong>Số tiền:</strong> {formatCurrency(amount)}
      </p>
      <p>
        <strong>Lời chúc:</strong> {greeting}
      </p>
      {name && (
        <p>
          <strong>Name:</strong> {name}
        </p>
      )}
      {bank && (
        <p>
          <strong>Bank:</strong> {bank}
        </p>
      )}
      {bank_acc && (
        <p>
          <strong>Stk:</strong> {bank_acc}
        </p>
      )}
    </Card>
  );
};

export default EnvelopeInfo;
