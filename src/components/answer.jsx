import React from "react";

const Answer = props => {
  const handleClick = event => {
    props.selectAnswer(props.answer);
  };

  return (
    <div
      className={`answer${props.selected ? " selected" : ""}`}
      onClick={handleClick}
    >
      {props.answer.text}
    </div>
  );
};

export default Answer;
