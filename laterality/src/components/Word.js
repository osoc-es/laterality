import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <div style={{ textAlign: "center" }}>
            <span className="letter" key={i}>
              {selectedWord[i] == correctLetters[i] ? letter : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Word;
