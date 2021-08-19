import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const QuestionSquare = ({ pointAmount, catergory, catergoryNumber }) => {
  const randomNumber = (num) => {
    const random = Math.floor(Math.random() * num);
    return random;
  };

  const [visible, setVisible] = useState("correct-answer-hidden");
  const [active, setActive] = useState("question-square");
  const [apiData, setApiData] = useState(null);
  const questionRef = useRef();

  const questionFormat = (obj) => {
    const question = obj.question;

    // console.log(obj);

    if (obj.type === "multiple") {
      const choices = [obj.correct_answer, ...obj.incorrect_answers];
      const randomizerAnswers = (arr) => {
        let data = arr.splice([randomNumber(arr.length)], 1);
        return `<h2>${data}</h2>`;
      };

      console.log(choices);
      return `<div>
              <h1>${question}</h1>
              <div>
              ${randomizerAnswers(choices)}
              ${randomizerAnswers(choices)}
              </div>
              <div>
              ${randomizerAnswers(choices)}
              ${randomizerAnswers(choices)}
              </div>
              <h1 class=${visible}>${obj.correct_answer}</h1>              
            </div>`;
    } else if (obj.type === "boolean") {
      return `<div>
      <h1>${question}</h1>
      <h2>True or false</h2>
      <h1 class=${visible}>${obj.correct_answer}</h1>
    </div>`;
    }
  };

  useEffect(() => {
    questionApiFetch(catergoryNumber);
  }, []);

  const questionApiFetch = async (query) => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=5&category=${query}`
    );

    setApiData(res);
  };

  const clickHandler = () => {
    // eslint-disable-next-line default-case
    switch (questionRef.current.className) {
      case "question-square":
        setActive("active-question");

        console.log(visible);
        console.log(active);
        questionRef.current.innerHTML = questionFormat(
          apiData.data.results[randomNumber(apiData.data.results.length)]
        );
        break;
      case "active-question":
        setVisible("correct-answer-hidden");
        console.log(questionRef);
        questionRef.current.lastElementChild.lastElementChild.className =
          "correct-answer-visible";

        setTimeout(() => {
          setActive("question-answered");
          setVisible("correct-answer-hidden");
        }, 3000);
    }
  };

  return (
    <div
      ref={questionRef}
      onClick={() => {
        // console.log(questionRef.current.className);

        clickHandler();
      }}
      className={active}
    >
      <h1>{catergory}</h1>
      <h2>{pointAmount}</h2>
    </div>
  );
};

export default QuestionSquare;
