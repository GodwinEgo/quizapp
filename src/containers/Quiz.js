// src/containers/Quiz.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startQuiz,
  selectOption,
  nextQuestion,
  resetQuiz,
} from "../redux/quizSlice";
import Question from "../components/Question";

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, currentQuestion, selectedOption, score } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(startQuiz());
  }, [dispatch]);

  const handleSelectOption = (option) => {
    dispatch(selectOption(option));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleResetQuiz = () => {
    dispatch(resetQuiz());
    dispatch(startQuiz());
  };

  const handleFinishQuiz = () => {
    // You can dispatch any action or show a different view here after the quiz is completed
    // For now, we are just resetting the quiz
    dispatch(resetQuiz());
    dispatch(startQuiz());
  };

  if (currentQuestion >= 20) {
    // Quiz completed, show the result
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
        <button onClick={handleResetQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuestion];
  if (
    !currentQuiz ||
    !currentQuiz.questions ||
    currentQuiz.questions.length === 0
  ) {
    // Invalid or missing data, show an error message
    return <div>Error: No questions found for the current quiz.</div>;
  }

  const currentQuestionData = currentQuiz.questions[0];

  return (
    <div>
      <h2>{currentQuiz.title}</h2>
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
      {currentQuestion < 19 ? (
        // Show the Next button for questions 1 to 19
        <button onClick={handleNextQuestion} disabled={!selectedOption}>
          Next Question
        </button>
      ) : (
        // Show the Finish button for the last question (question 20)
        <button onClick={handleFinishQuiz} disabled={!selectedOption}>
          Finish Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
