import React, { useState, useEffect } from "react";
import ButtonRandom from "./ButtonRandom";
import Quote from "./Quote";
import AuthorQuotes from "./AuthorQuotes";

function App() {
  const [quote, setQuote] = useState("");
  const [autor, setAutor] = useState("");
  const [genre, setGenre] = useState("");
  const [arrayAuthorQuote, setArrayAuthorQuote] = useState([]);
  const [isAuthorQuote, setIsAuthorQuote] = useState(false);

  const getQuote = () => {
    const link = "https://quote-garden.herokuapp.com/api/v3/quotes";
    let randomPage = Math.floor(Math.random() * 6180);

    fetch(`${link}?page=${randomPage}&limit=10`)
      .then((rep) => rep.json())
      .then((data) => {
        let dataQuotes = data.data.length;

        let randomNum = Math.floor(Math.random() * dataQuotes);

        setQuote(data.data[randomNum].quoteText);
        setAutor(data.data[randomNum].quoteAuthor);
        setGenre(data.data[randomNum].quoteGenre);
        setIsAuthorQuote(false);
      })
      .catch((error) => console.error("Error", error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const authorClickHandler = () => {
    let url = "https://quote-garden.herokuapp.com/api/v3/quotes";

    fetch(`${url}?author=${autor}&limit=3`)
      .then((rep) => rep.json())
      .then((data) => {
        const array = data.data;
        const newArray = [];
        for (let item of array) {
          newArray.push(item.quoteText);
        }

        setArrayAuthorQuote(newArray);
        setIsAuthorQuote(true);
      })
      .catch((error) => console.error("Error", error));
  };

  const quoteRender = isAuthorQuote ? (
    <AuthorQuotes autor={autor} arrayAuthorQuote={arrayAuthorQuote} />
  ) : (
    <Quote
      quote={quote}
      autor={autor}
      genre={genre}
      authorClickHandler={authorClickHandler}
    />
  );

  return (
    <div className="App">
      <ButtonRandom getQuote={getQuote} />
      {quoteRender}
    </div>
  );
}

export default App;
