import React from "react";
import { FcExpand } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { useState } from "react";
import "./Question.scss";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const onshowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <div className="container question --card">
        <div className="question-title --flex-between">
          <h4 className="--text-p --fw-bold">{title}aaaa</h4>
          <button className="question-icon" onClick={onshowAnswer}>
            {showAnswer ? <FcCollapse /> : <FcExpand />}
          </button>
        </div>
        <div className="question-answer">{showAnswer && <p className="--text-sm --py">{answer}</p>}</div>
      </div>
    </>
  );
};

export default Question;
