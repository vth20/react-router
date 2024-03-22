import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { BANK } from "../../utils/constants";
import localStorageUtil from "../../utils/localStorage";
import "./style.css";
const InputReceiveData = ({ showPopup }) => {
  const [data, setData] = useState({});
  const [enable, setEnable] = useState(false);
  const handleSaveDataReceive =  () => {
    localStorageUtil.setItem("receiveData", data);
    showPopup(false);
  };
  useEffect(() => {
    setEnable(data.recipient && data.recipient_bank && data.account_bank)
  }, [data.recipient, data.recipient_bank, data.account_bank])

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="wrapper">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Nhập tên của bạn...
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                placeholder="Nhập tên của bạn..."
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    recipient: e.target.value,
                  }));
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nhập tài khoản ngân hàng
              </label>
            </div>
            <div className="mt-2 flex items-center">
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(value) => {
                  setData((prev) => ({
                    ...prev,
                    recipient_bank: value,
                  }));
                }}
                dropdownStyle={{width: 150}}
                filterOption={filterOption}
                options={BANK}
                className="w-20 block mr-1"
              />
              <input
                id="bank"
                name="bank"
                placeholder="Số tài khoản"
                required
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    account_bank: e.target.value,
                  }));
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
              />
            </div>
          </div>

          <div>
            <Button
              type="primary"
              disabled={!enable}
              onClick={handleSaveDataReceive}
              className="!bg-indigo-600 !px-3 !py-1.5 !text-sm !font-semibold !text-white !shadow-sm !hover:bg-indigo-500 !focus-visible:outline !focus-visible:outline-2 !focus-visible:outline-offset-2 !focus-visible:outline-indigo-600"
            >
              Xác nhận
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputReceiveData;
