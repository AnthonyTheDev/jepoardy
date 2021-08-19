import React from "react";
import QuestionCatergory from "./QuestionCatergory";

const Gameboard = () => {
  return (
    <div className="board">
      <QuestionCatergory catergory="Animals" catergoryNumber="27" />
      <QuestionCatergory catergory="Tv" catergoryNumber="14" />
      <QuestionCatergory catergory="Celebs" catergoryNumber="26" />
      <QuestionCatergory catergory="Comics" catergoryNumber="29" />
      <QuestionCatergory catergory="Music" catergoryNumber="12" />
    </div>
  );
};

export default Gameboard;
