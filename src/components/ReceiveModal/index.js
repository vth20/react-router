import { CloseOutlined } from "@ant-design/icons";
import { envelopeAfter } from "../../assets/images";
import "./style.css";
const ReceiveModal = ({ setShowModal, result }) => {
  return (
    <div className="modal-show-receive">
      <CloseOutlined
        className="close-button"
        onClick={() => setShowModal(false)}
      />
      <div className="wrapper-result">
        <img
          alt="envelope-after"
          src={envelopeAfter}
          style={{ height: "100vh" }}
        />
        <div className="result">
          {result.amount && <p>{result.amount}</p>}
          {result.greeting && <p>{result.greeting}</p>}
        </div>
      </div>
    </div>
  );
};

export default ReceiveModal;
