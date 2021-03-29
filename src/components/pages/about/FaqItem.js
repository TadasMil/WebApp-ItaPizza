import React from "react";
import Collapsible from "react-collapsible";

export const FaqItem = ({ question, answer }) => {
  return (
    <>
      <Collapsible trigger={question}>
        <p className="faq-answer">{answer}</p>
      </Collapsible>
    </>
  );
};
