import React from "react";
import QuestionSquare from "./QuestionSquare";

const QuestionCatergory = ({ catergory, catergoryNumber }) => {
  const points = [100, 200, 300, 400, 500];
  const questionMap = points.map((cur, item) => {
    return (
      <QuestionSquare
        pointAmount={cur}
        key={item}
        catergory={catergory}
        catergoryNumber={catergoryNumber}
      />
    );
  });

  return <div className="catergory-column">{questionMap}</div>;
};

export default QuestionCatergory;
