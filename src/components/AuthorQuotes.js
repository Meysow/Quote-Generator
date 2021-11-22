import React from "react";

const AuthorQuotes = ({ autor, arrayAuthorQuote }) => {
  return (
    <div className="authorQuotes__wrapper">
      <div className="author">{autor}</div>
      {arrayAuthorQuote.map((item, i) => {
        return (
          <div className="authorQuotes" key={i}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default AuthorQuotes;
