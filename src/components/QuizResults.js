// src/components/QuizResults.js
import React from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";

const QuizResults = ({ score, totalQuestions }) => {
  // Calculate the percentage score
  const percentageScore = (score / totalQuestions) * 100;

  const dispatch = useDispatch();

  const handleRestartQuiz = () => {
    // Reset the quiz state and start a new quiz
    dispatch(startQuiz());
  };

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
      <button onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default QuizResults;
