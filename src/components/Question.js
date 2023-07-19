import React from "react";

const Question = ({ question, options, selectedOption, onSelectedOption }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => {
        <div key={index}>
          <input
            type="radio"
            id={`option{index}`}
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={() => {
              onSelectedOption(option);
            }}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>;
      })}
    </div>
  );
};

export default Question;
