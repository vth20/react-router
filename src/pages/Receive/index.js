import { useParams } from "react-router-dom";
import { useEnvelopeLogics } from "../../store/envelope.store/envelope.selector";
import EnvelopeInfoReceive from "../../components/EnvelopeReceive";
import { useEffect, useState } from "react";
import ReceiveModal from "../../components/ReceiveModal";
import "./style.css";
import InputReceiveData from "../../components/InputReceiveData";
const Receive = () => {
  const { id } = useParams();
  const { onGetEnvelopesToShare, envelopes } = useEnvelopeLogics();
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [result, setResult] = useState({});
  console.log(envelopes);
  useEffect(() => {
    onGetEnvelopesToShare(id);
  }, []);
  return (
    <>
      {showPopup && <InputReceiveData showPopup={setShowPopup}/>}
      <div className="envelope-grid-wrapper">
        {envelopes.map((env) => {
          return (
            <EnvelopeInfoReceive
              key={env.id}
              amount={env.money}
              greeting={env.content}
              id={env.id}
              setShowModal={setShowModal}
              setResult={setResult}
            />
          );
        })}
        {showModal && (
          <ReceiveModal setShowModal={setShowModal} result={result} />
        )}
      </div>
    </>
  );
};
export default Receive;
