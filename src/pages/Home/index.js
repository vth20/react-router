import { useCallback, useEffect, useRef, useState } from "react";
import EnvelopeInfo from "../../components/Envelope";
import { useEnvelopeLogics } from "../../store/envelope.store/envelope.selector";
import localStorageUtil from "../../utils/localStorage";
import { CopyOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Tabs } from "antd";
import "./style.css";
const Home = () => {
  const { TabPane } = Tabs;
  const { onGetEnvelopes, envelopes } = useEnvelopeLogics();
  const [key, setKey] = useState("CREATED");
  useEffect(() => {
    onGetEnvelopes({ status: key });
  }, [key]);
  const inputRef = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const handleShowCopied = useCallback(() => {
    if (isCopied) return;
    setIsCopied(true);
    inputRef.current.select();
    navigator.clipboard.writeText(
      `http://localhost:3000/receive/${localStorageUtil.getItem("user_id")}`
    );
    const timer = setTimeout(() => {
      setIsCopied(false);
      inputRef.current.setSelectionRange(0, 0);
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);
  return (
    <div className="p-2">
      <div className="shareLink m-2 flex justify-center">
        <div className="permalink relative border-radius-30">
          <input
            ref={inputRef}
            className={
              isCopied
                ? "selection::bg-red-500 bg-red-500 textLink text-center px-30 py-12 w-450 font-size-16 letter-spacing-0.3 text-color-secondary border-1 border-solid border-gray-300 bg-gray-200 transition-all-300 focus:border-gray-200"
                : "textLink text-center px-30 py-12 w-450 font-size-16 letter-spacing-0.3 text-color-secondary border-1 border-solid border-gray-300 bg-gray-200 transition-all-300 focus:border-gray-200"
            }
            id="text"
            type="text"
            name="shortlink"
            value={`http://localhost:3000/receive/${localStorageUtil.getItem(
              "user_id"
            )}`}
            readOnly
          />
          <span
            onClick={handleShowCopied}
            className="copyLink absolute top-1/2 left-[410px] cursor-pointer transform -translate-y-1/2 hover:after"
          >
            <Tooltip title={isCopied ? "Copied" : "Copy to clipboard"}>
              <CopyOutlined
                className={isCopied ? "text-xl text-red-500" : "text-xl"}
              />
            </Tooltip>
          </span>
        </div>
      </div>

      <Tabs
        defaultActiveKey="CREATED"
        onChange={(key) => {
          setKey(key);
        }}
      >
        <TabPane tab="Lì xì còn lại" key="CREATED">
          <div className="envelope-grid-wrapper">
            {envelopes.map((env) => {
              return (
                <EnvelopeInfo
                  key={env.id}
                  amount={env.money}
                  greeting={env.content}
                />
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="Lì xì đã phát" key="RECEIVED">
          <div className="envelope-grid-wrapper">
            {envelopes.map((env) => {
              return (
                <EnvelopeInfo
                  key={env.id}
                  amount={env.money}
                  greeting={env.content}
                  bank={env.recipient_bank}
                  bank_acc={env.account_bank}
                  name={env.recipient}
                />
              );
            })}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
