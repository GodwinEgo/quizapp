// src/components/QuizResults.js
import React from "react";

const QuizResults = ({ score, totalQuestions }) => {
  // Calculate the percentage score
  const percentageScore = (score / totalQuestions) * 100;

  return (
    <div className="quiz-results">
      <h2>Quiz Results</h2>
      <p>
        You answered {score} out of {totalQuestions} questions correctly.
      </p>
      <p>
        Your score: {score}/{totalQuestions}
      </p>
      <p>Percentage Score: {percentageScore.toFixed(2)}%</p>
    </div>
  );
};

export default QuizResults;
