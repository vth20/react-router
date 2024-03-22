import { useEffect, useState } from "react";
import LixiGenerator from "../../components/GeneratorEnvelopes";
import EnvelopeInfo from "../../components/Envelope";
import { useEnvelopeLogics } from "../../store/envelope.store/envelope.selector";
const Generate = () => {
  const { onGetEnvelopes, envelopes } = useEnvelopeLogics();
  useEffect(() => {
    onGetEnvelopes();
  }, []);
  return (
    <>
      <LixiGenerator />
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
    </>
  );
};

export default Generate;
