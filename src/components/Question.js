// src/components/Question.js
import React from "react";

const Question = ({ question, options, selectedOption, onSelectOption }) => {
  const handleOptionChange = (event) => {
    onSelectOption(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
