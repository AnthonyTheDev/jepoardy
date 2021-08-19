import React, { useState, useRef } from "react";

const Players = ({ name }) => {
  const [score, setScore] = useState(0);
  const [recordScore, setRecordScore] = useState("");
  const inputRef = useRef();

  return (
    <div className="player-data">
      <div className="score">
        <h2>Points</h2>
        <h3>{score}</h3>
      </div>
      <h1 className="player-name">{name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(recordScore);
          if (!isNaN(recordScore)) {
            setScore(recordScore + score);
          }

          e.target.reset();
          inputRef.current.blur();
        }}
      >
        <input
          onChange={(e) => {
            setRecordScore(parseInt(e.target.value));
          }}
          ref={inputRef}
          className="answer"
        ></input>
      </form>
    </div>
  );
};

export default Players;
