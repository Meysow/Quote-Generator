import React from "react";

const Quote = ({ quote, autor, genre, authorClickHandler }) => {
  return (
    <div className="quote__container">
      <div className="quote__wrapper">
        <div className="quote">{quote}</div>
      </div>
      <div className="info">
        <button className="info__btn" onClick={() => authorClickHandler()}>
          <div className="autor">{autor}</div>
          <div className="genre">{genre}</div>
        </button>
      </div>
    </div>
  );
};

export default Quote;
