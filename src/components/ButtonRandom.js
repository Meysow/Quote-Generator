import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const ButtonRandom = ({ getQuote }) => {
  return (
    <div className="buttonRandom__wrapper">
      <button className="buttonRandom__wrapper__btn" onClick={() => getQuote()}>
        random
        <FiRefreshCw />
      </button>
    </div>
  );
};

export default ButtonRandom;
