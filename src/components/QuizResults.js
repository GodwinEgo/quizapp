// src/components/QuizResults.js
import React from "react";
import { useSelector } from "react-redux";

const QuizResults = () => {
  const { score } = useSelector((state) => state.quiz);

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}</p>
      {/* Add any additional information about the quiz results here */}
    </div>
  );
};

export default QuizResults;
