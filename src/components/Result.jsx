import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./style.css";

const colors = [
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#577590"
];

const LetterCard = ({ letter }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = (event, letterToDelete) => {
    setIsVisible(false);
    const allLetters = document.querySelectorAll(".letter-card");
    let newString = "";

    for (let i = 0; i < allLetters.length; i++) {
      const card = allLetters[i];

      if (card.innerText !== letterToDelete) {
        newString += card.innerText;
      } else {
        setIsVisible(false);
      }
    }
    event.currentTarget.parentNode.innerText = newString;
  };

  const index = letter.charCodeAt(0) - "A".charCodeAt(0);
  const color = colors[index % colors.length];
  const style = { backgroundColor: color };

  return (
    <>
      {isVisible && (
        <div className="container">
          <div className="letter-card" style={style}>
            {letter}
            <button
              className="ui_button"
              onClick={(event) => handleDeleteClick(event, letter)}
            >
              del
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Result = ({ location }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedValues, setDisplayedValues] = useState("");

  const { value } = location.state;
  const displayedValue = value.substring(0, currentIndex);

  React.useEffect(() => {
    const newStr = removeDuplicateLetters(value);
    setDisplayedValues(newStr);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevState) => prevState + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [value]);

  const removeDuplicateLetters = (value) => {
    let newStr = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== value[i + 1]) {
        newStr += value[i];
      }
    }
    return newStr;
  };

  return (
    <div className="result">
      <h2>Duplicates</h2>
      <div className="letter-cards">
        <h1>
          {displayedValue.split("").map((letter, index) => (
            <LetterCard key={index} letter={letter} />
          ))}
        </h1>
        <p>original string: {value}</p>
        <p>after removing all Duplicates: {displayedValues}</p>
      </div>
      <NavLink to="/">Use Again</NavLink>
    </div>
  );
};

export default Result;
