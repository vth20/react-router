import React, { useState } from "react";
import { Tabs, Input, Button } from "antd";
import { useEnvelopeLogics } from "../../store/envelope.store/envelope.selector";

import "./style.css";

const { TabPane } = Tabs;

const LixiGenerator = () => {
  const { onCreateEnvelopes } = useEnvelopeLogics();
  const [randomData, setRandomData] = useState({
    totalMoney: "",
    numOfEnvelopes: "",
  });

  const [manualData, setManualData] = useState({
    money: "",
    content: "",
  });

  const handleRandomSubmit = () => {
    const envelopes = [];
    const totalMoney = randomData.totalMoney;
    const numOfEnvelopes = randomData.numOfEnvelopes;
    for (let i = 0; i < numOfEnvelopes; i++) {
      envelopes.push({ money: totalMoney / numOfEnvelopes });
    }
    onCreateEnvelopes(envelopes);
  };

  const handleManualSubmit = () => {
    // Handle manual data submission logic
    onCreateEnvelopes([manualData]);
  };

  return (
    <div className="lixigenerator-container">
      <Tabs defaultActiveKey="random">
        <TabPane tab="Tạo random" key="random">
          <Input
            className="input-field"
            type="number"
            placeholder="Nhập tổng số tiền"
            value={randomData.totalMoney}
            onChange={(e) =>
              setRandomData({ ...randomData, totalMoney: e.target.value })
            }
          />
          <Input
            className="input-field"
            type="number"
            placeholder="Nhập số lượng bao lì xì"
            value={randomData.numOfEnvelopes}
            onChange={(e) =>
              setRandomData({ ...randomData, numOfEnvelopes: e.target.value })
            }
          />
          <Button
            className="submit-button"
            type="primary"
            onClick={handleRandomSubmit}
          >
            Tạo
          </Button>
        </TabPane>

        <TabPane tab="Tạo thủ công" key="manual">
          <Input
            className="input-field"
            type="number"
            placeholder="Nhập số tiền"
            value={manualData.money}
            onChange={(e) =>
              setManualData({ ...manualData, money: Number(e.target.value) })
            }
          />
          <Input
            className="input-field"
            type="text"
            placeholder="Nhập lời chúc"
            value={manualData.content}
            onChange={(e) =>
              setManualData({ ...manualData, content: e.target.value })
            }
          />
          <Button
            className="submit-button"
            type="primary"
            onClick={handleManualSubmit}
          >
            Tạo
          </Button>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LixiGenerator;
